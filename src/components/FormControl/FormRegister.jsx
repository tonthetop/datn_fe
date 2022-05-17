import { Formik } from 'formik';
import { Row, InputGroup, Button, Form } from 'react-bootstrap'
import * as yup from 'yup';
const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required(),
});

function FormRegister() {
    return (
        <div>
            <h3 className="text-center"> Đăng kí thành viên </h3>
            <Formik
                validationSchema={schema}
                onSubmit={e => {
                    console.log(e)
                }}
                onChange={e => console.log(e)}
                initialValues={{
                    email: '',
                    password: '',
                }}
            >
                {({ handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    errors,
                }) => (
                    <Form className="my-5" noValidate onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group controlId="validationFormikFistName">
                                <Form.Label>First Name</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend">
                                        <i className="fa-solid fa-user"></i>
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="Họ"
                                        aria-describedby="inputGroupPrepend"
                                        name="firstName"
                                        value={values.firstName}
                                        onChange={handleChange}
                                        isInvalid={!!errors.firstName}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.firstName}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group controlId="validationFormikLastName">
                                <Form.Label>Last Name</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend">
                                        <i className="fa-solid fa-user"></i>
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="Tên"
                                        aria-describedby="inputGroupPrepend"
                                        name="lastName"
                                        value={values.lastName}
                                        onChange={handleChange}
                                        isInvalid={!!errors.lastName}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.lastName}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group controlId="validationFormikEmail">
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
                            <Form.Group controlId="validationFormikPassword">
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
                                <Button type="submit" className="mb-2 col-12" variant="outline-dark">Đăng kí</Button>
                            </div>
                        </Row>
                    </Form>
                )}
            </Formik>

        </div>

    );
}

export default FormRegister