import cn from 'classnames'
import { Link } from 'react-router-dom';
import { routerPath } from 'shared/config/router/routerConfig';
import { Burger } from 'shared/ui/Burger/Burger';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { Container } from 'shared/ui/Container/Container';
import { LinkItem } from 'shared/ui/LinkItem/LinkItem';
import LogoIcon from '../../../../public/img/logo.svg'

import cls from './Header.module.scss'

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
                <Burger click={() => {}} />
                <LinkItem to={'/dsfsdf'}>
                    Women
                </LinkItem>
                <LinkItem to={'/dsfsdf'}>
                    Men
                </LinkItem>
                <LinkItem to={'/dsfsdf'}>
                    Brand
                </LinkItem>
            </div>
            <div>
                <Link to={routerPath.main}>
                    <LogoIcon />
                </Link>
            </div>
            <div className={cls.header__menu}>
                <Button>
                    ITA
                </Button>
                <Button>
                    Search
                </Button>
                <Button>
                    Login/Registrazione
                </Button>
                <Button theme={EButtonTheme.basket} countElem={0}>
                    Bag
                </Button>
            </div>
        </div>
    </Container>
  </header>;
};
