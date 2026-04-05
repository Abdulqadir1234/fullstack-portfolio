import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import Home from './Pages/Home';
import '../css/app.css';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
    <HelmetProvider>
        <Home />
    </HelmetProvider>
);
