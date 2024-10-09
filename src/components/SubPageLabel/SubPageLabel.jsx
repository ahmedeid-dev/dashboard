import { useNavigate } from "react-router-dom";
import checkLinkName from "../../../lib/Module/checkLinkName";

export default function SubPageLabel() {
    const navigate = useNavigate();

    return <>
        <div className=
            {`
                pagePagenationLabel
                flex flex-row dateFilterLabel
                w-[704px] h-[46px]
                top-[124px] start-[957px]
                py-[10px] px-[40px]
                gap-[10px] 
                `}
        >
            <button
                onClick={() => { navigate(-1) }}
                type="button">{`${checkLinkName(window.location.pathname.split('/').slice(1)[1])} / `}</button>
            <div
                className={`
                text-mainColor
                `}
            >
                {`${checkLinkName(window.location.pathname.split('/').slice(1)[2])}`}
            </div>
        </div>
    </>
}
