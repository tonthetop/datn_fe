import { Formik } from 'formik';
import { Row, InputGroup, Button, Form } from 'react-bootstrap'
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { accountApi } from '../../api';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const schema = yup.object().shape({
    name: yup.string().required(),
    phone: yup.string().required().matches(phoneRegExp, 'Phone number is not valid'),
    address: yup.string().required(),
    birth: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required(),
});

function FormRegister() {
    const handleSubmit = async (data) => {
        try {
            const result = await accountApi.add({ ...data, role: "USER" });
            toast.success(result)
        } catch (error) {

        }
    }
    return (
        <div>
            <h3 className="text-center"> Đăng kí thành viên </h3>
            <Formik
                validationSchema={schema}
                onSubmit={handleSubmit}
                onChange={e => console.log(e)}
                initialValues={{
                    name: "",
                    phone: "",
                    address: "",
                    birth: "",
                    email: "",
                    password: "",
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
                            <Form.Group controlId="validationFormikName">
                                <Form.Label>Name</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend">
                                        <i className="fa-solid fa-user"></i>
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="Họ tên"
                                        aria-describedby="inputGroupPrepend"
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        isInvalid={!!errors.name}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.name}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group controlId="validationFormikphone">
                                <Form.Label>Phone</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend">
                                        <i className="fa-solid fa-user"></i>
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="Số điện thoại"
                                        aria-describedby="inputGroupPrepend"
                                        name="phone"
                                        value={values.phone}
                                        onChange={handleChange}
                                        isInvalid={!!errors.phone}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.phone}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group controlId="validationFormikAddress">
                                <Form.Label>Address</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend">
                                        <i className="fa-solid fa-envelope"></i>
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="Địa chỉ"
                                        aria-describedby="inputGroupPrepend"
                                        name="address"
                                        value={values.address}
                                        onChange={handleChange}
                                        isInvalid={!!errors.address}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.address}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group controlId="validationFormikBirth">
                                <Form.Label>Date Of Birth</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend">
                                        <i className="fa-solid fa-envelope"></i>
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="date"
                                        placeholder="Ngày Sinh"
                                        aria-describedby="inputGroupPrepend"
                                        name="birth"
                                        value={values.birth}
                                        onChange={handleChange}
                                        isInvalid={!!errors.birth}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.birth}
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