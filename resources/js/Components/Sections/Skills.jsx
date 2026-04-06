import { useState, useEffect, useRef } from 'react';
import SectionHeading from '../UI/SectionHeading';
import SkillBadge from '../UI/SkillBadge';

export default function Skills({ skills }) {
    const [isVisible, setIsVisible] = useState(false);
    const [animatedCards, setAnimatedCards] = useState([]);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Animate cards one by one
                    entry.target.querySelectorAll('.skill-card').forEach((card, index) => {
                        setTimeout(() => {
                            setAnimatedCards(prev => [...prev, index]);
                        }, index * 150);
                    });
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const categoryIcons = [
        // Frontend
        <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>,
        // Backend
        <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
        </svg>,
        // Tools
        <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>,
    ];

    const categoryGradients = [
        'from-blue-500/20 to-cyan-500/20',
        'from-purple-500/20 to-pink-500/20',
        'from-green-500/20 to-emerald-500/20',
    ];

    const categoryBorders = [
        'hover:border-blue-500/50',
        'hover:border-purple-500/50',
        'hover:border-green-500/50',
    ];

    return (
        <section 
            id="skills" 
            ref={sectionRef}
            className="py-16 md:py-20 lg:py-24 px-4 sm:px-6"
        >
            <div className="max-w-6xl mx-auto">
                <SectionHeading
                    title="Skills & Technologies"
                    subtitle="The tools and technologies I work with to bring ideas to life"
                />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                    {skills.map((group, index) => (
                        <div
                            key={index}
                            className={`skill-card group relative p-5 md:p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 ${categoryBorders[index]} backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-1 ${
                                animatedCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                        >
                            {/* Hover gradient background */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${categoryGradients[index]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                            
                            {/* Content */}
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-5 md:mb-6">
                                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${categoryGradients[index]} flex items-center justify-center transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                                        {categoryIcons[index]}
                                    </div>
                                    <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all duration-300">
                                        {group.category}
                                    </h3>
                                </div>
                                
                                <div className="flex flex-wrap gap-2 md:gap-2.5">
                                    {group.items.map((skill, skillIndex) => (
                                        <div
                                            key={skillIndex}
                                            className="transform transition-all duration-300 hover:scale-110"
                                            style={{ 
                                                animationDelay: `${(index * 150) + (skillIndex * 50)}ms`,
                                                animation: animatedCards.includes(index) ? 'skillBadgePop 0.4s ease-out both' : 'none'
                                            }}
                                        >
                                            <SkillBadge name={skill} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <style jsx>{`
                @keyframes skillBadgePop {
                    0% {
                        opacity: 0;
                        transform: scale(0.5) translateY(10px);
                    }
                    50% {
                        transform: scale(1.1) translateY(-2px);
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }
            `}</style>
        </section>
    );
}
