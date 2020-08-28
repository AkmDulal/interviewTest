import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { IoIosHelpCircle } from "react-icons/io";

// Component
import ProfileName from './ProfileName';
import ProfileEmail from './ProfileEmail';
import ProfileSchool from './ProfileSchool';
import ProfileGander from './ProfileGander';
import ProfileAddress from './ProfileAddress';
import ProfileState from './ProfileState';
import ProfileCity from './ProfileCity';
import ProfileZip from './ProfileZip';
import MotherName from './MotherName';
import FatherName from './FatherName';




class Profile extends Component {

    


    render() {
        return (
            <div className="deafult_class ">  
                <Container>
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                        <div className="profile_header">
                            <p> We found opportunites for you to strengthen your profile! </p>
                            <IoIosHelpCircle />
                        </div>
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            {/* PROFILE NAME */}
                            <ProfileName />
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            {/* PROFILE Email */}
                            <ProfileEmail />
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            {/* PROFILE Email */}
                            <ProfileSchool />
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            {/* PROFILE Email */}
                            <ProfileGander />
                        </Col>
                        <Col sm={12} md={12} lg={12}>
                            {/* PROFILE Email */}
                            <ProfileAddress />
                        </Col>
                        <Col sm={12} md={4} lg={4}>
                            {/* PROFILE Email */}
                            <ProfileState />
                        </Col>
                        <Col sm={12} md={4} lg={4}>
                            {/* PROFILE Email */}
                            <ProfileCity />
                        </Col>
                        <Col sm={12} md={4} lg={4}>
                            {/* PROFILE Email */}
                            <ProfileZip />
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            {/* PROFILE Email */}
                            <MotherName />
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            {/* PROFILE Email */}
                            <FatherName />
                        </Col>
                    </Row>
                </Container>
                
            </div>
        );
    }
}

export default Profile;