export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-primary-950"></div>
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                {/* Profile Photo */}
                <div className="mb-8 flex justify-center">
                    <div className="relative">
                        <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-primary-500/30 shadow-xl shadow-primary-500/20">
                            <img
                                src="/images/qadir.jpg"
                                alt="Abdul Qadir"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-36 h-36 md:w-44 md:h-44 rounded-full border-2 border-primary-500/10 -z-10"></div>
                    </div>
                </div>

                <p className="text-primary-400 text-lg md:text-xl font-medium mb-4 tracking-wide">
                    Hello, I'm
                </p>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    Abdul Qadir
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400">
                        Full Stack Developer
                    </span>
                </h1>
                <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                    I build modern, responsive web applications with clean code and great user experiences.
                    Passionate about turning ideas into reality through technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="#projects"
                        className="inline-flex items-center justify-center px-8 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/25 hover:-translate-y-0.5"
                    >
                        View My Work
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-slate-600 hover:border-primary-500 text-slate-300 hover:text-primary-400 font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                    >
                        Contact Me
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}
