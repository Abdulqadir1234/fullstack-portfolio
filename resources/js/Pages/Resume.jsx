import { useState } from 'react';
import Navbar from '../Components/Layout/Navbar';
import Footer from '../Components/Layout/Footer';

export default function Resume() {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = async () => {
        setIsDownloading(true);
        try {
            // Fetch the PDF file
            const response = await fetch('/resume.pdf');
            
            if (!response.ok) {
                throw new Error('PDF not found');
            }
            
            // Convert to blob
            const blob = await response.blob();
            
            // Create download link
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'Abdul_Qadir_Nasrat_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            
            // Cleanup
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
            
            setTimeout(() => setIsDownloading(false), 1000);
        } catch (error) {
            console.error('Download error:', error);
            // Fallback: open in new tab
            window.open('/resume.pdf', '_blank');
            setTimeout(() => setIsDownloading(false), 1000);
        }
    };

    const handleView = () => {
        window.open('/resume.pdf', '_blank');
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-slate-950 pt-24 md:pt-28 pb-12 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-8 md:mb-12 animate-fadeIn">
                        <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary-500/20 to-purple-500/20 border border-primary-500/30 mb-6">
                            <svg className="w-8 h-8 md:w-10 md:h-10 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400">Resume</span>
                        </h1>
                        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
                            View my professional experience, skills, and qualifications
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 md:mb-12">
                        {/* View Resume Button */}
                        <button
                            onClick={handleView}
                            className="group inline-flex items-center justify-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-white/5 hover:bg-white/10 border-2 border-slate-700 hover:border-primary-500/50 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 backdrop-blur-sm"
                        >
                            <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <span>View Resume</span>
                        </button>

                        {/* Download Resume Button */}
                        <button
                            onClick={handleDownload}
                            disabled={isDownloading}
                            className="group inline-flex items-center justify-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/25 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isDownloading ? (
                                <>
                                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>Downloading...</span>
                                </>
                            ) : (
                                <>
                                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <span>Download Resume</span>
                                </>
                            )}
                        </button>
                    </div>

                    {/* Resume Info Card */}

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                        {[
                            { label: 'Experience', value: '2+', icon: '💼' },
                            { label: 'Projects', value: '10+', icon: '🚀' },
                            { label: 'Technologies', value: '15+', icon: '⚡' },
                            { label: 'Clients', value: '5+', icon: '👥' },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="p-4 md:p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl text-center hover:border-primary-500/30 transition-all duration-300"
                            >
                                <div className="text-2xl md:text-3xl mb-2">{stat.icon}</div>
                                <div className="text-xl md:text-2xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-xs md:text-sm text-slate-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.6s ease-out;
                }
            `}</style>
        </>
    );
}
