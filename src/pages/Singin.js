import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Components
import SiginForm from "../components/SinginForm";
import Navbar from '../components/Navbar';

// images 
import joinImages from "../images/join_images.svg";
import formLogo from "../images/logo-white.png";




class Singin extends Component {
    render() {
        return ( 
            <div>
                {/* ####### NavBar ######## */}
                <Navbar />
                <section className="join-from-area">
                    <div className="container">
                        <div className="join-box">
                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-xl-6 col-lg-6">
                                    <div className="join-images">
                                        <div className="join-images-text">
                                            <h3> Welcome Back </h3>
                                            <p> Don't miss your next opportunity. Sign in to stay updated on your professional world. </p>
                                        </div>
                                        <img src={joinImages} alt="join images"></img>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-xl- col-lg-6">
                                    <div className="join-images">
                                        <img src={formLogo} className="join-area-logo" alt="Form Logo"></img>
                                        <SiginForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Singin;