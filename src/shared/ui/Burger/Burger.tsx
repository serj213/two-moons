import cn from 'classnames';
import cls from './Burger.module.scss'

export enum EBurgerTheme {
  white = 'white',
  black = 'black'
}

interface IBurgerProps {
  click: () => void
  classnames?: string
  theme?: EBurgerTheme
}

export const Burger = (props: IBurgerProps) => {
  const { click, classnames, theme = EBurgerTheme.white } = props

  return <button onClick={click} className={cn(cls.burger, cls[theme], classnames)}><span></span></button>;
};
