import { Link } from "react-router-dom";
import MainTable from "../../components/table/variables/Columns";

export default function ProductManagement() {
  return <>
  <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center mx-2 my-3">
      <h1 className='text-4xl border-b-2 pb-2'>Product Management</h1>
      <Link to='Form' className="rounded-md bg-blue-500 p-3 text-white">Upload</Link>
      </div>

      <MainTable />
  </div>
</>
}
