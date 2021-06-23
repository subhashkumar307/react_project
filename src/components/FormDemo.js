import { useFormik } from 'formik';

const FormDemo = () => {

    const ValidateProduct = product => {
        const errors = {}
        if(!product.Name) {
            errors.Name = "Product Name Required";
        }
        if(!product.Price) {
            errors.Price = "Product Price Required";
        }
        return errors;

    }
    const formik = useFormik({
        initialValues: {
            ProductId: '',
            Name: '',
            Price: ''
        },
        validate: ValidateProduct,
        onSubmit: values => {
            document.write(JSON.stringify(values));
        }
    })
    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Product Id</dt>
                    <dd>
                        <input type="text" name="ProductId" value={formik.values.ProductId} onChange={formik.handleChange} />
                    </dd>
                    <dt>Name</dt>
                    <dd>
                        <input type="text" name="Name" value={formik.values.Name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        <div style={{color:'red'}}>
                            {(formik.touched.Name && formik.errors.Name)?formik.errors.Name:null}
                        </div>
                    </dd>
                    <dt>Price</dt>
                    <dd>
                        <input type="text" name="Price" value={formik.values.Price} onChange={formik.handleChange} />
                    </dd>
                </dl>
                <button>Register</button>
            </form>
        </div>
    )
}
export default FormDemo;