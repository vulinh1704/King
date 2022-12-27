import {Field, Form, Formik} from "formik";
import {loginUser, register} from "../../services/userService";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

export function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <>
            <>
                <Formik
                    initialValues={
                        {}
                    }
                    onSubmit={(values) => {
                        dispatch(loginUser(values)).then(({payload}) => {
                            navigate(payload.user !== undefined ? '/home' : '/login')
                        });

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
                                    <button type="submit" className="login-fieldset-submit">
                                        Đăng nhập
                                    </button>
                                    <Link to={'/register'} style={{textAlign: 'center', fontSize: '10px'}}>Đăng kí ngay
                                        ?</Link>
                                </fieldset>
                            </Form>
                        </main>
                    </div>
                </Formik>
            </>
        </>
    )
}