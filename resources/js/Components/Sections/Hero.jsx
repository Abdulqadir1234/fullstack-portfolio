import { useState, useEffect } from 'react';
import { useTheme } from '../Layout/ThemeProvider';

export default function Hero() {
    const { theme } = useTheme();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 md:pt-24 lg:pt-0 overflow-hidden">
            {/* Animated background */}
            <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'}`}>
                <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-900/20 via-slate-950 to-slate-950' : 'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-200/30 via-slate-50 to-slate-50'}`}></div>
                <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/15 via-transparent to-transparent' : 'bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-200/20 via-transparent to-transparent'}`}></div>

                {/* Floating orbs */}
                <div className={`absolute top-20 left-[10%] w-72 h-72 ${theme === 'dark' ? 'bg-primary-500/8' : 'bg-primary-300/20'} rounded-full blur-3xl animate-pulse`}></div>
                <div className={`absolute bottom-20 right-[5%] w-96 h-96 ${theme === 'dark' ? 'bg-purple-500/8' : 'bg-purple-300/20'} rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '2s' }}></div>
                <div className={`absolute top-1/2 left-1/2 w-64 h-64 ${theme === 'dark' ? 'bg-indigo-500/5' : 'bg-indigo-300/15'} rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '4s' }}></div>

                {/* Grid pattern overlay */}
                <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)]' : 'bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)]'} bg-[size:64px_64px]`}></div>
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
                            <span className={`text-sm font-medium ${theme === 'dark' ? 'text-primary-300' : 'text-primary-700'}`}>Available for work</span>
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
                            <span className={`block mt-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'} text-3xl sm:text-4xl lg:text-5xl font-bold`}>
                                Full Stack Developer
                            </span>
                        </h1>

                        <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'} text-sm sm:text-base md:text-lg max-w-lg mb-8 md:mb-10 leading-relaxed`}>
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
                                className={`group inline-flex items-center justify-center gap-2 px-7 py-3.5 ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10 border-slate-700 hover:border-primary-500/50 text-slate-300 hover:text-white' : 'bg-slate-200/50 hover:bg-slate-300/50 border-slate-300 hover:border-primary-500/50 text-slate-700 hover:text-primary-700'} border font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm`}
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
                                    className={`px-3 py-1 text-xs font-medium rounded-md ${theme === 'dark' ? 'bg-slate-800/80 text-slate-400 border-slate-700/50' : 'bg-slate-200/80 text-slate-600 border-slate-300/50'} border`}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right: Profile photo */}
                    <div className={`order-1 lg:order-2 flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="relative mt-4 md:mt-0">
                            {/* Blue flood/glow effect behind person */}
                            <div className="absolute -inset-8 bg-gradient-to-b from-blue-600/40 via-blue-500/30 to-cyan-500/20 blur-3xl opacity-70"></div>
                            <div className="absolute -inset-4 bg-gradient-to-t from-blue-500/30 via-indigo-500/20 to-transparent blur-2xl opacity-60"></div>
                            
                            {/* Side lighting effects */}
                            <div className="absolute -left-12 top-1/4 w-24 h-48 bg-blue-500/25 blur-2xl"></div>
                            <div className="absolute -right-12 top-1/3 w-24 h-48 bg-cyan-500/20 blur-2xl"></div>

                            {/* Photo - no container */}
                            <div className="relative w-72 sm:w-80 md:w-96 lg:w-[28rem]">
                                <img
                                    src="/images/qadir.png"
                                    alt="Abdul Qadir"
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            {/* Floating cards */}
                            <div className="absolute right-0 top-16 md:right-4 md:top-20 px-4 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl animate-[bounce_3s_ease-in-out_infinite]">
                                <div className="flex items-center gap-2.5">
                                    <span className="text-xl">&#9889;</span>
                                    <div>
                                        <div className="text-xs font-semibold text-white">Full Stack</div>
                                        <div className="text-[10px] text-slate-300">Developer</div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute left-0 bottom-24 md:-left-4 md:bottom-28 px-4 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl animate-[bounce_3s_ease-in-out_infinite]" style={{ animationDelay: '1.5s' }}>
                                <div className="flex items-center gap-2.5">
                                    <span className="text-xl">&#128187;</span>
                                    <div>
                                        <div className="text-xs font-semibold text-white">Clean</div>
                                        <div className="text-[10px] text-slate-300">Code</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <a href="#about" className={`flex flex-col items-center gap-2 ${theme === 'dark' ? 'text-slate-500 hover:text-primary-400' : 'text-slate-400 hover:text-primary-600'} transition-colors group`}>
                    <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
                    <div className="w-5 h-8 rounded-full border-2 border-current flex items-start justify-center p-1">
                        <div className="w-1 h-2 bg-current rounded-full animate-bounce"></div>
                    </div>
                </a>
            </div>
        </section>
    );
}
