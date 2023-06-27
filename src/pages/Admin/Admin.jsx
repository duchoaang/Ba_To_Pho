import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState, useRef } from 'react';
import request from '~/utils/request';

const DataTable = ({ inputTokenRef }) => {
    const [data, setData] = useState([]);
    const [reload, setReload] = useState(false);
    const [selectedRows, setSelectedRows] = useState([]);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [rowSelectionModel, setRowSelectionModel] = useState([]);
    const columns = [
        { field: 'title', headerName: 'Tên tài liệu', width: 250 },
        { field: 'author', headerName: 'Tác giả', width: 150 },
        { field: 'description', headerName: 'Mô tả', width: 450, editable: true },
        {
            field: 'linkDoc',
            headerName: 'Link tài liệu',
            width: 150,
            renderCell: (params) => (
                <a target="_blank" href={`${params.row.cloudinary_secure_url || '/error'}`}>
                    Link
                </a>
            ),
        },
        {
            field: 'linkImg',
            headerName: 'Link hình',
            width: 150,
            renderCell: (params) => (
                <a target="_blank" href={`${params.row.cloudinary_image_secure_url || '/error'}`}>
                    Link
                </a>
            ),
        },
        { field: 'categories', headerName: 'Danh mục', width: 200 },
        {
            field: 'gem_cost',
            headerName: 'Code Gem',
            width: 150,
            editable: true,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 250,
            renderCell: (params) => {
                const disableButton = selectedRows.map((r) => r.id).includes(params.id);
                const handleClickAction = (e) => {
                    if (inputTokenRef.current.value === '') return;

                    request
                        .patch(
                            `api/documents/${params.id}`,
                            {
                                status: e.target.innerText.toUpperCase(),
                                description: params.row.description,
                                gem_cost: params.row.gem_cost - '0',
                            },
                            {
                                headers: {
                                    access_token: inputTokenRef.current.value,
                                },
                            },
                        )
                        .then(() => {
                            setReload((prev) => !prev);
                        });
                };

                return (
                    <>
                        <Button
                            disabled={disableButton}
                            color="success"
                            variant="contained"
                            onClick={handleClickAction}
                        >
                            Approve
                        </Button>
                        <Button
                            disabled={disableButton}
                            color="error"
                            variant="outlined"
                            className="ms-3"
                            onClick={handleClickAction}
                        >
                            Reject
                        </Button>
                    </>
                );
            },
        },
    ];

    useEffect(() => {
        request.get('api/documents?status=WAITING').then((res) =>
            setData(
                res.map((doc) => ({
                    ...doc,
                    categories: doc.categories.map((cate) => cate.name),
                })),
            ),
        );
    }, [reload]);

    const handleAction = (e) => {
        if (selectedRows.length === 0) return;
        if (inputTokenRef.current.value === '') return;

        setButtonDisabled(true);

        request
            .post('documents/duyet-bai', {
                documents: selectedRows.map((r) => r.id),
                status: e.target.innerText.toUpperCase(),
                token: inputTokenRef.current.value,
            })
            .then(() => {
                setButtonDisabled(false);
                setReload((prev) => !prev);
            });
    };

    console.log(rowSelectionModel);

    return (
        <>
            <div style={{ height: 'calc(100vh - 200px)', width: '100%' }}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    getRowHeight={() => 'auto'}
                    pageSizeOptions={[1, 5, 10]}
                    getEstimatedRowHeight={() => 200}
                    checkboxSelection
                    disableRowSelectionOnClick
                    onRowSelectionModelChange={(newRowSelectionModel) => {
                        setRowSelectionModel(newRowSelectionModel);
                    }}
                    rowSelectionModel={rowSelectionModel}
                    processRowUpdate={(updatedRow, originalRow) => {
                        console.log(updatedRow);
                    }}
                    onProcessRowUpdateError={() => {}}
                />
            </div>
            <div className="mt-3 text-end">
                <Button disabled={buttonDisabled} color="success" variant="contained" onClick={handleAction}>
                    Approve
                </Button>
                <Button
                    disabled={buttonDisabled}
                    color="error"
                    variant="outlined"
                    className="ms-3"
                    onClick={handleAction}
                >
                    Reject
                </Button>
            </div>
        </>
    );
};

const Admin = () => {
    const inputTokenRef = useRef();
    return (
        <div className="mt-3 px-3">
            <header className="text-center mb-3">
                <TextField inputRef={inputTokenRef} label="Token" variant="outlined" />
                <a href="https://www.dropbox.com/developers/apps/info/mmtoae7qmte1tyq" target="_blank">
                    <Button variant="contained" className="ms-2">
                        Get link
                    </Button>
                </a>
            </header>
            <DataTable inputTokenRef={inputTokenRef} />
        </div>
    );
};

export default Admin;
