-- * ENUMS
-- Subscription Statuses
CREATE TYPE subscription_status AS ENUM ('trialing', 'active', 'canceled', 'incomplete', 'incomplete_expired', 'past_due', 'unpaid', 'paused');
-- Pricing Types
CREATE TYPE pricing_type AS ENUM ('one_time', 'recurring');
-- Pricing Plan Intervals
CREATE TYPE pricing_plan_interval AS ENUM ('day', 'week', 'month', 'year');
-- Payment Method Types
CREATE TYPE payment_type AS ENUM ('acss_debit', 'affirm', 'afterpay_clearpay', 'alipay', 'au_becs_debit', 'bacs_debit', 'bancontact', 'blik', 'boleto', 'card', 'card_present', 'cashapp', 'customer_balance', 'eps', 'fpx', 'giropay', 'grabpay', 'ideal', 'interac_present', 'klarna', 'konbini', 'link', 'oxxo', 'p24', 'paynow', 'pix', 'promptpay', 'sepa_debit', 'sofort', 'us_bank_account', 'wechat_pay');

-- * TABLES
-- Customers (Private) - https://stripe.com/docs/api/customers
CREATE TABLE customers (
	-- The Learnly App User's UUID (auth.users)
	id uuid REFERENCES auth.users NOT NULL PRIMARY KEY,

	-- The Stripe Customer Id
	stripe_customer_id text NOT NULL DEFAULT '' UNIQUE,

	-- Billing Portal Session URL
	billing_portal_session_url text NOT NULL DEFAULT '',

	-- Timestamps
	created_at timestamp WITH TIME ZONE NOT NULL DEFAULT now(),
	updated_at timestamp WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Subscriptions (Private) - https://stripe.com/docs/api/subscriptions
CREATE TABLE subscriptions (
	-- Subscription ID from stripe (sub_xxxxxxxxxxxxxx)
	id text NOT NULL PRIMARY KEY,

	-- The Learnly App User's UUID (auth.users)
	user_id uuid REFERENCES auth.users NOT NULL,

	-- Stripe Customer ID
	stripe_customer_id text NOT NULL DEFAULT '',

	-- Stripe Price ID
	stripe_price_id text NOT NULL DEFAULT '',

	-- Stripe Product ID
	stripe_product_id text NOT NULL DEFAULT '',

	-- Status of Subscription Object
	status subscription_status NOT NULL DEFAULT 'trialing',

	-- Stripe Subscription Description
	description text NOT NULL DEFAULT '',

	-- Subscription Items List - https://stripe.com/docs/api/subscriptions/object#subscription_object-items
	items jsonb NOT NULL DEFAULT '[]',

	-- Stripe Default Payment Method ID
	default_payment_method_id text NOT NULL DEFAULT '',

	-- Stripe Cancel at Period End
	cancel_at_period_end boolean NOT NULL DEFAULT false,

	-- Start of the current period that the subscription has been invoiced for.
	current_period_start timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,

	-- End of the current period that the subscription has been invoiced for. At the end of this period, a new invoice will be created.
	current_period_end timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,

	-- If the subscription has ended, the timestamp of the date the subscription ended.
	ended_at timestamp with time zone DEFAULT timezone('utc'::text, now()),

	-- A date in the future at which the subscription will automatically get canceled.
	cancel_at timestamp with time zone DEFAULT timezone('utc'::text, now()),

	-- If the subscription has been canceled, the date of that cancellation. If the subscription was canceled with `cancel_at_period_end`, `canceled_at` will still reflect the date of the initial cancellation request, not the end of the subscription period when the subscription is automatically moved to a canceled state.
	canceled_at timestamp with time zone DEFAULT timezone('utc'::text, now()),

	-- If the subscription has a trial, the beginning of that trial.
	trial_start timestamp with time zone DEFAULT timezone('utc'::text, now()),

	-- If the subscription has a trial, the end of that trial.
	trial_end timestamp with time zone DEFAULT timezone('utc'::text, now()),

	-- Metadata
	metadata jsonb NOT NULL DEFAULT '{}',

	-- Timestamps
	created_at timestamp WITH TIME ZONE NOT NULL DEFAULT now(),
	updated_at timestamp WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Products (Public) - https://stripe.com/docs/api/products
CREATE TABLE products (
	-- Product ID from stripe (prod_xxxxxxxxxxxxxx)
	id text NOT NULL PRIMARY KEY,

	-- Stripe Product Active
	active boolean NOT NULL DEFAULT false,

	-- Product Name
	name text NOT NULL DEFAULT '',

	-- Product Description
	description text NOT NULL DEFAULT '',

	-- Product Image
	image text NOT NULL DEFAULT '',

	-- Product Metadata
	metadata jsonb NOT NULL DEFAULT '{}',

	-- Timestamps
	created_at timestamp WITH TIME ZONE NOT NULL DEFAULT now(),
	updated_at timestamp WITH TIME ZONE NOT NULL DEFAULT now()
);


-- Prices (Public) - https://stripe.com/docs/api/prices
CREATE TABLE prices (
	-- Price ID from stripe (price_xxxxxxxxxxxxxx)
	id text NOT NULL PRIMARY KEY,

	-- Stripe Product ID
	stripe_product_id text NOT NULL DEFAULT '',

	-- Stripe Price Active
	active boolean NOT NULL DEFAULT false,

	-- Stripe Price Currency (3-Letter ISO Currency Code [lowercase])
	currency text NOT NULL DEFAULT 'usd' CHECK (char_length(currency) = 3),

	-- Stripe Price Description
	description text NOT NULL DEFAULT '',

	-- Stripe Price Metadata
	metadata jsonb NOT NULL DEFAULT '{}',

	-- Stripe Price Nickname
	nickname text NOT NULL DEFAULT '',

	-- Stripe Price Type
	type pricing_type NOT NULL DEFAULT 'recurring',

	-- Stripe Price Recurring Interval
	recurring_interval pricing_plan_interval NOT NULL DEFAULT 'year',

	-- Stripe Price Recurring Interval Count
	recurring_interval_count integer NOT NULL DEFAULT 1,

	-- Timestamps
	created_at timestamp WITH TIME ZONE NOT NULL DEFAULT now(),
	updated_at timestamp WITH TIME ZONE NOT NULL DEFAULT now()
);

-- * VIEWS
-- User Subscriptions View
CREATE VIEW user_subscriptions_view AS
SELECT c.id as user_id, s.id as subscription_id, p.name as product_name
FROM customers c
JOIN subscriptions s ON c.id = s.user_id
JOIN products p ON s.stripe_product_id = p.id;

-- Teacher's Me View (for a given teacher)
CREATE VIEW teacher_me_view AS
SELECT
  teacher_profiles.id AS id,
  teacher_profiles.first_name AS first_name,
  teacher_profiles.last_name AS last_name,
  teacher_profiles.avatar_url AS avatar_url,
  teacher_profiles.status AS status,
  teacher_profiles.type AS type,
  teacher_profiles.role AS role,
  teaching_preferences.preferred_teaching_strategies AS teaching_strategies,
  teaching_preferences.preferred_lesson_detail_level AS lesson_detail_level,
  teaching_preferences.preferred_teaching_tools AS teaching_tools,
  teaching_preferences.preferred_lesson_structure AS lesson_structure,
  subscriptions.status AS subscription_status,
  subscriptions.trial_end AS subscription_trial_end,
  subscriptions.cancel_at_period_end AS subscription_cancel_at_period_end,
  customers.billing_portal_session_url AS billing_portal_session_url
FROM teacher_profiles
JOIN teaching_preferences ON teacher_profiles.id = teaching_preferences.id
JOIN subscriptions ON teacher_profiles.id = subscriptions.user_id
JOIN customers ON teacher_profiles.id = customers.id
WHERE teacher_profiles.id = auth.uid();


-- * FUNCTIONS
-- N/A


-- * TRIGGERS
-- Enable Realtime listening on public tables
DROP PUBLICATION IF EXISTS supabase_realtime;
CREATE publication supabase_realtime for TABLE products, prices;


-- * INDEXES
-- N/A


-- * POLICIES (ROW LEVEL SECURITY)
-- RLS
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE prices ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "User can only view their own subscription data" ON subscriptions for SELECT USING (auth.uid() = user_id);
CREATE POLICY "Products are read-only" ON products for SELECT USING (true);
CREATE POLICY "Prices are read-only" ON prices for SELECT USING (true);



