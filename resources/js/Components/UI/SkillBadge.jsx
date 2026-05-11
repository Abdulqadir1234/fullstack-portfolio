import { useTheme } from '../Layout/ThemeProvider';

const icons = {
  React: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="#61DAFB" strokeWidth="1.5"><circle cx="12" cy="12" r="2.5"/><ellipse cx="12" cy="12" rx="10" ry="3"/><ellipse cx="12" cy="12" rx="10" ry="3" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="3" transform="rotate(120 12 12)"/></svg>,
  'Next.js': <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm-1 13.5V8l6 3.75-6 3.75Z"/></svg>,
  JavaScript: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#F7DF1E"><rect width="24" height="24" rx="2"/><text x="12" y="17" textAnchor="middle" fill="#000" fontSize="14" fontWeight="bold">JS</text></svg>,
  TypeScript: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#3178C6"><rect width="24" height="24" rx="2"/><text x="12" y="17" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">TS</text></svg>,
  HTML5: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#E34F26"><path d="M2 2l2 18 8 2 8-2 2-18H2zm4 4h12l-.5 6h-8l.2 2h7.5l-.5 3-5 1.5-5-1.5-.3-1.5h-2l.5 3 7.5 2 7.5-2 1-11H6z"/></svg>,
  CSS3: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#1572B6"><path d="M2 2l2 18 8 2 8-2 2-18H2zm4 4h12l-.5 6h-8l.2 2h7.5l-.5 3-5 1.5-5-1.5-.3-1.5h-2l.5 3 7.5 2 7.5-2 1-11H6z"/></svg>,
  'Tailwind CSS': <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#06B6D4"><path d="M12 6c-2.7 0-4.3 1.2-5 3.5 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.6 1.2 1.2 2.5 2.6 5.5 2.6 2.7 0 4.3-1.2 5-3.5-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.6C15.6 7.4 14.3 6 11.3 6c-2.7 0-4.3 1.2-5 3.5 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.6C14 10.5 15.3 12 18.3 12c2.7 0 4.3-1.2 5-3.5-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.6-1.2-1.2-2.5-2.6-5.5-2.6z"/></svg>,
  Laravel: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#FF2D20"><path d="M22 5.8c-.2-.1-.5-.1-.7 0l-7.9 2.9c-.5.2-.8.6-.8 1.1v9.1c0 .2.1.5.3.6l2.3 2c.1.1.4.2.6.1.2 0 .4-.2.5-.4l5.7-13.2c.1-.2.1-.5-.1-.6-.1-.2-.3-.3-.5-.4zM6.6 7.2L.8 5.1c-.2-.1-.5 0-.7.1-.2.1-.3.3-.3.6V19c0 .3.2.6.5.7l5.8 2.5c.2.1.5 0 .7-.1l2.3-2c.2-.1.3-.4.3-.6V8.4c0-.5-.3-.9-.8-1.1l-.6-.3L6.6 7.2z"/></svg>,
  PHP: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#777BB4"><ellipse cx="12" cy="12" rx="11" ry="7"/><text x="6" y="14" fill="#fff" fontSize="6" fontWeight="bold">PHP</text></svg>,
  Django: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#092E20"><rect width="24" height="24" rx="3"/><text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">Dj</text></svg>,
  Python: <svg viewBox="0 0 24 24" className="w-8 h-8"><path d="M12 2c-1.6 0-3 .4-3 1.2v2.2c0 .7 1.4 1.2 3 1.2s3-.5 3-1.2V3.2C15 2.4 13.6 2 12 2zM9 4.8c-2.7.5-4.5 2-4.5 3.5v1.2c0 2.2 2.7 3.8 6 3.8h3c.8 0 1.5.7 1.5 1.5V16c0 .8-.7 1.5-1.5 1.5h-1.5c-.8 0-1.5-.7-1.5-1.5v-1.2c0-.7-1.4-1.2-3-1.2s-3 .5-3 1.2v2.2c0 2.5 2.7 4.5 6 4.5s6-2 6-4.5v-3.5c0-2.2-2.7-3.8-6-3.8H9c-.8 0-1.5-.7-1.5-1.5V8c0-.8.7-1.5 1.5-1.5h1.5c.8 0 1.5.7 1.5 1.5v1.2c0 .7 1.4 1.2 3 1.2s3-.5 3-1.2V5.7c0-2.5-2.7-4.5-6-4.5z" fill="#3776AB"/></svg>,
  'Express.js': <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="bold">Ex</text></svg>,
  'REST APIs': <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>,
  MySQL: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#4479A1"><path d="M4 6v12c0 2 1.5 3 3.5 3s3.5-1 3.5-3V6H4zm7 0v12c0 2 1.5 3 3.5 3s3.5-1 3.5-3V6h-7z"/></svg>,
  SQLite: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#003B57"><ellipse cx="12" cy="12" rx="10" ry="10"/><text x="12" y="15" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="bold">SQL</text></svg>,
  'Adobe Photoshop': <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#31A8FF"><rect width="24" height="24" rx="3"/><text x="12" y="16" textAnchor="middle" fill="#001E36" fontSize="12" fontWeight="bold">Ps</text></svg>,
  'Adobe Illustrator': <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#FF9A00"><rect width="24" height="24" rx="3"/><text x="12" y="16" textAnchor="middle" fill="#330000" fontSize="12" fontWeight="bold">Ai</text></svg>,
  'Corel VideoStudio': <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#6CB33F"><rect width="24" height="24" rx="3"/><text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">VS</text></svg>,
  CorelDRAW: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#51A62B"><rect width="24" height="24" rx="3"/><text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">CD</text></svg>,
  Git: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#F05032"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 3c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm4.5 12.5c-.8.8-2.1.8-2.8 0l-2.7-2.7-2.7 2.7c-.8.8-2.1.8-2.8 0-.8-.8-.8-2.1 0-2.8l2.7-2.7-2.7-2.7c-.8-.8-.8-2.1 0-2.8.8-.8 2.1-.8 2.8 0l2.7 2.7 2.7-2.7c.8-.8 2.1-.8 2.8 0 .8.8.8 2.1 0 2.8l-2.7 2.7 2.7 2.7c.8.8.8 2.1 0 2.8z"/></svg>,
  Docker: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#2496ED"><path d="M4 10h2v2H4v-2zm3 0h2v2H7v-2zm3 0h2v2h-2v-2zm-6 3h2v2H4v-2zm3 0h2v2H7v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm-6 3h2v2H4v-2zm3 0h2v2H7v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm3-6h2v2h-2v-2zm0 3h2v2h-2v-2zM2 16.5c0 1.9 1.6 3.5 3.5 3.5h10c2.8 0 5-2.2 5-5 0-.6-.5-1-1-1H19c-.6 0-1 .4-1 1 0 1.1-.9 2-2 2h-1V9H2v7.5z"/></svg>,
  Linux: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#FCC624"><path d="M12 2c-2 0-3.5 1.5-3.5 3.5 0 .5.1 1 .3 1.4-1.5.8-2.8 2.3-3.3 4.2-.2.8-.3 1.6-.3 2.4 0 2.5 1.3 4.7 3.3 6 .6.4 1.2.7 1.9.9-.3.5-.5 1.1-.5 1.7 0 1.9 1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5c0-.6-.2-1.2-.5-1.7.7-.2 1.3-.5 1.9-.9 2-1.3 3.3-3.5 3.3-6 0-.8-.1-1.6-.3-2.4-.5-1.9-1.8-3.4-3.3-4.2.2-.4.3-.9.3-1.4C15.5 3.5 14 2 12 2z"/></svg>,
  'VS Code': <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#007ACC"><path d="M2 5.6l8.5 7.4L2 20.4V5.6zm9 7.4l8.5 7.4V5.6L11 13zm8.5-9.6L11 13l-2.5-2.2L17 4.4z"/></svg>,
  Postman: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#FF6C37"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.5 13.5l-3.5-2 3.5-2V8l-7 4.5 7 4.5v-2z"/></svg>,
  Nginx: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#009639"><path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 3l6 3.3v7.4l-6 3.3-6-3.3V8.3L12 5z"/></svg>,
  Composer: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#885630"><rect width="24" height="24" rx="3"/><text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">Cp</text></svg>,
};

export default function SkillBadge({ name }) {
    const { theme } = useTheme();
    const icon = icons[name];

    return (
        <span className={`flex flex-col items-center justify-center gap-1.5 w-20 h-20 rounded-xl border transition-all duration-300 hover:scale-110 hover:shadow-lg ${
            theme === 'dark'
                ? 'bg-slate-800 text-slate-300 border-slate-700 hover:border-primary-500 hover:text-primary-400'
                : 'bg-white text-slate-700 border-slate-200 hover:border-primary-500 hover:text-primary-600'
        }`}>
            {icon || <span className="w-8 h-8 rounded-full bg-current opacity-30" />}
            <span className="text-[10px] leading-tight text-center font-medium px-1">{name}</span>
        </span>
    );
}
