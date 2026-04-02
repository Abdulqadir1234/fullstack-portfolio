<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Project;

class ProjectSeeder extends Seeder
{
    public function run()
    {
        $projects = [
            [
                'title' => 'E-Commerce Platform',
                'description' => 'A full-featured e-commerce platform with product management, shopping cart, payment integration, and order tracking. Built with modern technologies for scalability and performance.',
                'image_url' => null,
                'project_url' => '#',
                'github_url' => '#',
                'tech_stack' => ['Laravel', 'React', 'MySQL', 'Tailwind CSS', 'Stripe'],
                'featured' => true,
                'sort_order' => 1,
            ],
            [
                'title' => 'Task Management App',
                'description' => 'A collaborative task management application with real-time updates, drag-and-drop functionality, team workspaces, and deadline tracking.',
                'image_url' => null,
                'project_url' => '#',
                'github_url' => '#',
                'tech_stack' => ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
                'featured' => true,
                'sort_order' => 2,
            ],
            [
                'title' => 'Weather Dashboard',
                'description' => 'An interactive weather dashboard that displays real-time weather data, forecasts, and historical weather patterns with beautiful data visualizations.',
                'image_url' => null,
                'project_url' => '#',
                'github_url' => '#',
                'tech_stack' => ['React', 'Chart.js', 'OpenWeather API', 'CSS3'],
                'featured' => true,
                'sort_order' => 3,
            ],
            [
                'title' => 'Blog CMS',
                'description' => 'A content management system for blogging with markdown support, media uploads, SEO optimization, and a clean admin panel.',
                'image_url' => null,
                'project_url' => '#',
                'github_url' => '#',
                'tech_stack' => ['Laravel', 'Vue.js', 'PostgreSQL', 'Redis'],
                'featured' => false,
                'sort_order' => 4,
            ],
            [
                'title' => 'Portfolio Website',
                'description' => 'This very portfolio website, built with Laravel and React using Inertia.js for a seamless single-page application experience.',
                'image_url' => null,
                'project_url' => '#',
                'github_url' => 'https://github.com/Abdulqadir1234/fullstack-portfolio',
                'tech_stack' => ['Laravel', 'React', 'Inertia.js', 'Tailwind CSS', 'SQLite'],
                'featured' => true,
                'sort_order' => 5,
            ],
            [
                'title' => 'REST API Service',
                'description' => 'A RESTful API service with authentication, rate limiting, comprehensive documentation, and automated testing.',
                'image_url' => null,
                'project_url' => '#',
                'github_url' => '#',
                'tech_stack' => ['Laravel', 'MySQL', 'Redis', 'PHPUnit', 'Swagger'],
                'featured' => false,
                'sort_order' => 6,
            ],
        ];

        foreach ($projects as $project) {
            Project::create($project);
        }
    }
}
