import { Row, InputGroup, Button, Form } from 'react-bootstrap'
import { GoogleLogin } from '@react-oauth/google';
import { authApi } from '../../api';
import { toast } from 'react-toastify'
import { useLoading } from '../../hooks/useLoading';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { getParamQueries } from '../../utils/getParamQueries';
import { userAction } from '../../redux/actions';

function Login({ handleSubmit, values, errors, handleChange, handleSetForgotPassWord }) {
    const navigate = useNavigate()
    const location = useLocation()
    const [showLoading, hideLoading] = useLoading()
    const dispatch = useDispatch()
    const handleSuccessLogin = async (credentialResponse) => {
        try {
            console.log(credentialResponse)
            showLoading()
            //call Api
            const result = await authApi.loginWithGoogle(credentialResponse.credential)
            hideLoading()
            //dispatch action
            const action = userAction.saveUser(result)
            dispatch(action)
            // direct page
            const param = getParamQueries(location)
            if (param?.returnUrl === 'checkout') navigate('/checkout')
            else navigate('/')
            console.log("result after login", result)
        } catch (error) {
            toast.warning("Error: ", error.message)
            hideLoading()
        }
    }
    return (
        <Form className="my-5" noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group controlId="validationFormikEmailLogin">
                    <Form.Label>Email</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">
                            <i className="fa-solid fa-envelope"></i>
                        </InputGroup.Text>
                        <Form.Control
                            type="text"
                            placeholder="Email"
                            aria-describedby="inputGroupPrepend"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group controlId="validationFormikPasswordLogin">
                    <Form.Label>Password</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">
                            <i className="fa-solid fa-lock"></i>
                        </InputGroup.Text>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            aria-describedby="inputGroupPrepend"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            isInvalid={!!errors.password}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.password}
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <div className="text-center">
                    <Button type="submit" className="mb-2 col-12" variant="outline-dark">Login</Button>
                    <span className="text-dark text-decoration-underline" role="button" onClick={handleSetForgotPassWord}>Quên mật khẩu ?</span>
                </div>
                <span className='text-center  mt-2'> hoặc</span>
                <div className="d-flex justify-content-center mt-2">
                    <GoogleLogin
                        onSuccess={handleSuccessLogin}
                        onError={() => {
                            toast.warning('Login Failed')
                        }}
                    />
                </div>
            </Row>
        </Form>
    )
}
export default Login