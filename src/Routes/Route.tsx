import App from "@/App";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children :[
            {
                path: "about",
                element: <div>About</div>,
            }
        ]
    }
]);

const Route = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Route