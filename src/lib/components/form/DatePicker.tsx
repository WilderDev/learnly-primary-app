'use client';

import { CalendarIcon } from '@heroicons/react/24/outline';

import 'flatpickr/dist/themes/dark.css';
import Flatpickr, { DateTimePickerProps } from 'react-flatpickr';
import FormItem from './FormItem';
import {
  areas,
  defaultStyles,
  fills,
  roundeds,
  shadows,
  variants,
} from './formItemPropStyles';
import cn from '@/lib/common/cn';
import { TFill, TSize, TVariant } from '@/assets/typescript/ui';

interface IProps extends DateTimePickerProps {
  setValue: (value: Date | null) => void;
  label: string;
  cols?: number;
  className?: string;
  area?: TSize;
  variant?: TVariant;
  fill?: TFill;
  shadow?: TSize;
  rounded?: TSize | 'full';
  required?: boolean;
  options?: DateTimePickerProps['options'];
}

export default function DatePicker({
  value,
  setValue,
  label,
  cols = 1,
  area = 'md',
  variant = 'primary',
  fill = 'solid',
  shadow = 'xs',
  rounded = 'md',
  className,
  required = false,
  options = {},
}: IProps) {
  return (
    <FormItem
      label={label}
      cols={cols}
      icon={CalendarIcon}
      labelHidden={false}
      className={className}
    >
      <Flatpickr
        value={value || undefined}
        onChange={(date) => setValue(date[0] || null)}
        className={cn(
          defaultStyles,
          areas[area],
          variants[variant],
          fills[fill],
          shadows[shadow],
          roundeds[rounded],
          'pl-10',
        )}
        placeholder="Choose date..."
        type="text"
        required={required}
        options={options}
      />
    </FormItem>
  );
}
