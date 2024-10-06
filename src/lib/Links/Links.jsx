import { AiFillHome } from "react-icons/ai";
import { FaIdCard } from "react-icons/fa";
import { TbBusStop } from "react-icons/tb";

export const links = [

    {
        label: "Dashboard",
        icon: <AiFillHome />,
        linkTo: "/dashboard"
    },
    {
        label: "User Management",
        icon: <FaIdCard />,
        linkTo: "/dashboard/UserManagement"
    },
    {
        label:"Product",
        icon: <TbBusStop />,
        linkTo: "/dashboard/ProductManagement"
    },
]

