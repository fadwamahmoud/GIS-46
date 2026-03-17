import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Profile from "./Profile.jsx";
import Fadwa from "./Fadwa.jsx";
import Batman from "./Batman.jsx";
import DefaultProfile from "./DefaultProfile.jsx";
import ErrorPage from "./ErrorPage.jsx";

// define routes of the app
// configuration for a router => arguments
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile/:name",
    element: <Profile />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
