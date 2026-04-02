export default function SectionHeading({ title, subtitle, light = false }) {
    return (
        <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-slate-900' : 'text-white'}`}>
                {title}
            </h2>
            {subtitle && (
                <p className={`text-lg max-w-2xl mx-auto ${light ? 'text-slate-600' : 'text-slate-400'}`}>
                    {subtitle}
                </p>
            )}
            <div className="mt-4 mx-auto w-20 h-1 bg-primary-500 rounded-full"></div>
        </div>
    );
}
