import Recruit from "@/pages/recruit/index.page";
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
