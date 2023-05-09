'use client';

// * Libraries
import { TQueryAction, TQueryOptions } from '@/assets/typescript/query';
import { useMemo, useRef, useState } from 'react';
import { z } from 'zod';

// * Actions
export function useRequest<TInput extends z.ZodTypeAny, TRes extends any>(
  action: TQueryAction<TInput, TRes>,
  options?: TQueryOptions<TRes>,
) {
  // * Refs
  const actionRef = useRef(action);
  const optionsRef = useRef(options);

  // * State
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<TRes | null>(null);
  const [error, setError] = useState<string | null>(null);

  // * Handlers
  const mutate = useMemo(
    () => async (input: z.infer<TInput>) => {
      setIsLoading(true);
      setError(null);
      setData(null);

      try {
        const response = await actionRef.current(input);
        setData(response);

        if (optionsRef.current?.onSuccess) {
          optionsRef.current.onSuccess(response);
        }
      } catch (e) {
        setError((e as Error).message);

        if (optionsRef.current?.onError) {
          optionsRef.current.onError((e as Error).message);
        }
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  // * Return
  return {
    data,
    error,
    mutate,
    isLoading,
  };
}
