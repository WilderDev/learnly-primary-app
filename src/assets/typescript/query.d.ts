import { z } from 'zod';

declare const brand: unique symbol;

type Brand<T, TBrand extends string> = T & { [brand]: TBrand };

type TAction<TInput extends z.ZodTypeAny, TRes extends any> = (
  input: z.infer<TInput>,
) => Promise<TRes>;

export type TQueryAction<TInput extends z.ZodTypeAny, TRes extends any> = Brand<
  TAction<TInput, TRes>,
  'query-action'
>;

export type TQueryOptions<TRes> = {
  staleTime?: number;
  onSuccess?: (data: TRes) => void;
  onError?: (error: string | null) => void;
};
