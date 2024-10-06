/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SideLink({ label, linkTo, icon, className }) {
  const location = useLocation();
  const [currentURL, setCurrentURL] = useState("");
  useEffect(() => {
    setCurrentURL(location.pathname);
  }, [location]);

  return (
    <div className="h-[60px] flex flex-row">
      {linkTo === currentURL && (
        <div className="h-[100%] w-[7px] rounded-l-lg bg-mainColor ms-1"></div>
      )}
      <Link
        to={linkTo}
        className={`flex ${className} 
        } justify-start h-[60px] gap-4 text-black 
        ${linkTo === currentURL
            ? "text-mainColor p-1 rounded-md"
            : "bg-transparent hover:text-mainColor rounded-sm"
          }`}
      >
        <div className="flex  my-auto">
          <span className="flex items-center text-[25px] my-auto mx-4">
            {icon}
          </span>
          <span className="my-auto flex font-tajawal text-[18px] font-bold leading-6">{`${label}`}</span>
        </div>
      </Link>
    </div>
  );
}
