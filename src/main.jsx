import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./components/router/Router";
import AuthProvider from "./components/providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <div className="container mx-auto">
        <RouterProvider router={router} />
      </div>
    </React.StrictMode>
  </AuthProvider>
);
