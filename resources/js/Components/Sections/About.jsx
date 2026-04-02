import SectionHeading from '../UI/SectionHeading';

export default function About() {
    return (
        <section id="about" className="py-24 px-4 bg-slate-900/50">
            <div className="max-w-6xl mx-auto">
                <SectionHeading
                    title="About Me"
                    subtitle="Get to know me and what drives my passion for development"
                />

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Photo placeholder */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-primary-600/30 to-purple-600/30 border border-slate-700 overflow-hidden">
                                <img
                                    src="/images/qadir.jpg"
                                    alt="Abdul Qadir"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-64 h-64 md:w-80 md:h-80 rounded-2xl border-2 border-primary-500/20 -z-10"></div>
                        </div>
                    </div>

                    {/* Bio */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            A passionate developer based in the world of code
                        </h3>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            I'm a Full Stack Developer who loves building web applications that are
                            both functional and beautiful. With experience across the entire development
                            stack, I enjoy tackling complex problems and turning them into simple,
                            elegant solutions.
                        </p>
                        <p className="text-slate-400 leading-relaxed mb-8">
                            When I'm not coding, you can find me exploring new technologies,
                            contributing to open source projects, or learning something new.
                            I believe in continuous improvement and writing clean, maintainable code.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                                <div className="text-2xl md:text-3xl font-bold text-primary-400">10+</div>
                                <div className="text-slate-500 text-sm mt-1">Projects</div>
                            </div>
                            <div className="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                                <div className="text-2xl md:text-3xl font-bold text-primary-400">5+</div>
                                <div className="text-slate-500 text-sm mt-1">Technologies</div>
                            </div>
                            <div className="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                                <div className="text-2xl md:text-3xl font-bold text-primary-400">100%</div>
                                <div className="text-slate-500 text-sm mt-1">Dedication</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
