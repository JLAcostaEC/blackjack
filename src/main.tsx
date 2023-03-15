import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'flowbite'
import App from "./routes/App";
import ErrorPage from "./routes/ErrorPage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./routes/Layout";
import HomePage from "./routes/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/app",
        element: <App />,
      },
    ],
		errorElement: <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
