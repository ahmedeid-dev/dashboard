import { createBrowserRouter } from "react-router-dom"
import Dashboard from "../../pages/dashboard/Dashboard"
import Layout from "../../pages/layout/Layout";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Dashboard />
            }
        ]
    },
])