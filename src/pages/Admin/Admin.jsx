import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import axios from 'axios';

const columns = [
    { field: 'name', headerName: 'Tên tài liệu', width: 350 },
    { field: 'author', headerName: 'Tác giả', width: 200 },
    { field: 'description', headerName: 'Mô tả', width: 130 },
    { field: 'linkDoc', headerName: 'Link tài liệu', width: 450 },
    { field: 'linkImg', headerName: 'Link hình', width: 450 },
    { field: 'categories', headerName: 'Danh mục', width: 200 },
];

const rows = [
    {
        id: 'abc',
        name: 'heehe',
        author: 'hihihi',
        description: 'huhuhu',
        linkDoc: 'https://',
        linkImg: 'https://',
        categories: '123',
    },
    {
        id: 'def',
        name: 'heehe',
        author: 'hihihi',
        description: 'huhuhu',
        linkDoc: 'https://',
        linkImg: 'https://',
        categories: '123',
    },
    {
        id: 'ghi',
        name: 'heehe',
        author: 'hihihi',
        description: 'huhuhu',
        linkDoc: 'https://',
        linkImg: 'https://',
        categories: '123',
    },
    {
        id: 'jkl',
        name: 'heehe',
        author: 'hihihi',
        description: 'huhuhu',
        linkDoc: 'https://',
        linkImg: 'https://',
        categories: '123',
    },
];

const DataTable = () => {
    const [selectedRows, setSelectedRows] = useState([]);

    const handleAction = (e) => {
        axios.patch('http://127.0.0.1:5000/document/duyet-bai', {
            listIDs: selectedRows.map((r) => r.id),
            status: e.target.innerText.toUpperCase(),
        });
    };

    console.log(selectedRows.map((r) => r.id));

    return (
        <>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    onRowSelectionModelChange={(ids) => {
                        const selectedIDs = new Set(ids);
                        setSelectedRows(rows.filter((row) => selectedIDs.has(row.id)));
                    }}
                />
            </div>
            <div className="mt-3 text-end">
                <Button color="success" variant="contained" onClick={handleAction}>
                    Approve
                </Button>
                <Button color="error" variant="outlined" className="ms-3" onClick={handleAction}>
                    Reject
                </Button>
            </div>
            <pre style={{ fontSize: 10 }}>{JSON.stringify(selectedRows, null, 4)}</pre>
        </>
    );
};

const Admin = () => {
    return (
        <div className="mt-3 px-3">
            <header className="text-center mb-3">
                <TextField label="Tìm kiếm" variant="outlined" />
                <Button variant="contained" className="ms-2">
                    Get link
                </Button>
                <Button variant="outlined" className="ms-2">
                    Submit
                </Button>
            </header>
            <DataTable />
        </div>
    );
};

export default Admin;
