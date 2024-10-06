import { IoIosArrowDroprightCircle  } from "react-icons/io";
import ExcelReader from "../../components/excel/Excel";
import banner from "./../../assets/banner.png"
import box from "./../../assets/6.png"
import yarn from "./../../assets/9.png"
import yarns from "./../../assets/8.png"
import members from "./../../assets/7.png"
export default function Dashboard() {
    return <>
        <div className="flex flex-col container mx-auto  justify-center">
            <img src={banner} alt="dashboard" /> 
            <h2 className="text-3xl font-bold  border-b-2 w-fit py-2" >Dashboard</h2>
            <div className="flex xl:flex-row flex-wrap  gap-10  flex-col m-4">
                <div className="text-white w-[350px] cursor-pointer  bg-gradient-to-r from-[#6E82B4] to-[#B78DAB] overflow-hidden  rounded-2xl">
                    <div className="flex flex-col">
                        <div className=" flex flex-row justify-between items-center p-5">
                            <div className="flex flex-col">
                                <p className="text-5xl">120</p>
                                <p className="h3">عدد المنتجات</p>
                            </div>
                            <img src={box} alt="box" />
                        </div>
                        <div className="flex flex-row justify-center items-center gap-3 cursor-pointer bg-[#9289AD] ">
                            <IoIosArrowDroprightCircle  />
                            <p>اقرا المزيد</p>
                        </div>

                    </div>
                </div>
                <div className="text-white w-[350px] cursor-pointer  bg-gradient-to-r from-[#6E82B4] to-[#B78DAB] overflow-hidden  rounded-2xl">
                    <div className="flex flex-col">
                        <div className=" flex flex-row justify-between items-center p-5">
                            <div className="flex flex-col">
                                <p className="text-5xl">120</p>
                                <p className="h3">الاعضاء </p>
                            </div>
                            <img src={members} alt="members" />
                        </div>
                        <div className="flex flex-row justify-center items-center gap-3 cursor-pointer bg-[#9289AD] ">
                            <IoIosArrowDroprightCircle  />
                            <p>اقرا المزيد</p>
                        </div>

                    </div>
                </div>
                <div className="text-white w-[350px] cursor-pointer  bg-gradient-to-r from-[#6E82B4] to-[#B78DAB] overflow-hidden  rounded-2xl">
                    <div className="flex flex-col">
                        <div className=" flex flex-row justify-between items-center p-5">
                            <div className="flex flex-col">
                                <p className="text-5xl">120</p>
                                <p className="h3">الخياطين </p>
                            </div>
                            <img src={yarns} alt="yarns" />
                        </div>
                        <div className="flex flex-row justify-center items-center gap-3 cursor-pointer bg-[#9289AD] ">
                            <IoIosArrowDroprightCircle  />
                            <p>اقرا المزيد</p>
                        </div>

                    </div>
                </div>
                <div className="text-white w-[350px] cursor-pointer  bg-gradient-to-r from-[#6E82B4] to-[#B78DAB] overflow-hidden  rounded-2xl">
                    <div className="flex flex-col">
                        <div className=" flex flex-row justify-between items-center p-5">
                            <div className="flex flex-col">
                                <p className="text-5xl">120</p>
                                <p className="h3">اضافة خياط </p>
                            </div>
                            <img src={yarn} alt="yarn" />
                        </div>
                        <div className="flex flex-row justify-center items-center gap-3 cursor-pointer bg-[#9289AD] ">
                            <IoIosArrowDroprightCircle  />
                            <p>اقرا المزيد</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <ExcelReader/>
        {/* <Example /> */}
    </>
}
