import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Home></Home>,
    loader: () => fetch('http://localhost:5000/users')
  },
    {path: '/users', element: <Users></Users>}
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
