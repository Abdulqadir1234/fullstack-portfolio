import { useState, useEffect } from 'react';

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 md:pt-24 lg:pt-0 overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-900/20 via-slate-950 to-slate-950"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/15 via-transparent to-transparent"></div>

                {/* Floating orbs */}
                <div className="absolute top-20 left-[10%] w-72 h-72 bg-primary-500/8 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-[5%] w-96 h-96 bg-purple-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-8 md:py-12">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">

                    {/* Left: Text content */}
                    <div className={`order-2 lg:order-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        {/* Status badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6 md:mb-8">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
                            </span>
                            <span className="text-sm text-primary-300 font-medium">Available for work</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] mb-4 md:mb-6">
                            Hi, I'm{' '}
                            <span className="relative">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400">
                                    Abdul Qadir Nasrat
                                </span>
                                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                                    <path d="M1 5.5C47 2 153 2 199 5.5" stroke="url(#underline-gradient)" strokeWidth="3" strokeLinecap="round" />
                                    <defs>
                                        <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0">
                                            <stop stopColor="#818cf8" />
                                            <stop offset="0.5" stopColor="#a78bfa" />
                                            <stop offset="1" stopColor="#f472b6" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </span>
                            <span className="block mt-2 text-slate-300 text-3xl sm:text-4xl lg:text-5xl font-bold">
                                Full Stack Developer
                            </span>
                        </h1>

                        <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-lg mb-8 md:mb-10 leading-relaxed">
                            I craft modern, high-performance web applications with clean architecture
                            and pixel-perfect design. Turning complex ideas into elegant digital experiences.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12">
                            <a
                                href="#projects"
                                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/25 hover:-translate-y-0.5"
                            >
                                View My Work
                                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a
                                href="#contact"
                                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/5 hover:bg-white/10 border border-slate-700 hover:border-primary-500/50 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm"
                            >
                                Let's Talk
                                <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </a>
                        </div>

                        {/* Tech stack pills */}
                        <div className="flex flex-wrap gap-2">
                            {['Laravel', 'React', 'JavaScript', 'PHP', 'Tailwind'].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 text-xs font-medium rounded-md bg-slate-800/80 text-slate-400 border border-slate-700/50"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right: Profile photo */}
                    <div className={`order-1 lg:order-2 flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="relative mt-4 md:mt-0">
                            {/* Glow behind photo */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-2xl opacity-60"></div>

                            {/* Decorative ring */}
                            <div className="absolute -inset-3 rounded-full border border-primary-500/10 animate-[spin_25s_linear_infinite]">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary-400 shadow-lg shadow-primary-400/50"></div>
                            </div>
                            <div className="absolute -inset-6 rounded-full border border-purple-500/5 animate-[spin_35s_linear_infinite_reverse]">
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50"></div>
                            </div>

                            {/* Photo container */}
                            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
                                <img
                                    src="/images/qadir.jpg"
                                    alt="Abdul Qadir"
                                    className="w-full h-full object-cover"
                                />
                                {/* Subtle overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent"></div>
                            </div>

                            {/* Floating cards */}
                            <div className="absolute -right-2 top-6 md:-right-4 md:top-8 px-2 py-1.5 md:px-3 md:py-2 bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-lg shadow-xl animate-[bounce_3s_ease-in-out_infinite]">
                                <div className="flex items-center gap-1.5 md:gap-2">
                                    <span className="text-base md:text-lg">&#9889;</span>
                                    <span className="text-[10px] md:text-xs font-semibold text-white">Full Stack</span>
                                </div>
                            </div>
                            <div className="absolute -left-4 bottom-8 md:-left-6 md:bottom-12 px-2 py-1.5 md:px-3 md:py-2 bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-lg shadow-xl animate-[bounce_3s_ease-in-out_infinite]" style={{ animationDelay: '1.5s' }}>
                                <div className="flex items-center gap-1.5 md:gap-2">
                                    <span className="text-base md:text-lg">&#128187;</span>
                                    <span className="text-[10px] md:text-xs font-semibold text-white">Clean Code</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <a href="#about" className="flex flex-col items-center gap-2 text-slate-500 hover:text-primary-400 transition-colors group">
                    <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
                    <div className="w-5 h-8 rounded-full border-2 border-current flex items-start justify-center p-1">
                        <div className="w-1 h-2 bg-current rounded-full animate-bounce"></div>
                    </div>
                </a>
            </div>
        </section>
    );
}
