import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/Portfolio.css';

const projectsData = [
    { id: 1,
        title: 'AI Based UI Prototype Development Tool',
        category: 'AI, Computer Vision-NLP',
        link:'https://github.com/hanifekaptan/AI-Based-UI-Prototype-Development-Tool',
        description: 'This tool, which I developed to accelerate design processes and create user interface (UI) prototypes more efficiently, aims to optimize the workflows of designers and developers by using artificial intelligence (AI) technologies. Within the scope of the project, design briefs received from users through large language models (LLMs) are processed, and detailed insights into the UI design process are obtained through AI-supported analyses.\n' +
            '\n' +
            'The application combines natural language processing (NLP) and image processing techniques to automatically generate UI designs that best suit users needs. In this process, user feedback is also taken into account, and prototypes are continuously improved and optimized. This tool, which offers a modern and user-friendly interface, is developed with a popular JavaScript library such as React. Thus, a high-performance and scalable application has emerged.\n' +
            '\n' +
            'The main benefits of this project include significantly reducing time spent in design processes, lowering prototype creation costs, and creating more user-centric designs. Additionally, it allows for the rapid evaluation of different design alternatives, enabling the development of more innovative and effective user interfaces.',
        image: 'images/ui-prototype.jpeg' },
    { id: 2,
        title: 'Hair Health Analysis With AI ',
        category: 'AI, Deep Learning',
        link:'https://github.com/hanifekaptan/Hair-Health-Analysis',
        description: 'This project, which aims to perform hair health analysis using image processing techniques, can detect the structure, density, and potential problems of hair strands with deep learning algorithms and advanced image processing methods. Within the scope of the project, hair photos taken from different angles and lighting conditions are analyzed, and symptoms such as hair loss, breakage, and dryness are detected, providing users with personalized recommendations.\n' +
            '\n' +
            'In this application, deep learning models such as Convolutional Neural Networks (CNNs) are used to perform analyses with high accuracy. The application aims to help users monitor their hair health regularly and take early precautions. Designed with a modern user interface, this application is developed using the Python programming language and popular libraries (such as TensorFlow, OpenCV).\n' +
            '\n' +
            'The main benefits of this project include the early diagnosis of hair health problems, personalized care recommendations, and enabling users to approach their hair health more consciously. Additionally, as a valuable tool for dermatologists and hair specialists, it can support diagnostic processes and assist in treatment planning.',
        image: 'images/hair-analysis.jpeg' },
    { id: 3,
        title: 'Personal Portfolio',
        category: 'Web',
        link:'https://github.com/hanifekaptan/My-Portfolio',
        description: 'This portfolio web application, which I developed to showcase my personal skills, projects, and experiences, has a modern and user-friendly interface. The project was developed using the React.js library and offers a high-performance and dynamic web experience. The portfolio is developed in accordance with responsive design principles and can be viewed seamlessly on different devices (desktop, tablet, mobile).\n' +
            '\n' +
            'Detailed information about my projects, the technologies I used, and the results I achieved are included in the portfolio. Additionally, my contact information and resume are also accessible through the portfolio. The project has been implemented using modern web development tools and techniques and is constantly updated and new features are added.\n' +
            '\n' +
            'This portfolio aims to leave a professional impression for potential employers and business partners and to effectively showcase my skills. It also aims to create a reference point for my future projects.',
        image: 'images/portfolio.jpeg' },
    { id: 4,
        title: 'Auto-ML Library',
        category: 'AI, Software Development',
        link:'https://github.com/hanifekaptan',
        description: 'This Auto-ML library, which aims to automate machine learning processes, reduce the workload of data scientists and engineers, and enable them to obtain results faster, is developed using the Python programming language. The library automates machine learning steps such as data preprocessing, model selection, hyperparameter optimization, and model evaluation, minimizing the operations that users have to do manually.\n' +
            '\n' +
            'This library supports different machine learning algorithms (e.g., classification, regression, clustering) and can work effectively on various datasets. This tool, which can work in integration with popular machine learning libraries such as Scikit-learn enables users to easily integrate into their existing workflows.\n' +
            '\n' +
            'The main purpose of this project is to make machine learning processes more accessible and user-friendly. The library provides great convenience, especially for users who are new to machine learning or have limited experience. It also saves time for experienced data scientists, allowing them to focus on more complex and creative projects.',
        image: 'images/auto-ml.jpeg' },
    { id: 5,
        title: 'Time And Life Manager',
        category: 'Desktop',
        link:'https://github.com/hanifekaptan/Momentum',
        description: 'This desktop application, which I developed to improve time management and personal productivity, was created using the Python programming language. The application aims to help users plan their daily lives in a more organized way by combining features such as calendar management, time tracking with the Pomodoro technique, and task management.\n' +
            '\n' +
            'Within the application, users can list their tasks in order of priority, set completion dates, and set reminders. Thanks to the calendar feature, appointments and events can be easily tracked, while efficient work intervals can be created with the Pomodoro technique. This application, which has a user-friendly interface, is developed using Python GUI libraries such as PyQt.\n' +
            '\n' +
            'The main purpose of this application is to enable users to manage their time more effectively, achieve their goals, and improve their overall quality of life. The application provides great convenience, especially for individuals with busy and stressful lifestyles.',
        image: 'images/momentum.jpeg' },
    { id: 6,
        title: 'QR Code Generator',
        category: 'Web, Desktop',
        link:'https://github.com/hanifekaptan/QR_Code_Generator',
        description: 'This web and desktop-supported application developed to generate QR codes was implemented using the Python programming language. The application enables users to convert various data such as text, URLs, contact information into QR codes. With both web-based and desktop versions, this application offers ease of use on different platforms.\n' +
            '\n' +
            'The web application is developed using Python web frameworks such as Streamlit, allowing users to easily generate QR codes via their browsers. The desktop application is created with GUI libraries such as PyQt, allowing QR codes to be generated even without an internet connection. The application offers the ability to generate QR codes in different sizes and formats, providing solutions that suit users\' needs.\n' +
            '\n' +
            'The main purpose of this project is to make the QR code generation process simple and accessible. The application provides great convenience, especially for users who need QR codes in different areas such as marketing, education, and personal use. By enabling QR codes to be created quickly and reliably, it helps users save time and optimize their workflows.',
        image: 'images/qr-code.jpeg' },
];

