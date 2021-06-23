import React from "react";
import axios from "axios";
import {useFormik}  from "formik";
//import { useLocation } from 'react-router';
//import RegisterComponent form './yupvalidationdemo';

function RegisterProduct(){
    const formik = useFormik({
        initialValues : {
            CategoryId: 0,
            Name: '',
            Price: 0,
            Stock: false
        },
        onSubmit : values => {
            axios.post("http://127.0.0.1:3030/addproducts",values);
            alert("Record Inserted");
            //useLocation
        }
    })
    return(
        <>
            <form onSubmit={formik.handleSubmit}>
                <h3>Register Product</h3>
                <dl>
                    <dt>Category Id</dt>
                    <dd>
                        <input type="text" name="CategoryId" onChange={formik.handleChange} value={formik.values.CategoryId} />
                    </dd>
                    <dt>Name</dt>
                    <dd>
                        <input type="text" name="Name" onChange={formik.handleChange} value={formik.values.Name} />
                    </dd>
                    <dt>Price</dt>
                    <dd>
                        <input type="text" name="Price" onChange={formik.handleChange} value={formik.values.Price} />
                    </dd>
                    <dt>Stock</dt>
                    <dd className="form-check from-switch">
                        <input type="checkbox" className="form-check-input" name="Stock" onChange={formik.handleChange} value={formik.values.Stock} />
                    </dd>
                </dl>
                <button>Register</button>
            </form>
        </>
    )

}

export default class ProductDetailsComponent extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            products : []
        }
    }
    componentDidMount(){
        axios.get("http://127.0.0.1:3030/getproducts")
        .then(response => {
            this.setState({
                products: response.data
            })
        })
    }
    render(){
        return(
            <>
            <div>
                <RegisterProduct />
            </div>
            <h2>Product Detalis</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Category Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.products.map(product => {
                            <tr key={product.CategoryId}>
                                <td>{product.CategoryId}</td>
                                <td>{product.Name}</td>
                                <td>{product.Price}</td>
                                <td>{(product.Stock==true)?"Available": "Out of Stock"}</td>
                            </tr>
                        })
                    }
                </tbody>

            </table>
            </>
        )
    }

}