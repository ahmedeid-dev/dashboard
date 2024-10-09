
import Table from './../Table';
const columns = [
    {
        accessorKey: "name.firstName",
        header: "First Name",
        size: 150,
    },
    {
        accessorKey: "name.lastName",
        header: "Last Name",
        size: 150,
    },
    {
        accessorKey: "address",
        header: "Address",
        size: 200,
    },
    {
        accessorKey: "city",
        header: "City",
        size: 150,
    },
    {
        accessorKey: "state",
        header: "State",
        size: 150,
    },
];

const data = [
    {
        name: {
            firstName: "John",
            lastName: "Doe",
        },
        address: "261 Erdman Ford",
        city: "East Daphne",
        state: "Kentucky",
    },
    {
        name: {
            firstName: "Jane",
            lastName: "Doe",
        },
        address: "769 Dominic Grove",
        city: "Columbus",
        state: "Ohio",
    },
    // Add more data as needed
];

const MainTable = () => {
    return <Table columns={columns} data={data} enableActions={true} />;
};

export default MainTable;
