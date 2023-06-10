export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      assignments: {
        Row: {
          assigned_on: string
          content: string
          created_at: string
          creator_id: string
          due_date: string
          id: string
          status: Database["public"]["Enums"]["assignment_status"]
          title: string
          updated_at: string
          user_lesson_plan_id: string
        }
        Insert: {
          assigned_on?: string
          content?: string
          created_at?: string
          creator_id: string
          due_date?: string
          id?: string
          status?: Database["public"]["Enums"]["assignment_status"]
          title?: string
          updated_at?: string
          user_lesson_plan_id: string
        }
        Update: {
          assigned_on?: string
          content?: string
          created_at?: string
          creator_id?: string
          due_date?: string
          id?: string
          status?: Database["public"]["Enums"]["assignment_status"]
          title?: string
          updated_at?: string
          user_lesson_plan_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "assignments_creator_id_fkey"
            columns: ["creator_id"]
            referencedRelation: "teacher_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assignments_creator_id_fkey"
            columns: ["creator_id"]
            referencedRelation: "admin_current_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assignments_creator_id_fkey"
            columns: ["creator_id"]
            referencedRelation: "admin_past_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assignments_creator_id_fkey"
            columns: ["creator_id"]
            referencedRelation: "admin_trial_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assignments_creator_id_fkey"
            columns: ["creator_id"]
            referencedRelation: "curriculum_with_progress_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "assignments_creator_id_fkey"
            columns: ["creator_id"]
            referencedRelation: "lesson_plan_with_creator_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "assignments_creator_id_fkey"
            columns: ["creator_id"]
            referencedRelation: "lesson_plans_with_creator_and_students_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "assignments_creator_id_fkey"
            columns: ["creator_id"]
            referencedRelation: "teacher_me_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assignments_user_lesson_plan_id_fkey"
            columns: ["user_lesson_plan_id"]
            referencedRelation: "user_lesson_plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assignments_user_lesson_plan_id_fkey"
            columns: ["user_lesson_plan_id"]
            referencedRelation: "lesson_plans_with_creator_and_students_view"
            referencedColumns: ["user_lesson_plan_id"]
          },
          {
            foreignKeyName: "assignments_user_lesson_plan_id_fkey"
            columns: ["user_lesson_plan_id"]
            referencedRelation: "lesson_plans_without_assignments_view"
            referencedColumns: ["user_lesson_plan_id"]
          }
        ]
      }
      comment_reactions: {
        Row: {
          comment_id: string
          created_at: string | null
          id: string
          reaction_id: string
          reactor_id: string
          updated_at: string | null
        }
        Insert: {
          comment_id: string
          created_at?: string | null
          id?: string
          reaction_id: string
          reactor_id: string
          updated_at?: string | null
        }
        Update: {
          comment_id?: string
          created_at?: string | null
          id?: string
          reaction_id?: string
          reactor_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "comment_reactions_comment_id_fkey"
            columns: ["comment_id"]
            referencedRelation: "comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comment_reactions_reaction_id_fkey"
            columns: ["reaction_id"]
            referencedRelation: "reactions"
            referencedColumns: ["id"]
          }
        ]
      }
      comments: {
        Row: {
          author_id: string | null
          comment: string
          commentable_id: string
          commentable_type: Database["public"]["Enums"]["commentable_type"]
          created_at: string | null
          id: string
          mentioned_user_ids: string[]
          parent_comment_id: string | null
          updated_at: string | null
        }
        Insert: {
          author_id?: string | null
          comment: string
          commentable_id: string
          commentable_type?: Database["public"]["Enums"]["commentable_type"]
          created_at?: string | null
          id?: string
          mentioned_user_ids?: string[]
          parent_comment_id?: string | null
          updated_at?: string | null
        }
        Update: {
          author_id?: string | null
          comment?: string
          commentable_id?: string
          commentable_type?: Database["public"]["Enums"]["commentable_type"]
          created_at?: string | null
          id?: string
          mentioned_user_ids?: string[]
          parent_comment_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "comments_author_id_fkey"
            columns: ["author_id"]
            referencedRelation: "teacher_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_author_id_fkey"
            columns: ["author_id"]
            referencedRelation: "admin_current_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_author_id_fkey"
            columns: ["author_id"]
            referencedRelation: "admin_past_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_author_id_fkey"
            columns: ["author_id"]
            referencedRelation: "admin_trial_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_author_id_fkey"
            columns: ["author_id"]
            referencedRelation: "curriculum_with_progress_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "comments_author_id_fkey"
            columns: ["author_id"]
            referencedRelation: "lesson_plan_with_creator_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "comments_author_id_fkey"
            columns: ["author_id"]
            referencedRelation: "lesson_plans_with_creator_and_students_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "comments_author_id_fkey"
            columns: ["author_id"]
            referencedRelation: "teacher_me_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_parent_comment_id_fkey"
            columns: ["parent_comment_id"]
            referencedRelation: "comments"
            referencedColumns: ["id"]
          }
        ]
      }
      curriculum_lessons: {
        Row: {
          created_at: string
          curriculum_topic_id: string
          description: string
          id: string
          image_path: string
          lesson_number: number
          lesson_plan_ids: string[]
          name: string
          type: Database["public"]["Enums"]["module_type"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          curriculum_topic_id: string
          description: string
          id?: string
          image_path: string
          lesson_number?: number
          lesson_plan_ids?: string[]
          name: string
          type?: Database["public"]["Enums"]["module_type"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          curriculum_topic_id?: string
          description?: string
          id?: string
          image_path?: string
          lesson_number?: number
          lesson_plan_ids?: string[]
          name?: string
          type?: Database["public"]["Enums"]["module_type"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "curriculum_lessons_curriculum_topic_id_fkey"
            columns: ["curriculum_topic_id"]
            referencedRelation: "curriculum_topics"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "curriculum_lessons_curriculum_topic_id_fkey"
            columns: ["curriculum_topic_id"]
            referencedRelation: "curriculum_lessons_with_progress_view"
            referencedColumns: ["curriculum_topic_id"]
          },
          {
            foreignKeyName: "curriculum_lessons_curriculum_topic_id_fkey"
            columns: ["curriculum_topic_id"]
            referencedRelation: "curriculum_topics_with_progress_view"
            referencedColumns: ["curriculum_topic_id"]
          },
          {
            foreignKeyName: "curriculum_lessons_curriculum_topic_id_fkey"
            columns: ["curriculum_topic_id"]
            referencedRelation: "shareable_curriculum_lessons_view"
            referencedColumns: ["topic_id"]
          },
          {
            foreignKeyName: "curriculum_lessons_curriculum_topic_id_fkey"
            columns: ["curriculum_topic_id"]
            referencedRelation: "shareable_curriculum_topics_view"
            referencedColumns: ["id"]
          }
        ]
      }
      curriculum_levels: {
        Row: {
          created_at: string
          curriculum_subject_id: string
          id: string
          level_id: string
          level_number: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          curriculum_subject_id: string
          id?: string
          level_id: string
          level_number?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          curriculum_subject_id?: string
          id?: string
          level_id?: string
          level_number?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "curriculum_levels_curriculum_subject_id_fkey"
            columns: ["curriculum_subject_id"]
            referencedRelation: "curriculum_subjects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "curriculum_levels_curriculum_subject_id_fkey"
            columns: ["curriculum_subject_id"]
            referencedRelation: "curriculum_lessons_with_progress_view"
            referencedColumns: ["curriculum_subject_id"]
          },
          {
            foreignKeyName: "curriculum_levels_curriculum_subject_id_fkey"
            columns: ["curriculum_subject_id"]
            referencedRelation: "curriculum_levels_with_progress_view"
            referencedColumns: ["curriculum_subject_id"]
          },
          {
            foreignKeyName: "curriculum_levels_curriculum_subject_id_fkey"
            columns: ["curriculum_subject_id"]
            referencedRelation: "curriculum_subjects_with_progress_view"
            referencedColumns: ["curriculum_subject_id"]
          },
          {
            foreignKeyName: "curriculum_levels_curriculum_subject_id_fkey"
            columns: ["curriculum_subject_id"]
            referencedRelation: "curriculum_topics_with_progress_view"
            referencedColumns: ["curriculum_subject_id"]
          },
          {
            foreignKeyName: "curriculum_levels_curriculum_subject_id_fkey"
            columns: ["curriculum_subject_id"]
            referencedRelation: "shareable_curriculum_lessons_view"
            referencedColumns: ["subject_id"]
          },
          {
            foreignKeyName: "curriculum_levels_curriculum_subject_id_fkey"
            columns: ["curriculum_subject_id"]
            referencedRelation: "shareable_curriculum_levels_view"
            referencedColumns: ["subject_id"]
          },
          {
            foreignKeyName: "curriculum_levels_curriculum_subject_id_fkey"
            columns: ["curriculum_subject_id"]
            referencedRelation: "shareable_curriculum_subjects_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "curriculum_levels_curriculum_subject_id_fkey"
            columns: ["curriculum_subject_id"]
            referencedRelation: "shareable_curriculum_topics_view"
            referencedColumns: ["subject_id"]
          },
          {
            foreignKeyName: "curriculum_levels_level_id_fkey"
            columns: ["level_id"]
            referencedRelation: "levels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "curriculum_levels_level_id_fkey"
            columns: ["level_id"]
            referencedRelation: "curriculum_lesson_with_user_lesson_view"
            referencedColumns: ["level_id"]
          },
          {
            foreignKeyName: "curriculum_levels_level_id_fkey"
            columns: ["level_id"]
            referencedRelation: "subjects_levels_topics"
            referencedColumns: ["level_id"]
          }
        ]
      }
      curriculum_prerequisites: {
        Row: {
          created_at: string
          id: string
          lesson_id: string
          lesson_prerequisite_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          lesson_id: string
          lesson_prerequisite_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          lesson_id?: string
          lesson_prerequisite_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "curriculum_prerequisites_lesson_id_fkey"
            columns: ["lesson_id"]
            referencedRelation: "curriculum_lessons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "curriculum_prerequisites_lesson_id_fkey"
            columns: ["lesson_id"]
            referencedRelation: "curriculum_lesson_with_user_lesson_view"
            referencedColumns: ["curriculum_lesson_id"]
          },
          {
            foreignKeyName: "curriculum_prerequisites_lesson_id_fkey"
            columns: ["lesson_id"]
            referencedRelation: "curriculum_lessons_with_progress_view"
            referencedColumns: ["curriculum_lesson_id"]
          },
          {
            foreignKeyName: "curriculum_prerequisites_lesson_id_fkey"
            columns: ["lesson_id"]
            referencedRelation: "next_lesson_per_subject_per_curriculum_view"
            referencedColumns: ["curriculum_lesson_id"]
          },
          {
            foreignKeyName: "curriculum_prerequisites_lesson_id_fkey"
            columns: ["lesson_id"]
            referencedRelation: "shareable_curriculum_lessons_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "curriculum_prerequisites_lesson_prerequisite_id_fkey"
            columns: ["lesson_prerequisite_id"]
            referencedRelation: "curriculum_lessons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "curriculum_prerequisites_lesson_prerequisite_id_fkey"
            columns: ["lesson_prerequisite_id"]
            referencedRelation: "curriculum_lesson_with_user_lesson_view"
            referencedColumns: ["curriculum_lesson_id"]
          },
          {
            foreignKeyName: "curriculum_prerequisites_lesson_prerequisite_id_fkey"
            columns: ["lesson_prerequisite_id"]
            referencedRelation: "curriculum_lessons_with_progress_view"
            referencedColumns: ["curriculum_lesson_id"]
          },
          {
            foreignKeyName: "curriculum_prerequisites_lesson_prerequisite_id_fkey"
            columns: ["lesson_prerequisite_id"]
            referencedRelation: "next_lesson_per_subject_per_curriculum_view"
            referencedColumns: ["curriculum_lesson_id"]
          },
          {
            foreignKeyName: "curriculum_prerequisites_lesson_prerequisite_id_fkey"
            columns: ["lesson_prerequisite_id"]
            referencedRelation: "shareable_curriculum_lessons_view"
            referencedColumns: ["id"]
          }
        ]
      }
      curriculum_subjects: {
        Row: {
          created_at: string
          curriculum_id: string
          id: string
          subject_id: string
          type: Database["public"]["Enums"]["module_type"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          curriculum_id: string
          id?: string
          subject_id: string
          type?: Database["public"]["Enums"]["module_type"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          curriculum_id?: string
          id?: string
          subject_id?: string
          type?: Database["public"]["Enums"]["module_type"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "curriculum_subjects_curriculum_id_fkey"
            columns: ["curriculum_id"]
            referencedRelation: "curriculums"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "curriculum_subjects_curriculum_id_fkey"
            columns: ["curriculum_id"]
            referencedRelation: "curriculum_lessons_with_progress_view"
            referencedColumns: ["curriculum_id"]
          },
          {
            foreignKeyName: "curriculum_subjects_curriculum_id_fkey"
            columns: ["curriculum_id"]
            referencedRelation: "curriculum_levels_with_progress_view"
            referencedColumns: ["curriculum_id"]
          },
          {
            foreignKeyName: "curriculum_subjects_curriculum_id_fkey"
            columns: ["curriculum_id"]
            referencedRelation: "curriculum_subjects_with_progress_view"
            referencedColumns: ["curriculum_id"]
          },
          {
            foreignKeyName: "curriculum_subjects_curriculum_id_fkey"
            columns: ["curriculum_id"]
            referencedRelation: "curriculum_topics_with_progress_view"
            referencedColumns: ["curriculum_id"]
          },
          {
            foreignKeyName: "curriculum_subjects_curriculum_id_fkey"
            columns: ["curriculum_id"]
            referencedRelation: "curriculum_with_progress_view"
            referencedColumns: ["curriculum_id"]
          },
          {
            foreignKeyName: "curriculum_subjects_curriculum_id_fkey"
            columns: ["curriculum_id"]
            referencedRelation: "shareable_curriculum_lessons_view"
            referencedColumns: ["curriculum_id"]
          },
          {
            foreignKeyName: "curriculum_subjects_curriculum_id_fkey"
            columns: ["curriculum_id"]
            referencedRelation: "shareable_curriculum_levels_view"
            referencedColumns: ["curriculum_id"]
          },
          {
            foreignKeyName: "curriculum_subjects_curriculum_id_fkey"
            columns: ["curriculum_id"]
            referencedRelation: "shareable_curriculum_subjects_view"
            referencedColumns: ["curriculum_id"]
          },
          {
            foreignKeyName: "curriculum_subjects_curriculum_id_fkey"
            columns: ["curriculum_id"]
            referencedRelation: "shareable_curriculum_topics_view"
            referencedColumns: ["curriculum_id"]
          },
          {
            foreignKeyName: "curriculum_subjects_curriculum_id_fkey"
            columns: ["curriculum_id"]
            referencedRelation: "user_curriculum_details_view"
            referencedColumns: ["curriculum_id"]
          },
          {
            foreignKeyName: "curriculum_subjects_subject_id_fkey"
            columns: ["subject_id"]
            referencedRelation: "subjects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "curriculum_subjects_subject_id_fkey"
            columns: ["subject_id"]
            referencedRelation: "curriculum_lesson_with_user_lesson_view"
            referencedColumns: ["subject_id"]
          },
          {
            foreignKeyName: "curriculum_subjects_subject_id_fkey"
            columns: ["subject_id"]
            referencedRelation: "subjects_levels_topics"
            referencedColumns: ["subject_id"]
          }
        ]
      }
      curriculum_topics: {
        Row: {
          created_at: string
          curriculum_level_id: string
          id: string
          topic_id: string
          topic_number: number
          type: Database["public"]["Enums"]["module_type"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          curriculum_level_id: string
          id?: string
          topic_id: string
          topic_number?: number
          type?: Database["public"]["Enums"]["module_type"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          curriculum_level_id?: string
          id?: string
          topic_id?: string
          topic_number?: number
          type?: Database["public"]["Enums"]["module_type"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "curriculum_topics_curriculum_level_id_fkey"
            columns: ["curriculum_level_id"]
            referencedRelation: "curriculum_levels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "curriculum_topics_curriculum_level_id_fkey"
            columns: ["curriculum_level_id"]
            referencedRelation: "curriculum_lessons_with_progress_view"
            referencedColumns: ["curriculum_level_id"]
          },
          {
            foreignKeyName: "curriculum_topics_curriculum_level_id_fkey"
            columns: ["curriculum_level_id"]
            referencedRelation: "curriculum_levels_with_progress_view"
            referencedColumns: ["curriculum_level_id"]
          },
          {
            foreignKeyName: "curriculum_topics_curriculum_level_id_fkey"
            columns: ["curriculum_level_id"]
            referencedRelation: "curriculum_topics_with_progress_view"
            referencedColumns: ["curriculum_level_id"]
          },
          {
            foreignKeyName: "curriculum_topics_curriculum_level_id_fkey"
            columns: ["curriculum_level_id"]
            referencedRelation: "shareable_curriculum_lessons_view"
            referencedColumns: ["level_id"]
          },
          {
            foreignKeyName: "curriculum_topics_curriculum_level_id_fkey"
            columns: ["curriculum_level_id"]
            referencedRelation: "shareable_curriculum_levels_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "curriculum_topics_curriculum_level_id_fkey"
            columns: ["curriculum_level_id"]
            referencedRelation: "shareable_curriculum_topics_view"
            referencedColumns: ["level_id"]
          },
          {
            foreignKeyName: "curriculum_topics_topic_id_fkey"
            columns: ["topic_id"]
            referencedRelation: "topics"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "curriculum_topics_topic_id_fkey"
            columns: ["topic_id"]
            referencedRelation: "curriculum_lesson_with_user_lesson_view"
            referencedColumns: ["topic_id"]
          },
          {
            foreignKeyName: "curriculum_topics_topic_id_fkey"
            columns: ["topic_id"]
            referencedRelation: "subjects_levels_topics"
            referencedColumns: ["topic_id"]
          }
        ]
      }
      curriculums: {
        Row: {
          created_at: string
          creator_id: string
          description: string
          id: string
          image_path: string
          is_public: boolean
          name: string
          status: Database["public"]["Enums"]["curriculum_status"]
          tags: string[]
          type: Database["public"]["Enums"]["curriculum_type"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          creator_id: string
          description: string
          id?: string
          image_path: string
          is_public?: boolean
          name: string
          status?: Database["public"]["Enums"]["curriculum_status"]
          tags?: string[]
          type?: Database["public"]["Enums"]["curriculum_type"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          creator_id?: string
          description?: string
          id?: string
          image_path?: string
          is_public?: boolean
          name?: string
          status?: Database["public"]["Enums"]["curriculum_status"]
          tags?: string[]
          type?: Database["public"]["Enums"]["curriculum_type"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "curriculums_creator_id_fkey"
            columns: ["creator_id"]
            referencedRelation: "teacher_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "curriculums_creator_id_fkey"
            columns: ["creator_id"]
            referencedRelation: "admin_current_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "curriculums_creator_id_fkey"
            columns: ["creator_id"]
            referencedRelation: "admin_past_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "curriculums_creator_id_fkey"
            columns: ["creator_id"]
            referencedRelation: "admin_trial_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "curriculums_creator_id_fkey"
            columns: ["creator_id"]
            referencedRelation: "curriculum_with_progress_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "curriculums_creator_id_fkey"
            columns: ["creator_id"]
            referencedRelation: "lesson_plan_with_creator_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "curriculums_creator_id_fkey"
            columns: ["creator_id"]
            referencedRelation: "lesson_plans_with_creator_and_students_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "curriculums_creator_id_fkey"
            columns: ["creator_id"]
            referencedRelation: "teacher_me_view"
            referencedColumns: ["id"]
          }
        ]
      }
      customers: {
        Row: {
          billing_portal_session_url: string
          created_at: string
          id: string
          stripe_customer_id: string
          updated_at: string
        }
        Insert: {
          billing_portal_session_url?: string
          created_at?: string
          id: string
          stripe_customer_id?: string
          updated_at?: string
        }
        Update: {
          billing_portal_session_url?: string
          created_at?: string
          id?: string
          stripe_customer_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "customers_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "customers_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      events: {
        Row: {
          attendees: string[]
          created_at: string
          datetime: string
          description: string | null
          host_id: string
          id: string
          image_path: string | null
          length_in_min: number
          location: string | null
          metadata: Json | null
          name: string
          type: Database["public"]["Enums"]["event"]
          updated_at: string
          url: string | null
        }
        Insert: {
          attendees?: string[]
          created_at?: string
          datetime: string
          description?: string | null
          host_id: string
          id?: string
          image_path?: string | null
          length_in_min?: number
          location?: string | null
          metadata?: Json | null
          name: string
          type?: Database["public"]["Enums"]["event"]
          updated_at?: string
          url?: string | null
        }
        Update: {
          attendees?: string[]
          created_at?: string
          datetime?: string
          description?: string | null
          host_id?: string
          id?: string
          image_path?: string | null
          length_in_min?: number
          location?: string | null
          metadata?: Json | null
          name?: string
          type?: Database["public"]["Enums"]["event"]
          updated_at?: string
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "events_host_id_fkey"
            columns: ["host_id"]
            referencedRelation: "teacher_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_host_id_fkey"
            columns: ["host_id"]
            referencedRelation: "admin_current_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_host_id_fkey"
            columns: ["host_id"]
            referencedRelation: "admin_past_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_host_id_fkey"
            columns: ["host_id"]
            referencedRelation: "admin_trial_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_host_id_fkey"
            columns: ["host_id"]
            referencedRelation: "curriculum_with_progress_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "events_host_id_fkey"
            columns: ["host_id"]
            referencedRelation: "lesson_plan_with_creator_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "events_host_id_fkey"
            columns: ["host_id"]
            referencedRelation: "lesson_plans_with_creator_and_students_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "events_host_id_fkey"
            columns: ["host_id"]
            referencedRelation: "teacher_me_view"
            referencedColumns: ["id"]
          }
        ]
      }
      lesson_plan_templates: {
        Row: {
          assessments: Json[] | null
          created_at: string
          creator_id: string
          difficulty: Database["public"]["Enums"]["difficulty"] | null
          format: Database["public"]["Enums"]["format"] | null
          id: string
          image_path: string | null
          is_public: boolean
          learning_styles:
            | Database["public"]["Enums"]["learning_style"][]
            | null
          length_in_min: number | null
          level: string | null
          materials: Database["public"]["Enums"]["material"][] | null
          objectives: Database["public"]["Enums"]["objective"][] | null
          pace: Database["public"]["Enums"]["pace"] | null
          philosophy: Database["public"]["Enums"]["philosophy"] | null
          special_considerations: string | null
          standards: Database["public"]["Enums"]["standard"][] | null
          subject: string | null
          tags: string[] | null
          teaching_strategy:
            | Database["public"]["Enums"]["teaching_strategy"]
            | null
          title: string
          topic: string | null
          updated_at: string
        }
        Insert: {
          assessments?: Json[] | null
          created_at?: string
          creator_id: string
          difficulty?: Database["public"]["Enums"]["difficulty"] | null
          format?: Database["public"]["Enums"]["format"] | null
          id?: string
          image_path?: string | null
          is_public?: boolean
          learning_styles?:
            | Database["public"]["Enums"]["learning_style"][]
            | null
          length_in_min?: number | null
          level?: string | null
          materials?: Database["public"]["Enums"]["material"][] | null
          objectives?: Database["public"]["Enums"]["objective"][] | null
          pace?: Database["public"]["Enums"]["pace"] | null
          philosophy?: Database["public"]["Enums"]["philosophy"] | null
          special_considerations?: string | null
          standards?: Database["public"]["Enums"]["standard"][] | null
          subject?: string | null
          tags?: string[] | null
          teaching_strategy?:
            | Database["public"]["Enums"]["teaching_strategy"]
            | null
          title: string
          topic?: string | null
          updated_at?: string
        }
        Update: {
          assessments?: Json[] | null
          created_at?: string
          creator_id?: string
          difficulty?: Database["public"]["Enums"]["difficulty"] | null
          format?: Database["public"]["Enums"]["format"] | null
          id?: string
          image_path?: string | null
          is_public?: boolean
          learning_styles?:
            | Database["public"]["Enums"]["learning_style"][]
            | null
          length_in_min?: number | null
          level?: string | null
          materials?: Database["public"]["Enums"]["material"][] | null
          objectives?: Database["public"]["Enums"]["objective"][] | null
          pace?: Database["public"]["Enums"]["pace"] | null
          philosophy?: Database["public"]["Enums"]["philosophy"] | null
          special_considerations?: string | null
          standards?: Database["public"]["Enums"]["standard"][] | null
          subject?: string | null
          tags?: string[] | null
          teaching_strategy?:
            | Database["public"]["Enums"]["teaching_strategy"]
            | null
          title?: string
          topic?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "lesson_plan_templates_creator_id_fkey"
            columns: ["creator_id"]
            referencedRelation: "teacher_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lesson_plan_templates_creator_id_fkey"
            columns: ["creator_id"]
            referencedRelation: "admin_current_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lesson_plan_templates_creator_id_fkey"
            columns: ["creator_id"]
            referencedRelation: "admin_past_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lesson_plan_templates_creator_id_fkey"
            columns: ["creator_id"]
            referencedRelation: "admin_trial_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lesson_plan_templates_creator_id_fkey"
            columns: ["creator_id"]
            referencedRelation: "curriculum_with_progress_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "lesson_plan_templates_creator_id_fkey"
            columns: ["creator_id"]
            referencedRelation: "lesson_plan_with_creator_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "lesson_plan_templates_creator_id_fkey"
            columns: ["creator_id"]
            referencedRelation: "lesson_plans_with_creator_and_students_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "lesson_plan_templates_creator_id_fkey"
            columns: ["creator_id"]
            referencedRelation: "teacher_me_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lesson_plan_templates_level_fkey"
            columns: ["level"]
            referencedRelation: "levels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lesson_plan_templates_level_fkey"
            columns: ["level"]
            referencedRelation: "curriculum_lesson_with_user_lesson_view"
            referencedColumns: ["level_id"]
          },
          {
            foreignKeyName: "lesson_plan_templates_level_fkey"
            columns: ["level"]
            referencedRelation: "subjects_levels_topics"
            referencedColumns: ["level_id"]
          },
          {
            foreignKeyName: "lesson_plan_templates_subject_fkey"
            columns: ["subject"]
            referencedRelation: "subjects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lesson_plan_templates_subject_fkey"
            columns: ["subject"]
            referencedRelation: "curriculum_lesson_with_user_lesson_view"
            referencedColumns: ["subject_id"]
          },
          {
            foreignKeyName: "lesson_plan_templates_subject_fkey"
            columns: ["subject"]
            referencedRelation: "subjects_levels_topics"
            referencedColumns: ["subject_id"]
          },
          {
            foreignKeyName: "lesson_plan_templates_topic_fkey"
            columns: ["topic"]
            referencedRelation: "topics"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lesson_plan_templates_topic_fkey"
            columns: ["topic"]
            referencedRelation: "curriculum_lesson_with_user_lesson_view"
            referencedColumns: ["topic_id"]
          },
          {
            foreignKeyName: "lesson_plan_templates_topic_fkey"
            columns: ["topic"]
            referencedRelation: "subjects_levels_topics"
            referencedColumns: ["topic_id"]
          }
        ]
      }
      lesson_plans: {
        Row: {
          content: string
          created_at: string
          creator_id: string
          id: string
          image_path: string
          is_public: boolean
          length_in_min: number
          level: string
          subject: string
          tags: string[]
          title: string
          topic: string
          updated_at: string
        }
        Insert: {
          content: string
          created_at?: string
          creator_id: string
          id?: string
          image_path?: string
          is_public?: boolean
          length_in_min?: number
          level: string
          subject: string
          tags?: string[]
          title: string
          topic: string
          updated_at?: string
        }
        Update: {
          content?: string
          created_at?: string
          creator_id?: string
          id?: string
          image_path?: string
          is_public?: boolean
          length_in_min?: number
          level?: string
          subject?: string
          tags?: string[]
          title?: string
          topic?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "lesson_plans_creator_id_fkey"
            columns: ["creator_id"]
            referencedRelation: "teacher_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lesson_plans_creator_id_fkey"
            columns: ["creator_id"]
            referencedRelation: "admin_current_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lesson_plans_creator_id_fkey"
            columns: ["creator_id"]
            referencedRelation: "admin_past_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lesson_plans_creator_id_fkey"
            columns: ["creator_id"]
            referencedRelation: "admin_trial_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lesson_plans_creator_id_fkey"
            columns: ["creator_id"]
            referencedRelation: "curriculum_with_progress_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "lesson_plans_creator_id_fkey"
            columns: ["creator_id"]
            referencedRelation: "lesson_plan_with_creator_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "lesson_plans_creator_id_fkey"
            columns: ["creator_id"]
            referencedRelation: "lesson_plans_with_creator_and_students_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "lesson_plans_creator_id_fkey"
            columns: ["creator_id"]
            referencedRelation: "teacher_me_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lesson_plans_level_fkey"
            columns: ["level"]
            referencedRelation: "levels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lesson_plans_level_fkey"
            columns: ["level"]
            referencedRelation: "curriculum_lesson_with_user_lesson_view"
            referencedColumns: ["level_id"]
          },
          {
            foreignKeyName: "lesson_plans_level_fkey"
            columns: ["level"]
            referencedRelation: "subjects_levels_topics"
            referencedColumns: ["level_id"]
          },
          {
            foreignKeyName: "lesson_plans_subject_fkey"
            columns: ["subject"]
            referencedRelation: "subjects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lesson_plans_subject_fkey"
            columns: ["subject"]
            referencedRelation: "curriculum_lesson_with_user_lesson_view"
            referencedColumns: ["subject_id"]
          },
          {
            foreignKeyName: "lesson_plans_subject_fkey"
            columns: ["subject"]
            referencedRelation: "subjects_levels_topics"
            referencedColumns: ["subject_id"]
          },
          {
            foreignKeyName: "lesson_plans_topic_fkey"
            columns: ["topic"]
            referencedRelation: "topics"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lesson_plans_topic_fkey"
            columns: ["topic"]
            referencedRelation: "curriculum_lesson_with_user_lesson_view"
            referencedColumns: ["topic_id"]
          },
          {
            foreignKeyName: "lesson_plans_topic_fkey"
            columns: ["topic"]
            referencedRelation: "subjects_levels_topics"
            referencedColumns: ["topic_id"]
          }
        ]
      }
      levels: {
        Row: {
          animal: Database["public"]["Enums"]["animal"]
          created_at: string
          description: string
          id: string
          image_path: string
          name: Database["public"]["Enums"]["level"]
          updated_at: string
        }
        Insert: {
          animal: Database["public"]["Enums"]["animal"]
          created_at?: string
          description: string
          id?: string
          image_path: string
          name: Database["public"]["Enums"]["level"]
          updated_at?: string
        }
        Update: {
          animal?: Database["public"]["Enums"]["animal"]
          created_at?: string
          description?: string
          id?: string
          image_path?: string
          name?: Database["public"]["Enums"]["level"]
          updated_at?: string
        }
        Relationships: []
      }
      notifications: {
        Row: {
          action_text: string
          action_url: string
          body: string
          created_at: string
          id: string
          lesson_plan_id: string | null
          metadata: Json
          read_at: string | null
          received_at: string | null
          recipient_id: string
          sender_id: string
          sent_at: string
          status: Database["public"]["Enums"]["notification_status"]
          title: string
          type: Database["public"]["Enums"]["notification_type"]
          updated_at: string
        }
        Insert: {
          action_text?: string
          action_url?: string
          body?: string
          created_at?: string
          id?: string
          lesson_plan_id?: string | null
          metadata?: Json
          read_at?: string | null
          received_at?: string | null
          recipient_id: string
          sender_id?: string
          sent_at?: string
          status?: Database["public"]["Enums"]["notification_status"]
          title?: string
          type?: Database["public"]["Enums"]["notification_type"]
          updated_at?: string
        }
        Update: {
          action_text?: string
          action_url?: string
          body?: string
          created_at?: string
          id?: string
          lesson_plan_id?: string | null
          metadata?: Json
          read_at?: string | null
          received_at?: string | null
          recipient_id?: string
          sender_id?: string
          sent_at?: string
          status?: Database["public"]["Enums"]["notification_status"]
          title?: string
          type?: Database["public"]["Enums"]["notification_type"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_lesson_plan_id_fkey"
            columns: ["lesson_plan_id"]
            referencedRelation: "lesson_plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_lesson_plan_id_fkey"
            columns: ["lesson_plan_id"]
            referencedRelation: "assignments_with_details_view"
            referencedColumns: ["lesson_plan_id"]
          },
          {
            foreignKeyName: "notifications_lesson_plan_id_fkey"
            columns: ["lesson_plan_id"]
            referencedRelation: "lesson_plan_with_creator_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_lesson_plan_id_fkey"
            columns: ["lesson_plan_id"]
            referencedRelation: "lesson_plans_with_creator_and_students_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_lesson_plan_id_fkey"
            columns: ["lesson_plan_id"]
            referencedRelation: "recently_completed_lesson_plans_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_lesson_plan_id_fkey"
            columns: ["lesson_plan_id"]
            referencedRelation: "upcoming_lesson_plans_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_recipient_id_fkey"
            columns: ["recipient_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_recipient_id_fkey"
            columns: ["recipient_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_sender_id_fkey"
            columns: ["sender_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_sender_id_fkey"
            columns: ["sender_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      prices: {
        Row: {
          active: boolean
          created_at: string
          currency: string
          description: string
          id: string
          metadata: Json
          nickname: string
          recurring_interval: Database["public"]["Enums"]["pricing_plan_interval"]
          recurring_interval_count: number
          stripe_product_id: string
          type: Database["public"]["Enums"]["pricing_type"]
          updated_at: string
        }
        Insert: {
          active?: boolean
          created_at?: string
          currency?: string
          description?: string
          id: string
          metadata?: Json
          nickname?: string
          recurring_interval?: Database["public"]["Enums"]["pricing_plan_interval"]
          recurring_interval_count?: number
          stripe_product_id?: string
          type?: Database["public"]["Enums"]["pricing_type"]
          updated_at?: string
        }
        Update: {
          active?: boolean
          created_at?: string
          currency?: string
          description?: string
          id?: string
          metadata?: Json
          nickname?: string
          recurring_interval?: Database["public"]["Enums"]["pricing_plan_interval"]
          recurring_interval_count?: number
          stripe_product_id?: string
          type?: Database["public"]["Enums"]["pricing_type"]
          updated_at?: string
        }
        Relationships: []
      }
      products: {
        Row: {
          active: boolean
          created_at: string
          description: string
          id: string
          image: string
          metadata: Json
          name: string
          updated_at: string
        }
        Insert: {
          active?: boolean
          created_at?: string
          description?: string
          id: string
          image?: string
          metadata?: Json
          name?: string
          updated_at?: string
        }
        Update: {
          active?: boolean
          created_at?: string
          description?: string
          id?: string
          image?: string
          metadata?: Json
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      reactions: {
        Row: {
          created_at: string | null
          id: string
          label: string
          metadata: Json
          type: string
          updated_at: string | null
          url: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          label: string
          metadata?: Json
          type: string
          updated_at?: string | null
          url: string
        }
        Update: {
          created_at?: string | null
          id?: string
          label?: string
          metadata?: Json
          type?: string
          updated_at?: string | null
          url?: string
        }
        Relationships: []
      }
      student_preferences: {
        Row: {
          accomplishments: Json
          assessment_results: Json
          created_at: string
          goals: Database["public"]["Enums"]["student_goals"][]
          id: string
          interests: string[]
          knowledge: Json
          learning_environment_preferences: Database["public"]["Enums"]["environment_preferences"][]
          learning_resources_preferences: Database["public"]["Enums"]["resource_preferences"][]
          learning_styles: Database["public"]["Enums"]["learning_style"][]
          special_needs: Database["public"]["Enums"]["learning_disabilities"][]
          strengths: string[]
          subject_preferences: string[]
          updated_at: string
          weaknesses: string[]
        }
        Insert: {
          accomplishments?: Json
          assessment_results?: Json
          created_at?: string
          goals?: Database["public"]["Enums"]["student_goals"][]
          id: string
          interests?: string[]
          knowledge?: Json
          learning_environment_preferences?: Database["public"]["Enums"]["environment_preferences"][]
          learning_resources_preferences?: Database["public"]["Enums"]["resource_preferences"][]
          learning_styles?: Database["public"]["Enums"]["learning_style"][]
          special_needs?: Database["public"]["Enums"]["learning_disabilities"][]
          strengths?: string[]
          subject_preferences?: string[]
          updated_at?: string
          weaknesses?: string[]
        }
        Update: {
          accomplishments?: Json
          assessment_results?: Json
          created_at?: string
          goals?: Database["public"]["Enums"]["student_goals"][]
          id?: string
          interests?: string[]
          knowledge?: Json
          learning_environment_preferences?: Database["public"]["Enums"]["environment_preferences"][]
          learning_resources_preferences?: Database["public"]["Enums"]["resource_preferences"][]
          learning_styles?: Database["public"]["Enums"]["learning_style"][]
          special_needs?: Database["public"]["Enums"]["learning_disabilities"][]
          strengths?: string[]
          subject_preferences?: string[]
          updated_at?: string
          weaknesses?: string[]
        }
        Relationships: [
          {
            foreignKeyName: "student_preferences_id_fkey"
            columns: ["id"]
            referencedRelation: "student_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "student_preferences_id_fkey"
            columns: ["id"]
            referencedRelation: "teacher_students_profiles_view"
            referencedColumns: ["id"]
          }
        ]
      }
      student_profiles: {
        Row: {
          avatar_url: string
          birthday: string
          created_at: string
          first_name: string
          id: string
          last_name: string
          teacher_id: string
          updated_at: string
        }
        Insert: {
          avatar_url?: string
          birthday?: string
          created_at?: string
          first_name?: string
          id?: string
          last_name?: string
          teacher_id: string
          updated_at?: string
        }
        Update: {
          avatar_url?: string
          birthday?: string
          created_at?: string
          first_name?: string
          id?: string
          last_name?: string
          teacher_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "student_profiles_teacher_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "teacher_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "student_profiles_teacher_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "admin_current_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "student_profiles_teacher_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "admin_past_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "student_profiles_teacher_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "admin_trial_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "student_profiles_teacher_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "curriculum_with_progress_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "student_profiles_teacher_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "lesson_plan_with_creator_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "student_profiles_teacher_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "lesson_plans_with_creator_and_students_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "student_profiles_teacher_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "teacher_me_view"
            referencedColumns: ["id"]
          }
        ]
      }
      subjects: {
        Row: {
          code: string
          created_at: string
          description: string
          id: string
          image_path: string
          name: string
          updated_at: string
        }
        Insert: {
          code: string
          created_at?: string
          description: string
          id?: string
          image_path: string
          name: string
          updated_at?: string
        }
        Update: {
          code?: string
          created_at?: string
          description?: string
          id?: string
          image_path?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          cancel_at: string | null
          cancel_at_period_end: boolean
          canceled_at: string | null
          created_at: string
          current_period_end: string
          current_period_start: string
          default_payment_method_id: string
          description: string
          ended_at: string | null
          id: string
          items: Json
          metadata: Json
          status: Database["public"]["Enums"]["subscription_status"]
          stripe_customer_id: string
          stripe_price_id: string
          stripe_product_id: string
          trial_end: string | null
          trial_start: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          cancel_at?: string | null
          cancel_at_period_end?: boolean
          canceled_at?: string | null
          created_at?: string
          current_period_end?: string
          current_period_start?: string
          default_payment_method_id?: string
          description?: string
          ended_at?: string | null
          id: string
          items?: Json
          metadata?: Json
          status?: Database["public"]["Enums"]["subscription_status"]
          stripe_customer_id?: string
          stripe_price_id?: string
          stripe_product_id?: string
          trial_end?: string | null
          trial_start?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          cancel_at?: string | null
          cancel_at_period_end?: boolean
          canceled_at?: string | null
          created_at?: string
          current_period_end?: string
          current_period_start?: string
          default_payment_method_id?: string
          description?: string
          ended_at?: string | null
          id?: string
          items?: Json
          metadata?: Json
          status?: Database["public"]["Enums"]["subscription_status"]
          stripe_customer_id?: string
          stripe_price_id?: string
          stripe_product_id?: string
          trial_end?: string | null
          trial_start?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscriptions_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      teacher_profiles: {
        Row: {
          avatar_url: string
          consecutive_activity_days: number
          created_at: string
          first_name: string
          id: string
          last_activity: string
          last_name: string
          role: Database["public"]["Enums"]["user_role"]
          status: Database["public"]["Enums"]["profile_status"]
          type: Database["public"]["Enums"]["profile_type"]
          updated_at: string
        }
        Insert: {
          avatar_url?: string
          consecutive_activity_days?: number
          created_at?: string
          first_name?: string
          id: string
          last_activity?: string
          last_name?: string
          role?: Database["public"]["Enums"]["user_role"]
          status?: Database["public"]["Enums"]["profile_status"]
          type?: Database["public"]["Enums"]["profile_type"]
          updated_at?: string
        }
        Update: {
          avatar_url?: string
          consecutive_activity_days?: number
          created_at?: string
          first_name?: string
          id?: string
          last_activity?: string
          last_name?: string
          role?: Database["public"]["Enums"]["user_role"]
          status?: Database["public"]["Enums"]["profile_status"]
          type?: Database["public"]["Enums"]["profile_type"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "teacher_profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teacher_profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      teaching_preferences: {
        Row: {
          created_at: string
          id: string
          preferred_lesson_detail_level: Database["public"]["Enums"]["lesson_detail_level"]
          preferred_lesson_structure:
            | Database["public"]["Enums"]["lesson_structure"]
            | null
          preferred_teaching_strategies: Database["public"]["Enums"]["teaching_strategy"][]
          preferred_teaching_tools: Database["public"]["Enums"]["teaching_tool"][]
          updated_at: string
        }
        Insert: {
          created_at?: string
          id: string
          preferred_lesson_detail_level?: Database["public"]["Enums"]["lesson_detail_level"]
          preferred_lesson_structure?:
            | Database["public"]["Enums"]["lesson_structure"]
            | null
          preferred_teaching_strategies?: Database["public"]["Enums"]["teaching_strategy"][]
          preferred_teaching_tools?: Database["public"]["Enums"]["teaching_tool"][]
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          preferred_lesson_detail_level?: Database["public"]["Enums"]["lesson_detail_level"]
          preferred_lesson_structure?:
            | Database["public"]["Enums"]["lesson_structure"]
            | null
          preferred_teaching_strategies?: Database["public"]["Enums"]["teaching_strategy"][]
          preferred_teaching_tools?: Database["public"]["Enums"]["teaching_tool"][]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "teaching_preferences_id_fkey"
            columns: ["id"]
            referencedRelation: "teacher_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teaching_preferences_id_fkey"
            columns: ["id"]
            referencedRelation: "admin_current_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teaching_preferences_id_fkey"
            columns: ["id"]
            referencedRelation: "admin_past_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teaching_preferences_id_fkey"
            columns: ["id"]
            referencedRelation: "admin_trial_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teaching_preferences_id_fkey"
            columns: ["id"]
            referencedRelation: "curriculum_with_progress_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "teaching_preferences_id_fkey"
            columns: ["id"]
            referencedRelation: "lesson_plan_with_creator_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "teaching_preferences_id_fkey"
            columns: ["id"]
            referencedRelation: "lesson_plans_with_creator_and_students_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "teaching_preferences_id_fkey"
            columns: ["id"]
            referencedRelation: "teacher_me_view"
            referencedColumns: ["id"]
          }
        ]
      }
      topics: {
        Row: {
          created_at: string
          description: string
          id: string
          image_path: string
          level_id: string | null
          name: string
          subject_id: string | null
          topic_number: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          description: string
          id?: string
          image_path: string
          level_id?: string | null
          name: string
          subject_id?: string | null
          topic_number?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          image_path?: string
          level_id?: string | null
          name?: string
          subject_id?: string | null
          topic_number?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "topics_level_id_fkey"
            columns: ["level_id"]
            referencedRelation: "levels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "topics_level_id_fkey"
            columns: ["level_id"]
            referencedRelation: "curriculum_lesson_with_user_lesson_view"
            referencedColumns: ["level_id"]
          },
          {
            foreignKeyName: "topics_level_id_fkey"
            columns: ["level_id"]
            referencedRelation: "subjects_levels_topics"
            referencedColumns: ["level_id"]
          },
          {
            foreignKeyName: "topics_subject_id_fkey"
            columns: ["subject_id"]
            referencedRelation: "subjects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "topics_subject_id_fkey"
            columns: ["subject_id"]
            referencedRelation: "curriculum_lesson_with_user_lesson_view"
            referencedColumns: ["subject_id"]
          },
          {
            foreignKeyName: "topics_subject_id_fkey"
            columns: ["subject_id"]
            referencedRelation: "subjects_levels_topics"
            referencedColumns: ["subject_id"]
          }
        ]
      }
      user_curriculum_progress: {
        Row: {
          completion_date: string | null
          created_at: string
          id: string
          lesson_id: string
          status: Database["public"]["Enums"]["progress_status"]
          updated_at: string
          user_curriculum_id: string
          user_id: string
        }
        Insert: {
          completion_date?: string | null
          created_at?: string
          id?: string
          lesson_id: string
          status?: Database["public"]["Enums"]["progress_status"]
          updated_at?: string
          user_curriculum_id: string
          user_id: string
        }
        Update: {
          completion_date?: string | null
          created_at?: string
          id?: string
          lesson_id?: string
          status?: Database["public"]["Enums"]["progress_status"]
          updated_at?: string
          user_curriculum_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_curriculum_progress_lesson_id_fkey"
            columns: ["lesson_id"]
            referencedRelation: "curriculum_lessons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_curriculum_progress_lesson_id_fkey"
            columns: ["lesson_id"]
            referencedRelation: "curriculum_lesson_with_user_lesson_view"
            referencedColumns: ["curriculum_lesson_id"]
          },
          {
            foreignKeyName: "user_curriculum_progress_lesson_id_fkey"
            columns: ["lesson_id"]
            referencedRelation: "curriculum_lessons_with_progress_view"
            referencedColumns: ["curriculum_lesson_id"]
          },
          {
            foreignKeyName: "user_curriculum_progress_lesson_id_fkey"
            columns: ["lesson_id"]
            referencedRelation: "next_lesson_per_subject_per_curriculum_view"
            referencedColumns: ["curriculum_lesson_id"]
          },
          {
            foreignKeyName: "user_curriculum_progress_lesson_id_fkey"
            columns: ["lesson_id"]
            referencedRelation: "shareable_curriculum_lessons_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_curriculum_progress_user_curriculum_id_fkey"
            columns: ["user_curriculum_id"]
            referencedRelation: "user_curriculums"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_curriculum_progress_user_curriculum_id_fkey"
            columns: ["user_curriculum_id"]
            referencedRelation: "curriculum_lesson_with_user_lesson_view"
            referencedColumns: ["user_curriculum_id"]
          },
          {
            foreignKeyName: "user_curriculum_progress_user_curriculum_id_fkey"
            columns: ["user_curriculum_id"]
            referencedRelation: "curriculum_lessons_with_progress_view"
            referencedColumns: ["user_curriculum_id"]
          },
          {
            foreignKeyName: "user_curriculum_progress_user_curriculum_id_fkey"
            columns: ["user_curriculum_id"]
            referencedRelation: "curriculum_levels_with_progress_view"
            referencedColumns: ["user_curriculum_id"]
          },
          {
            foreignKeyName: "user_curriculum_progress_user_curriculum_id_fkey"
            columns: ["user_curriculum_id"]
            referencedRelation: "curriculum_subjects_with_progress_view"
            referencedColumns: ["user_curriculum_id"]
          },
          {
            foreignKeyName: "user_curriculum_progress_user_curriculum_id_fkey"
            columns: ["user_curriculum_id"]
            referencedRelation: "curriculum_topics_with_progress_view"
            referencedColumns: ["user_curriculum_id"]
          },
          {
            foreignKeyName: "user_curriculum_progress_user_curriculum_id_fkey"
            columns: ["user_curriculum_id"]
            referencedRelation: "next_lesson_per_subject_per_curriculum_view"
            referencedColumns: ["user_curriculum_id"]
          },
          {
            foreignKeyName: "user_curriculum_progress_user_curriculum_id_fkey"
            columns: ["user_curriculum_id"]
            referencedRelation: "user_curriculum_details_view"
            referencedColumns: ["user_curriculum_id"]
          },
          {
            foreignKeyName: "user_curriculum_progress_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "teacher_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_curriculum_progress_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "admin_current_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_curriculum_progress_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "admin_past_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_curriculum_progress_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "admin_trial_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_curriculum_progress_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "curriculum_with_progress_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "user_curriculum_progress_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "lesson_plan_with_creator_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "user_curriculum_progress_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "lesson_plans_with_creator_and_students_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "user_curriculum_progress_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "teacher_me_view"
            referencedColumns: ["id"]
          }
        ]
      }
      user_curriculums: {
        Row: {
          created_at: string
          curriculum_id: string
          id: string
          student_ids: string[]
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          curriculum_id: string
          id?: string
          student_ids?: string[]
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          curriculum_id?: string
          id?: string
          student_ids?: string[]
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_curriculums_curriculum_id_fkey"
            columns: ["curriculum_id"]
            referencedRelation: "curriculums"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_curriculums_curriculum_id_fkey"
            columns: ["curriculum_id"]
            referencedRelation: "curriculum_lessons_with_progress_view"
            referencedColumns: ["curriculum_id"]
          },
          {
            foreignKeyName: "user_curriculums_curriculum_id_fkey"
            columns: ["curriculum_id"]
            referencedRelation: "curriculum_levels_with_progress_view"
            referencedColumns: ["curriculum_id"]
          },
          {
            foreignKeyName: "user_curriculums_curriculum_id_fkey"
            columns: ["curriculum_id"]
            referencedRelation: "curriculum_subjects_with_progress_view"
            referencedColumns: ["curriculum_id"]
          },
          {
            foreignKeyName: "user_curriculums_curriculum_id_fkey"
            columns: ["curriculum_id"]
            referencedRelation: "curriculum_topics_with_progress_view"
            referencedColumns: ["curriculum_id"]
          },
          {
            foreignKeyName: "user_curriculums_curriculum_id_fkey"
            columns: ["curriculum_id"]
            referencedRelation: "curriculum_with_progress_view"
            referencedColumns: ["curriculum_id"]
          },
          {
            foreignKeyName: "user_curriculums_curriculum_id_fkey"
            columns: ["curriculum_id"]
            referencedRelation: "shareable_curriculum_lessons_view"
            referencedColumns: ["curriculum_id"]
          },
          {
            foreignKeyName: "user_curriculums_curriculum_id_fkey"
            columns: ["curriculum_id"]
            referencedRelation: "shareable_curriculum_levels_view"
            referencedColumns: ["curriculum_id"]
          },
          {
            foreignKeyName: "user_curriculums_curriculum_id_fkey"
            columns: ["curriculum_id"]
            referencedRelation: "shareable_curriculum_subjects_view"
            referencedColumns: ["curriculum_id"]
          },
          {
            foreignKeyName: "user_curriculums_curriculum_id_fkey"
            columns: ["curriculum_id"]
            referencedRelation: "shareable_curriculum_topics_view"
            referencedColumns: ["curriculum_id"]
          },
          {
            foreignKeyName: "user_curriculums_curriculum_id_fkey"
            columns: ["curriculum_id"]
            referencedRelation: "user_curriculum_details_view"
            referencedColumns: ["curriculum_id"]
          },
          {
            foreignKeyName: "user_curriculums_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "teacher_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_curriculums_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "admin_current_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_curriculums_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "admin_past_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_curriculums_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "admin_trial_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_curriculums_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "curriculum_with_progress_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "user_curriculums_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "lesson_plan_with_creator_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "user_curriculums_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "lesson_plans_with_creator_and_students_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "user_curriculums_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "teacher_me_view"
            referencedColumns: ["id"]
          }
        ]
      }
      user_lesson_plan_templates: {
        Row: {
          created_at: string
          id: string
          lesson_plan_template_id: string
          students: string[]
          teacher_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          lesson_plan_template_id: string
          students?: string[]
          teacher_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          lesson_plan_template_id?: string
          students?: string[]
          teacher_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_lesson_plan_templates_lesson_plan_template_id_fkey"
            columns: ["lesson_plan_template_id"]
            referencedRelation: "lesson_plan_templates"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_lesson_plan_templates_teacher_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "teacher_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_lesson_plan_templates_teacher_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "admin_current_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_lesson_plan_templates_teacher_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "admin_past_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_lesson_plan_templates_teacher_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "admin_trial_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_lesson_plan_templates_teacher_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "curriculum_with_progress_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "user_lesson_plan_templates_teacher_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "lesson_plan_with_creator_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "user_lesson_plan_templates_teacher_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "lesson_plans_with_creator_and_students_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "user_lesson_plan_templates_teacher_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "teacher_me_view"
            referencedColumns: ["id"]
          }
        ]
      }
      user_lesson_plans: {
        Row: {
          completion_date: string | null
          created_at: string
          id: string
          lesson_plan_id: string
          scheduled_date: string | null
          status: Database["public"]["Enums"]["status"]
          students: string[]
          teacher_id: string
          updated_at: string
        }
        Insert: {
          completion_date?: string | null
          created_at?: string
          id?: string
          lesson_plan_id: string
          scheduled_date?: string | null
          status?: Database["public"]["Enums"]["status"]
          students?: string[]
          teacher_id: string
          updated_at?: string
        }
        Update: {
          completion_date?: string | null
          created_at?: string
          id?: string
          lesson_plan_id?: string
          scheduled_date?: string | null
          status?: Database["public"]["Enums"]["status"]
          students?: string[]
          teacher_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_lesson_plans_lesson_plan_id_fkey"
            columns: ["lesson_plan_id"]
            referencedRelation: "lesson_plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_lesson_plans_lesson_plan_id_fkey"
            columns: ["lesson_plan_id"]
            referencedRelation: "assignments_with_details_view"
            referencedColumns: ["lesson_plan_id"]
          },
          {
            foreignKeyName: "user_lesson_plans_lesson_plan_id_fkey"
            columns: ["lesson_plan_id"]
            referencedRelation: "lesson_plan_with_creator_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_lesson_plans_lesson_plan_id_fkey"
            columns: ["lesson_plan_id"]
            referencedRelation: "lesson_plans_with_creator_and_students_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_lesson_plans_lesson_plan_id_fkey"
            columns: ["lesson_plan_id"]
            referencedRelation: "recently_completed_lesson_plans_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_lesson_plans_lesson_plan_id_fkey"
            columns: ["lesson_plan_id"]
            referencedRelation: "upcoming_lesson_plans_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_lesson_plans_teacher_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "teacher_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_lesson_plans_teacher_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "admin_current_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_lesson_plans_teacher_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "admin_past_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_lesson_plans_teacher_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "admin_trial_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_lesson_plans_teacher_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "curriculum_with_progress_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "user_lesson_plans_teacher_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "lesson_plan_with_creator_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "user_lesson_plans_teacher_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "lesson_plans_with_creator_and_students_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "user_lesson_plans_teacher_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "teacher_me_view"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      admin_current_users_view: {
        Row: {
          email: string | null
          expiration_date: string | null
          first_name: string | null
          id: string | null
          last_activity: string | null
          last_name: string | null
          role: Database["public"]["Enums"]["user_role"] | null
          subscription_status:
            | Database["public"]["Enums"]["subscription_status"]
            | null
        }
        Relationships: [
          {
            foreignKeyName: "teacher_profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teacher_profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      admin_past_users_view: {
        Row: {
          email: string | null
          expiration_date: string | null
          first_name: string | null
          id: string | null
          last_activity: string | null
          last_name: string | null
          role: Database["public"]["Enums"]["user_role"] | null
          subscription_status:
            | Database["public"]["Enums"]["subscription_status"]
            | null
        }
        Relationships: [
          {
            foreignKeyName: "teacher_profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teacher_profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      admin_statistics_view: {
        Row: {
          annual_active_users: number | null
          monthly_active_users: number | null
          monthly_trial_conversions: number | null
          monthly_trial_sign_ups: number | null
          total_trial_conversions: number | null
          total_trial_sign_ups: number | null
        }
        Relationships: []
      }
      admin_trial_users_view: {
        Row: {
          email: string | null
          expiration_date: string | null
          first_name: string | null
          id: string | null
          last_activity: string | null
          last_name: string | null
          role: Database["public"]["Enums"]["user_role"] | null
          subscription_status:
            | Database["public"]["Enums"]["subscription_status"]
            | null
        }
        Relationships: [
          {
            foreignKeyName: "teacher_profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teacher_profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      all_events_view: {
        Row: {
          attendees: string[] | null
          datetime: string | null
          description: string | null
          host_id: string | null
          id: string | null
          image_path: string | null
          length_in_min: number | null
          location: string | null
          metadata: Json | null
          name: string | null
          type: Database["public"]["Enums"]["event"] | null
          url: string | null
        }
        Insert: {
          attendees?: string[] | null
          datetime?: string | null
          description?: string | null
          host_id?: string | null
          id?: string | null
          image_path?: string | null
          length_in_min?: number | null
          location?: string | null
          metadata?: Json | null
          name?: string | null
          type?: Database["public"]["Enums"]["event"] | null
          url?: string | null
        }
        Update: {
          attendees?: string[] | null
          datetime?: string | null
          description?: string | null
          host_id?: string | null
          id?: string | null
          image_path?: string | null
          length_in_min?: number | null
          location?: string | null
          metadata?: Json | null
          name?: string | null
          type?: Database["public"]["Enums"]["event"] | null
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "events_host_id_fkey"
            columns: ["host_id"]
            referencedRelation: "teacher_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_host_id_fkey"
            columns: ["host_id"]
            referencedRelation: "admin_current_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_host_id_fkey"
            columns: ["host_id"]
            referencedRelation: "admin_past_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_host_id_fkey"
            columns: ["host_id"]
            referencedRelation: "admin_trial_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_host_id_fkey"
            columns: ["host_id"]
            referencedRelation: "curriculum_with_progress_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "events_host_id_fkey"
            columns: ["host_id"]
            referencedRelation: "lesson_plan_with_creator_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "events_host_id_fkey"
            columns: ["host_id"]
            referencedRelation: "lesson_plans_with_creator_and_students_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "events_host_id_fkey"
            columns: ["host_id"]
            referencedRelation: "teacher_me_view"
            referencedColumns: ["id"]
          }
        ]
      }
      assignments_with_details_view: {
        Row: {
          assigned_on: string | null
          assignment_content: string | null
          assignment_id: string | null
          assignment_status:
            | Database["public"]["Enums"]["assignment_status"]
            | null
          assignment_title: string | null
          due_date: string | null
          lesson_plan_id: string | null
          lesson_plan_subject_name: string | null
          lesson_plan_title: string | null
          students: Json | null
          teacher_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_lesson_plans_teacher_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "teacher_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_lesson_plans_teacher_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "admin_current_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_lesson_plans_teacher_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "admin_past_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_lesson_plans_teacher_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "admin_trial_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_lesson_plans_teacher_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "curriculum_with_progress_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "user_lesson_plans_teacher_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "lesson_plan_with_creator_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "user_lesson_plans_teacher_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "lesson_plans_with_creator_and_students_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "user_lesson_plans_teacher_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "teacher_me_view"
            referencedColumns: ["id"]
          }
        ]
      }
      attending_events_view: {
        Row: {
          attendees: string[] | null
          datetime: string | null
          description: string | null
          host_id: string | null
          id: string | null
          image_path: string | null
          length_in_min: number | null
          location: string | null
          metadata: Json | null
          name: string | null
          type: Database["public"]["Enums"]["event"] | null
          url: string | null
        }
        Insert: {
          attendees?: string[] | null
          datetime?: string | null
          description?: string | null
          host_id?: string | null
          id?: string | null
          image_path?: string | null
          length_in_min?: number | null
          location?: string | null
          metadata?: Json | null
          name?: string | null
          type?: Database["public"]["Enums"]["event"] | null
          url?: string | null
        }
        Update: {
          attendees?: string[] | null
          datetime?: string | null
          description?: string | null
          host_id?: string | null
          id?: string | null
          image_path?: string | null
          length_in_min?: number | null
          location?: string | null
          metadata?: Json | null
          name?: string | null
          type?: Database["public"]["Enums"]["event"] | null
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "events_host_id_fkey"
            columns: ["host_id"]
            referencedRelation: "teacher_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_host_id_fkey"
            columns: ["host_id"]
            referencedRelation: "admin_current_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_host_id_fkey"
            columns: ["host_id"]
            referencedRelation: "admin_past_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_host_id_fkey"
            columns: ["host_id"]
            referencedRelation: "admin_trial_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_host_id_fkey"
            columns: ["host_id"]
            referencedRelation: "curriculum_with_progress_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "events_host_id_fkey"
            columns: ["host_id"]
            referencedRelation: "lesson_plan_with_creator_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "events_host_id_fkey"
            columns: ["host_id"]
            referencedRelation: "lesson_plans_with_creator_and_students_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "events_host_id_fkey"
            columns: ["host_id"]
            referencedRelation: "teacher_me_view"
            referencedColumns: ["id"]
          }
        ]
      }
      curriculum_lesson_with_user_lesson_view: {
        Row: {
          curriculum_lesson_id: string | null
          curriculum_name: string | null
          lesson_description: string | null
          lesson_image_path: string | null
          lesson_name: string | null
          lesson_plan: Json | null
          level_id: string | null
          level_name: Database["public"]["Enums"]["level"] | null
          student_ids: Json[] | null
          subject_id: string | null
          subject_name: string | null
          topic_id: string | null
          topic_name: string | null
          user_curriculum_id: string | null
        }
        Relationships: []
      }
      curriculum_lessons_with_progress_view: {
        Row: {
          completed_lessons: number | null
          curriculum_id: string | null
          curriculum_lesson_id: string | null
          curriculum_level_id: string | null
          curriculum_name: string | null
          curriculum_subject_id: string | null
          curriculum_topic_id: string | null
          lesson_description: string | null
          lesson_image_path: string | null
          lesson_name: string | null
          lesson_number: number | null
          lesson_type: Database["public"]["Enums"]["module_type"] | null
          level_name: Database["public"]["Enums"]["level"] | null
          progress_percentage: number | null
          subject_name: string | null
          topic_description: string | null
          topic_image_path: string | null
          topic_name: string | null
          total_lessons: number | null
          user_curriculum_id: string | null
        }
        Relationships: []
      }
      curriculum_levels_with_progress_view: {
        Row: {
          completed_lessons: number | null
          curriculum_id: string | null
          curriculum_level_id: string | null
          curriculum_name: string | null
          curriculum_subject_id: string | null
          level_description: string | null
          level_image_path: string | null
          level_name: Database["public"]["Enums"]["level"] | null
          level_number: number | null
          progress_percentage: number | null
          subject_description: string | null
          subject_image_path: string | null
          subject_name: string | null
          total_lessons: number | null
          user_curriculum_id: string | null
        }
        Relationships: []
      }
      curriculum_subjects_with_progress_view: {
        Row: {
          completed_lessons: number | null
          curriculum_description: string | null
          curriculum_id: string | null
          curriculum_image_path: string | null
          curriculum_name: string | null
          curriculum_subject_id: string | null
          progress_percentage: number | null
          subject_description: string | null
          subject_image_path: string | null
          subject_name: string | null
          subject_type: Database["public"]["Enums"]["module_type"] | null
          total_lessons: number | null
          user_curriculum_id: string | null
        }
        Relationships: []
      }
      curriculum_topics_with_progress_view: {
        Row: {
          completed_lessons: number | null
          curriculum_id: string | null
          curriculum_level_id: string | null
          curriculum_name: string | null
          curriculum_subject_id: string | null
          curriculum_topic_id: string | null
          level_description: string | null
          level_image_path: string | null
          level_name: Database["public"]["Enums"]["level"] | null
          progress_percentage: number | null
          subject_name: string | null
          topic_description: string | null
          topic_image_path: string | null
          topic_name: string | null
          topic_type: Database["public"]["Enums"]["module_type"] | null
          total_lessons: number | null
          user_curriculum_id: string | null
        }
        Relationships: []
      }
      curriculum_with_progress_view: {
        Row: {
          completed_lessons: number | null
          creator_avatar_url: string | null
          creator_first_name: string | null
          creator_id: string | null
          creator_last_name: string | null
          curriculum_description: string | null
          curriculum_id: string | null
          curriculum_image_path: string | null
          curriculum_name: string | null
          curriculum_tags: string[] | null
          progress_percentage: number | null
          students: Json | null
          total_lessons: number | null
          user_curriculum_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "teacher_profiles_id_fkey"
            columns: ["creator_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teacher_profiles_id_fkey"
            columns: ["creator_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      hosted_events_view: {
        Row: {
          attendees: string[] | null
          datetime: string | null
          description: string | null
          host_id: string | null
          id: string | null
          image_path: string | null
          length_in_min: number | null
          location: string | null
          metadata: Json | null
          name: string | null
          type: Database["public"]["Enums"]["event"] | null
          url: string | null
        }
        Insert: {
          attendees?: string[] | null
          datetime?: string | null
          description?: string | null
          host_id?: string | null
          id?: string | null
          image_path?: string | null
          length_in_min?: number | null
          location?: string | null
          metadata?: Json | null
          name?: string | null
          type?: Database["public"]["Enums"]["event"] | null
          url?: string | null
        }
        Update: {
          attendees?: string[] | null
          datetime?: string | null
          description?: string | null
          host_id?: string | null
          id?: string | null
          image_path?: string | null
          length_in_min?: number | null
          location?: string | null
          metadata?: Json | null
          name?: string | null
          type?: Database["public"]["Enums"]["event"] | null
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "events_host_id_fkey"
            columns: ["host_id"]
            referencedRelation: "teacher_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_host_id_fkey"
            columns: ["host_id"]
            referencedRelation: "admin_current_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_host_id_fkey"
            columns: ["host_id"]
            referencedRelation: "admin_past_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_host_id_fkey"
            columns: ["host_id"]
            referencedRelation: "admin_trial_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_host_id_fkey"
            columns: ["host_id"]
            referencedRelation: "curriculum_with_progress_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "events_host_id_fkey"
            columns: ["host_id"]
            referencedRelation: "lesson_plan_with_creator_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "events_host_id_fkey"
            columns: ["host_id"]
            referencedRelation: "lesson_plans_with_creator_and_students_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "events_host_id_fkey"
            columns: ["host_id"]
            referencedRelation: "teacher_me_view"
            referencedColumns: ["id"]
          }
        ]
      }
      lesson_plan_templates_with_students_view: {
        Row: {
          difficulty: Database["public"]["Enums"]["difficulty"] | null
          format: Database["public"]["Enums"]["format"] | null
          learning_styles:
            | Database["public"]["Enums"]["learning_style"][]
            | null
          length_in_min: number | null
          level: Json | null
          materials: Database["public"]["Enums"]["material"][] | null
          objectives: Database["public"]["Enums"]["objective"][] | null
          pace: Database["public"]["Enums"]["pace"] | null
          philosophy: Database["public"]["Enums"]["philosophy"] | null
          special_considerations: string | null
          standards: Database["public"]["Enums"]["standard"][] | null
          students: Json | null
          subject: Json | null
          teaching_strategy:
            | Database["public"]["Enums"]["teaching_strategy"]
            | null
          title: string | null
          topic: Json | null
        }
        Relationships: []
      }
      lesson_plan_with_creator_view: {
        Row: {
          content: string | null
          creator_avatar_url: string | null
          creator_first_name: string | null
          creator_id: string | null
          creator_last_name: string | null
          id: string | null
          image_path: string | null
          level_name: Database["public"]["Enums"]["level"] | null
          subject_name: string | null
          tags: string[] | null
          title: string | null
          topic_name: string | null
        }
        Relationships: [
          {
            foreignKeyName: "teacher_profiles_id_fkey"
            columns: ["creator_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teacher_profiles_id_fkey"
            columns: ["creator_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      lesson_plans_with_creator_and_students_view: {
        Row: {
          completion_date: string | null
          content: string | null
          creator_avatar_url: string | null
          creator_first_name: string | null
          creator_id: string | null
          creator_last_name: string | null
          creator_type: Database["public"]["Enums"]["profile_type"] | null
          id: string | null
          image_path: string | null
          is_public: boolean | null
          length_in_min: number | null
          level: string | null
          level_name: Database["public"]["Enums"]["level"] | null
          scheduled_date: string | null
          students: string[] | null
          students_with_details: Json | null
          subject: string | null
          subject_name: string | null
          tags: string[] | null
          title: string | null
          topic: string | null
          topic_name: string | null
          user_lesson_plan_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lesson_plans_level_fkey"
            columns: ["level"]
            referencedRelation: "levels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lesson_plans_level_fkey"
            columns: ["level"]
            referencedRelation: "curriculum_lesson_with_user_lesson_view"
            referencedColumns: ["level_id"]
          },
          {
            foreignKeyName: "lesson_plans_level_fkey"
            columns: ["level"]
            referencedRelation: "subjects_levels_topics"
            referencedColumns: ["level_id"]
          },
          {
            foreignKeyName: "lesson_plans_subject_fkey"
            columns: ["subject"]
            referencedRelation: "subjects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lesson_plans_subject_fkey"
            columns: ["subject"]
            referencedRelation: "curriculum_lesson_with_user_lesson_view"
            referencedColumns: ["subject_id"]
          },
          {
            foreignKeyName: "lesson_plans_subject_fkey"
            columns: ["subject"]
            referencedRelation: "subjects_levels_topics"
            referencedColumns: ["subject_id"]
          },
          {
            foreignKeyName: "lesson_plans_topic_fkey"
            columns: ["topic"]
            referencedRelation: "topics"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lesson_plans_topic_fkey"
            columns: ["topic"]
            referencedRelation: "curriculum_lesson_with_user_lesson_view"
            referencedColumns: ["topic_id"]
          },
          {
            foreignKeyName: "lesson_plans_topic_fkey"
            columns: ["topic"]
            referencedRelation: "subjects_levels_topics"
            referencedColumns: ["topic_id"]
          },
          {
            foreignKeyName: "teacher_profiles_id_fkey"
            columns: ["creator_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teacher_profiles_id_fkey"
            columns: ["creator_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      lesson_plans_without_assignments_view: {
        Row: {
          lesson_plan_content: string | null
          lesson_plan_level_name: Database["public"]["Enums"]["level"] | null
          lesson_plan_name: string | null
          user_lesson_plan_id: string | null
        }
        Relationships: []
      }
      lesson_timeline_view: {
        Row: {
          completion_date: string | null
          image_path: string | null
          lesson_id: string | null
          name: string | null
          students: Json[] | null
          teacher_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_lesson_plans_lesson_plan_id_fkey"
            columns: ["lesson_id"]
            referencedRelation: "lesson_plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_lesson_plans_lesson_plan_id_fkey"
            columns: ["lesson_id"]
            referencedRelation: "assignments_with_details_view"
            referencedColumns: ["lesson_plan_id"]
          },
          {
            foreignKeyName: "user_lesson_plans_lesson_plan_id_fkey"
            columns: ["lesson_id"]
            referencedRelation: "lesson_plan_with_creator_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_lesson_plans_lesson_plan_id_fkey"
            columns: ["lesson_id"]
            referencedRelation: "lesson_plans_with_creator_and_students_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_lesson_plans_lesson_plan_id_fkey"
            columns: ["lesson_id"]
            referencedRelation: "recently_completed_lesson_plans_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_lesson_plans_lesson_plan_id_fkey"
            columns: ["lesson_id"]
            referencedRelation: "upcoming_lesson_plans_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_lesson_plans_teacher_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "teacher_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_lesson_plans_teacher_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "admin_current_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_lesson_plans_teacher_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "admin_past_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_lesson_plans_teacher_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "admin_trial_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_lesson_plans_teacher_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "curriculum_with_progress_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "user_lesson_plans_teacher_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "lesson_plan_with_creator_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "user_lesson_plans_teacher_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "lesson_plans_with_creator_and_students_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "user_lesson_plans_teacher_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "teacher_me_view"
            referencedColumns: ["id"]
          }
        ]
      }
      next_lesson_per_subject_per_curriculum_view: {
        Row: {
          curriculum_id: string | null
          curriculum_lesson_id: string | null
          curriculum_level_id: string | null
          curriculum_name: string | null
          curriculum_subject_id: string | null
          curriculum_topic_id: string | null
          lesson_description: string | null
          lesson_image_path: string | null
          lesson_name: string | null
          lesson_number: number | null
          level_name: Database["public"]["Enums"]["level"] | null
          progress_status: Database["public"]["Enums"]["progress_status"] | null
          subject_name: string | null
          teacher_id: string | null
          topic_name: string | null
          user_curriculum_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "curriculum_levels_level_id_fkey"
            columns: ["curriculum_level_id"]
            referencedRelation: "levels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "curriculum_levels_level_id_fkey"
            columns: ["curriculum_level_id"]
            referencedRelation: "curriculum_lesson_with_user_lesson_view"
            referencedColumns: ["level_id"]
          },
          {
            foreignKeyName: "curriculum_levels_level_id_fkey"
            columns: ["curriculum_level_id"]
            referencedRelation: "subjects_levels_topics"
            referencedColumns: ["level_id"]
          },
          {
            foreignKeyName: "curriculum_subjects_subject_id_fkey"
            columns: ["curriculum_subject_id"]
            referencedRelation: "subjects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "curriculum_subjects_subject_id_fkey"
            columns: ["curriculum_subject_id"]
            referencedRelation: "curriculum_lesson_with_user_lesson_view"
            referencedColumns: ["subject_id"]
          },
          {
            foreignKeyName: "curriculum_subjects_subject_id_fkey"
            columns: ["curriculum_subject_id"]
            referencedRelation: "subjects_levels_topics"
            referencedColumns: ["subject_id"]
          },
          {
            foreignKeyName: "curriculum_topics_topic_id_fkey"
            columns: ["curriculum_topic_id"]
            referencedRelation: "topics"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "curriculum_topics_topic_id_fkey"
            columns: ["curriculum_topic_id"]
            referencedRelation: "curriculum_lesson_with_user_lesson_view"
            referencedColumns: ["topic_id"]
          },
          {
            foreignKeyName: "curriculum_topics_topic_id_fkey"
            columns: ["curriculum_topic_id"]
            referencedRelation: "subjects_levels_topics"
            referencedColumns: ["topic_id"]
          },
          {
            foreignKeyName: "user_curriculums_curriculum_id_fkey"
            columns: ["curriculum_id"]
            referencedRelation: "curriculums"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_curriculums_curriculum_id_fkey"
            columns: ["curriculum_id"]
            referencedRelation: "curriculum_lessons_with_progress_view"
            referencedColumns: ["curriculum_id"]
          },
          {
            foreignKeyName: "user_curriculums_curriculum_id_fkey"
            columns: ["curriculum_id"]
            referencedRelation: "curriculum_levels_with_progress_view"
            referencedColumns: ["curriculum_id"]
          },
          {
            foreignKeyName: "user_curriculums_curriculum_id_fkey"
            columns: ["curriculum_id"]
            referencedRelation: "curriculum_subjects_with_progress_view"
            referencedColumns: ["curriculum_id"]
          },
          {
            foreignKeyName: "user_curriculums_curriculum_id_fkey"
            columns: ["curriculum_id"]
            referencedRelation: "curriculum_topics_with_progress_view"
            referencedColumns: ["curriculum_id"]
          },
          {
            foreignKeyName: "user_curriculums_curriculum_id_fkey"
            columns: ["curriculum_id"]
            referencedRelation: "curriculum_with_progress_view"
            referencedColumns: ["curriculum_id"]
          },
          {
            foreignKeyName: "user_curriculums_curriculum_id_fkey"
            columns: ["curriculum_id"]
            referencedRelation: "shareable_curriculum_lessons_view"
            referencedColumns: ["curriculum_id"]
          },
          {
            foreignKeyName: "user_curriculums_curriculum_id_fkey"
            columns: ["curriculum_id"]
            referencedRelation: "shareable_curriculum_levels_view"
            referencedColumns: ["curriculum_id"]
          },
          {
            foreignKeyName: "user_curriculums_curriculum_id_fkey"
            columns: ["curriculum_id"]
            referencedRelation: "shareable_curriculum_subjects_view"
            referencedColumns: ["curriculum_id"]
          },
          {
            foreignKeyName: "user_curriculums_curriculum_id_fkey"
            columns: ["curriculum_id"]
            referencedRelation: "shareable_curriculum_topics_view"
            referencedColumns: ["curriculum_id"]
          },
          {
            foreignKeyName: "user_curriculums_curriculum_id_fkey"
            columns: ["curriculum_id"]
            referencedRelation: "user_curriculum_details_view"
            referencedColumns: ["curriculum_id"]
          },
          {
            foreignKeyName: "user_curriculums_user_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "teacher_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_curriculums_user_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "admin_current_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_curriculums_user_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "admin_past_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_curriculums_user_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "admin_trial_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_curriculums_user_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "curriculum_with_progress_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "user_curriculums_user_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "lesson_plan_with_creator_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "user_curriculums_user_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "lesson_plans_with_creator_and_students_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "user_curriculums_user_id_fkey"
            columns: ["teacher_id"]
            referencedRelation: "teacher_me_view"
            referencedColumns: ["id"]
          }
        ]
      }
      public_teacher_profile_view: {
        Row: {
          avatar_url: string | null
          curriculums: Json | null
          first_name: string | null
          id: string | null
          last_name: string | null
          lessons: Json | null
          status: Database["public"]["Enums"]["profile_status"] | null
          type: Database["public"]["Enums"]["profile_type"] | null
        }
      }
      recently_completed_lesson_plans_view: {
        Row: {
          completion_date: string | null
          id: string | null
          image_path: string | null
          level: Database["public"]["Enums"]["level"] | null
          students: Json | null
          subject: string | null
          title: string | null
          topic: string | null
        }
        Relationships: []
      }
      shareable_curriculum_lessons_view: {
        Row: {
          curriculum_id: string | null
          curriculum_name: string | null
          id: string | null
          lesson_description: string | null
          lesson_image_path: string | null
          lesson_name: string | null
          lesson_number: number | null
          lesson_plan_ids: string[] | null
          lesson_type: Database["public"]["Enums"]["module_type"] | null
          level_description: string | null
          level_id: string | null
          level_name: Database["public"]["Enums"]["level"] | null
          subject_id: string | null
          subject_name: string | null
          topic_description: string | null
          topic_id: string | null
          topic_image_path: string | null
          topic_name: string | null
        }
        Relationships: []
      }
      shareable_curriculum_levels_view: {
        Row: {
          curriculum_id: string | null
          curriculum_name: string | null
          id: string | null
          level_description: string | null
          level_image_path: string | null
          level_name: Database["public"]["Enums"]["level"] | null
          subject_description: string | null
          subject_id: string | null
          subject_image_path: string | null
          subject_name: string | null
        }
        Relationships: []
      }
      shareable_curriculum_subjects_view: {
        Row: {
          curriculum_description: string | null
          curriculum_id: string | null
          curriculum_image_path: string | null
          curriculum_name: string | null
          id: string | null
          subject_description: string | null
          subject_image_path: string | null
          subject_name: string | null
          type: Database["public"]["Enums"]["module_type"] | null
        }
        Relationships: []
      }
      shareable_curriculum_topics_view: {
        Row: {
          curriculum_id: string | null
          curriculum_name: string | null
          id: string | null
          level_description: string | null
          level_id: string | null
          level_image_path: string | null
          level_name: Database["public"]["Enums"]["level"] | null
          subject_id: string | null
          subject_name: string | null
          topic_description: string | null
          topic_image_path: string | null
          topic_name: string | null
          topic_type: Database["public"]["Enums"]["module_type"] | null
        }
        Relationships: []
      }
      subjects_levels_topics: {
        Row: {
          level_id: string | null
          level_name: Database["public"]["Enums"]["level"] | null
          subject_id: string | null
          subject_name: string | null
          topic_id: string | null
          topic_name: string | null
        }
        Relationships: []
      }
      teacher_me_view: {
        Row: {
          avatar_url: string | null
          billing_portal_session_url: string | null
          first_name: string | null
          id: string | null
          last_name: string | null
          lesson_detail_level:
            | Database["public"]["Enums"]["lesson_detail_level"]
            | null
          lesson_structure:
            | Database["public"]["Enums"]["lesson_structure"]
            | null
          role: Database["public"]["Enums"]["user_role"] | null
          status: Database["public"]["Enums"]["profile_status"] | null
          stripe_customer_id: string | null
          subscription_cancel_at_period_end: boolean | null
          subscription_current_period_end: string | null
          subscription_id: string | null
          subscription_status:
            | Database["public"]["Enums"]["subscription_status"]
            | null
          subscription_trial_end: string | null
          teaching_strategies:
            | Database["public"]["Enums"]["teaching_strategy"][]
            | null
          teaching_tools: Database["public"]["Enums"]["teaching_tool"][] | null
          type: Database["public"]["Enums"]["profile_type"] | null
        }
        Relationships: [
          {
            foreignKeyName: "teacher_profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teacher_profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      teacher_students_profiles_view: {
        Row: {
          accomplishments: Json | null
          assessment_results: Json | null
          avatar_url: string | null
          birthday: string | null
          first_name: string | null
          goals: Database["public"]["Enums"]["student_goals"][] | null
          id: string | null
          interests: string[] | null
          knowledge: Json | null
          last_name: string | null
          learning_environment_preferences:
            | Database["public"]["Enums"]["environment_preferences"][]
            | null
          learning_resources_preferences:
            | Database["public"]["Enums"]["resource_preferences"][]
            | null
          learning_styles:
            | Database["public"]["Enums"]["learning_style"][]
            | null
          special_needs:
            | Database["public"]["Enums"]["learning_disabilities"][]
            | null
          strengths: string[] | null
          subject_preferences: string[] | null
          weaknesses: string[] | null
        }
        Relationships: []
      }
      unread_notifications_count_view: {
        Row: {
          unread_notifications_count: number | null
        }
        Relationships: []
      }
      unread_notifications_view: {
        Row: {
          body: string | null
          id: string | null
          lesson_plan_id: string | null
          metadata: Json | null
          read_at: string | null
          received_at: string | null
          recipient_id: string | null
          sender_id: string | null
          sent_at: string | null
          status: Database["public"]["Enums"]["notification_status"] | null
          title: string | null
          type: Database["public"]["Enums"]["notification_type"] | null
        }
        Insert: {
          body?: string | null
          id?: string | null
          lesson_plan_id?: string | null
          metadata?: Json | null
          read_at?: string | null
          received_at?: string | null
          recipient_id?: string | null
          sender_id?: string | null
          sent_at?: string | null
          status?: Database["public"]["Enums"]["notification_status"] | null
          title?: string | null
          type?: Database["public"]["Enums"]["notification_type"] | null
        }
        Update: {
          body?: string | null
          id?: string | null
          lesson_plan_id?: string | null
          metadata?: Json | null
          read_at?: string | null
          received_at?: string | null
          recipient_id?: string | null
          sender_id?: string | null
          sent_at?: string | null
          status?: Database["public"]["Enums"]["notification_status"] | null
          title?: string | null
          type?: Database["public"]["Enums"]["notification_type"] | null
        }
        Relationships: [
          {
            foreignKeyName: "notifications_lesson_plan_id_fkey"
            columns: ["lesson_plan_id"]
            referencedRelation: "lesson_plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_lesson_plan_id_fkey"
            columns: ["lesson_plan_id"]
            referencedRelation: "assignments_with_details_view"
            referencedColumns: ["lesson_plan_id"]
          },
          {
            foreignKeyName: "notifications_lesson_plan_id_fkey"
            columns: ["lesson_plan_id"]
            referencedRelation: "lesson_plan_with_creator_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_lesson_plan_id_fkey"
            columns: ["lesson_plan_id"]
            referencedRelation: "lesson_plans_with_creator_and_students_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_lesson_plan_id_fkey"
            columns: ["lesson_plan_id"]
            referencedRelation: "recently_completed_lesson_plans_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_lesson_plan_id_fkey"
            columns: ["lesson_plan_id"]
            referencedRelation: "upcoming_lesson_plans_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_recipient_id_fkey"
            columns: ["recipient_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_recipient_id_fkey"
            columns: ["recipient_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_sender_id_fkey"
            columns: ["sender_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_sender_id_fkey"
            columns: ["sender_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      upcoming_lesson_plans_view: {
        Row: {
          id: string | null
          image_path: string | null
          length_in_min: number | null
          level: Database["public"]["Enums"]["level"] | null
          scheduled_date: string | null
          students: Json | null
          subject: string | null
          tags: string[] | null
          title: string | null
          topic: string | null
        }
        Relationships: []
      }
      user_curriculum_details_view: {
        Row: {
          created_at: string | null
          curriculum_id: string | null
          curriculum_name: string | null
          updated_at: string | null
          user_curriculum_id: string | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_curriculums_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "teacher_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_curriculums_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "admin_current_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_curriculums_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "admin_past_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_curriculums_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "admin_trial_users_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_curriculums_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "curriculum_with_progress_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "user_curriculums_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "lesson_plan_with_creator_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "user_curriculums_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "lesson_plans_with_creator_and_students_view"
            referencedColumns: ["creator_id"]
          },
          {
            foreignKeyName: "user_curriculums_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "teacher_me_view"
            referencedColumns: ["id"]
          }
        ]
      }
      user_notifications_view: {
        Row: {
          action_text: string | null
          action_url: string | null
          body: string | null
          id: string | null
          lesson_plan_id: string | null
          metadata: Json | null
          read_at: string | null
          received_at: string | null
          recipient_id: string | null
          sender_avatar_url: string | null
          sender_first_name: string | null
          sender_id: string | null
          sender_last_name: string | null
          sent_at: string | null
          status: Database["public"]["Enums"]["notification_status"] | null
          title: string | null
          type: Database["public"]["Enums"]["notification_type"] | null
        }
        Relationships: [
          {
            foreignKeyName: "notifications_lesson_plan_id_fkey"
            columns: ["lesson_plan_id"]
            referencedRelation: "lesson_plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_lesson_plan_id_fkey"
            columns: ["lesson_plan_id"]
            referencedRelation: "assignments_with_details_view"
            referencedColumns: ["lesson_plan_id"]
          },
          {
            foreignKeyName: "notifications_lesson_plan_id_fkey"
            columns: ["lesson_plan_id"]
            referencedRelation: "lesson_plan_with_creator_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_lesson_plan_id_fkey"
            columns: ["lesson_plan_id"]
            referencedRelation: "lesson_plans_with_creator_and_students_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_lesson_plan_id_fkey"
            columns: ["lesson_plan_id"]
            referencedRelation: "recently_completed_lesson_plans_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_lesson_plan_id_fkey"
            columns: ["lesson_plan_id"]
            referencedRelation: "upcoming_lesson_plans_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_recipient_id_fkey"
            columns: ["recipient_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_recipient_id_fkey"
            columns: ["recipient_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_sender_id_fkey"
            columns: ["sender_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_sender_id_fkey"
            columns: ["sender_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      user_subscriptions_view: {
        Row: {
          product_name: string | null
          subscription_id: string | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customers_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "customers_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          email: string | null
          id: string | null
        }
        Insert: {
          email?: string | null
          id?: string | null
        }
        Update: {
          email?: string | null
          id?: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      add_item_to_array: {
        Args: {
          p_table_name: string
          p_column_name: string
          p_id_column: string
          p_id_value: string
          p_item_value: string
        }
        Returns: undefined
      }
      create_complete_curriculum: {
        Args: {
          curriculum_name: string
          subject_id: string
          subject_type: Database["public"]["Enums"]["module_type"]
          levels_topics_lessons_data: Json
        }
        Returns: undefined
      }
      create_curriculum_lesson: {
        Args: {
          curriculum_topic_id: string
          name: string
          description: string
          image_path: string
          type: Database["public"]["Enums"]["module_type"]
        }
        Returns: string
      }
      create_curriculum_level: {
        Args: {
          curriculum_subject_id: string
          level_id: string
        }
        Returns: {
          new_curriculum_level_id: string
          ret_level_id: string
          ret_subject_id: string
        }[]
      }
      create_curriculum_subject: {
        Args: {
          curriculum_name: string
          subject_id: string
          type: Database["public"]["Enums"]["module_type"]
        }
        Returns: string
      }
      create_curriculum_topic: {
        Args: {
          curriculum_level_id: string
          level_id: string
          subject_id: string
          name: string
          description: string
          image_path: string
          type: Database["public"]["Enums"]["module_type"]
        }
        Returns: string
      }
      create_topic: {
        Args: {
          topic_name: string
          topic_description: string
          topic_image_path: string
          level_name: Database["public"]["Enums"]["level"]
          subject_code: string
        }
        Returns: undefined
      }
      get_assignments_by_lesson_plan_and_teacher: {
        Args: {
          lesson_plan_uuid: string
          teacher_uuid: string
        }
        Returns: {
          id: string
          title: string
          content: string
          assigned_on: string
          due_date: string
          status: Database["public"]["Enums"]["assignment_status"]
        }[]
      }
      get_comments_and_reactions: {
        Args: {
          p_commentable_id: string
        }
        Returns: {
          comment_id: string
          author_id: string
          parent_comment_id: string
          commentable_id: string
          commentable_type: Database["public"]["Enums"]["commentable_type"]
          mentioned_user_ids: string[]
          comment: string
          created_at: string
          updated_at: string
          reaction_id: string
          reaction_type: string
          reaction_label: string
          reaction_icon_url: string
          reaction_metadata: Json
          reactor_id: string
        }[]
      }
      get_events_by_date_range: {
        Args: {
          start_date: string
          end_date: string
        }
        Returns: {
          date: string
          events: Json
        }[]
      }
      get_events_for_month: {
        Args: {
          input_year: number
          input_month: number
        }
        Returns: {
          id: string
          name: string
          type: Database["public"]["Enums"]["event"]
          datetime: string
          day_of_month: number
          url: string
        }[]
      }
      get_upcoming_events: {
        Args: {
          input_date: string
        }
        Returns: {
          id: string
          name: string
          description: string
          image_path: string
          url: string
          type: Database["public"]["Enums"]["event"]
          datetime: string
          location: string
          length_in_min: number
          attendees: Json
        }[]
      }
      is_role: {
        Args: {
          role: Database["public"]["Enums"]["user_role"]
        }
        Returns: boolean
      }
      mark_as_read: {
        Args: {
          notification_id: string
          user_id: string
        }
        Returns: undefined
      }
      recent_unsaved_lessons: {
        Args: {
          user_id: string
        }
        Returns: {
          id: string
          creator_id: string
          title: string
          subject: string
          level: string
          topic: string
          content: string
          tags: string[]
          image_path: string
          length_in_min: number
          is_public: boolean
          created_at: string
          updated_at: string
        }[]
      }
      similar_lessons: {
        Args: {
          lesson_id: string
          user_id: string
        }
        Returns: {
          id: string
          creator_id: string
          first_name: string
          last_name: string
          avatar_url: string
          title: string
          subject: string
          level: string
          topic: string
          content: string
          tags: string[]
          image_path: string
          length_in_min: number
          is_public: boolean
          created_at: string
          updated_at: string
        }[]
      }
    }
    Enums: {
      animal:
        | "Bears"
        | "Bees"
        | "Birds"
        | "Butterflies"
        | "Cats"
        | "Caterpillars"
        | "Deer"
        | "Dogs"
        | "Dolphins"
        | "Elephants"
        | "Foxes"
        | "Frogs"
        | "Giraffes"
        | "Horses"
        | "Lions"
        | "Monkies"
        | "Pandas"
        | "Rabbits"
        | "Tigers"
        | "Turtles"
        | "Wolves"
      assessment_method: "Observation" | "Performance" | "Product" | "Other"
      assessment_tool: "Quiz" | "Test" | "Exam" | "Rubric" | "Other"
      assessment_type: "Formative" | "Summative" | "Other"
      assignment_status: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "CANCELED"
      commentable_type:
        | "LESSON_PLAN"
        | "LEARNING_PATH"
        | "LESSON_TEMPLATE"
        | "OTHER"
      curriculum_status: "DRAFT" | "PUBLISHED" | "ARCHIVED"
      curriculum_type:
        | "RECOMMENDED"
        | "POPULAR"
        | "SUPPLEMENTARY"
        | "COMMUNITY"
        | "CUSTOM"
      difficulty: "EASY" | "MODERATE" | "CHALLENGING"
      environment_preferences:
        | "Quiet_and_individual"
        | "Group_and_collaborative"
        | "Structured_and_guided"
        | "Flexible_and_self_directed"
        | "Indoor"
        | "Outdoor"
        | "Digital"
        | "Physical"
      event: "LESSON" | "ASSIGNMENT" | "COMMUNITY" | "OTHER"
      format: "Whole Group" | "Small Group" | "Individual"
      learning_disabilities:
        | "Dyslexia"
        | "Dyscalculia"
        | "Dysgraphia"
        | "Attention_Deficit_Hyperactivity_Disorder"
        | "Auditory_Processing_Disorder"
        | "Nonverbal_Learning_Disability"
        | "Autism"
      learning_style:
        | "Visual"
        | "Auditory"
        | "Kinesthetic"
        | "Verbal"
        | "Logical"
        | "Social"
      lesson_detail_level: "Basic" | "Intermediate" | "Detailed"
      lesson_structure:
        | "Objective_Introduction"
        | "Prior_Knowledge_Review"
        | "New_Material_Presentation"
        | "Guided_Practice"
        | "Independent_Practice"
        | "Discussion_or_Debate"
        | "Student_Presentations"
        | "Assessment"
        | "Summary_and_Review"
        | "Homework_Assignment"
        | "Other"
      level:
        | "Buds"
        | "Sprouts"
        | "Oaks"
        | "Pre-K"
        | "K"
        | "1"
        | "2"
        | "3"
        | "4"
        | "5"
        | "6"
        | "7"
        | "8"
        | "9"
        | "10"
        | "11"
        | "12"
      material:
        | "Textbook"
        | "Workbook"
        | "Worksheet"
        | "Manipulatives"
        | "Technology"
        | "Other"
      module_type: "CORE" | "ELECTIVE"
      notification_status:
        | "PENDING"
        | "SENT"
        | "FAILED"
        | "RECEIVED"
        | "READ"
        | "ARCHIVED"
        | "DELETED"
      notification_type:
        | "INFO"
        | "WARNING"
        | "ERROR"
        | "SUCCESS"
        | "BILLING"
        | "ACCOUNT"
        | "COMMUNITY"
        | "CHAT"
        | "LESSON"
        | "EVENT"
        | "OTHER"
      objective:
        | "Knowledge"
        | "Comprehension"
        | "Application"
        | "Analysis"
        | "Synthesis"
        | "Evaluation"
      pace: "SLOW" | "MEDIUM" | "FAST"
      payment_type:
        | "acss_debit"
        | "affirm"
        | "afterpay_clearpay"
        | "alipay"
        | "au_becs_debit"
        | "bacs_debit"
        | "bancontact"
        | "blik"
        | "boleto"
        | "card"
        | "card_present"
        | "cashapp"
        | "customer_balance"
        | "eps"
        | "fpx"
        | "giropay"
        | "grabpay"
        | "ideal"
        | "interac_present"
        | "klarna"
        | "konbini"
        | "link"
        | "oxxo"
        | "p24"
        | "paynow"
        | "pix"
        | "promptpay"
        | "sepa_debit"
        | "sofort"
        | "us_bank_account"
        | "wechat_pay"
      philosophy:
        | "Eclectic/Relaxed"
        | "Traditional"
        | "Montessori"
        | "Unschooling"
        | "Unit Studies"
        | "Project-Based"
        | "Waldorf"
        | "Reggio Emilia"
        | "Classical"
        | "Charlotte Mason"
        | "Other"
      pricing_plan_interval: "day" | "week" | "month" | "year"
      pricing_type: "one_time" | "recurring"
      profile_status: "ONLINE" | "OFFLINE" | "BUSY" | "AWAY" | "INVISIBLE"
      profile_type: "PARENT" | "COOP" | "TUTOR" | "SCHOOL" | "STUDENT"
      progress_status: "IN_PROGRESS" | "COMPLETED" | "SKIPPED" | "LOCKED"
      reflection_method: "Written" | "Verbal" | "Other"
      reflection_type: "Self" | "Peer" | "Teacher" | "Other"
      resource_preferences:
        | "Textbooks"
        | "Workbooks"
        | "Online_courses"
        | "Educational_videos"
        | "Interactive_games"
        | "Podcasts"
        | "Hands_on_activities"
        | "Tutoring_sessions"
        | "Group_discussions"
        | "Flashcards"
        | "Study_guides"
        | "Project_based_learning"
      standard: "Common Core" | "Next Generation Science Standards" | "Other"
      status: "created" | "scheduled" | "completed" | "archived"
      student_goals:
        | "Improve_grades"
        | "Increase_focus_and_concentration"
        | "Enhance_time_management_skills"
        | "Develop_strong_study_habits"
        | "Boost_problem_solving_skills"
        | "Strengthen_critical_thinking_skills"
        | "Improve_memory_and_recall"
        | "Enhance_writing_skills"
        | "Build_reading_comprehension"
        | "Improve_test-taking_strategies"
        | "Expand_vocabulary"
        | "Develop_public_speaking_skills"
        | "Increase_confidence_in_learning"
      subscription_status:
        | "trialing"
        | "active"
        | "canceled"
        | "incomplete"
        | "incomplete_expired"
        | "past_due"
        | "unpaid"
        | "paused"
      teaching_strategy:
        | "Direct Instruction"
        | "Cooperative Learning"
        | "Inquiry-Based Learning"
        | "Differentiated Instruction"
        | "Expeditionary Learning"
        | "Personalized Learning"
        | "Blended Learning"
        | "Project-Based Learning"
        | "Problem-Based Learning"
        | "Socratic Learning"
        | "Other"
      teaching_tool:
        | "Whiteboard"
        | "Slide_Presentation"
        | "Video_Aids"
        | "Physical_Manipulatives"
        | "Interactive_Software"
        | "Document_Camera"
        | "Audio_Resources"
        | "Art_Supplies"
        | "Reading_Materials"
        | "Science_Lab_Equipment"
        | "Math_Tools"
        | "Other"
      user_role: "ADMIN" | "TEACHER" | "GROUP_MANAGER" | "STUDENT" | "BANNISHED"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "buckets_owner_fkey"
            columns: ["owner"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "buckets_owner_fkey"
            columns: ["owner"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey"
            columns: ["bucket_id"]
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "objects_owner_fkey"
            columns: ["owner"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "objects_owner_fkey"
            columns: ["owner"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: unknown
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

