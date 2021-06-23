import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch, useLocation, Link } from "react-router-dom";


function Home(){
    return (
        <div>
            <h2>Amazon Home</h2>
            <p>Shopping Home Page</p>
        </div>
    )
}
function Electronics(){
    return(
        <div>
            <h2>Electronics Home</h2>
            <img src="earpons.png" width="100" height="100" />
            <img src="JBL Speaker.png" width="100" height="100" />
        </div>
    )
}
function Footwear(){
    return(
        <div>
            <h2>Footwear Home</h2>
            <img src="Lee Cooper.png" width="100" height="100" />
            <img src="Nike Casual.png" width="100" height="100" />
        </div>
    )
}
function Fashion(){
    return(
        <div>
            <h2>Fashion Home</h2>
            <img src="Shirt.png" width="100" height="100" />
            <img src="jeans.png" width="100" height="100" />
        </div>
    )
}
function NotFound(){
    return(
        <div>
            <h2>Page You Requested <code>{window.location.href}</code> - Not Found</h2>
            <p><Link to="/">Back to Home</Link></p>
        </div>
    )
}
function Login(){
    return(
        <div>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" /></dd>
                <dt>Password</dt>
                <dd><input type="password" /></dd>
            </dl>
            <button>Login</button>
        </div>
    )
}

export default class AppHome extends React.Component
{
    render(){
        return(
            <Router>
                <header>
                    <h1>Amazon Shopping</h1>
                </header>
                <div>
                    <ul>
                        <li> <Link to="/home">Home</Link></li>
                        <li> <Link to="/login">Login</Link></li>
                        <li> <Link to="/electronics">Electronics</Link></li>
                        <li> <Link to="/footwear">Footwear</Link></li>
                        <li> <Link to="/fashion">Fashion</Link></li>
                    </ul>
                </div>
                <hr />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/home">
                        <Redirect to="/"></Redirect>
                    </Route>
                    <Route path="/electronics">
                        <Electronics />
                    </Route>
                    <Route path="/footwear">
                        <Footwear />
                    </Route>
                    <Route path="/fashion">
                        <Fashion />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        )
    }
}