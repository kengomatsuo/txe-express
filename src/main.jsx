import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
  useRouteError,
} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Promo from "./pages/Promo";
import Footer from "./components/Footer";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

const ErrorBoundary = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <div style={{ margin: "4rem" }} />
      <h1>Oops! Page not found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/">Go back home</Link>
    </div>
  );
};

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "promo",
          element: <Promo />,
        },
        {
          path: "tracking",
          element: <div>Tracking Page</div>,
        },
        {
          path: "pricing",
          element: <div>Pricing Page</div>,
        },
        {
          path: "outlet",
          element: <div>Outlet Page</div>,
        },
        {
          path: "*",
          element: <ErrorBoundary />,
        },
      ],
    },
  ],
  {
    basename: "/txe-express",
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
