// Static data for portfolio - replaces database

export const skills = [
    {
        category: 'Frontend',
        items: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vue.js'],
    },
    {
        category: 'Backend',
        items: ['Laravel', 'PHP', 'Django', 'Python', 'Express.js', 'REST APIs', 'MySQL', 'SQLite'],
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
        title: 'Frontend Practical Project',
        description: 'A responsive frontend project built with HTML, CSS, and Bootstrap showcasing modern web design principles.',
        image: '/images/projects/ecommerce.png',
        technologies: ['HTML', 'CSS', 'Bootstrap'],
        github_url: 'https://github.com/Abdulqadir1234/Estate-rise-project',
        live_url: '#',
        order: 2,
    },
    {
        id: 3,
        title: 'Task Management App',
        description: 'A collaborative task management application with real-time updates, team features, and progress tracking.',
        image: '/images/projects/taskapp.png',
        technologies: ['Vue.js', 'Node.js', 'Socket.io', 'MongoDB'],
        github_url: 'https://github.com/Abdulqadir1234/Blog-Post-laravel',
        live_url: '#',
        order: 3,
    },
    {
        id: 4,
        title: 'Aab-Pal Website',
        description: 'A website for water MIS (Management Information System) providing comprehensive water management solutions.',
        image: '/images/projects/aab-pal.png',
        technologies: ['React', 'Express.js', 'Tailwind CSS'],
        github_url: 'https://github.com/Abdulqadir1234/Aab-Pal-website',
        live_url: '#',
        order: 4,
    },
    {
        id: 5,
        title: 'Construction Company MIS',
        description: 'A comprehensive Management Information System for a construction company, built as a team collaboration project to streamline business operations.',
        image: '/images/projects/construction-mis.png',
        technologies: ['React', 'Express.js', 'Tailwind CSS', 'Team Project'],
        github_url: 'https://github.com/farooqahmadahmadi/CC-MIS',
        live_url: '#',
        order: 5,
    },
    {
        id: 6,
        title: 'Portfolio Website',
        description: 'A modern, responsive portfolio website built with React and Tailwind CSS, showcasing projects and skills.',
        image: '/images/projects/portfolio.png',
        technologies: ['React', 'Tailwind CSS', 'Vite'],
        github_url: 'https://github.com/Abdulqadir1234/fullstack-portfolio',
        live_url: '#',
        order: 6,
    },
];
