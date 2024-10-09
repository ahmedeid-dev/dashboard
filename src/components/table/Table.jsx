/* eslint-disable react/prop-types */
import { useMemo, useState } from "react";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import DeleteDialog from "../delete/DeleteDialog";
import DisableDialog from "../disable/DisableDialog";
import ScrollDialog from "../Dialog/Dialog";

const Table = ({ columns, data, enableActions = false }) => {
    const [editDialogData, setEditDialogData] = useState(null);
    const [deleteDialogId, setDeleteDialogId] = useState(null);
    const [disableDialogId, setDisableDialogId] = useState(null); // State for disable dialog

    const memoizedColumns = useMemo(() => {
        const baseColumns = columns.map(column => ({
            ...column,
            size: column.size || 150 // Default size if not provided
        }));

        if (enableActions) {
            baseColumns.push({
                id: "actions",
                header: "Actions",
                size: 100,
                Cell: ({ row }) => (
                    <div className="flex gap-2">
                        <ScrollDialog
                            label='Edit'
                            action="edit"
                            icon="FaPlus"
                            onClick={() => openEditDialog(row.original)}
                        />
                        <DeleteDialog
                        name="Delete"
                            id={row.original.id ||5} // Assuming each row has an 'id' field
                            onConfirm={() => handleDelete(row.original.id)} // Pass id to delete function
                        />
                        <DisableDialog
                            id={row.original.id ||5} // Assuming each row has an 'id' field
                            isEnabled={false}
                            name='Disable'
                            onConfirm={() => handleDisable(row.original.id)} // Pass id to delete function
                        />
                    </div>
                ),
            });
        }

        return baseColumns;
    }, [columns, enableActions]);

    const table = useMaterialReactTable({
        columns: memoizedColumns,
        data,
    });

    const openEditDialog = (rowData) => {
        setEditDialogData(rowData);
    };

    // eslint-disable-next-line no-unused-vars
    const handleEdit = (rowData) => {
        console.log("Edit", rowData);
    };

    const handleDelete = (id) => {
        console.log("Delete ID:", id);
        setDeleteDialogId(null);
    };

    const handleDisable = (id) => {
        console.log("Disable ID:", id); // Log the ID to the console
        setDisableDialogId(null);
    };

    return (
        <>
            <MaterialReactTable table={table} />
            {editDialogData && (
                <ScrollDialog
                    label='Edit'
                    action="edit"
                    rowData={editDialogData}
                    onClose={() => setEditDialogData(null)}
                />
            )}
            {deleteDialogId && (
                <DeleteDialog
                    name='ahmed'
                    label='Delete'
                    id={deleteDialogId}
                    onConfirm={handleDelete}
                    onClose={() => setDeleteDialogId(null)}
                />
            )}
            {disableDialogId && (
                <DisableDialog
                    name='ahmed'
                    label='Disable'
                    id={disableDialogId}
                    onConfirm={handleDisable}
                    onClose={() => setDisableDialogId(null)}
                />
            )}
        </>
    );
};

export default Table;
