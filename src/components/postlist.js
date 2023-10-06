import { Button, Space, Table } from 'antd';
import { deleteSuccess } from '../Redux/action';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './postlist.css'

const data = [
    {
        key: '1',
        postname: 'Admin Panel-How To Get Started The Dashboard Tutorial',
        created: '25/08/2023,3:00 pm',
        updated: ' 25/08/2023,3:00 pm'
    },
    {
        key: '2',
        postname: 'How to write tech blogs',
        created: '20/08/2023, 10:30 pm',
        updated: '20/08/2023, 10:30 pm',
    },
    {
        key: '3',
        postname: 'Checklist for production',
        created: '13/08/2023, 6:00 pm',
        updated: '13/08/2023, 6:00 pm',
    },

    {
        key: '4',
        postname: 'TODO for trips',
        created: '12/08/2023, 11:03 pm',
        updated: '12/08/2023, 11:03 pm',
    },
    {
        key: '5',
        postname: "Do's and Dont's for ATM ",
        created: '06/08/2023, 10:10 pm',
        updated: '06/08/2023, 10:10 pm',

    },
];
function Postlist() {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    // const handleaction = (record, action) => {
    //     if (action === data.key) {
    //         navigate('/')
    //     }

    // }

    const handleDelete = (id) => {

        console.log(id, "delete calling")
        dispatch(deleteSuccess(id))
    }


    const columns = [
        {
            title: 'Post Name',
            dataIndex: 'postname',
            key: 'postname',
            render: (text, record) => <Link to={`/previewpage/${record.key}`}>{text}</Link>

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
                    <Button type='primary'>Unpublish</Button>
                    <Button style={{ backgroundColor: "#ed1e1ed9", color: 'white' }} onClick={handleDelete}>Delete</Button>
                </Space>
            ),
        },
    ];
    return (
        <>
            <Table columns={columns} dataSource={data} pagination={false} className='table_body' />
        </>
    )
}







export default Postlist;