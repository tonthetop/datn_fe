import { Formik } from 'formik';
import { useState } from 'react'
import * as yup from 'yup';
import Login from './Login'
import ForgotPassword from './ForgotPassword';
const schemaLogin = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
});
const schemaReset = yup.object().shape({
    emailRecover: yup.string(),

})

function FormLoginAndReset() {
    const [forgotPassword, setForgotPassword] = useState(false)
    const handleSetForgotPassWord = () => {
        setForgotPassword(prev => !prev)
    }
    return (
        <div>
            <h3 className="text-center"> Đăng nhập </h3>
            <Formik
                validationSchema={forgotPassword ? schemaReset : schemaLogin}
                onSubmit={e => {
                    if (!forgotPassword)
                        console.log(e.email, e.password)
                    else console.log(e.emailRecover)
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
                    (forgotPassword ?
                        <ForgotPassword
                            handleSubmit={handleSubmit}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            values={values}
                            errors={errors}
                            handleSetForgotPassWord={handleSetForgotPassWord}>
                        </ForgotPassword> : <Login
                            handleSubmit={handleSubmit}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            values={values}
                            errors={errors}
                            handleSetForgotPassWord={handleSetForgotPassWord}
                        ></Login>)
                )}
            </Formik>

        </div>

    );
}

export default FormLoginAndReset