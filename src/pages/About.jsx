import React from 'react';
import { Container } from 'react-bootstrap';
import './styles/About.css';

function About() {
    return (
        <Container className="about-container"> {/* d-flex ve align-items-center kaldırıldı */}
            <h1 className="title text-center">About Me</h1>
            <p className="lead">
                I am Hanife Kaptan, a 23-year-old fourth-year Computer Engineering student at Balıkesir University's Faculty of Engineering. Python has been an indispensable tool for me since I first stepped into the world of programming. With over three years of experience in Python, I've focused on the field of artificial intelligence, which isn't just a course or specialization for me, but a profound passion.
                <br/>My ongoing projects reflect my efforts to materialize this passion. As part of Turkcell's Future Female Coders AI Program, I'm working on an AI-assisted UI prototype development tool. This tool will make it easier for users to create interactive prototypes with artificial intelligence. I also have projects in AI-driven hair health analysis and an Auto ML library. In these projects, my goal is to explore the potential of AI in various fields and produce practical solutions.
                <br/>I enjoy sharing my knowledge and experiences. The 10 articles I've written on AI on Medium have received over 150 reads. I aim to specialize in software development, particularly in artificial intelligence, by continuously improving myself in these areas. In the future, my greatest desire is to be involved in projects where AI technologies facilitate and transform human life.
            </p>
        </Container>
    );
}

export default About;