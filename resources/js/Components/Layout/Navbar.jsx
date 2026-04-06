import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        function handleScroll() {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 50);
            
            // Calculate scroll progress
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollY / totalHeight) * 100;
            setScrollProgress(progress);
            
            // Update active section based on scroll position
            const sections = ['home', 'about', 'skills', 'projects', 'contact'];
            const scrollPosition = scrollY + 150;
            
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        }
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial call
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileOpen) {
            // Save current scroll position
            const scrollPos = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollPos}px`;
            document.body.style.width = '100%';
            document.body.style.overflow = 'hidden';
        } else {
            // Restore scroll position
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflow = 'unset';
        };
    }, [isMobileOpen]);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleNavClick = (href) => {
        setIsMobileOpen(false);
        const element = document.querySelector(href);
        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
        {/* Scroll Progress Bar */}
        <div className="fixed top-0 left-0 right-0 h-[2px] z-[60]">
            <div 
                className="h-full bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 transition-all duration-150 ease-out"
                style={{ width: `${scrollProgress}%` }}
            />
        </div>

        <nav className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-500 ${
            isScrolled 
                ? 'bg-slate-950/95 backdrop-blur-xl shadow-2xl shadow-slate-950/60 border-b border-slate-800/30 py-0' 
                : 'bg-gradient-to-b from-slate-950/90 to-slate-950/70 py-2'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20 transition-all duration-300">
                    {/* Logo */}
                    <a 
                        href="#home" 
                        onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
                        className="group relative text-xl sm:text-2xl font-bold transition-all duration-300 hover:scale-105"
                    >
                        <span className="bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Abdul Qadir
                        </span>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-2">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.substring(1);
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                    className={`
                                        relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl group
                                        hover:scale-105 active:scale-95
                                        ${isActive
                                            ? 'text-white'
                                            : 'text-slate-400 hover:text-white'
                                        }
                                    `}
                                >
                                    {/* Background glow for active state */}
                                    {isActive && (
                                        <span className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-xl blur-md" />
                                    )}
                                    
                                    {/* Content */}
                                    <span className="relative z-10">{link.name}</span>
                                    
                                    {/* Animated underline */}
                                    <span className={`
                                        absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full 
                                        bg-gradient-to-r from-primary-400 to-purple-400
                                        transition-all duration-300 ease-out
                                        ${isActive ? 'w-6' : 'w-0 group-hover:w-6'}
                                    `} />
                                    
                                    {/* Dot indicator for active */}
                                    {isActive && (
                                        <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-400 animate-pulse" />
                                    )}
                                </a>
                            );
                        })}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        className="lg:hidden relative w-10 h-10 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center text-slate-300 hover:text-white hover:border-primary-500/50 hover:bg-slate-800/80 transition-all duration-300 active:scale-95 z-50"
                        aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
                    >
                        <div className="w-5 h-5 relative flex items-center justify-center">
                            <span className={`
                                absolute w-5 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out
                                ${isMobileOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}
                            `} />
                            <span className={`
                                absolute w-5 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out
                                ${isMobileOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}
                            `} />
                            <span className={`
                                absolute w-5 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out
                                ${isMobileOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}
                            `} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <div className={`
                fixed inset-0 z-[100] lg:hidden overflow-hidden
                transition-all duration-500 ease-in-out
                ${isMobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
            `}>
                {/* Backdrop */}
                <div 
                    className="absolute inset-0 bg-slate-950/98 backdrop-blur-2xl"
                    onClick={() => setIsMobileOpen(false)}
                />
                
                {/* Background pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/20 via-slate-950/50 to-slate-950" />
                
                {/* Menu Content */}
                <div className="relative z-10 flex flex-col h-full safe-area-inset-bottom">
                    {/* Header with close button */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/50 bg-slate-950/30 backdrop-blur-sm">
                        <span className="text-lg font-bold bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Navigation
                        </span>
                        <button
                            onClick={() => setIsMobileOpen(false)}
                            className="w-10 h-10 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center text-slate-300 hover:text-white hover:border-primary-500/50 hover:bg-slate-800/80 transition-all duration-300 active:scale-95"
                            aria-label="Close menu"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    
                    {/* Navigation Links */}
                    <div className="flex-1 overflow-y-auto px-6 py-4 space-y-2 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                        {navLinks.map((link, index) => {
                            const isActive = activeSection === link.href.substring(1);
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                    className={`
                                        relative flex items-center gap-4 w-full px-5 py-4 rounded-xl
                                        transition-all duration-300 transform
                                        hover:scale-[1.02] active:scale-[0.98]
                                        ${isActive
                                            ? 'text-white bg-gradient-to-r from-primary-500/20 to-purple-500/20 border-2 border-primary-500/50 shadow-lg shadow-primary-500/20'
                                            : 'text-slate-300 hover:text-white hover:bg-slate-800/50 border-2 border-transparent hover:border-slate-700/50'
                                        }
                                    `}
                                    style={{
                                        animation: isMobileOpen ? `mobileNavSlide 0.4s ease-out ${index * 0.08}s both` : 'none'
                                    }}
                                >
                                    {/* Active indicator */}
                                    {isActive && (
                                        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-primary-400 to-purple-400 rounded-full" />
                                    )}
                                    
                                    {/* Icon */}
                                    <span className="text-xl flex-shrink-0">
                                        {link.name === 'Home' && '🏠'}
                                        {link.name === 'About' && '👤'}
                                        {link.name === 'Skills' && '⚡'}
                                        {link.name === 'Projects' && '💼'}
                                        {link.name === 'Contact' && '📧'}
                                    </span>
                                    
                                    <span className="relative z-10 text-base font-semibold">{link.name}</span>
                                    
                                    {/* Arrow */}
                                    <svg className="w-5 h-5 ml-auto text-slate-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            );
                        })}
                    </div>
                    
                    {/* Footer with Social Links */}
                    <div className="px-6 py-4 border-t border-slate-800/50 bg-slate-950/50 backdrop-blur-sm flex-shrink-0">
                        <p className="text-xs text-slate-400 text-center mb-3">Connect with me</p>
                        <div className="flex items-center justify-center gap-3">
                            <a href="https://github.com/Abdulqadir1234" target="_blank" rel="noopener noreferrer" 
                               className="w-11 h-11 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary-500/50 hover:bg-slate-800/80 transition-all duration-300 hover:scale-110 active:scale-95">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/abdul-qadir-nasrat-979b67326" target="_blank" rel="noopener noreferrer" 
                               className="w-11 h-11 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110 active:scale-95">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a href="https://wa.me/93745562728" target="_blank" rel="noopener noreferrer" 
                               className="w-11 h-11 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-green-400 hover:border-green-500/50 hover:bg-green-500/10 transition-all duration-300 hover:scale-110 active:scale-95">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <style jsx>{`
            @keyframes mobileNavSlide {
                from {
                    opacity: 0;
                    transform: translateY(-30px) scale(0.95);
                }
                to {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
            }
        `}</style>
        </>
    );
}
