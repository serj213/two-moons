import cn from 'classnames'
import cls from './Container.module.scss';

interface IContainerProps {
  children: React.ReactNode
}

export const Container = (props: IContainerProps) => {
  const { children } = props
  return <div className={cn(cls.container)}>
    {children}
  </div>;
};
