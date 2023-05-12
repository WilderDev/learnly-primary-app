-- * ENUMS
--- Notification Type
CREATE TYPE notification_type AS ENUM ('INFO', 'WARNING', 'ERROR', 'SUCCESS', 'BILLING', 'ACCOUNT', 'COMMUNITY', 'CHAT', 'LESSON', 'EVENT', 'OTHER');
--- Notification Status
CREATE TYPE notification_status AS ENUM ('PENDING', 'SENT', 'FAILED', 'RECEIVED', 'READ', 'ARCHIVED', 'DELETED');
--- Commentable Type
CREATE TYPE commentable_type AS ENUM ('LESSON_PLAN', 'LEARNING_PATH', 'LESSON_TEMPLATE', 'OTHER');


-- * TABLES
--- Notifications
CREATE TABLE notifications (
	-- Unique ID (Primary Key)
	id uuid NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),

	-- Sender ID
	sender_id uuid NOT NULL REFERENCES auth.users(id) DEFAULT '185f2f83-d63a-4c9b-b4a0-7e4a885799e2',

	-- Recipient ID
	recipient_id uuid NOT NULL REFERENCES auth.users(id),

	-- Lesson Plan ID
	lesson_plan_id uuid REFERENCES lesson_plans(id),

	-- Notification Type
	type notification_type NOT NULL DEFAULT 'INFO',

	-- Notification Status
	status notification_status NOT NULL DEFAULT 'PENDING',

	-- Notification Title
	title text NOT NULL DEFAULT '',

	-- Notification Body
	body text NOT NULL DEFAULT '',

	-- Date Sent
	sent_at timestamp with time zone NOT NULL DEFAULT now(),

	-- Date Received
	received_at timestamp with time zone,

	-- Date Read
	read_at timestamp with time zone,

	-- Notification Metadata
	metadata jsonb NOT NULL DEFAULT '{}'::jsonb,

	-- Timestamps
	created_at timestamp with time zone NOT NULL DEFAULT now(),
	updated_at timestamp with time zone NOT NULL DEFAULT now()
);

--- Comments
CREATE TABLE comments (
	-- Unique ID (Primary Key)
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),

	-- Commentable Id (this would be the lesson_plan or leaning_path or lesson_template id, etc...)
	commentable_id uuid NOT NULL,

	-- Commentable Type
	commentable_type commentable_type NOT NULL DEFAULT 'LESSON_PLAN',

	-- Author ID
	author_id uuid REFERENCES teacher_profiles(id),

	-- Parent Comment ID
    parent_comment_id uuid REFERENCES comments(id),

	-- Mentioned User IDs
    mentioned_user_ids uuid[] NOT NULL DEFAULT '{}'::uuid[],

	-- Comment Text
    comment text NOT NULL,

	-- Timestamps
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Comment Reactions
CREATE TABLE reactions(
	-- Unique ID (Primary Key)
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),

	-- Reaction Type
    type varchar NOT NULL,

	-- Reaction Label
    label varchar NOT NULL,

	-- Reaction Icon URL
    url varchar NOT NULL,

	-- Reaction Metadata
    metadata jsonb NOT NULL DEFAULT '{}'::jsonb,

	-- Timestamps
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),

	-- Constraints
	CONSTRAINT reaction_type_label UNIQUE (type, label)
);

-- Comment Reactions
CREATE TABLE comment_reactions(
	-- Unique ID (Primary Key)
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),

	-- Comment ID
    comment_id uuid NOT NULL REFERENCES comments(id),

	-- Reaction ID
    reaction_id uuid NOT NULL REFERENCES reactions(id),

	-- Reactor ID
    reactor_id uuid NOT NULL,

	-- Timestamps
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),

	-- Constraints
    UNIQUE (reactor_id, comment_id, reaction_id)
);


-- * VIEWS
--- Unread Notifications
CREATE VIEW unread_notifications_view AS
SELECT
	notifications.id,
	notifications.sender_id,
	notifications.recipient_id,
	notifications.lesson_plan_id,
	notifications.type,
	notifications.status,
	notifications.title,
	notifications.body,
	notifications.sent_at,
	notifications.received_at,
	notifications.read_at,
	notifications.metadata
FROM notifications
WHERE notifications.status = 'SENT' AND notifications.read_at IS NULL;

--- Unread Notifications Count
CREATE VIEW unread_notifications_count_view AS
SELECT
	COUNT(*) AS unread_notifications_count
FROM unread_notifications_view
WHERE unread_notifications_view.recipient_id = auth.uid();

--- User's Notifications (Not Archived or Deleted)
CREATE VIEW user_notifications_view AS
SELECT
	notifications.id,
	notifications.sender_id,
	notifications.recipient_id,
	notifications.lesson_plan_id,
	notifications.type,
	notifications.status,
	notifications.title,
	notifications.body,
	notifications.sent_at,
	notifications.received_at,
	notifications.read_at,
	notifications.metadata
FROM notifications
WHERE notifications.recipient_id = auth.uid() AND notifications.status != 'ARCHIVED' AND notifications.status != 'DELETED';


-- * FUNCTIONS
--- Update Notification Status
CREATE FUNCTION update_notification_status() RETURNS TRIGGER AS $$
BEGIN
  IF (NEW.received_at IS NOT NULL) THEN
    NEW.status := 'RECEIVED';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

