import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
// Compontant
import Navbar from '../components/Navbar';
import Profile from '../components/Profile';



class home extends Component {
    
    render() {
        return (
            <div>
                {/* ####### NavBar ######## */}
                <Navbar />
                
                {/* Profile  */}
                <Container>
                    <Profile />
                </Container>
                
                
            </div>
        );
    }
}


export default home;