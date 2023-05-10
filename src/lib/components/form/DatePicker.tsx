'use client';

import { CalendarIcon } from '@heroicons/react/24/outline';

import 'flatpickr/dist/themes/dark.css';
import Flatpickr, { DateTimePickerProps } from 'react-flatpickr';
import FormItem from './FormItem';

interface IProps {
  value: Date | null;
  setValue: (value: Date | null) => void;
  label: string;
  cols?: number;
  className?: string;
  required?: boolean;
  options?: DateTimePickerProps['options'];
}

export default function DatePicker({
  value,
  setValue,
  label,
  cols = 1,
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
        className="focus:border-primary dark:border-navy-450 dark:focus:border-accent peer form-input w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 dark:border-navy-400 dark:hover:border-navy-500"
        placeholder="Choose date..."
        type="text"
        required={required}
        options={options}
      />
    </FormItem>
  );
}
