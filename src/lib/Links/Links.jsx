import { AiFillHome, AiFillProduct } from "react-icons/ai";
import { FaIdCard } from "react-icons/fa";
import { GiYarn } from "react-icons/gi";
import { MdSupervisedUserCircle } from "react-icons/md";

export const links = [

    {
        label: "Dashboard",
        icon: <AiFillHome />,
        linkTo: "/"
    },
    {
        label: "User Management",
        icon: <FaIdCard />,
        linkTo: "/UserManagement"
    },
    {
        label:"Product",
        icon: <AiFillProduct  />,
        linkTo: "/ProductManagement"
    },
    {
        label:"Tailors",
        icon: <GiYarn  />,
        linkTo: "/TailorManagement"
    },
    {
        label:"Supervisors",
        icon: <MdSupervisedUserCircle  />,
        linkTo: "/SupervisorManagement"
    },
]

