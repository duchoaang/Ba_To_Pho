import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState, useRef } from 'react';
import get from '~/utils/request/get';

const DataTable = ({ inputTokenRef, setError }) => {
    const [data, setData] = useState([]);
    const [reload, setReload] = useState(false);
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
                const handleClickAction = (e) => {
                    if (e.target.innerText.toUpperCase() === 'REJECT') {
                        import('~/utils/request').then((module) => {
                            module
                                .patch(`api/documents/${params.id}`, {
                                    status: 'REJECT',
                                })
                                .then(() => {
                                    setReload((prev) => !prev);
                                });
                        });
                        return;
                    }
                    if (inputTokenRef.current.value === '') {
                        setError(true);
                        return;
                    }

                    import('~/utils/request').then((module) => {
                        module
                            .patch(
                                `api/documents/${params.id}`,
                                {
                                    status: 'ACCEPT',
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
                    });
                };

                return (
                    <>
                        <Button color="success" variant="contained" onClick={handleClickAction}>
                            Accept
                        </Button>
                        <Button color="error" variant="outlined" className="ms-3" onClick={handleClickAction}>
                            Reject
                        </Button>
                    </>
                );
            },
        },
    ];

    useEffect(() => {
        get('api/documents?status=WAITING').then((res) =>
            setData(
                res.map((doc) => ({
                    ...doc,
                    categories: doc.categories.map((cate) => cate.name),
                })),
            ),
        );
    }, [reload]);

    return (
        <div style={{ height: 'calc(100vh - 150px)', width: '100%' }}>
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
                disableRowSelectionOnClick
                onRowSelectionModelChange={(newRowSelectionModel) => {
                    setRowSelectionModel(newRowSelectionModel);
                }}
                rowSelectionModel={rowSelectionModel}
            />
        </div>
    );
};

const Admin = () => {
    const inputTokenRef = useRef();
    const [error, setError] = useState(false);
    return (
        <div className="mt-3 px-3">
            <header className="text-center mb-3">
                <TextField
                    inputRef={inputTokenRef}
                    label="Token"
                    variant="outlined"
                    error={error}
                    helperText={error ? 'Bạn cần nhập token' : ''}
                    onChange={() => {
                        setError(false);
                    }}
                />
                <a href="https://www.dropbox.com/developers/apps/info/mmtoae7qmte1tyq" target="_blank">
                    <Button variant="contained" className="ms-2">
                        Get link
                    </Button>
                </a>
            </header>
            <DataTable inputTokenRef={inputTokenRef} setError={setError} />
        </div>
    );
};

export default Admin;
