import React from 'react';

const RemoteButton = React.lazy(() => import('app2/Button'));

const App = () => {
  const [counter, setCounter] = React.useState(0)
  return (
    <div>
      <h1>Host</h1>
      <h2>App 1</h2>
      <React.Suspense fallback="Loading Button">
        <RemoteButton onClick={() => {
          setCounter(counter + 1)
        }}
        >
          {counter}
        </RemoteButton>
      </React.Suspense>
    </div>
  );
};

export default App;
