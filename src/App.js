
// import {   useState } from 'react';
import './App.css';
import Login from './pages/authPages/login/Login';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard';
import PrivateRoute from './pages/PrivateRoute';


function App() {
  // const [token,setToken] = useState(false)
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/dashboard",
      element:<PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    },
    
  ]);
  return (
    <RouterProvider router={router} />
    // <div className="App">
    //   {
    //     isLoged?<Dashboard />: <Login />
    //   }
     
      
    // </div>

   
  );
}

export default App;
