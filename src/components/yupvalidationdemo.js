import { useFormik } from "formik";
import * as yup from 'yup';
import { string } from "yup/lib/locale";

const RegisterComponent = () => {
    const formik = useFormik({
        initialValues: {
            UserName: '',
            Age: '',
            Email: ''      
        },
        validationSchema: yup.object({
            UserName: yup.string()
                         .min(4, "Name too short min 4 chars required")
                         .max(10, "Name too long max 10 char only")
                         .required("User Name Required"),
            Age: yup.number()
                     .required("Age Required"),
            Email: yup.string()
                       .required("Email Required")
                       .email("Invalid Email")         
        }),
        onSubmit: values => {
            alert(JSON.stringify(values));
        }
    })
    return(
        <div>
           <form onSubmit={formik.handleSubmit}>
           <h2>Register User</h2>
            <dl>
                <dt>User Name</dt>
                <dd>
                    <input type="text" name="UserName" {...formik.getFieldProps("UserName")} />
                </dd>
                <dd className="text-danger">
                    {(formik.touched.UserName && formik.errors.UserName)?formik.errors.UserName:null}
                </dd>
                <dt>Age</dt>
                <dd>
                    <input type="text" name="Age" {...formik.getFieldProps("Age")} />
                </dd>
                <dd className="text-danger">
                     {(formik.touched.Age && formik.errors.Age)?formik.errors.Age:null}
                </dd>
                <dt>Email</dt>
                <dd>
                    <input type="text" name="Email" {...formik.getFieldProps("Email")} />
                </dd>
                <dd className="text-danger">
                     {(formik.touched.Email && formik.errors.Email)?formik.errors.Email:null}
                </dd>
            </dl>
            <button>Register</button>
           </form>
        </div>
    )
}
export default RegisterComponent;