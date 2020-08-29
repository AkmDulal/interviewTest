import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Row, Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class SinginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            email: '',
            password: '',
            submitted: false,
        };
    }


    
    // Email
    emailChange = (event) => {
        const email = event.target.value;
        this.setState({ email });
    }
    // password
    passwordChange = (event) => {
        const password = event.target.value;
        this.setState({ password });
    }
    // Submit
    handleSubmit = () => {
        this.setState({ submitted: true }, () => {
            setTimeout(() => this.setState({ submitted: false }), 5000);
        });

localStorage.setItem('user', 'agent');
 
        
    }

    render() {
        const {   email, password, submitted, } = this.state;
        return (
            <div className="singInmyForm">
                <ValidatorForm ref="form" onSubmit={this.handleSubmit} onError={errors => console.log(errors)}>
                    <Row>
                        
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
                                onChange={this.passwordChange}
                                name="password"
                                type="password"
                                value={password}
                                validators={['required']}
                                errorMessages={['this field is required',]}
                            />
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
                            <Link to="/ForgotPassword"><p className="alreadySingin forgotpasswordBtn"> Forgot password? </p></Link>
                        </Col>
                        <Col md={12} lg={12}>
                            <p className="alreadySingin">Already on Unimust?
                                <Link to="/join" className="alreadySinginlink"> <b> Join  </b></Link>
                            </p>
                        </Col>
                    </Row>
                </ValidatorForm>
            </div>
        );
    }
}

export default withRouter (SinginForm);