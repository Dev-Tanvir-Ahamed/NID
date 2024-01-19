import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NidHeader from "../components/NidHeader/NidHeader";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "nid",
    element: <NidHeader />,
  },
]);

export default router;
