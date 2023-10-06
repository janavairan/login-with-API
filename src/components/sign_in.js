
import { Button, Checkbox, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import signin from './image/Right-1.svg'
import { useDispatch } from 'react-redux';
import actions from '../Redux/action';
import './sign_in.css'


function Signin() {

    const dispatch = useDispatch();
    const router = useNavigate();

    console.log({ router })

    const handleSubmit = (value) => {
        // e.preventDefault();
        dispatch({
            type: actions.SIGNIN_FORM_REQUEST,
            payload: { value, router },
        })
        router('/dashboard')
    }

    return (
        <div className='signin_page'>
            <div className='sign_in'>

                <Form
                    name="normal_login"
                    className="login-form"
                    onFinish={handleSubmit}
                >
                    <p>Sign in to your account</p>
                    <Form.Item
                        name="email" rules={[{ required: true, message: 'Please input your Username!' }]}>
                        <Input name='Email' type='email' placeholder="Email" />
                    </Form.Item>
                    <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
                        <Input
                            name='Password'
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <div className='checkbox'>
                        <Form.Item name="remember" noStyle>
                            <Checkbox><span>Save password</span></Checkbox>
                        </Form.Item>

                        <a>Forgot password?</a>
                    </div>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">Sign in</Button>
                        <div className='create_account' >
                            <span>Don't have an Account?</span>
                            <Link to={"/signup"}> Sign up</Link>
                        </div>

                    </Form.Item>
                </Form>
            </div>

            <div className="img_content_signin " ><img src={signin} className="signin_image" alt="img_content"></img></div>

        </div>
    )
}

export default Signin