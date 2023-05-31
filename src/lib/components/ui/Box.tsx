import { TSize } from '@/assets/typescript/ui';
import cn from '@/lib/common/cn';

// * Props
interface IProps extends JSX.IntrinsicAttributes {
  children: React.ReactNode;
  size?: TSize;
  rounded?: TSize;
  shadow?: TSize | 'none';
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

// * Component
export default function Box({
  children,
  size = 'md',
  rounded = 'md',
  shadow = 'md',
  as: Component = 'div',
  className,
  ...props
}: IProps) {
  // * Styles
  // Box Default Styles
  const boxDefaultStyles = 'bg-white dark:bg-navy-800 w-full';

  // Box Size Styles
  const boxSizeStyles: { [key in TSize]: string } = {
    xs: 'px-2 py-1',
    sm: 'px-3 py-2',
    md: 'px-4 py-3',
    lg: 'px-5 py-4',
    xl: 'px-6 py-5',
  };

  // Box Rounded Styles
  const boxRoundedStyles: { [key in TSize]: string } = {
    xs: 'rounded-xs',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
  };

  // Box Shadow Styles
  const boxShadowStyles: { [key in TSize | 'none']: string } = {
    none: 'shadow-none',
    xs: 'shadow-xs',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  };

  // * Render
  return (
    <Component
      className={cn(
        boxDefaultStyles,
        boxSizeStyles[size],
        boxRoundedStyles[rounded],
        boxShadowStyles[shadow],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
