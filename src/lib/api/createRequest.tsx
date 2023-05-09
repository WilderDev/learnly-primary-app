// * Libraries
import { TAction, TQueryAction } from '@/assets/typescript/query';
import { z } from 'zod';
import { fromZodError } from 'zod-validation-error';

// * Actions
export function createRequest<TInput extends z.ZodTypeAny>(validator?: TInput) {
  // * Functions
  function validationChecker<TRes extends any>(
    action: TAction<TInput, TRes>,
  ): TQueryAction<TInput, TRes> {
    // Vaidation Wrapper
    const validate = async (input: z.infer<TInput>) => {
      if (validator) {
        // Check if input is valid
        const res = validator.safeParse(input);

        // Return Error if invalid
        if (!res.success) {
          const error = fromZodError(res.error);
          throw new Error(error.message);
        }
      }

      return await action(input);
    };

    // Return
    return validate as TQueryAction<TInput, TRes>;
  }

  // * Return
  return validationChecker;
}
