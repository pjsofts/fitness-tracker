import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Report from "../Report";
import Layout from "../Layout";
import Calendar from "../Calendar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/reports",
        element: <Report />,
      },
      {
        path: "/calendar",
        element: <Calendar />,
      },
    ],
  },
]);

export default router;
