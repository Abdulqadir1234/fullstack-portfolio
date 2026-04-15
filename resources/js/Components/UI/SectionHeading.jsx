import { useTheme } from '../Layout/ThemeProvider';

export default function SectionHeading({ title, subtitle, light = false }) {
    const { theme } = useTheme();
    const isLight = light || theme === 'light';
    
    return (
        <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                {title}
            </h2>
            {subtitle && (
                <p className={`text-lg max-w-2xl mx-auto ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                    {subtitle}
                </p>
            )}
            <div className="mt-4 mx-auto w-20 h-1 bg-primary-500 rounded-full"></div>
        </div>
    );
}
