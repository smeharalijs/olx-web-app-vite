import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate,
} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../Config/firebase";
import { useEffect, useState } from "react";

import Header from "../Components/Header";
import Dashboard from "../Views/Dashboard";
import Login from "../Views/Login";
import Sign from "../Views/Signin";
import Registered from "../views/Registered";
import PostAdd from "../Views/Postadd";
import Myadd from '../Views/Myadd'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signin",
        element: <Sign />,
      },
      {
        path: "/register",
        element: <Registered />,
      },
      {
        path: "/postAdd",
        element: <PostAdd />,
      },
      {
        path: "/myAdd",
        element: <Myadd />,
      },
    ],
  },
]);

function Layout() {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  useEffect(() => {
    const { pathname } = window.location;
    if (user) {
      // if (pathname === "/signin" || pathname === "/register") {
      //   navigate("/");
      // }
    } else {
      // if(pathname === "/postAdd"){
      //   navigate("/signin")
      // }
    }
  }, [window.location.pathname, user]);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
