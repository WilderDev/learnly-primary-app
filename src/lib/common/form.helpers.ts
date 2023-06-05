import { ISelectOption } from '@/assets/typescript/form';
import capitalize from './capitalize';

export function createSelectOptions(
  options: string[] | { label: string; value: string; image?: string }[],
): ISelectOption[] {
  return options?.map((option) => ({
    label:
      typeof option === 'string'
        ? capitalize(option.split('_').join(' '))
        : capitalize(option.label.split('_').join(' ')),
    value: typeof option === 'string' ? option : option.value,
    image: typeof option === 'string' ? undefined : option.image,
  }));
}
