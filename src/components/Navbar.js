import React, { Component } from 'react';
import { Link, NavLink} from "react-router-dom";
import Logo from "../images/logo-white.png";


class Navbar extends Component {


    render() {
        return (
            <div>         
                <section className="header-area">
                    <div className="container">
                        <div className="row">
                            <div className=" col-5 col-md-3 col-sm-3 col-xl-3">
                                <div className="logo-area">
                                <Link to="/">
                                    <img src={Logo} alt="unimust logo"></img>
                                </Link>
                                </div>
                            </div>
                            <div className="col-7 col-md-9 col-sm-9 col-xl-9">
                                <div className="menu-area"> 
                                    <ul>
                                        <li><NavLink exact className="menu-text" activeClassName="active" to="/singin">SingIn  </NavLink></li>
                                        <li><NavLink className="menu-text" activeClassName="active" to="/join">Join Now </NavLink></li>
                                        <li><NavLink className="menu-text" activeClassName="active" to="/">Profile View</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Navbar;