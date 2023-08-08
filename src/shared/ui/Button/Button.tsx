import cn from 'classnames';
import { ButtonHTMLAttributes } from 'react';
import cls from './Button.module.scss';

export enum EButtonTheme {
  default = 'default',
  clear = 'clear',
  basket = 'basket',
  whiteClear = 'whiteClear',
  basketWhite = 'basketWhite',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  classNames?: string
  children: React.ReactNode
  theme?: EButtonTheme
  fullWidth?: boolean
  countElem?: number
}

export const Button = (props: IButtonProps) => {
  const {
    children,
    classNames = '',
    theme = EButtonTheme.clear,
    fullWidth,
    countElem,
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

      {
        EButtonTheme.basket && <span>{countElem}</span>
      }
    </button>
  );
};
