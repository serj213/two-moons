import cn from 'classnames';
import { ButtonHTMLAttributes, useEffect } from 'react';
import cls from './Button.module.scss';

export enum EButtonTheme {
  default = 'default',
  clear = 'clear',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  classNames?: string
  children: React.ReactNode
  theme?: EButtonTheme
  fullWidth?: boolean
}

export const Button = (props: IButtonProps) => {
  const {
    children,
    classNames = '',
    theme = EButtonTheme.clear,
    fullWidth,
    ...otherProps
  } = props;

  return (
    <button
      data-testid="button"
      className={cn(cls.button, classNames, [
        cls[theme],
        { [cls.fullWidth]: fullWidth }
      ])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
