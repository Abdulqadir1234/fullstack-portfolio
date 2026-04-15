import { useState, useEffect, useRef, useCallback } from 'react';
import { useTheme } from '../Layout/ThemeProvider';
import ProjectCard from './ProjectCard';

export default function ProjectSlider({ projects }) {
    const { theme } = useTheme();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [projectsPerView, setProjectsPerView] = useState(1);
    const sliderRef = useRef(null);
    const autoPlayRef = useRef(null);

    const autoPlayInterval = 4000; // 4 seconds
    
    // Handle responsive projects per view
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setProjectsPerView(2);
            } else {
                setProjectsPerView(1);
            }
        };
        
        // Set initial value
        handleResize();
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    // Clone projects for infinite loop
    const extendedProjects = [
        ...projects.slice(-projectsPerView), // Last projects (cloned to start)
        ...projects,
        ...projects.slice(0, projectsPerView), // First projects (cloned to end)
    ];
    
    // Start from index that skips the cloned beginning
    const realStartIndex = projectsPerView;

    const goToNext = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 1);
    }, [isTransitioning]);

    const goToPrev = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev - 1);
    }, [isTransitioning]);

    // Handle infinite loop - reset position without animation
    useEffect(() => {
        if (!isTransitioning) return;
        
        const timeout = setTimeout(() => {
            // If we've gone past the real projects forward
            if (currentIndex >= realStartIndex + projects.length) {
                setIsTransitioning(false);
                setCurrentIndex(realStartIndex);
            }
            // If we've gone past the real projects backward
            else if (currentIndex < realStartIndex) {
                setIsTransitioning(false);
                setCurrentIndex(realStartIndex + projects.length - 1);
            } else {
                setIsTransitioning(false);
            }
        }, 500);
        
        return () => clearTimeout(timeout);
    }, [currentIndex, isTransitioning, projects.length, realStartIndex]);

    // Auto-play
    useEffect(() => {
        if (isAutoPlaying) {
            autoPlayRef.current = setInterval(() => {
                goToNext();
            }, autoPlayInterval);
        }
        
        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, [isAutoPlaying, goToNext]);

    const toggleAutoPlay = () => {
        setIsAutoPlaying(!isAutoPlaying);
    };

    // Calculate which real project we're showing
    const getRealIndex = (index) => {
        return ((index - realStartIndex) % projects.length + projects.length) % projects.length;
    };

    const currentRealIndex = getRealIndex(currentIndex);

    return (
        <div className="relative">
            {/* Slider Container */}
            <div
                ref={sliderRef}
                className="overflow-hidden rounded-2xl"
            >
                <div
                    className={`flex transition-transform ${
                        isTransitioning ? 'duration-500 ease-out' : 'duration-0'
                    }`}
                    style={{ transform: `translateX(-${(currentIndex * 100) / projectsPerView}%)` }}
                >
                    {extendedProjects.map((project, index) => (
                        <div
                            key={`${project.id}-${index}`}
                            className="flex-shrink-0 px-2 md:px-3"
                            style={{ width: `${100 / projectsPerView}%` }}
                        >
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={goToPrev}
                className={`absolute left-2 md:left-0 top-1/2 -translate-y-1/2 md:-translate-x-4 lg:-translate-x-6 w-10 h-10 md:w-12 md:h-12 rounded-full ${
                    theme === 'dark'
                        ? 'bg-slate-800/90 border-slate-700/50 text-white hover:bg-slate-700'
                        : 'bg-white/90 border-slate-200 text-slate-900 hover:bg-slate-100'
                } border shadow-lg backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 z-10`}
                aria-label="Previous project"
            >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={goToNext}
                className={`absolute right-2 md:right-0 top-1/2 -translate-y-1/2 md:translate-x-4 lg:translate-x-6 w-10 h-10 md:w-12 md:h-12 rounded-full ${
                    theme === 'dark'
                        ? 'bg-slate-800/90 border-slate-700/50 text-white hover:bg-slate-700'
                        : 'bg-white/90 border-slate-200 text-slate-900 hover:bg-slate-100'
                } border shadow-lg backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 z-10`}
                aria-label="Next project"
            >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Dot Indicators */}
            <div className="flex items-center justify-center gap-3 mt-8">
                {projects.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setIsTransitioning(true);
                            setCurrentIndex(realStartIndex + index);
                        }}
                        className={`transition-all duration-300 rounded-full ${
                            index === currentRealIndex
                                ? 'w-10 h-3 bg-primary-500'
                                : `w-3 h-3 ${
                                    theme === 'dark'
                                        ? 'bg-slate-600 hover:bg-slate-500'
                                        : 'bg-slate-300 hover:bg-slate-400'
                                }`
                        }`}
                        aria-label={`Go to project ${index + 1}`}
                    />
                ))}
            </div>

            {/* Project Counter & Auto-play Toggle */}
            <div className="flex items-center justify-between mt-6 px-4">
                <div className={`text-sm font-medium ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                    <span className="text-primary-500 font-bold text-lg">
                        {projectsPerView === 1 ? currentRealIndex + 1 : `${currentRealIndex + 1}-${Math.min(currentRealIndex + projectsPerView, projects.length)}`}
                    </span>
                    <span className="mx-2">of</span>
                    <span>{projects.length}</span>
                </div>

                <button
                    onClick={toggleAutoPlay}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        theme === 'dark'
                            ? 'bg-slate-800/50 border-slate-700/50 text-slate-400 hover:text-white hover:border-primary-500/50'
                            : 'bg-slate-200/50 border-slate-300/50 text-slate-600 hover:text-slate-900 hover:border-primary-500/50'
                    } border`}
                    aria-label={isAutoPlaying ? 'Pause auto-play' : 'Start auto-play'}
                >
                    {isAutoPlaying ? (
                        <>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Pause</span>
                        </>
                    ) : (
                        <>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Auto-play</span>
                        </>
                    )}
                </button>
            </div>

            {/* Keyboard Hint */}
            <div className={`hidden md:flex items-center justify-center gap-2 mt-4 text-xs ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <span>Use arrow keys or click navigation to browse projects</span>
            </div>
        </div>
    );
}
