import { createBrowserRouter } from "react-router-dom"
import Dashboard from "../../pages/dashboard/Dashboard"
import Layout from "../../pages/layout/Layout";
import NotFound from "../../pages/notFound/NotFound";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Dashboard />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    },
])