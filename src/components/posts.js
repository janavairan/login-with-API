import { Button, Input, Modal, Form, Table, Space } from "antd"
import Header from "./header"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteRequest, getPostRequest, publishData, createblogRequest } from "../Redux/action";
import store from "../Redux/store"
import './posts.css'
import './postlist.css'
import TextArea from "antd/es/input/TextArea"
import { useNavigate } from 'react-router-dom';
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons'





function Posts() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const posts = useSelector(state => state.posts)

    const [currentPage, setCurrentPage] = useState(1)
    function changePage(page) {
        if (page === 'next') {
            setCurrentPage(prevPage => prevPage + 1)
        }
        else if (page === 'previous' && currentPage === 1) {
            setCurrentPage(1)
        }
        else if (page === 'previous') {
            setCurrentPage(prevPage => prevPage - 1)
        }
        console.log(currentPage);
    }
    const handlePreview = (key) => {
        console.log(key);
        navigate(`https://react-assignment-api.mallow-tech.com/api/posts/${key}`)

    }


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formdatas, setFormDatas] = useState({
        name: '',
        image: null,
        content: '',
    })


    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = (data) => {
        console.log(data, 'createpost')
        dispatch(createblogRequest({ formdatas }))
        setIsModalOpen(false)
    }
    const handleDelete = (id) => {

        console.log(id, "delete calling")
        dispatch(deleteRequest(id))
    }
    // console.log("posts:", );
    useEffect(() => {
        store.dispatch(getPostRequest(currentPage))
    }, [currentPage])

    const handlePublishBlog = (postId, isPublised) => {
        console.log(postId, isPublised);
        dispatch(publishData({ postId, isPublised }))
    };

    function formatTime(timestamp) {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const hour = date.getUTCHours();
        const period = hour >= 12 ? "pm" : "am";
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getUTCHours()).padStart(2, '0');
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');
        const formattedHours = hours % 12 || 12;
        return (`${day}/${month}/${year}, ${formattedHours}:${minutes}${period}`);
    }


    const dataSource = posts.map(post => (

        {
            key: post.id,
            postname: post.name,
            created: formatTime(post.created_at),
            updated: formatTime(post.update_at),
            isPublished: post.is_published
        }
    ))

    const columns = [
        {
            title: 'Post Name',
            dataIndex: 'postname',
            key: 'postname',
            render: (text, record) => <a onClick={() => handlePreview(record.key)} style={{ color: 'black' }}>{text}</a>

        },
        {
            title: 'Created at',
            dataIndex: 'created',
            key: 'created',
        },
        {
            title: 'Updated at',
            dataIndex: 'updated',
            key: 'updated',
        },

        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type='primary' onClick={() => handlePublishBlog(record.key, record.isPublished)}>{record.isPublished ? 'Unpublish' : 'Publish'}</Button>
                    <Button style={{ backgroundColor: "#ed1e1ed9", color: 'white' }} onClick={handleDelete(record.key)}>Delete</Button>
                </Space>
            ),
        },
    ];

    return (
        <>
            <Header></Header>
            <div className="body_container">
                <div className="container">
                    <div>
                        <h1>Posts</h1>
                    </div>
                    <div className="input-field">
                        <Input placeholder="Search"></Input>
                        <Button type="primary" onClick={showModal}>Create</Button>
                    </div>
                </div>
                <Table columns={columns} dataSource={dataSource} pagination={false} className='table_body' />
                <Button onClick={() => changePage('previous')} icon={<ArrowLeftOutlined />} style={{ backgroundColor: '#eee' }}>Previous</Button>
                <Button onClick={() => changePage('next')} icon={<ArrowRightOutlined />} style={{ backgroundColor: '#eee', marginLeft: '7px' }}>Next</Button>
            </div>
            <Modal title="Title" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={300} footer={false} >
                <Form>
                    <Form.Item name="name">
                        <div className='modal_item'>
                            <label>Blog Title*</label>
                            <div className='modal_input'>
                                <Input onChange={e => setFormDatas({ ...formdatas, name: e.target.value })}></Input>
                            </div>
                        </div>
                    </Form.Item>
                    <Form.Item name="image">
                        <div className='modal_item'>
                            <label>Cover Image*</label>
                            <div >
                                <Input type="file" className="img"
                                    onChange={e => {
                                        const file = e.target.files[0]
                                        setFormDatas({ ...formdatas, image: file })

                                    }}></Input>
                            </div>

                        </div>
                    </Form.Item>
                    <Form.Item name="content">
                        <div className='modal_item'>
                            <label>Content*</label>
                            <div className='modal_input_content'>
                                <TextArea onChange={e => setFormDatas({ ...formdatas, content: e.target.value })}></TextArea>
                            </div>
                        </div>
                    </Form.Item>
                    <Form.Item>
                        <div className='modal_button'>
                            <Button onClick={handleCancel}>Cancel</Button>
                            <Button type='primary' htmlType="submit" onClick={handleSubmit}>Submit</Button>
                        </div>
                    </Form.Item>

                </Form>
            </Modal >
        </>
    )
}
export default Posts