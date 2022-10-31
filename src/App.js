import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import Update from './components/Update';

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Home></Home>,
    loader: () => fetch('http://localhost:5000/users')
  },
    {path: '/users', element: <Users></Users>},
    {path: '/update/:id', element: <Update></Update>,
    loader: ({params}) =>fetch(`http://localhost:5000/users/${params.id}`)
  }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
