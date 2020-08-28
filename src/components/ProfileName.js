import React, { Component } from 'react';


import { Container, Col, Row } from 'react-bootstrap';

import ProfilePic from "../images/profile_pic.png";

import { Fab, Button } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';


import { IoMdCreate } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";

class ProfileName extends Component {
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
                <div className="profile_box">
                    {this.state.show && <ProfileNameEdit />}
                    <div className="form-group has-search">
                        {
                            this.state.btnShow ?
                                <div>
                                    <div className="profile_view">
                                        <img className="profile_pic" src={ProfilePic} alt="pic"></img>
                                        <p> Profile Name
                                            <span> Lives in London, United Kingdom </span>
                                        </p>
                                        <IoMdCreate onClick={this.toggleDiv} />
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
                                <div className="profile_edit_area" >
                                    <img className="profile_pic" src={ProfilePic} alt="pic"></img>
                                    <p> Adding a photo will help your profile get noticed and improve the likelihood that you receive more interview requests. </p>

                                    <label htmlFor="upload-photo">
                                        <input
                                        style={{ display: "none" }}
                                        id="upload-photo"
                                        name="upload-photo"
                                        type="file"
                                        />
                                        <Fab size="small" component="span" aria-label="add">
                                        <IoIosAdd />
                                        </Fab>
                                    </label>
                                </div>

                                <div className="edit_form_area">
                                    <form noValidate autoComplete="off">
                                        <TextField 
                                        id="standard-basic" label="Name" />
                                        <TextField id="standard-basic" label="Where do you live?" />
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


export default ProfileName;