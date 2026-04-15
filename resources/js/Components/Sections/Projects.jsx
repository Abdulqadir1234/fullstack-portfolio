import SectionHeading from '../UI/SectionHeading';
import ProjectSlider from '../UI/ProjectSlider';
import { useTheme } from '../Layout/ThemeProvider';

export default function Projects({ projects }) {
    const { theme } = useTheme();
    
    return (
        <section id="projects" className={`py-24 px-4 ${theme === 'dark' ? 'bg-slate-900/50' : 'bg-slate-100/50'}`}>
            <div className="max-w-6xl mx-auto">
                <SectionHeading
                    title="My Projects"
                    subtitle="Here are some of the projects I've worked on recently"
                />

                <ProjectSlider projects={projects} />
            </div>
        </section>
    );
}
