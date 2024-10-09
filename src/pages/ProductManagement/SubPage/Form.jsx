import { IoArrowBackSharp } from "react-icons/io5";
import FileInput from "../../../components/FileInput/FileInput";
import ComboBox from "../../../components/SelectMenu/SelectMenu";
import { useNavigate } from "react-router-dom";

export default function Form() {
    const navigate = useNavigate();

    const handleBack=()=>{
        navigate(-1);
    }
    let direction='rtl'
    return <>
    <div className="flex flex-col gap-4">
        <h1 className="text-5xl w-fit border-b-2  pb-2">Add Order</h1>
        <FileInput/>
        
        <ComboBox 
        label="Tailor Name"
        labelStyle={`ms-1 mb-3 text-xl`}
        width={'100%'}
        />
        <ComboBox 
        label="Store Number"
        labelStyle={`ms-1 mb-3 text-xl`}
        width={'100%'}
        />
        <button className="w-full text-xl text-white bg-[#09c] rounded-md p-3">Submit</button>
        <button 
        onClick={()=>{handleBack()}}
        className="w-full text-xl text-white bg-red-500 rounded-md p-3 flex justify-center items-center gap-3 ">
        <IoArrowBackSharp className={direction === "ltr" ? "rotate-180" : ""} />
            Back 
            </button>
    </div>
    </>
}
