import { Formik } from 'formik';
import { useState } from 'react'
import * as yup from 'yup';
import Login from './Login'
import ForgotPassword from './ForgotPassword';
import { authApi } from '../../api'
import { useDispatch } from 'react-redux';
import { userAction } from '../../redux/actions';
import { useLocation, useNavigate } from 'react-router-dom'
import { getParamQueries } from '../../utils/getParamQueries';
const schemaLogin = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required(),
});
const schemaReset = yup.object().shape({
    emailRecover: yup.string().required().email(),
})
function FormLoginAndReset() {
    const navigate = useNavigate()
    const location = useLocation()
    const [forgotPassword, setForgotPassword] = useState(false)
    const handleSetForgotPassWord = () => {
        setForgotPassword(prev => !prev)
    }
    //
    const dispatch = useDispatch()
    const handleSubmit = async (data) => {
        try {
            if (!forgotPassword) // đăng nhập
            {
                //call Api
                const result = await authApi.login(data)
                //dispatch action
                const action = userAction.saveUser(result)
                dispatch(action)
                // direct page
                const param = getParamQueries(location)
                if (param?.returnUrl === 'checkout') navigate('/checkout')
                else navigate('/')
            }
            else //khôi phục account
            {

            }
        } catch (error) {

        }
    }
    return (
        <div>
            <h3 className="text-center"> Đăng nhập </h3>
            <Formik
                validationSchema={forgotPassword ? schemaReset : schemaLogin}
                onSubmit={handleSubmit}
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