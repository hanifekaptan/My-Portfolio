// ProjectModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ProjectModal({ project, show, onHide }) {
    if (!project) {
        return null;
    }

    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>{project.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Proje Detayları */}
                <p><strong>Category:</strong> {project.category}</p>
                {project.link ? ( // Doğru koşul kontrolü ve prop adı
                    <p>
                        <strong>Link:</strong>{' '}
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            {project.link}
                        </a>
                    </p>
                ) : null}
                <p>{project.description}</p>
                {/* Diğer proje detayları buraya eklenebilir */}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ProjectModal;