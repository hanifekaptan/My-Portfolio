import React from 'react';
import {Form, Button} from 'react-bootstrap';
import '../pages/styles/Contact.css'; // Ekledim

function ContactForm() {
    return (
        <> {/* React Fragment */}
            <h3 className="contact-form-title">Contact Me</h3>
            <Form className="contact-form">
                <Form.Group controlId="formName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Full Name" />
                </Form.Group>
                <Form.Group controlId="formSubject">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter a title" />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>Mail</Form.Label>
                    <Form.Control type="email" placeholder="Your mail addres: youraddress@example.com" />
                </Form.Group>
                <Form.Group controlId="formContent">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea"
                                  rows={3}
                                  placeholder="Your Message"
                                  style={{
                                      minHeight: '170px',  // Minimum yükseklik
                                      maxHeight: '170px'   // Maksimum yükseklik
                                  }} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Send
                </Button>
            </Form>
        </>
    );
}

export default ContactForm;