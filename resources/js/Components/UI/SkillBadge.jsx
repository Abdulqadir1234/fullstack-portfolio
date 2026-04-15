import { useTheme } from '../Layout/ThemeProvider';

export default function SkillBadge({ name }) {
    const { theme } = useTheme();
    
    return (
        <span className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-300 ${
            theme === 'dark' 
                ? 'bg-slate-800 text-slate-300 border-slate-700 hover:border-primary-500 hover:text-primary-400' 
                : 'bg-slate-200 text-slate-700 border-slate-300 hover:border-primary-500 hover:text-primary-600'
        }`}>
            {name}
        </span>
    );
}
