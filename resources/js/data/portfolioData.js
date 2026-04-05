// Static data for portfolio - replaces database

export const skills = [
    {
        category: 'Frontend',
        items: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vue.js'],
    },
    {
        category: 'Backend',
        items: ['Laravel', 'PHP', 'Node.js', 'Python', 'REST APIs', 'MySQL', 'PostgreSQL'],
    },
    {
        category: 'Tools & DevOps',
        items: ['Git', 'Docker', 'Linux', 'VS Code', 'Postman', 'Nginx', 'Composer'],
    },
];

export const projects = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce solution with Laravel backend and React frontend, featuring payment integration and admin dashboard.',
        image: '/images/projects/ecommerce.png',
        technologies: ['Laravel', 'React', 'MySQL', 'Stripe'],
        github_url: 'https://github.com/Abdulqadir1234/ecommerce',
        live_url: '#',
        order: 1,
    },
    {
        id: 2,
        title: 'Task Management App',
        description: 'A collaborative task management application with real-time updates, team features, and progress tracking.',
        image: '/images/projects/taskapp.png',
        technologies: ['Vue.js', 'Node.js', 'Socket.io', 'MongoDB'],
        github_url: 'https://github.com/Abdulqadir1234/taskapp',
        live_url: '#',
        order: 2,
    },
    {
        id: 3,
        title: 'Portfolio Website',
        description: 'A modern, responsive portfolio website built with React and Tailwind CSS, showcasing projects and skills.',
        image: '/images/projects/portfolio.png',
        technologies: ['React', 'Tailwind CSS', 'Vite'],
        github_url: 'https://github.com/Abdulqadir1234/portfolio',
        live_url: '#',
        order: 3,
    },
];
