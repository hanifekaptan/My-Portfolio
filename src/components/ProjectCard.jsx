import React from 'react';
import { Card } from 'react-bootstrap';
import './styles/ProjectCard.css'; // CSS dosyasını import et

function ProjectCard({ project, onClick }) {
    return (
        <Card className="project-card" onClick={onClick}>
            <Card.Img variant="top" src={project.image} alt={project.title} className="project-card-img" />
            <Card.Body className="project-card-body">
                <Card.Title className="project-card-title">{project.title}</Card.Title>
                <Card.Text className="project-card-text">{project.category}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;