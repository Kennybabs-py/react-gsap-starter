import { createBrowserRouter } from "react-router-dom";
import Root from "./root";

const router = createBrowserRouter([
  {
    path: "*",
    Component: Root,
  },
]);

export default router;
