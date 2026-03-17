import { createBrowserRouter } from "react-router";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";
import ProtectedRoute from "./ProtectedRoute";
import App from "./App";
import Image from "./Image";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile/:name",
    element: <ProtectedRoute children={<Profile />} />,
  },
]);

export default router;
