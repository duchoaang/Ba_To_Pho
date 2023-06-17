import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'name', headerName: 'Tên tài liệu', width: 200 },
    { field: 'author', headerName: 'Tác giả', width: 130 },
    { field: 'description', headerName: 'Mô tả', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const rows = [{ id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 }];

const DataTable = () => {
    return (
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
            />
        </div>
    );
};

const Admin = () => {
    return (
        <div className="mt-3 px-3">
            <header className="text-center mb-3">
                <TextField label="Tìm kiếm" variant="outlined" />
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </header>
            <DataTable />
        </div>
    );
};

export default Admin;
