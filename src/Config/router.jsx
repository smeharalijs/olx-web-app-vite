
import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
  } from "react-router-dom";

  import Header from "../Components/Header"
  import Dashboard from '../Views/Dashboard'
  import Login from '../Views/Login'
  import Sign from "../Views/Signin";
  import Registered from "../views/Registered";
  


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "/",
          element: <Dashboard/>,
        },
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path: "/signin",
          element: <Sign/>,
        },
        {
          path: "/register",
          element: <Registered/>,
        },

      ]
    },
   
  ]);
  
  function Layout(){
    return (
      <div>
        <Header/>
        <Outlet/>
      </div>
    )
  }


  const Router = () => {
    return <RouterProvider router={router} />

}

export default Router;