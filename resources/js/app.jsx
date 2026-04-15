import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { ThemeProvider } from './Components/Layout/ThemeProvider';
import Home from './Pages/Home';
import Resume from './Pages/Resume';
import '../css/app.css';

function App() {
    const [currentPage, setCurrentPage] = useState('home');

    useEffect(() => {
        // Check current path
        if (window.location.pathname === '/resume') {
            setCurrentPage('resume');
        }
    }, []);

    return currentPage === 'resume' ? <Resume /> : <Home />;
}

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
    <HelmetProvider>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </HelmetProvider>
);
