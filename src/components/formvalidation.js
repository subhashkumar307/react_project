import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import { values } from "lodash";
import * as yup from 'yup';

const RegisterComponent = () => {
   return(
    <Formik initialValues = {
        {
            UserName: '',
            Age: '',
            Email: ''
        }
    }
    validationSchema = {
        yup.object({
            UserName: yup.string().min(4, "Name too short").max(10, "Name is too long").required("UserName Required"),
            Age: yup.number("Age must be a number").required("Age Required"),
            Email: yup.string().email("Invalid Email").required("Email Required")
        })
    }
    onSubmit = {values => {alert(JSON.stringify(values))}}
    >
        {
            props => (
                <div>
                    <h2>Register User</h2>
                    <Form>
                        <dl>
                            <dt>User Name</dt>
                            <dd>
                                <Field type="text" name="UserName"></Field>
                            </dd>
                            <dd>
                                <ErrorMessage name="UserName"></ErrorMessage>
                            </dd>
                            <dt>Age</dt>
                            <dd>
                                <Field type="text" name="Age"></Field>
                            </dd>
                            <dd>
                                <ErrorMessage name="Age"></ErrorMessage>
                            </dd>
                            <dt>Email</dt>
                            <dd>
                                <Field type="text" name="Email"></Field>
                            </dd>
                            <dd>
                                <ErrorMessage name="Email"></ErrorMessage>
                            </dd>
                        </dl>
                        <button>Register</button>
                    </Form>
                </div>
            )
        }
    </Formik>
   )
}
export default RegisterComponent;