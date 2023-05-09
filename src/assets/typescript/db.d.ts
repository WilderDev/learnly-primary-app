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
          id: string
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
      teacher_profiles: {
        Row: {
          avatar_url: string
          created_at: string
          first_name: string
          id: string
          last_name: string
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
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      profile_status: "ONLINE" | "OFFLINE" | "BUSY" | "AWAY" | "INVISIBLE"
      profile_type: "PARENT" | "GROUP" | "TUTOR"
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

