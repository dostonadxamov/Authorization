import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import MainLayouts from "./Layouts/MainLayouts";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { useSelector } from "react-redux";
import { action as actionReducer } from "./pages/Register";
import { action as actionReducer2 } from "./pages//Login";


export default function App() {
  const { user } = useSelector((store) => store.user)
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (<ProtectedRoutes user={user}>
        <MainLayouts />
      </ProtectedRoutes>),
      children: [
        {
          index: true,
          element: <Home />
        }
      ]
    },
    {
      path: "/login",
      element: user ? <Navigate to={"/"} /> : <Login />,
      action: actionReducer2
    },

    {
      path: "/register",
      element: user ? <Navigate to={"/"} /> : <Register />,
      action: actionReducer
    }
  ])
  return <>
    <RouterProvider router={routes} />
  </>
}
