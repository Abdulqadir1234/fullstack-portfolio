import { Helmet } from 'react-helmet-async';
import Navbar from '../Components/Layout/Navbar';
import Footer from '../Components/Layout/Footer';
import Hero from '../Components/Sections/Hero';
import About from '../Components/Sections/About';
import Skills from '../Components/Sections/Skills';
import Projects from '../Components/Sections/Projects';
import Contact from '../Components/Sections/Contact';
import { projects, skills } from '../data/portfolioData';

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Abdul Qadir - Full Stack Developer</title>
            </Helmet>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills skills={skills} />
                <Projects projects={projects} />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
