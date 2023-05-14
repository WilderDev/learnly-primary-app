export interface ISelectOption {
  label: string;
  value: string;
  image?: string;
  disabled?: boolean;
  selected?: boolean;
  hidden?: boolean;
}

export interface INameAndVal {
  id: string;
  name: string;
}

export type TSelection = INameAndVal | null;

export interface IOption {
  id: string;
  name: string;
  children?: IOption[];
}
