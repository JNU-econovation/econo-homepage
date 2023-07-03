import MainPage from "@/pages/main/index.page";
import Recruit from "@/pages/recruit/index.page";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <MainPage />,
    path: "/",
  },
  {
    element: <Recruit />,
    path: "/recruit",
  },
]);

export { router };
