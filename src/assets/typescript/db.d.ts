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
          billing_state_state: string
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
          billing_state_state?: string
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
          billing_state_state?: string
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
          recurring_trial_period_days: number
          recurring_usage_type: string
          stripe_product_id: string
          type: Database["public"]["Enums"]["pricing_type"]
          unit_amount: number
          unit_amount_decimal: string
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
          recurring_trial_period_days?: number
          recurring_usage_type?: string
          stripe_product_id?: string
          type?: Database["public"]["Enums"]["pricing_type"]
          unit_amount?: number
          unit_amount_decimal?: string
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
          recurring_trial_period_days?: number
          recurring_usage_type?: string
          stripe_product_id?: string
          type?: Database["public"]["Enums"]["pricing_type"]
          unit_amount?: number
          unit_amount_decimal?: string
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
      student_preferences: {
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
          created_at: string
          first_name: string
          id: string
          last_name: string
          role: Database["public"]["Enums"]["user_role"]
          status: Database["public"]["Enums"]["profile_status"]
          type: Database["public"]["Enums"]["profile_type"]
          updated_at: string
        }
        Insert: {
          avatar_url?: string
          created_at?: string
          first_name?: string
          id: string
          last_name?: string
          role?: Database["public"]["Enums"]["user_role"]
          status?: Database["public"]["Enums"]["profile_status"]
          type?: Database["public"]["Enums"]["profile_type"]
          updated_at?: string
        }
        Update: {
          avatar_url?: string
          created_at?: string
          first_name?: string
          id?: string
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
    }
    Views: {
      teacher_me_view: {
        Row: {
          avatar_url: string | null
          first_name: string | null
          id: string | null
          last_name: string | null
          status: Database["public"]["Enums"]["profile_status"] | null
          type: Database["public"]["Enums"]["profile_type"] | null
        }
        Insert: {
          avatar_url?: string | null
          first_name?: string | null
          id?: string | null
          last_name?: string | null
          status?: Database["public"]["Enums"]["profile_status"] | null
          type?: Database["public"]["Enums"]["profile_type"] | null
        }
        Update: {
          avatar_url?: string | null
          first_name?: string | null
          id?: string | null
          last_name?: string | null
          status?: Database["public"]["Enums"]["profile_status"] | null
          type?: Database["public"]["Enums"]["profile_type"] | null
        }
      }
      teacher_students_profiles_view: {
        Row: {
          avatar_url: string | null
          birthday: string | null
          first_name: string | null
          id: string | null
          last_name: string | null
        }
      }
      user_subscriptions_view: {
        Row: {
          price: number | null
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
      is_role: {
        Args: {
          role: Database["public"]["Enums"]["user_role"]
        }
        Returns: boolean
      }
    }
    Enums: {
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
      pricing_plan_interval: "day" | "week" | "month" | "year"
      pricing_type: "one_time" | "recurring"
      profile_status: "ONLINE" | "OFFLINE" | "BUSY" | "AWAY" | "INVISIBLE"
      profile_type: "PARENT" | "COOP" | "TUTOR" | "SCHOOL" | "STUDENT"
      subscription_status:
        | "trialing"
        | "active"
        | "canceled"
        | "incomplete"
        | "incomplete_expired"
        | "past_due"
        | "unpaid"
        | "paused"
      trial_status: "ACTIVE" | "CONVERTED" | "EXPIRED"
      user_role: "ADMIN" | "TEACHER" | "GROUP_MANAGER" | "STUDENT"
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

