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
      }
    }
    Views: {
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
      }
      lesson_plan_with_students_view: {
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
      }
      lesson_plans_with_creator_and_students_view: {
        Row: {
          completion_date: string | null
          content: string | null
          creator_avatar_url: string | null
          creator_first_name: string | null
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
          subject: string | null
          subject_name: string | null
          tags: string[] | null
          title: string | null
          topic: string | null
          topic_name: string | null
        }
      }
      next_four_lessons_per_curriculum_vieww: {
        Row: {
          curriculum_id: string | null
          lesson_description: string | null
          lesson_id: string | null
          lesson_image_path: string | null
          lesson_name: string | null
          lesson_number: number | null
          progress_id: string | null
          progress_status: Database["public"]["Enums"]["progress_status"] | null
          teacher_id: string | null
        }
      }
      next_four_lessons_per_curriculum_viewwww: {
        Row: {
          curriculum_id: string | null
          lesson_description: string | null
          lesson_id: string | null
          lesson_image_path: string | null
          lesson_name: string | null
          lesson_number: number | null
          progress_id: string | null
          progress_status: Database["public"]["Enums"]["progress_status"] | null
          teacher_id: string | null
        }
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
      }
      unread_notifications_count_view: {
        Row: {
          unread_notifications_count: number | null
        }
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
      }
      user_subscriptions_view: {
        Row: {
          product_name: string | null
          subscription_id: string | null
          user_id: string | null
        }
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
          created_at: string | null
          id: string
          name: string
          owner: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id: string
          name: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
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
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
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
        Returns: string[]
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

