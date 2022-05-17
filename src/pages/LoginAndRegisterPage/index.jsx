import FormLoginAndReset from '../../components/FormControl/FormLoginAndReset.jsx'
import FormRegister from '../../components/FormControl/FormRegister.jsx'
function LoginAndRegisterPage() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <FormLoginAndReset ></FormLoginAndReset>
                </div>
                <div className="col-md-6">
                <FormRegister></FormRegister>
                </div>
            </div>

        </div>
    )
}
export  {LoginAndRegisterPage}