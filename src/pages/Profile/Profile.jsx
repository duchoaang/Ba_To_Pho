import styles from './Profile.module.scss';
import classNames from 'classnames/bind';
import 'bootstrap/dist/css/bootstrap.min.css';
const cx = classNames.bind(styles);
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>;
import { Link } from 'react-router-dom';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem,
} from 'mdb-react-ui-kit';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TextField from '@mui/material/TextField';


const Profile = () => {
    const { id } = useParams();
    const [value, setValue] = useState(0);
    const [infoUser, setInfoUser] = useState([]);
    const [docsType, setDocsType] = useState('userDocs');
    const [listDocs, setListDocs] = useState([]);
    const [totalWaitDocs, setTotalWaitDocs] = useState("");
    const [totalResultDocs, setTotalResultDocs] = useState("");
    const [totalFavDocs, setTotalFavDocs] = useState("");
    const [totalUserDocs, setTotalUserDocs] = useState("");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const decodeId = decodeURIComponent(id);
 
    const handleDocsType = {
        waitDocs: (responseData) => {
            setListDocs(responseData.waitDocs);
            
        },
        resultDocs: (responseData) => {
            setListDocs(responseData.resultDocs);
        },
        userDocs: (responseData) => {
            setListDocs(responseData.userDocs);
        },
        favDocs: (responseData) => {
            setListDocs(responseData.favDocs);
        },
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:5000/profile/${decodeId}`);
                const responseData = response.data;

                if (handleDocsType.hasOwnProperty(docsType)) {
                    handleDocsType[docsType](responseData);
                }
            } catch (error) {
                console.log('Không gửi được yêu cầu.');
            }
        };

        fetchData();
    }, [docsType]);
   
    useEffect(() => {
        axios
            .get(`http://127.0.0.1:5000/profile/${decodeId}`)
            .then((response) => {
                return response.data;
                

            }).then((data) =>{
                setInfoUser({
                    id: data.id,
                    username: data.username,
                    avatar: data.avatar,
                    email: data.email,
                });
                setTotalUserDocs(data.userDocs.length)
                setTotalWaitDocs(data.waitDocs.length)
                setTotalFavDocs(data.favDocs.length)
                setTotalResultDocs(data.resultDocs.length)
                // setTotalUserDocs(data.userDocs.length)
                // setTotalUserDocs(data.userDocs.length)
            })
            .catch((error) => {
                console.log('Ko gui dc');
            });
        // Sử dụng giá trị `decodedId` trong ứng dụng của bạn
    }, [id]);
  
    return (
        <>
            <section style={{ backgroundColor: '#eee' }}>
                <MDBContainer className="py-5">
                    <MDBRow>
                        <MDBCol>
                            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                                <MDBBreadcrumbItem>
                                    <a href="#">Home</a>
                                </MDBBreadcrumbItem>
                                <MDBBreadcrumbItem>
                                    <a href="#">{infoUser.username}</a>
                                </MDBBreadcrumbItem>
                                <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
                            </MDBBreadcrumb>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol lg="4">
                            <MDBCard className="mb-4">
                                <MDBCardBody className="text-center">
                                    <MDBCardImage
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                        alt="avatar"
                                        className="rounded-circle"
                                        style={{ width: '150px' }}
                                        fluid
                                    />
                                    <p className="text-muted mb-1">{infoUser.username}</p>
                                    <p className="text-muted mb-4">Email: {infoUser.email}</p>
                                    <div className="d-flex justify-content-center mb-2">
                                        <Button variant="contained" style={{ fontSize: '13px', marginTop: '-10px' }}>
                                            Chỉnh sửa thông tin
                                        </Button>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>

                            <MDBCard className="mb-4 mb-lg-0">
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '50%' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <div className={cx('changeName')}>
                                        <h1>Tên người dùng</h1>
                                        <TextField
                                            style={{ width: '96%' }}
                                            size="small"
                                            id="outlined-basic"
                                            label="Tên"
                                            variant="outlined"
                                        />
                                    </div>
                                    <div className={cx('changeName')}>
                                        <h1>Email</h1>
                                        <TextField
                                            type="email"
                                            style={{ width: '96%' }}
                                            size="small"
                                            id="outlined-basic"
                                            label="Email"
                                            variant="outlined"
                                        />
                                    </div>
                                    <div className={cx('changeName')}>
                                        <h1>Mật khẩu</h1>
                                        <TextField
                                            type="password"
                                            style={{ width: '96%' }}
                                            size="small"
                                            id="outlined-basic"
                                            label="Mật khẩu"
                                            variant="outlined"
                                        />
                                    </div>
                                    <div className={cx('changeName')}>
                                        <h1>Địa chỉ</h1>
                                        <TextField
                                            style={{ width: '96%' }}
                                            size="small"
                                            id="outlined-basic"
                                            label="Địa chỉ"
                                            variant="outlined"
                                        />
                                    </div>
                                    <div className={cx('changeName')}>
                                        <h1>Số điện thoại</h1>
                                        <TextField
                                            style={{ width: '96%' }}
                                            size="small"
                                            id="outlined-basic"
                                            label="Số điện thoại"
                                            variant="outlined"
                                        />
                                    </div>
                                </Box>
                                <div className={cx('btnChangeInfo')}>
                                    <Button variant="contained" color="success" size="small">
                                        Lưu
                                    </Button>
                                    <Button variant="contained" color="inherit" size="small">
                                        Hủy
                                    </Button>
                                </div>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol style={{ background: '#fff' }} lg="8">
                            <div className="div" style={{ width: '100%', background: '#fff' }}>
                                <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                    <Tabs
                                        className={cx('tabController')}
                                        value={value}
                                        onChange={handleChange}
                                        centered
                                    >
                                        <Tab
                                            name="userDocs"
                                            style={{ fontSize: '13px' }}
                                            onClick={(e) => setDocsType(e.target.name)}
                                            label={`Tài liệu cá nhân (${totalUserDocs})`}
                                            
                                        />
                                        
                                        <Tab
                                            name="waitDocs"
                                            style={{ fontSize: '13px' }}
                                            onClick={(e) => setDocsType(e.target.name)}
                                            label={`Tài liệu chờ duyệt (${totalWaitDocs})`}
                                        />
                                        <Tab
                                            name="resultDocs"
                                            style={{ fontSize: '13px' }}
                                            onClick={(e) => setDocsType(e.target.name)}
                                            label={`Kết quả duyệt (${totalResultDocs})`}
                                        />
                                        <Tab
                                            name="favDocs"
                                            style={{ fontSize: '13px' }}
                                            onClick={(e) => setDocsType(e.target.name)}
                                            label={`Tài liệu yêu thích (${totalFavDocs})`}
                                        />
                                    </Tabs>
                                </Box>
                            </div>

                            <div className={cx('searchParent')}>
                                <span className={cx('iconSearch', 'material-icons')}>search</span>
                                <input
                                    className={cx('search')}
                                    type="text"
                                    placeholder="Tìm kiếm tài liệu của bạn..."
                                />
                            </div>
                            <div className="contentDocs">
                                {listDocs.map((docs) => (
                                    <>
                                        <div>{docs.title}</div>
                                    </>
                                ))}
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </>
    );
};
export default Profile;
