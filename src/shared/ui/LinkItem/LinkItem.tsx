import { Link, LinkProps } from 'react-router-dom';
import cn from 'classnames'
import cls from './LinkItem.module.scss';
import { FC } from 'react';

interface ILinkProps extends LinkProps {

}

export const LinkItem: FC<ILinkProps> = (props) => {
  const { children, to, className } = props

  return <Link to={to} className={cn(cls.link, className)}>
    {children}
  </Link>;
};
