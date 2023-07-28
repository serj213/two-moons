import cls from './Button.module.scss';

interface IButton {
  children: React.ReactNode
}

export const Button = ({ children }: IButton) => {
  return <button className={cls.button}>
        {children}
    </button>
}
