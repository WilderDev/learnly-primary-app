export type TSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type TVariant = 'primary' | 'secondary' | 'dark' | 'light';
export type TFill = 'solid' | 'outline' | 'gradient' | 'none';
export type TEffect = 'scale';

export type TIcon = React.ElementType;

export interface ILink {
  id: number;
  name: string;
  slug: string;
  icon: TIcon;
  external?: boolean;
}
