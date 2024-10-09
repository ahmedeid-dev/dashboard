import MainTable from '../../components/table/variables/Columns'
import SimpleDialogDemo from './SubPage/UserDialog'

export default function SupervisorManagement() {
    return <>
        <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center">
            <h1 className='text-4xl border-b-2 pb-2'>Supervisor Management</h1>
            <SimpleDialogDemo
                label='Add'
                action="add"
            />
            </div>

            <MainTable />
        </div>
    </>
}
