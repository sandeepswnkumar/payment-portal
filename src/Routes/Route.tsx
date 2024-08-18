import Layout from "@/components/Layout";
import About from "@/pages/About";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children :[
            {
                path: "about",
                element: <About />,
            },
            {
                path: "test",
                element: <h1>test page</h1>,
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