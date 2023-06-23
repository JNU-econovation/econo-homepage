import Recruit from "@/pages/recruit";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <h1>hello world</h1>,
    path: "/",
  },
  {
    element: <Recruit />,
    path: "/recruit",
  },
]);

export { router };
