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
    const columns = [
        { field: 'title', headerName: 'Tên tài liệu', width: 250 },
        { field: 'author', headerName: 'Tác giả', width: 150 },
        { field: 'description', headerName: 'Mô tả', width: 130 },
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
            field: 'codeGem',
            headerName: 'Code Gem',
            width: 150,
            renderCell: () => {
                return <Input placeholder="Placeholder" value="100" />;
            },
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 250,
            renderCell: (params) => {
                const disableButton = selectedRows.map((r) => r.id).includes(params.id);
                const handleClickAction = () => {
                    if (inputTokenRef.current.value === '') return;
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

    return (
        <>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    disableRowSelectionOnClick
                    onRowSelectionModelChange={(ids) => {
                        const selectedIDs = new Set(ids);
                        setSelectedRows(data.filter((row) => selectedIDs.has(row.id)));
                    }}
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
