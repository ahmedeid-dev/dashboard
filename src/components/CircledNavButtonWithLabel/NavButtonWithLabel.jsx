import { FaRegCircle } from 'react-icons/fa'
import { Link } from "react-router-dom";

export default function NavButtonWithLabel({ label, route }) {

    return <>
        {/* parent */}
        <Link
            to={route}
            className={`
                cursor-pointer
                flex flex-row shadow-md
                w-[311px] h-[56px]
                top-[160.5px] start-[1295px]
                px-[26.93px] py-[16px]
                gap-[10px] rounded-[8px]
                `}>
            {/* icon Circle */}
            <FaRegCircle
                className={`
            bg-[#EDD7FF] text-[#EDD7FF]
            w-[20.14px] h-[20.14px]
            top-[16px] start-[263.93px]
            gap-0 rounded-full
            overflow-hidden
            `} />
            {/* Label */}
            <div
                className={`
            whitespace-nowrap
            dateFilterLabel
            w-[157px] h-[24px]
            top-[16px] start-[77.5px]
            gap-0
            `}>
                {label}
            </div>
        </Link>
    </>
}
