import React, { Component } from 'react';
import { Container } from 'react-bootstrap';


// Components
// import Joinform from '../components/JoinForm';


// images 
import joinImages from "../images/join_images.svg";
// import formLogo from "../images/logo/from_logo.svg";

// Compontant
import Navbar from '../components/Navbar';

import SinginTwo from "../components/SinginTwo";

class Join extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <section className="join-from-area">
                    <div className="container">
                        <div className="join-box">
                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-xl-6 col-lg-6">
                                    <div className="join-images">
                                        <div className="join-images-text">
                                            <h3> Joining Form </h3>
                                            <p> make sure your account is secure </p>
                                        </div>
                                        <img src={joinImages} alt="join images"></img>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-xl- col-lg-6">
                                    <div className="join-images">
                                        {/* <img src={formLogo} className="join-area-logo" alt="Form Logo"></img> */}
                                        <SinginTwo />
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

export default Join;