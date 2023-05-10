'use client';

// * Imports
import { TFill, TIcon, TSize, TVariant } from '@/assets/typescript/ui';
import cn from '@/lib/common/cn';
import FormItem from './FormItem';
import {
  defaultStyles,
  fills,
  roundeds,
  shadows,
  areas,
  variants,
} from './formItemPropStyles';
import { ISelectOption } from '@/assets/typescript/form';

// * Props
interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  value: string | number;
  setValue: (value: any) => void;
  options: ISelectOption[];
  label: string;
  labelHidden?: boolean;
  cols?: number;
  icon?: TIcon;
  area?: TSize;
  variant?: TVariant;
  fill?: TFill;
  shadow?: TSize;
  rounded?: TSize | 'full';
  className?: string;
}

// * Component
export default function Select({
  value,
  setValue,
  options,
  label,
  labelHidden = false,
  cols = 1,
  icon,
  area = 'md',
  variant = 'primary',
  fill = 'solid',
  shadow = 'xs',
  rounded = 'md',
  className,
  ...props
}: IProps) {
  // * Render
  return (
    <FormItem
      label={label}
      cols={cols}
      icon={icon}
      labelHidden={labelHidden}
      className={className}
    >
      <select
        className={cn(
          defaultStyles,
          areas[area],
          variants[variant],
          fills[fill],
          shadows[shadow],
          roundeds[rounded],
          icon ? 'pl-10' : 'pl-3',
        )}
        id={label}
        name={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...props}
      >
        {options.map((o) => (
          <option value={o.value} key={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </FormItem>
  );
}
