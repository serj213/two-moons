import { Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { routerPath } from 'shared/config/router/routerConfig';
import { AppRouter } from './providers/router';
import './styles/index.scss'

export const App = () => {
  return (
    <div className='app'>
      <Link to={routerPath.main}>
        main
      </Link>
      <Link to={routerPath.about}>
        about
      </Link>
      <Suspense fallback={<div>loader</div>}>
        <AppRouter />
      </Suspense>

    </div>
  );
};
