import notFound from "./../../assets/404.jpg"
export default function NotFound() {
    return <>
        <div className="w-full h-[100vh] ">
            <img className="w-full h-full" src={notFound} alt=" not found " />
        </div>
    </>
}
