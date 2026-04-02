<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Inertia\Inertia;

class PageController extends Controller
{
    public function index()
    {
        $projects = Project::ordered()->get();

        $skills = [
            [
                'category' => 'Frontend',
                'items' => ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vue.js'],
            ],
            [
                'category' => 'Backend',
                'items' => ['Laravel', 'PHP', 'Node.js', 'Python', 'REST APIs', 'MySQL', 'PostgreSQL'],
            ],
            [
                'category' => 'Tools & DevOps',
                'items' => ['Git', 'Docker', 'Linux', 'VS Code', 'Postman', 'Nginx', 'Composer'],
            ],
        ];

        return Inertia::render('Home', [
            'projects' => $projects,
            'skills' => $skills,
        ]);
    }
}
