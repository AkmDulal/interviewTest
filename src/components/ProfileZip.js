import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
// import { Link } from "react-router-dom";

import { Button } from "@material-ui/core";

import TextField from '@material-ui/core/TextField';

// Images
// import LogoIcon from "../../../images/student/profile_pic.png";
// import { IoMdSearch } from "react-icons/io";
import { IoMdCreate } from "react-icons/io";
// import { IoIosAdd } from "react-icons/io";
// import { FaGenderless } from "react-icons/fa";

class ProfileZip extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            btnShow: true,
        };
        this.toggleDiv = this.toggleDiv.bind(this)
    }
    toggleDiv = () => {
        const { show, btnShow } = this.state;
        this.setState({ show: !show });
        this.setState({ btnShow: !btnShow });
    }
    render() {
        return (
            <div>
                {/* ####### BANNER AREA ######## */}
                <div className="profile_box">
                    {this.state.show && <ProfileNameEdit />}
                    <div className="form-group has-search">
                        {
                            this.state.btnShow ?
                                <div>
                                    <div className="profile_view">
                                        <div className="email_phone_box">
                                            <h5> Zip Code  </h5>
                                            <IoMdCreate className="edit__btn" onClick={this.toggleDiv} />
                                        </div>
                                    </div>
                                </div>
                                : null
                        }
                    </div>
                </div>
            </div>
        );
    }
}

class ProfileNameEdit extends Component {
    render() {
        return (
            <div>
                <div className="profile_edit_box">
                    <Container>
                        <Row>
                            <Col sm={12} md={12} lg={12}>
                                <div className="edit_form_area">
                                    <form noValidate autoComplete="off">
                                        <TextField
                                            id="standard-basic"
                                            label="Zip Code"
                                        />
                                        <div className="edit_form_area_btn">
                                            <Button cancelBtn > Cancel </Button>
                                            <Button className="saveBtn" > Save </Button>
                                        </div>
                                    </form>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </div>

            </div>
        )
    }
}

export default ProfileZip;