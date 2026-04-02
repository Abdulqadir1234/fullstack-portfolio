import SectionHeading from '../UI/SectionHeading';
import ProjectCard from '../UI/ProjectCard';

export default function Projects({ projects }) {
    return (
        <section id="projects" className="py-24 px-4 bg-slate-900/50">
            <div className="max-w-6xl mx-auto">
                <SectionHeading
                    title="My Projects"
                    subtitle="Here are some of the projects I've worked on recently"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
