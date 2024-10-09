// /* eslint-disable react/prop-types */
// import SideLink from '../SideLink/SideLink';
// import { links } from './../../lib/Links/Links';

// export default function SideBar({ isCollapsed }) {
//     return (
//         <div className={`flex flex-col relative pt-5 h-[screen] min-h-[calc(100vh-71px)] ${isCollapsed ? 'w-16' : 'w-64'} justify-between mainSideBar border-e-[0.5px] mx-4 border-sideItem`}>
//             <div className="flex flex-col text-center justify-center w-full font-bold gap-4">
//                 {links.map((link, index) => {
//                     return (
//                         <SideLink
//                             key={index}
//                             linkTo={link.linkTo}
//                             icon={link.icon}
//                             label={link.label}
//                             className='bg-white'
//                         />
//                     );
//                 })}
//             </div>
//         </div>
//     );
// }


/* eslint-disable react/prop-types */
import SideLink from '../SideLink/SideLink';
import { links } from './../../lib/Links/Links';
import { useState } from 'react';

export default function SideBar({ isCollapsed }) {
    const [activeLink, setActiveLink] = useState(null);

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div className={`mx-2 flex flex-col relative h-[screen] min-h-[calc(100vh-71px)] ${isCollapsed ? 'w-16' : 'w-64'} justify-between  border-e-[0.5px]  `}>
            <div className="flex flex-col text-center justify-center w-full font-bold gap-4">
                {links.map((link, index) => {
                    return (
                        <SideLink
                            key={index}
                            linkTo={link.linkTo}
                            icon={link.icon}
                            label={!isCollapsed ? link.label : ''}
                            isActive={activeLink === link.linkTo} // تعيين الحالة النشطة
                            onClick={() => handleLinkClick(link.linkTo)} // تغيير الحالة عند الضغط
                            className='bg-white '
                        />
                    );
                })}
            </div>
        </div>
    );
}
