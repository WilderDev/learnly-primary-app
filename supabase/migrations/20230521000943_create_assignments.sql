create table "public"."assignments" (
    "id" uuid not null default gen_random_uuid(),
    "creator_id" uuid not null,
    "content" text default 'Hello'::text,
    "user_lesson_plan_id" uuid,
    "lesson_plan_id" uuid,
    "title" character varying,
    "assigned_on" timestamp with time zone not null default now(),
    "due_date" timestamp with time zone not null default now(),
    "status" character varying default 'PENDING'::character varying
);

CREATE UNIQUE INDEX assignments_pkey ON public.assignments USING btree (id);

alter table "public"."assignments" add constraint "assignments_pkey" PRIMARY KEY using index "assignments_pkey";

alter table "public"."assignments" add constraint "assignments_creator_id_fkey" FOREIGN KEY (creator_id) REFERENCES teacher_profiles(id) not valid;

alter table "public"."assignments" validate constraint "assignments_creator_id_fkey";

alter table "public"."assignments" add constraint "assignments_lesson_plan_id_fkey" FOREIGN KEY (lesson_plan_id) REFERENCES lesson_plans(id) not valid;

alter table "public"."assignments" validate constraint "assignments_lesson_plan_id_fkey";

alter table "public"."assignments" add constraint "assignments_user_lesson_plan_id_fkey" FOREIGN KEY (user_lesson_plan_id) REFERENCES user_lesson_plans(id) not valid;

alter table "public"."assignments" validate constraint "assignments_user_lesson_plan_id_fkey";
