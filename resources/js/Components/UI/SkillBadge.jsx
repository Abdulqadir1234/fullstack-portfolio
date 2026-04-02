export default function SkillBadge({ name }) {
    return (
        <span className="inline-flex items-center px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-sm font-medium border border-slate-700 hover:border-primary-500 hover:text-primary-400 transition-all duration-300">
            {name}
        </span>
    );
}
