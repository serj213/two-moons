import { Link, LinkProps } from 'react-router-dom';
import cn from 'classnames'
import cls from './LinkItem.module.scss';
import { FC } from 'react';

export enum ELinkTheme {
  white = 'white',
  black = 'black'
}
interface ILinkProps extends LinkProps {
  theme?: ELinkTheme
}

export const LinkItem: FC<ILinkProps> = (props) => {
  const { children, to, className, theme } = props

  return <Link to={to} className={cn(cls.link, [className, cls[theme]])}>
    {children}
  </Link>;
};
