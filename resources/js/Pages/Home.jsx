import { Head } from '@inertiajs/react';
import Navbar from '../Components/Layout/Navbar';
import Footer from '../Components/Layout/Footer';
import Hero from '../Components/Sections/Hero';
import About from '../Components/Sections/About';
import Skills from '../Components/Sections/Skills';
import Projects from '../Components/Sections/Projects';
import Contact from '../Components/Sections/Contact';

export default function Home({ projects, skills }) {
    return (
        <>
            <Head title="Abdul Qadir - Full Stack Developer" />
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
