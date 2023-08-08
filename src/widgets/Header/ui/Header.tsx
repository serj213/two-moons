import cn from 'classnames'
import { Link } from 'react-router-dom';
import { routerPath } from 'shared/config/router/routerConfig';
import { Burger, EBurgerTheme } from 'shared/ui/Burger/Burger';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { Container } from 'shared/ui/Container/Container';
import { ELinkTheme, LinkItem } from 'shared/ui/LinkItem/LinkItem';
import LogoIcon from '../../../../public/img/logo.svg'
import LogoWhiteIcon from '../../../../public/img/logo-white.svg'

import cls from './Header.module.scss'
import { headerLinkMenuItems } from '../utils/LinkMenuItems';

export enum EHeaderTheme {
  white = 'white',
  black = 'black'
}

interface IHeaderProps {
  theme?: EHeaderTheme
}

export const Header = (props: IHeaderProps) => {
  const { theme = EHeaderTheme.white } = props

  return <header className={cn(cls.header, [cls[theme]])}>
    <Container>
        <div className={cls.header__inner}>
            <div className={cls.header__menu}>
                <Burger theme={theme === EHeaderTheme.white ? EBurgerTheme.white : EBurgerTheme.black} click={() => {}} />
                {
                    headerLinkMenuItems.map(({ label, link }) => {
                      return <LinkItem theme={theme === EHeaderTheme.white ? ELinkTheme.white : ELinkTheme.black} key={link} to={link}>
                            {label}
                        </LinkItem>
                    })
                }
            </div>
            <div>
                <Link to={routerPath.main}>
                    {
                        theme === EHeaderTheme.white ? <LogoIcon /> : <LogoWhiteIcon />
                    }
                </Link>
            </div>
            <div className={cls.header__menu}>
                <Button theme={theme === EHeaderTheme.white ? EButtonTheme.clear : EButtonTheme.whiteClear }>
                    ITA
                </Button>
                <Button theme={theme === EHeaderTheme.white ? EButtonTheme.clear : EButtonTheme.whiteClear }>
                    Search
                </Button>
                <Button theme={theme === EHeaderTheme.white ? EButtonTheme.clear : EButtonTheme.whiteClear }>
                    Login/Registrazione
                </Button>
                <Button theme={theme === EHeaderTheme.white ? EButtonTheme.basket : EButtonTheme.basketWhite} countElem={0}>
                    Bag
                </Button>
            </div>
        </div>
    </Container>
  </header>;
};
