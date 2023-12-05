import { useFormik } from 'formik';
import * as Yup from 'yup';
import './style.scss';
const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            phone: '',
            password: '',
            confirmedPassword: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required('Required')
                .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please enter a valid email address'),
        }),
        onSubmit: (values) => {
            window.alert('Form submitted');
            console.log(values);
        },
    });

    return (
        <section>
            <form className="infoform" onSubmit={formik.handleSubmit}>
                <label> Email address </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    placeholder="Enter your email"
                />
                {formik.errors.email && <p className="errorMsg"> {formik.errors.email} </p>}
                <label> Password </label>
                <input
                    type="text"
                    id="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    placeholder="Enter your password"
                />
                {/* {formik.errors.password && <p className="errorMsg"> {formik.errors.password} </p>} */}
                <button type="submit"> Continue </button>
            </form>
        </section>
    );
};

export default Login;
