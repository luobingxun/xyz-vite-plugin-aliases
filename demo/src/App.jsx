import { useState } from 'react';
import reactLogo from '@assets/react.svg';
import { __TEST_CONSTANTS__ } from '@constants';
import Home from '@components/Home';
import useTest from '@hooks/useEest';
import { getRandom } from '@utils';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const { name } = useTest();

  console.log(__TEST_CONSTANTS__, '__TEST_CONSTANTS__');
  console.log(Home, 'Home');
  console.log(name, 'name');
  console.log(getRandom(), 'getRandom');

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
