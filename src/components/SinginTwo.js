import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Row, Col } from 'react-bootstrap';

class SinginTwo extends Component {

    state = { selected: "male" };
    handleChange = ev => {
        this.setState({ selected: ev.target.value });
    };

    constructor() {
        super();
        this.state = {
            fullname: '',
            email: '',
            formData: {
                password: '',
                repeatPassword: '',
            },
            submitted: false,
        };
    }

    onChange(e) {
        const { checked } = e.target;
        this.setState({ checked });
      }

    componentDidMount() {
        // custom rule will have name 'isPasswordMatch'
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            const { formData } = this.state;
            if (value !== formData.password) {
                return false;
            }
            return true;
        });
    }


    // Full Name
    fullnameChange = (event) => {
        const fullname = event.target.value;
        this.setState({ fullname });
    }
    // Email
    emailChange = (event) => {
        const email = event.target.value;
        this.setState({ email });
    }
    // Password 
    handleChangePass = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }
    // Submit
    handleSubmit = () => {
        this.setState({ submitted: true }, () => {
            setTimeout(() => this.setState({ submitted: false }), 5000);
        });

    }

    render() {
        const {  fullname, email, formData, submitted, } = this.state;
        return (
            <div className="singInmyForm">
                <ValidatorForm ref="form" onSubmit={this.handleSubmit} onError={errors => console.log(errors)}>
                    <Row>
                        <Col md={6} lg={12}>
                            <TextValidator
                                label="Fullname"
                                onChange={this.fullnameChange}
                                name="fullname"
                                value={fullname}
                                validators={['required', 'minStringLength:5']}
                                errorMessages={['this field is required', 'Full Name must be 5 characters long!']}
                            />
                        </Col>
                        <Col md={6} lg={12}>
                            <TextValidator
                                label="Email"
                                onChange={this.emailChange}
                                name="email"
                                value={email}
                                validators={['required', 'isEmail']}
                                errorMessages={['this field is required', 'email is not valid']}
                            />
                        </Col>
                        <Col md={6} lg={12}>
                            <TextValidator
                                label="Password"
                                onChange={this.handleChangePass}
                                name="password"
                                type="password"
                                validators={['required', 'minStringLength:8',]}
                                errorMessages={['this field is required', 'password must be 5 characters long!',]}
                                value={formData.password}
                            />
                        </Col>
                        <Col md={6} lg={12}>
                            <TextValidator
                                label="Repeat password"
                                onChange={this.handleChangePass}
                                name="repeatPassword"
                                type="password"
                                validators={['isPasswordMatch', 'required']}
                                errorMessages={['password mismatch', 'this field is required']}
                                value={formData.repeatPassword}
                            />
                        </Col>
                        <Col md={12} lg={12}>
                            <p className="form-arement">You agree to the HM  <b>User Agreement, Privacy Policy,</b> and <b>Cookie Policy.</b></p>
                        </Col>
                        <Col md={12} lg={12}>
                            <Button className="formButton" type="submit" disabled={submitted}>
                                {
                                    (submitted && 'Your form is submitted!')
                                    || (!submitted && 'Submit')
                                }
                            </Button>
                        </Col>
                        <Col md={12} lg={12}>
                            <p className="alreadySingin">Already on Unimust?
                                <Link to="/signin" className="alreadySinginlink"> <b>Sing In </b></Link>
                            </p>
                        </Col>
                    </Row>
                </ValidatorForm>
            </div>
        );
    }
}

export default SinginTwo;