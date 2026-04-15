// Static data for portfolio - replaces database

export const skills = [
    {
        category: 'Frontend',
        items: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vue.js'],
    },
    {
        category: 'Backend',
        items: ['Laravel', 'PHP', 'Django', 'Python', 'REST APIs', 'MySQL', 'SQLite'],
    },
    {
        category: 'Graphic Design',
        items: ['Adobe Photoshop', 'Adobe Illustrator', 'Corel VideoStudio', 'CorelDRAW'],
    },
    {
        category: 'Tools & DevOps',
        items: ['Git', 'Docker', 'Linux', 'VS Code', 'Postman', 'Nginx', 'Composer'],
    },
];

export const projects = [
    {
        id: 1,
        title: 'Pashto Calendar',
        description: 'A Laravel package for Pashto calendar conversion and date management. Install via composer and easily work with Pashto dates in your Laravel applications.',
        image: '/images/projects/pashto-calendar.png',
        technologies: ['Laravel', 'PHP', 'Composer', 'Package Development'],
        github_url: 'https://github.com/Abdulqadir1234/pashto-calendar',
        live_url: 'https://packagist.org/packages/qadir/pashto-calendar',
        order: 1,
    },
    {
        id: 2,
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce solution with Laravel backend and React frontend, featuring payment integration and admin dashboard.',
        image: '/images/projects/ecommerce.png',
        technologies: ['Laravel', 'React', 'MySQL', 'Stripe'],
        github_url: 'https://github.com/Abdulqadir1234/ecommerce',
        live_url: '#',
        order: 2,
    },
    {
        id: 3,
        title: 'Task Management App',
        description: 'A collaborative task management application with real-time updates, team features, and progress tracking.',
        image: '/images/projects/taskapp.png',
        technologies: ['Vue.js', 'Node.js', 'Socket.io', 'MongoDB'],
        github_url: 'https://github.com/Abdulqadir1234/taskapp',
        live_url: '#',
        order: 3,
    },
    {
        id: 4,
        title: 'Portfolio Website',
        description: 'A modern, responsive portfolio website built with React and Tailwind CSS, showcasing projects and skills.',
        image: '/images/projects/portfolio.png',
        technologies: ['React', 'Tailwind CSS', 'Vite'],
        github_url: 'https://github.com/Abdulqadir1234/portfolio',
        live_url: '#',
        order: 4,
    },
];
