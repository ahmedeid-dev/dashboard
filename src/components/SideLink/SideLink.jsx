/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SideLink({ label, linkTo, icon, className, isActive, onClick }) {
  const location = useLocation();
  const [currentURL, setCurrentURL] = useState("");

  useEffect(() => {
    setCurrentURL(location.pathname);
  }, [location]);

  return (
    <div className="h-[60px] flex flex-row" onClick={onClick}> {/* إضافة onClick هنا */}
      {linkTo === currentURL && (
        <div className="h-[100%] w-[7px] rounded-l-lg  bg-blue-500"></div>
      )}
      <Link
        to={linkTo}   
        className={`flex ${className} justify-start w-full rounded-e-none  h-[60px] gap-4 text-black 
                ${linkTo === currentURL ? "text-blue-500 p-1 rounded-md" : "bg-transparent hover:text-blue-300 rounded-sm"}`}
      >
        <div className="flex my-auto">
          <span className="flex items-center text-[20px] my-auto mx-3" > {/* تغيير اللون حسب الحالة */}
            {icon}
          </span>
          <span className="m-auto text-nowrap" >{`${label}`}</span>
        </div>
      </Link>
    </div>
  );
}
