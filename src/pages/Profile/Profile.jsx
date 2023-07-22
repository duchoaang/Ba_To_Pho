import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Profile.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import Divider from '@mui/material/Divider';
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>;
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

import get from '~/utils/request/get';
import post from '~/utils/request/post';
import patch from '~/utils/request/patch';
const Profile = () => {
    const { id } = useParams();
    const [value, setValue] = useState(0);
    const [infoUser, setInfoUser] = useState({
        id: id,
        name: '',
        avatar: '',
        email: '',
        gem: 0,
        confirmEmail: false,
        docsCount: {
            userDocs: 0,
            waitDocs: 0,
            favDocs: 0,
            resultDocs: 0,
        },
    });
    const [docsType, setDocsType] = useState('userDocs');
    const [listDocs, setListDocs] = useState([]);
    const [formInfoUser, setFormInfoUser] = useState({
        fullName: '',
        bio: '',
        socialMedia: '',
        address: '',
        phoneNumber: '',
    });
    const decodeId = decodeURIComponent(id);
    const sendDataToServer = () => {
        patch(`users/${decodeId}`, { key: formInfoUser }).then(() => {
            fetchUserData();
        });
    };

    const handleChange = (_, newValue) => {
        setValue(newValue);
    };

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
                const response = await get(`profile/${decodeId}`);

                if (handleDocsType.hasOwnProperty(docsType)) {
                    handleDocsType[docsType](response);
                }
            } catch (error) {}
        };

        fetchData();
    }, [docsType]);

    const fetchUserData = () => {
        get(`profile/${decodeId}`).then((data) => {
            setInfoUser({
                id: data.id,
                name: data.name,
                avatar: data.avatar,
                email: data.email,
                gem: data.gem,
                confirmEmail: data.is_confirm,
                docsCount: {
                    userDocs: data.userDocs.length,
                    waitDocs: data.waitDocs.length,
                    favDocs: data.favDocs.length,
                    resultDocs: data.resultDocs.length,
                },
            });
            setFormInfoUser({
                fullName: data.name,
                bio: data.bio,
                socialMedia: data.social_media,
                address: data.address,
                phoneNumber: data.phone_number,
            });
        });
    };
    useEffect(fetchUserData, [id]);
    const handleResend = () => {
        post('/resend-confirm', { user_id: infoUser.id })
        .then((res)=> {
            alert("Đã gửi email xác thực lại")
        }).catch((error) => {
            alert("loi")
        });
    }
    return (
        <section style={{ backgroundColor: '#eee' }}>
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol>
                        <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                            <MDBBreadcrumbItem>
                                <a href="#">Home</a>
                            </MDBBreadcrumbItem>
                            <MDBBreadcrumbItem>
                                <a href="#">{infoUser.name}</a>
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
                                    src={infoUser.avatar}
                                    alt="avatar"
                                    className="rounded-circle"
                                    style={{ width: '150px' }}
                                    fluid
                                />
                                <p className="">{infoUser.name}</p>
                                <p className="">Email: {infoUser.email}</p>
                                <p>Số gem hiện tại : {infoUser.gem}</p>
                                {!infoUser.confirmEmail && (
                                    <div className="d-flex justify-content-center mb-2">
                                        <Button variant="contained" onClick={handleResend} style={{ fontSize: '13px', marginTop: '-10px' }}>
                                           Xác thực email
                                        </Button>
                                    </div>
                                )}
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
                                <div className={cx('changeInfo', 'changeName')}>
                                    <h1>Họ và tên</h1>
                                    <TextField
                                        style={{ width: '96%' }}
                                        size="small"
                                        id="outlined-basic"
                                        placeholder="Họ tên"
                                        variant="outlined"
                                        value={formInfoUser.fullName}
                                        onChange={(e) => setFormInfoUser({ ...formInfoUser, fullName: e.target.value })}
                                    />
                                </div>
                                <div className={cx('changeInfo', 'changeBio')}>
                                    <h1>Giới thiệu</h1>
                                    <TextField
                                        type="text"
                                        style={{ width: '96%' }}
                                        size="medium"
                                        id="outlined-basic"
                                        placeholder="Giới thiệu"
                                        variant="outlined"
                                        value={formInfoUser.bio}
                                        onChange={(e) => setFormInfoUser({ ...formInfoUser, bio: e.target.value })}
                                    />
                                </div>
                                <div className={cx('changeInfo', 'changeSocialMedia')}>
                                    <h1>Mạng xã hội</h1>
                                    <TextField
                                        type="text"
                                        style={{ width: '96%' }}
                                        size="small"
                                        id="outlined-basic"
                                        placeholder="Link facebook/instagram/twitter"
                                        variant="outlined"
                                        value={formInfoUser.socialMedia}
                                        onChange={(e) =>
                                            setFormInfoUser({ ...formInfoUser, socialMedia: e.target.value })
                                        }
                                    />
                                </div>
                                <div className={cx('changeInfo', 'changeAddress')}>
                                    <h1>Địa chỉ</h1>
                                    <TextField
                                        type="text"
                                        style={{ width: '96%' }}
                                        size="small"
                                        id="outlined-basic"
                                        placeholder="Địa chỉ"
                                        variant="outlined"
                                        value={formInfoUser.address}
                                        onChange={(e) => setFormInfoUser({ ...formInfoUser, address: e.target.value })}
                                    />
                                </div>
                                <div className={cx('changeInfo', 'changePhone')}>
                                    <h1>Số điện thoại</h1>
                                    <TextField
                                        type="text"
                                        style={{ width: '96%' }}
                                        size="small"
                                        id="outlined-basic"
                                        placeholder="Số điện thoại"
                                        variant="outlined"
                                        value={formInfoUser.phoneNumber}
                                        onChange={(e) =>
                                            setFormInfoUser({ ...formInfoUser, phoneNumber: e.target.value })
                                        }
                                    />
                                </div>
                            </Box>
                            <div className={cx('btnChangeInfo')}>
                                <Button onClick={sendDataToServer} variant="contained" color="success" size="small">
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
                                <Tabs className={cx('tabController')} value={value} onChange={handleChange} centered>
                                    <Tab
                                        name="userDocs"
                                        style={{ fontSize: '13px' }}
                                        onClick={(e) => setDocsType(e.target.name)}
                                        label={`Tài liệu cá nhân (${infoUser.docsCount.userDocs})`}
                                    />
                                    <Tab
                                        name="waitDocs"
                                        style={{ fontSize: '13px' }}
                                        onClick={(e) => setDocsType(e.target.name)}
                                        label={`Tài liệu chờ duyệt (${infoUser.docsCount.waitDocs})`}
                                    />
                                    <Tab
                                        name="resultDocs"
                                        style={{ fontSize: '13px' }}
                                        onClick={(e) => setDocsType(e.target.name)}
                                        label={`Kết quả duyệt (${infoUser.docsCount.resultDocs})`}
                                    />
                                    <Tab
                                        name="favDocs"
                                        style={{ fontSize: '13px' }}
                                        onClick={(e) => setDocsType(e.target.name)}
                                        label={`Tài liệu yêu thích (${infoUser.docsCount.favDocs})`}
                                    />
                                </Tabs>
                            </Box>
                        </div>

                        <div className={cx('searchParent')}>
                            <span className={cx('iconSearch', 'material-icons')}>search</span>
                            <input className={cx('search')} type="text" placeholder="Tìm kiếm tài liệu của bạn..." />
                        </div>
                        <div className="contentDocs">
                            {listDocs.map((docs, index) => (
                                <List
                                    key={index}
                                    sx={{
                                        width: '100%',
                                        bgcolor: 'background.paper',
                                    }}
                                >
                                    <ListItem button>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <ImageIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={docs.title} secondary="Jan 9, 2014" />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                </List>
                                // {/* <div>{docs.title}</div> */}
                            ))}
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
};
export default Profile;
