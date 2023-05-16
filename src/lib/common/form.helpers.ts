import { ISelectOption } from '@/assets/typescript/form';

export function createSelectOptions(
  options: string[] | { label: string; value: string; image?: string }[],
): ISelectOption[] {
  return options.map((option) => ({
    label: typeof option === 'string' ? option : option.label,
    value: typeof option === 'string' ? option : option.value,
    image: typeof option === 'string' ? undefined : option.image,
  }));
}
