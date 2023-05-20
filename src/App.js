import "./App.css";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import Signin from "./components/Signin";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
]);
function App() {
  return (
    <UserAuthContextProvider>
      <div>
        <RouterProvider router={router} />
      </div>
    </UserAuthContextProvider>
  );
}

export default App;
