import { createBrowserRouter } from "react-router-dom"
import Dashboard from "../../pages/dashboard/Dashboard"
import Layout from "../../pages/layout/Layout";
import NotFound from "../../pages/notFound/NotFound";
import ProductManagement from "../../pages/ProductManagement/ProductManagement";
import TailorManagement from "../../pages/TailorManagement/TailorManagement";
import SupervisorManagement from "../../pages/SupervisorManagement/SupervisorManagement";
import Form from "../../pages/ProductManagement/SubPage/Form";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            // ! End Dashboard
            {
                path: "/ProductManagement",
                element: <ProductManagement />
            },
            
            {
                path: "/ProductManagement/Form",
                element: <Form />
            },
            // ! End Products

            {
                path: "/TailorManagement",
                element: <TailorManagement />
            },
            // ! End Tailors

            {
                path: "/SupervisorManagement",
                element: <SupervisorManagement />
            },
            // ! End Supervisors

            {
                path: "*",
                element: <NotFound />
            }
            // ! End NotFound

        ]
    },
])