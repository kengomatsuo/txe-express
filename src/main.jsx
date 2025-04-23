import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div className="error-page">
      <h1>Oops! Page not found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <a href="/">Go back home</a>
    </div>,
  },
], {
  basename: "/txe-express"  // Add this line to match your Vite base config
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
