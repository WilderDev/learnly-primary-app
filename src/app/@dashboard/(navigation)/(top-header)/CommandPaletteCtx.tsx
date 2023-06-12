'use client';

import { ISearchItem } from '@/assets/typescript/search';
import { supabaseClient } from '@/lib/auth/supabaseClient';
import { useUser } from '@/lib/components/providers/UserProvider';
import CommandPalette from '@/lib/components/ui/CommandPalette';
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { toast } from 'sonner';

// * Initialization
// Props
interface ICommandPaletteCtxProps {
  items: ISearchItem[];
  open: boolean;
  setOpen: (open: boolean) => void;
  query: string;
  setQuery: (query: string) => void;
  isLoading: boolean;
} // Create an interface for the context props

// Initial State
const initialState: ICommandPaletteCtxProps = {
  items: [],
  open: false,
  setOpen: () => {},
  query: '',
  setQuery: () => {},
  isLoading: false,
}; // Create a context object with default value

// Context
const CommandPaletteCtx = createContext(initialState); // Create Context Object

// * Provider
export function CommandPaletteProvider({ children }: PropsWithChildren) {
  // * State
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<ISearchItem[]>([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Supabase Client
  const supabase = supabaseClient();

  // Current User
  const { user } = useUser();

  // * Effects
  // Fetch items from server
  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);

      const { data, error } = await supabase.rpc('search_resources', {
        query,
        user_id: user?.id!,
      });

      if (error) toast.error('There was an error searching');

      setIsLoading(false);
      setItems((data as ISearchItem[]) || []);
    };

    query?.length > 0 && fetchItems();

    return () => {
      setItems([]);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, user?.id]);

  const value: ICommandPaletteCtxProps = useMemo(
    () => ({
      items,
      open,
      setOpen,
      query,
      setQuery,
      isLoading,
    }),
    [items, open, setOpen, query, setQuery, isLoading],
  );

  return (
    <CommandPaletteCtx.Provider value={value}>
      {open && <CommandPalette items={items} />}
      {children}
    </CommandPaletteCtx.Provider>
  );
}

// * Hook
export function useCommandPalette() {
  const ctx = useContext(CommandPaletteCtx); // Get the context object

  // Throw an error if the context object is undefined
  if (!ctx) {
    throw new Error(
      'useCommandPalette must be used within a CommandPaletteProvider',
    );
  }

  return ctx; // Return the context object to be used in the component
}
