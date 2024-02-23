import { ActionProps } from 'adminjs';

export type TComponentProps = {
  onChange: (propertyName: string, propertyValue: string) => void;
} & ActionProps;
