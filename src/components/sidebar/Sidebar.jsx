
import SideLink from '../SideLink/SideLink';
import { links } from './../../lib/Links/Links';
export default function SideBar() {
    return (
        <div className="sidebar flex flex-col relative pt-5  h-[screen] min-h-[calc(100vh-71px)] w-[calc((100vw/1920px)*259px))] justify-between mainSideBar border-l-[0.5px] mx-4 border-sideItem ">

            <div className="sideitems flex flex-col text-center  justify-center w-[219px] font-bold gap-4">
                {links.map((link, index) => {
                    return (
                        <SideLink
                            key={index}
                            linkTo={link.linkTo}
                            icon={link.icon}
                            label={link.label}
                            className='bg-white'
                        />
                    )
                })}

            </div>
        </div>
    )
}
