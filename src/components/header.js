import logo from './image/Logo-1.svg'
import { Modal, Input, Button, Dropdown, Space, Form } from 'antd';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UploadOutlined, SyncOutlined } from '@ant-design/icons';
import './header.css'
import store from '../Redux/store';
import actions from '../Redux/action'
import { useDispatch, useSelector } from 'react-redux';



function Header() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formdatas, setFormDatas] = useState({
        first_name: '',
        last_name: '',
        image: null
    })
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const image = useSelector((state) => state.user)
    console.log(image)


    const handleLogout = () => {
        console.log("logout")
        store.dispatch({
            type: actions.LOGOUT_FORM_REQUEST,
            payload: navigate
        })
    }
    const handleSubmit = () => {
        console.log("updated")
        dispatch(({
            type: actions.PROFILE_UPLOAD_REQUEST,
            payload: formdatas
        }))
    }


    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);

    };
    const items = [
        {
            label: <div onClick={showModal}><SyncOutlined /> Profile</div>,
        },
        {
            type: 'divider',
        },
        {
            label: <div onClick={handleLogout}><UploadOutlined /> Logout</div>,

        }

    ];

    return (
        <>
            <div className='header'>
                <div>
                    <nav className='nav_bar'>
                        <ul>
                            <li><img src={logo} alt='logo_image' className='logo'></img></li>
                            <li><Link to={"/dashboard"} className='dashboard'>Dashboards</Link></li>
                            <li><Link to={"/posts"} className='posts'>Posts</Link ></li>
                        </ul>
                    </nav>
                </div>



                <div className='profile'>
                    <Dropdown
                        menu={{
                            items
                        }}
                        arrow={{ pointAtCenter: true }}
                        trigger={['click']}
                    >
                        <a onClick={(e) => e.preventDefault()}>

                            <Space>

                                {image ? <img src={image.profile_url} className='profile_img'></img> : <img src='https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg' alt='profile_image' className='profile_img'></img>}
                            </Space>
                        </a>
                    </Dropdown>
                </div>
            </div >

            <Modal title="Profile" open={isModalOpen} onCancel={handleCancel} onOk={handleOk} width={300} footer={false} >
                <Form >

                    <Form.Item name="first_name">

                        <div className='modal_item'>
                            <label>First Name*</label>
                            <div className='modal_input'>
                                <Input onChange={e => setFormDatas({ ...formdatas, first_name: e.target.value })}></Input>
                            </div>
                        </div>
                    </Form.Item>
                    <Form.Item name="last_name">
                        <div className='modal_item'>
                            <label>Last Name*</label>
                            <div className='modal_input'>
                                <Input onChange={e => setFormDatas({ ...formdatas, last_name: e.target.value })}></Input>
                            </div>
                        </div>
                    </Form.Item>
                    <Form.Item name="image">
                        <div className='modal_item_img'>
                            <label>Profile Image*</label>
                            <div className='img_input'>

                                <Input type='file' className='img'
                                    onChange={e => {
                                        const file = e.target.files[0]
                                        setFormDatas({ ...formdatas, image: file })

                                    }} ></Input>
                            </div>
                        </div>
                    </Form.Item>
                    <Form.Item name="button">
                        <div className='modal_button'>
                            <Button onClick={handleCancel}>Cancel</Button>
                            <Button type='primary' htmlType='submit' onClick={handleSubmit}>Submit</Button>
                        </div>
                    </Form.Item>
                </Form>
            </Modal >


        </>
    )
}

export default Header;