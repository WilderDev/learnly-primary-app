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
      customers: {
        Row: {
          created_at: string
          id: string
          stripe_customer_id: string
          subscriptions: Json
          updated_at: string
        }
        Insert: {
          created_at?: string
          id: string
          stripe_customer_id?: string
          subscriptions?: Json
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          stripe_customer_id?: string
          subscriptions?: Json
          updated_at?: string
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
          reflections: Json[] | null
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
          reflections?: Json[] | null
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
          reflections?: Json[] | null
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
          id: string
          image_url: string
          name: Database["public"]["Enums"]["level"]
          updated_at: string
        }
        Insert: {
          animal: Database["public"]["Enums"]["animal"]
          created_at?: string
          id?: string
          image_url: string
          name: Database["public"]["Enums"]["level"]
          updated_at?: string
        }
        Update: {
          animal?: Database["public"]["Enums"]["animal"]
          created_at?: string
          id?: string
          image_url?: string
          name?: Database["public"]["Enums"]["level"]
          updated_at?: string
        }
      }
      notifications: {
        Row: {
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
      payment_and_billing_details: {
        Row: {
          billing_address_line1: string
          billing_address_line2: string
          billing_city: string
          billing_country: string
          billing_email: string
          billing_name: string
          billing_phone: string
          billing_postal_code: string
          billing_state: string
          card_brand: string
          created_at: string
          default_method: boolean
          exp_month: string
          exp_year: string
          id: string
          last4: string
          metadata: Json
          payment_details: Json
          payment_method_type: Database["public"]["Enums"]["payment_type"]
          stripe_customer_id: string
          stripe_payment_method_id: string
          updated_at: string
        }
        Insert: {
          billing_address_line1?: string
          billing_address_line2?: string
          billing_city?: string
          billing_country?: string
          billing_email?: string
          billing_name?: string
          billing_phone?: string
          billing_postal_code?: string
          billing_state?: string
          card_brand?: string
          created_at?: string
          default_method?: boolean
          exp_month?: string
          exp_year?: string
          id: string
          last4?: string
          metadata?: Json
          payment_details?: Json
          payment_method_type?: Database["public"]["Enums"]["payment_type"]
          stripe_customer_id?: string
          stripe_payment_method_id?: string
          updated_at?: string
        }
        Update: {
          billing_address_line1?: string
          billing_address_line2?: string
          billing_city?: string
          billing_country?: string
          billing_email?: string
          billing_name?: string
          billing_phone?: string
          billing_postal_code?: string
          billing_state?: string
          card_brand?: string
          created_at?: string
          default_method?: boolean
          exp_month?: string
          exp_year?: string
          id?: string
          last4?: string
          metadata?: Json
          payment_details?: Json
          payment_method_type?: Database["public"]["Enums"]["payment_type"]
          stripe_customer_id?: string
          stripe_payment_method_id?: string
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
          image_url: string
          name: string
          updated_at: string
        }
        Insert: {
          code: string
          created_at?: string
          description: string
          id?: string
          image_url: string
          name: string
          updated_at?: string
        }
        Update: {
          code?: string
          created_at?: string
          description?: string
          id?: string
          image_url?: string
          name?: string
          updated_at?: string
        }
      }
      subscriptions: {
        Row: {
          cancel_at: string | null
          cancel_at_period_end: boolean
          canceled_at: string | null
          cancellation_reason: Json
          collection_method: string
          created: string
          created_at: string
          currency: string
          current_period_end: string
          current_period_start: string
          days_until_due: number
          default_payment_method_id: string
          description: string
          discount: Json
          ended_at: string | null
          id: string
          items: Json
          metadata: Json
          quantity: number
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
          cancellation_reason?: Json
          collection_method?: string
          created?: string
          created_at?: string
          currency?: string
          current_period_end?: string
          current_period_start?: string
          days_until_due?: number
          default_payment_method_id?: string
          description?: string
          discount?: Json
          ended_at?: string | null
          id: string
          items?: Json
          metadata?: Json
          quantity?: number
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
          cancellation_reason?: Json
          collection_method?: string
          created?: string
          created_at?: string
          currency?: string
          current_period_end?: string
          current_period_start?: string
          days_until_due?: number
          default_payment_method_id?: string
          description?: string
          discount?: Json
          ended_at?: string | null
          id?: string
          items?: Json
          metadata?: Json
          quantity?: number
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
          updated_at: string
        }
        Insert: {
          created_at?: string
          id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          updated_at?: string
        }
      }
      topics: {
        Row: {
          created_at: string
          description: string
          id: string
          image_url: string
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
          image_url: string
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
          image_url?: string
          level_id?: string | null
          name?: string
          subject_id?: string | null
          topic_number?: number
          updated_at?: string
        }
      }
      trials: {
        Row: {
          created_at: string
          end_date: string
          id: string
          start_date: string
          status: Database["public"]["Enums"]["trial_status"]
          teacher_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          end_date?: string
          id?: string
          start_date?: string
          status?: Database["public"]["Enums"]["trial_status"]
          teacher_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          end_date?: string
          id?: string
          start_date?: string
          status?: Database["public"]["Enums"]["trial_status"]
          teacher_id?: string
          updated_at?: string
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
          scheduled_date: string | null
          students: string[] | null
          subject: string | null
          tags: string[] | null
          title: string | null
          topic: string | null
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
      teacher_me_view: {
        Row: {
          avatar_url: string | null
          first_name: string | null
          id: string | null
          last_name: string | null
          role: Database["public"]["Enums"]["user_role"] | null
          status: Database["public"]["Enums"]["profile_status"] | null
          type: Database["public"]["Enums"]["profile_type"] | null
        }
        Insert: {
          avatar_url?: string | null
          first_name?: string | null
          id?: string | null
          last_name?: string | null
          role?: Database["public"]["Enums"]["user_role"] | null
          status?: Database["public"]["Enums"]["profile_status"] | null
          type?: Database["public"]["Enums"]["profile_type"] | null
        }
        Update: {
          avatar_url?: string | null
          first_name?: string | null
          id?: string | null
          last_name?: string | null
          role?: Database["public"]["Enums"]["user_role"] | null
          status?: Database["public"]["Enums"]["profile_status"] | null
          type?: Database["public"]["Enums"]["profile_type"] | null
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
      create_topic: {
        Args: {
          topic_name: string
          topic_description: string
          topic_image_url: string
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
      trial_status: "ACTIVE" | "CONVERTED" | "EXPIRED"
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

