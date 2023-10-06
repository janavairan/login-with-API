import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import signin from './image/Right-1.svg';
import { useDispatch } from "react-redux";
import actions from "../Redux/action";
import './sign_up.css';

function Signup() {
    const dispatch = useDispatch();
    const submitSignup = (data) => {
        dispatch({
            type: actions.SIGNUP_FORM_REQUEST,
            payload: data,
        })
    }
    return (
        <div className="signup_page ">

            <div className="sign_up">
                <Form
                    name="signup"
                    className="login-form"
                    onFinish={submitSignup}
                >
                    <p>Sign up for an account</p>

                    <div className="name_content">
                        <Form.Item
                            name="first_name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Input your First Name!',
                                },
                            ]}
                        >
                            <Input
                                type='text'
                                placeholder="First Name"
                                className="first_name" />
                        </Form.Item>
                        <Form.Item
                            name="last_name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Input your Last Name!',
                                },
                            ]}
                        >
                            <Input
                                type='text'
                                placeholder="Last Name" />
                        </Form.Item>

                    </div>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Email!',
                            },
                        ]}
                    >
                        <Input
                            type='email'
                            placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item
                        name="password_confirmation"
                        dependencies={['password']}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your confirm Password!',
                            },
                        ]}
                    >
                        <Input
                            type="password"
                            placeholder="Confirm Password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Sign up
                        </Button>
                        <div className='available_account' >
                            <span>Already have an Account?</span>
                            <Link to={"/signin"}>Sign in</Link >

                        </div>
                    </Form.Item>
                </Form>

            </div>
            <div className="img_content" >
                <img src={signin} className="sign_image" alt="sign_image"></img>
            </div>
        </div>
    )
}

export default Signup;