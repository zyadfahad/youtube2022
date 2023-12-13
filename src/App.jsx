
import LoginPublisher from "./pages/login/LoginPublisher";
import LoginReader from "./pages/login/LoginReader";
import PublisherReader from "./pages/publishReader/PublisherReader";
import RegisterPublisher from "./pages/register/RegisterPublisher";
import RegisterReader from "./pages/register/RegisterReader";
import {
  createBrowserRouter,
  RouterProvider,
  Router,
  Outlet,
} from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBer/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
function App() {

  const currentUser = true;

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/PublisherReader" />
    }
    return children;
  }
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/profile/:id",
          element: <Profile />
        },
       
      ]
    },
    {
      path: "/PublisherReader",
      element: <PublisherReader />,
    },
    {
      path: "/loginReader",
      element: <LoginReader />,
    },
     {
      path: "/loginPublisher",
      element: <LoginPublisher />,
    },
  
    {
      path: "/registerPublisher",
      element: <RegisterPublisher />,
    },
    {
      path: "/registerPublisher",
      element: <RegisterPublisher />,
    },

  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App