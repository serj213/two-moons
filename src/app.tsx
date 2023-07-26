import React from "react";

export const App = () => {
  const [counter, setCounter] = React.useState(0);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div>
      Hello world
      <button onClick={increment}>+</button>
      <div>{counter}</div>
    </div>
  );
};
