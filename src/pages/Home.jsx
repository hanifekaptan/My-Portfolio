import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './styles/Home.css';

function Home() {
    return (
        <Container className="home-container d-flex align-items-center">
            <div className="text-section">
                <h1><span className="hello">Hello Web Cowboy,</span></h1>
                <h1><span className="me"><em>I'm an <span className="job">AI Developer</span></em></span></h1>
                <div className="button-container">
                    <Button variant="primary" href="/contact">
                        Hire Me
                    </Button>
                </div>
            </div>
            <div className="image-section">
                <img src="/images/home-girl.png" alt="Hello Web Cowboy" />
            </div>
        </Container>
    );
}

export default Home;