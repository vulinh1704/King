import './Register.css';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {register} from "../../services/userService";
import {toast} from "react-toastify";

function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const notify = () => toast("🦄 Đăng kí thành công!" , {autoClose: 5000});
    return (
        <>
            <Formik
                initialValues={
                    {}
                }
                onSubmit={async (values) => {
                    await dispatch(register(values)).then(
                        () => {
                            navigate('/login')
                        }
                    );

                }}
            >
                <div className={"font"}>
                    <main className="main">
                        <a className="button-twitter" target="_blank"/>
                        <Form className="login">
                            <svg className="login-sides">
                                <line className="top-right first" x1="50%" x2="100%" y1="0" y2="0"/>
                                <line className="top-left first" x1="50%" x2="0" y1="0" y2="0"/>
                                <line className="right second" x1="100%" x2="100%" y1="0" y2="100%"/>
                                <line className="left second" x1="0" x2="0" y1="0" y2="100%"/>
                                <line className="bottom-left third" x1="0" x2="50%" y1="100%" y2="100%"/>
                                <line className="bottom-right third" x1="100%" x2="50%" y1="100%" y2="100%"/>
                            </svg>
                            <fieldset className="login-fieldset">
                                <Field type="text" placeholder="Tài khoản" className="login-fieldset-field"
                                       name={'username'}/>
                                <Field type="password" placeholder="******" className="login-fieldset-field"
                                       name={'password'}/>
                                <button type="submit" className="login-fieldset-submit" onClick={notify}>
                                    Đăng kí
                                </button>
                                <Link to={'/login'} style={{textAlign: 'center', fontSize: '10px'}}>Đăng nhập !</Link>
                            </fieldset>
                        </Form>
                    </main>
                </div>
            </Formik>
        </>
    )
}

export default Register;