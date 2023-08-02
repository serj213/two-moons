import { FC } from 'react'
import cn from 'classnames'
import cls from './Text.module.scss'

interface ITextProps {
  classNames?: string
  children: React.ReactNode
}

export const Text: FC<ITextProps> = (props) => {
  const { classNames, children } = props

  return <p className={cn(cls.text, classNames)}>{children}</p>;
};
