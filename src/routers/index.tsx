import App from "@/App";
import { createBrowserRouter } from "react-router-dom";

const route = createBrowserRouter([
  {
    element: <App />,
    path: "/",
  },
]);

export { route };
