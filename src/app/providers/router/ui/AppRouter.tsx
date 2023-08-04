import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routerConfig } from 'shared/config/router/routerConfig';

export const AppRouter = () => {
  useEffect(() => {
    console.log('config ', Object.values(routerConfig));
  }, []);

  return (
    <Routes>
      {Object.values(routerConfig).map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
};
