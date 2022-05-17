import { Row, InputGroup, Button, Form } from 'react-bootstrap'
function ForgotPassword({ handleSubmit, values, errors, handleChange, handleSetForgotPassWord }) {
    return (
        <Form className="my-3" noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group controlId="validationFormikEmail">
                    <Form.Label>Quên mật khẩu</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">
                            <i className="fa-solid fa-envelope"></i>
                        </InputGroup.Text>
                        <Form.Control
                            type="text"
                            placeholder="Email"
                            aria-describedby="inputGroupPrepend"
                            name="emailRecover"
                            value={values.emailRecover}
                            onChange={handleChange}
                            isInvalid={!!errors.emailRecover}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.emailRecover}
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Row>
            <Row className="mb-3 ">
                <div className="text-center">
                    <Button type="submit" className=" mb-2 col-12" variant="outline-dark">Reset Account</Button>
                    <span className="text-dark text-decoration-underline" role="button" onClick={handleSetForgotPassWord}>Hủy</span>
                </div>

            </Row>
        </Form>
    )
}
export default ForgotPassword