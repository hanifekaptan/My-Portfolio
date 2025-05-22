import React from 'react';
import "./App.css"
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';
import { HashRouter } from 'react-router-dom';

function App() {
    return (
        <HashRouter>
            <div className="app-background">
                <Navbar />
                <main> {/* main elementi eklendi */}
                    <section id="home">
                        <Home />
                    </section>
                    <section id="about">
                        <About />
                    </section>
                    <section id="skills">
                        <Skills />
                    </section>
                    <section id="portfolio">
                        <Portfolio />
                    </section>
                    <section id="contact">
                        <Contact />
                    </section>
                </main> {/* main elementi kapatıldı */}
            </div>
        </HashRouter>
    );
}

export default App;