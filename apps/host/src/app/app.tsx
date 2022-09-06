import * as React from 'react';
import {Link, Route, Routes} from 'react-router-dom';

const Manager = React.lazy(() => import('manager/Module'));
const ManagerTest = React.lazy(() => import('manager/test'));

export function App() {
  console.log(Manager.name)
  return (
      <React.Suspense fallback={null}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/manager">Manager</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Manager/>}/>
          <Route path="/manager" element={<ManagerTest/>}/>
        </Routes>
      </React.Suspense>
  );
}

export default App;
