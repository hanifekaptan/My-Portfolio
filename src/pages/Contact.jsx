import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles/Contact.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ContactForm from '../components/ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter, faMeta } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return (
        <Container className="contact-container">
            <h1 className="contact-title">Contact Me</h1>
            <Row className="contact-row"> {/* Yeni stil sınıfı */}
                <Col md={6} className="contact-info-col">
                    <h3 className="contact-info-title">Information</h3>
                    <div className="contact-info">
                        <p><FontAwesomeIcon icon={faMapMarker} /> Adress: Balikesir/Turkiye</p>
                        <p><FontAwesomeIcon icon={faPhone} /> Phone: +(90)551-132-6893</p>
                        <p><FontAwesomeIcon icon={faEnvelope} /> Email: kptnhanife.2002@gmail.com</p>
                        <div>
                            <p><b>Follow Me:</b></p>
                            <a href="https://github.com/hanifekaptan" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} style={{ color: "#0a0a0c", }} />
                            </a>
                            <a href="https://www.linkedin.com/in/hanifekaptan-u1f90d/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} style={{ color: "#0a0a0c", }} />
                            </a>
                            <a target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faXTwitter} style={{ color: "#0a0a0c", }} />
                            </a>
                            <a target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faMeta} style={{ color: "#0a0a0c", }} />
                            </a>
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;