function Portfolio() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },

        ]
    };

    return (
        <Container>
            <h1 className="portfolio-title">Portfolio</h1>

            <section className="education-section">
                <h2 className="section-title">Education</h2>
                <div className="education-experience-container">
                    <div className="education-experience-row">
                        <div className="education-experience-box">
                            <h3>University</h3>
                            <p>Balikesir University</p>
                            <p>2020-2026</p>
                            <p>Computer Engineering</p>

                        </div>
                        <div className="education-experience-box">
                            <h3>High School</h3>
                            <p>Aksemsettin High School</p>
                            <p>2016-2020</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="experience-section">
                <h2 className="section-title">Experience</h2>
                <div className="education-experience-container experience-box-container">
                    <div className="education-experience-row">
                        <div className="education-experience-box">
                            <h3>Intern</h3>
                            <p>Balikesir University<br/>(Feb-June 2025)</p>
                            <p>I completed a 4-month internship at the Information Processing Unit of Balıkesir University's Faculty of Engineering.</p>
                        </div>
                        <div className="education-experience-box">
                            <h3>Participant</h3>
                            <p>Turkcell's Future Female Coders AI Program<br/>(Jan-June 2025)</p>
                            <p>Participating in this program, I had the opportunity to develop the AI-assisted UI prototype development tool, while receiving training in software development and artificial intelligence.</p>
                        </div>
                    </div>
                </div>
            </section>

            <h2 className="project-title">Projects</h2>
            <div className="project-slider-container">
                <Slider {...sliderSettings}>
                    {projectsData.map((project) => (
                        <div key={project.id}>
                            <ProjectCard project={project} onClick={() => handleProjectClick(project)} />
                        </div>
                    ))}
                </Slider>
            </div>

            <ProjectModal project={selectedProject} show={showModal} onHide={handleCloseModal} />
        </Container>
    );
}

export default Portfolio;