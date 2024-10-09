/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

export default function InputAndLabel({
  label,
  error,
  see = false,
  type,
  labelStyle = "",
  ...props
}) {
  const [visible, setVisible] = useState(true);
  const [typeInput, setTypeInput] = useState(type);

  const handleVisible = () => {
    setTypeInput(typeInput === "password" ? "text" : "password");
    setVisible(!visible);
  };

  return <>
    <div className="flex  flex-col relative font-semibold text-black dark:text-white">
      <div className="mb-1 flex flex-row">
        <label htmlFor={label} className={`dark:text-white inputLabel ${labelStyle}`}>
          {label}
        </label>
        <span className="text-warningColor">*</span>
      </div>
      <div className="relative w-[100%]">
        <input
          type={typeInput}
          id={label}
          {...props}
          className={`${error ? "border-red-500" : "border-blacks"
            } dark:text-black shadow p[4px, 24px, 4px, 24px] gap-[10px] rounded-[4px] border-[1px] w-[100%] h-[39px] ps-3 ${props.className}`}
        />
        {error ? (
          <div className="ps-2 text-red-500">{error}</div>
        ) : (
          <div className="ps-2 opacity-0 disabled">{" "}</div>
        )}
        {see && (
          <button
            type="button"
            onClick={handleVisible}
            className={`
              absolute z-50 end-2 top-1/4  -translate-y-1/3 text-2xl
              `}
          >
            {visible ? (
              <FaEyeSlash className="dark:text-black" />
            ) : (
              <IoEyeSharp className="dark:text-black" />
            )}
          </button>
        )}
      </div>
    </div>
  </>
}
