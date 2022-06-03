import { Row, InputGroup, Button, Form } from 'react-bootstrap'
function Login({ handleSubmit, values, errors, handleChange, handleSetForgotPassWord }) {
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
            </Row>
        </Form>
    )
}
export default Login