import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import SectionHeading from '../UI/SectionHeading';

export default function Contact() {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState({ submitting: false, success: false, error: null });

    const handleChange = (e) => {
        const fieldName = e.target.name === 'from_name' ? 'name' : 
                         e.target.name === 'from_email' ? 'email' : 
                         e.target.name;
        setFormData({
            ...formData,
            [fieldName]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitting: true, success: false, error: null });

        try {
            // EmailJS configuration
            const serviceID = 'service_swd2vrg';
            const templateID = 'template_ac091me';
            const publicKey = 'GB0LPvZOI2Yi_UY3L';

            const result = await emailjs.sendForm(
                serviceID,
                templateID,
                formRef.current,
                publicKey
            );

            if (result.status === 200) {
                setStatus({ submitting: false, success: true, error: null });
                setFormData({ name: '', email: '', subject: '', message: '' });
            }
        } catch (error) {
            setStatus({ 
                submitting: false, 
                success: false, 
                error: 'Failed to send message. Please try again or email me directly.' 
            });
            console.error('EmailJS Error:', error);
        }
    };

    return (
        <section id="contact" className="py-24 px-4">
            <div className="max-w-4xl mx-auto">
                <SectionHeading
                    title="Get In Touch"
                    subtitle="Have a question or want to work together? Drop me a message!"
                />

                {status.success && (
                    <div className="mb-8 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-center">
                        Thank you! Your message has been sent successfully.
                    </div>
                )}
                {status.error && (
                    <div className="mb-8 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-center">
                        {status.error}
                    </div>
                )}

                <div className="grid md:grid-cols-5 gap-8">
                    {/* Contact Info */}
                    <div className="md:col-span-2 space-y-6">
                        <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-lg bg-primary-600/20 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500">Email</div>
                                    <a href="mailto:abdulqadirnasrat483@gmail.com" className="text-slate-300 hover:text-primary-400 transition-colors">abdulqadirnasrat483@gmail.com</a>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-lg bg-primary-600/20 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500">Location</div>
                                    <div className="text-slate-300">Kabul, Afghanistan</div>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50">
                            <div className="text-sm text-slate-500 mb-3">Connect with me</div>
                            <div className="flex gap-3">
                                <a href="https://github.com/Abdulqadir1234" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-700/50 flex items-center justify-center text-slate-400 hover:text-primary-400 hover:bg-primary-600/20 transition-all duration-300">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-lg bg-slate-700/50 flex items-center justify-center text-slate-400 hover:text-primary-400 hover:bg-primary-600/20 transition-all duration-300">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form ref={formRef} onSubmit={handleSubmit} className="md:col-span-3 space-y-5">
                        <div className="grid sm:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-1.5">Name</label>
                                <input
                                    type="text"
                                    name="from_name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-1.5">Email</label>
                                <input
                                    type="email"
                                    name="from_email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-1.5">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                                placeholder="What's this about?"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-1.5">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                required
                                className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
                                placeholder="Your message..."
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={status.submitting}
                            className="w-full px-8 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/25 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status.submitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
