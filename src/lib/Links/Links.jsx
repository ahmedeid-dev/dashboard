import { AiFillHome, AiFillProduct } from "react-icons/ai";
import { GiYarn } from "react-icons/gi";
import { MdSupervisedUserCircle } from "react-icons/md";

export const links = [
    {},//for margin only
    {
        label: "Dashboard",
        icon: <AiFillHome />,
        linkTo: "/"
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

