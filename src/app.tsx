import { useState } from 'react';
import { Button } from './Components/Button/Button';
import './app.scss'

export const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div className='app'>
      Hello world
      <Button />
      <div>{counter}</div>
    </div>
  );
};
