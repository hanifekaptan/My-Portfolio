import React from 'react';
import { Container } from 'react-bootstrap';
import './styles/Skills.css';

const skillsData = [
    { name: 'Python', logo: 'python.png', experience: '3+ year', knowledge: '5/5' },
    { name: 'Machine Learning', logo: 'sklearn.png', experience: '2+ year', knowledge: '3/5' },
    { name: 'Deep Learning', logo: 'keras-tf.png', experience: '1+ year', knowledge: '4/5' },
    { name: 'Computer Vision', logo: 'opencv.png', experience: '1+ year', knowledge: '3/5' },
    { name: 'NLP', logo: 'ollama.png', experience: '1- year', knowledge: '2/5' },
    { name: 'AI Agent', logo: 'langgraph.png', experience: '1- year', knowledge: '2/5' },
    { name: 'SQL', logo: 'sql.png', experience: '2+ year', knowledge: '4/5' },
    { name: 'Version Control', logo: 'git.png', experience: '2+ year', knowledge: '4/5' },
    { name: 'Container Technologies', logo: 'docker.png', experience: '1- year', knowledge: '3/5' },
    { name: 'Web Technologies', logo: 'web.png', experience: '1- year', knowledge: '2/5' },

];

function Skills() {
    return (
        <Container className="skills-container">
            <h2 className="skills-title text-center">My Skills</h2>
            <div className="skills-row"> {/* Flexbox container */}
                {skillsData.map((skill, index) => (
                    <SkillBox key={index} skill={skill} />
                ))}
            </div>
        </Container>
    );
}

function SkillBox({ skill }) {
    return (
        <div className="skill-box">
            <img
                src={`/images/${skill.logo}`}
                alt={skill.name}
                className="skill-logo"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain', // scale-down yerine contain kullanın
                }}
            />
            <div className="skill-info">
                <strong>{skill.name}</strong>
                <p>{skill.experience} experience</p>
                <p>Competence: {skill.knowledge}</p>
            </div>
        </div>
    );
}


export default Skills;