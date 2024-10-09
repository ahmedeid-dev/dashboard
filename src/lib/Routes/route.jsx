import { createBrowserRouter } from "react-router-dom"
import Dashboard from "../../pages/dashboard/Dashboard"
import Layout from "../../pages/layout/Layout";
import NotFound from "../../pages/notFound/NotFound";
import UserManagement from "../../pages/UserManagement/UserManagement";
import ProductManagement from "../../pages/ProductManagement/ProductManagement";
import TailorManagement from "../../pages/TailorManagement/TailorManagement";
import SupervisorManagement from "../../pages/SupervisorManagement/SupervisorManagement";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index:true,
                element: <Dashboard />
            },
            {
                path: "/UserManagement",
                element: <UserManagement />
            },
            {
                path: "/ProductManagement",
                element: <ProductManagement />
            },
            {
                path: "/TailorManagement",
                element: <TailorManagement />
            },
            {
                path: "/SupervisorManagement",
                element: <SupervisorManagement />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    },
])