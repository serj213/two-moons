import { Suspense } from 'react';
import { Header } from 'widgets/Header';
import { LoaderPage } from 'widgets/LoaderPage';
import { AppRouter } from './providers/router';
import './styles/index.scss';

export const App = () => {
  return (
    <div className="app">

      <Suspense fallback={<LoaderPage />}>
        <Header />
        <AppRouter />
      </Suspense>
    </div>
  );
};