--- Comments, Replies, and Reactions
CREATE FUNCTION get_comments_and_reactions(p_commentable_id uuid)
RETURNS TABLE(
  comment_id uuid,
  author_id uuid,
  parent_comment_id uuid,
  commentable_id uuid,
  commentable_type commentable_type,
  mentioned_user_ids uuid[],
  comment text,
  created_at timestamp with time zone,
  updated_at timestamp with time zone,
  reaction_id uuid,
  reaction_type varchar,
  reaction_label varchar,
  reaction_icon_url varchar,
  reaction_metadata jsonb,
  reactor_id uuid
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    c.id,
    c.author_id,
    c.parent_comment_id,
    c.commentable_id,
    c.commentable_type,
    c.mentioned_user_ids,
    c.comment,
    c.created_at,
    c.updated_at,
    r.id,
    r.type,
    r.label,
    r.url,
    r.metadata,
    cr.reactor_id
  FROM comments c
  LEFT JOIN comment_reactions cr ON c.id = cr.comment_id
  LEFT JOIN reactions r ON cr.reaction_id = r.id
  WHERE c.commentable_id = p_commentable_id;
END;
$$ LANGUAGE plpgsql;


-- * TRIGGERS
--- Mark as Read
CREATE FUNCTION mark_as_read(notification_id UUID, user_id UUID) RETURNS VOID AS $$
BEGIN
  UPDATE notifications
  SET status = 'READ',
      read_at = NOW()
  WHERE id = notification_id AND recipient_id = user_id;
END;
$$ LANGUAGE plpgsql;

--- Update Notification Status
CREATE TRIGGER update_notification_status
BEFORE UPDATE ON notifications
FOR EACH ROW
WHEN (OLD.received_at IS DISTINCT FROM NEW.received_at)
EXECUTE FUNCTION update_notification_status();


-- * INDEXES
--- Notifications
CREATE INDEX idx_notifications_recipient_id ON notifications (recipient_id);
CREATE INDEX idx_notifications_status ON notifications (status);
CREATE INDEX idx_notifications_type ON notifications (type);
CREATE INDEX idx_notifications_recipient_id_status ON notifications (recipient_id, status);
--- Comments
CREATE INDEX idx_comments_commentable_id ON comments (commentable_id);
CREATE INDEX idx_comments_author_id ON comments (author_id);
CREATE INDEX idx_comments_parent_comment_id ON comments (parent_comment_id);
CREATE INDEX idx_comments_created_at ON comments (created_at);
--- Reactions
CREATE INDEX idx_reactions_type_label ON reactions (type, label);
--- Comment Reactions
CREATE INDEX idx_comment_reactions_comment_id ON comment_reactions (comment_id);
CREATE INDEX idx_comment_reactions_reaction_id ON comment_reactions (reaction_id);
CREATE INDEX idx_comment_reactions_reactor_id ON comment_reactions (reactor_id);



-- * POLICIES (ROW LEVEL SECURITY)
--- RLS
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE comment_reactions ENABLE ROW LEVEL SECURITY;

--- Policies
---- Notifications
CREATE POLICY "Allow logged-in users to view their own notifications." ON notifications FOR SELECT USING (auth.uid() = recipient_id);
CREATE POLICY "Allow logged-in users to create notifications." ON notifications FOR INSERT WITH CHECK (auth.uid() = sender_id);
CREATE POLICY "Allow logged-in users to update their own notifications." ON notifications FOR UPDATE USING (auth.uid() = sender_id OR auth.uid() = recipient_id);
CREATE POLICY "Allow logged-in users to delete their own notifications." ON notifications FOR DELETE USING (auth.uid() = sender_id OR auth.uid() = recipient_id);
CREATE POLICY "Allow admins to do everything with notifications." ON notifications FOR ALL TO PUBLIC WITH CHECK (auth.role() = 'ADMIN');
---- Comments
CREATE POLICY "Allow users to view all comments." ON comments FOR SELECT USING (true);
CREATE POLICY "Allow logged-in users to create comments." ON comments FOR INSERT WITH CHECK (auth.uid() = author_id);
CREATE POLICY "Allow logged-in users to update their own comments." ON comments FOR UPDATE USING (auth.uid() = author_id);
CREATE POLICY "Allow logged-in users to delete their own comments." ON comments FOR DELETE USING (auth.uid() = author_id);
CREATE POLICY "Allow admins to do everything with comments." ON comments FOR ALL TO PUBLIC WITH CHECK (auth.role() = 'ADMIN');
---- Comment Reactions
CREATE POLICY "Allow users to view all comment reactions." ON comment_reactions FOR SELECT USING (true);
CREATE POLICY "Allow logged-in users to create comment reactions." ON comment_reactions FOR INSERT WITH CHECK (auth.uid() = reactor_id);
CREATE POLICY "Allow logged-in users to update their own comment reactions." ON comment_reactions FOR UPDATE USING (auth.uid() = reactor_id);
CREATE POLICY "Allow logged-in users to delete their own comment reactions." ON comment_reactions FOR DELETE USING (auth.uid() = reactor_id);
CREATE POLICY "Allow admins to do everything with comment reactions." ON comment_reactions FOR ALL TO PUBLIC WITH CHECK (auth.role() = 'ADMIN');
