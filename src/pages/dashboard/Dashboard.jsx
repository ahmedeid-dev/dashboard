import { IoIosArrowDropleftCircle    } from "react-icons/io";
import banner from "./../../assets/banner.png"
import box from "./../../assets/6.png"
import yarn from "./../../assets/9.png"
import yarns from "./../../assets/8.png"
import { Link } from "react-router-dom";

export default function Dashboard() {
    return <>
        <div className="flex flex-col container mx-auto  justify-center">
            <img src={banner} alt="dashboard" /> 
            <h2 className="text-3xl font-bold  border-b-2 w-fit py-2" >Statistics</h2>
            <div className="flex xl:flex-row flex-wrap  gap-10  flex-col m-4">

                <Link to='/ProductManagement'>
                <div className="text-white w-[350px]   bg-gradient-to-r from-[#6E82B4] to-[#B78DAB] overflow-hidden  rounded-2xl">
                    <div className="flex flex-col">
                        <div className=" flex flex-row justify-between items-center p-5">
                            <div className="flex flex-col">
                                <p className="text-5xl">120</p>
                                <p className="h3">عدد المنتجات</p>
                            </div>
                            <img src={box} alt="box" />
                        </div>
                        <div className="flex flex-row justify-center items-center gap-3  bg-[#9289AD] ">
                            <IoIosArrowDropleftCircle    />
                            <p>اقرا المزيد</p>
                        </div>

                    </div>
                </div>
                </Link>
                
                <Link to='/TailorManagement'>
                <div className="text-white w-[350px]   bg-gradient-to-r from-[#6E82B4] to-[#B78DAB] overflow-hidden  rounded-2xl">
                    <div className="flex flex-col">
                        <div className=" flex flex-row justify-between items-center p-5">
                            <div className="flex flex-col">
                                <p className="text-5xl">120</p>
                                <p className="h3">الخياطين </p>
                            </div>
                            <img src={yarns} alt="yarns" />
                        </div>
                        <div className="flex flex-row justify-center items-center gap-3  bg-[#9289AD] ">
                            <IoIosArrowDropleftCircle    />
                            <p>اقرا المزيد</p>
                        </div>

                    </div>
                </div>
                </Link>

                <Link to='/SupervisorManagement'>
                <div className="text-white w-[350px]   bg-gradient-to-r from-[#6E82B4] to-[#B78DAB] overflow-hidden  rounded-2xl">
                    <div className="flex flex-col">
                        <div className=" flex flex-row justify-between items-center p-5">
                            <div className="flex flex-col">
                                <p className="text-5xl">120</p>
                                <p className="h3">المشرفين  </p>
                            </div>
                            <img src={yarn} alt="yarn" />
                        </div>
                        <div className="flex flex-row justify-center items-center gap-3  bg-[#9289AD] ">
                            <IoIosArrowDropleftCircle    />
                            <p>اقرا المزيد</p>
                        </div>

                    </div>
                </div>
                </Link>

            </div>
        </div>
        {/* <Example /> */}
    </>
}
