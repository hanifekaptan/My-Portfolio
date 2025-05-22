import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="bg-light py-3">
            <Container>
                <Row>
                    <Col className="text-center">
                        {/* Sosyal Medya Bağlantıları */}
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="mx-2">X</a>
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="mx-2">GitHub</a>
                        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="mx-2">Facebook</a>
                        <p>© {new Date().getFullYear()} Benim Portfolyom</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;