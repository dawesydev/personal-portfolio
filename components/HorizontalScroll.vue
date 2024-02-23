<script setup>
const frontendProjects = [
    {
        title: 'Portfolio Website',
        description:
            'Build a personal portfolio website with responsive design, showcasing your skills and projects.',
    },
    {
        title: 'Weather App',
        description:
            'Develop an application that fetches weather data from an API and displays it to users with an intuitive UI.',
    },
    {
        title: 'Task Manager',
        description:
            'Create a task management application with features like task categorization, due dates, and drag-and-drop functionality.',
    },
    {
        title: 'Recipe Finder',
        description:
            'Design a recipe finder app allowing users to search for recipes based on ingredients or cuisine type, utilizing a recipe API.',
    },
    {
        title: 'E-commerce Website',
        description:
            'Develop a fully functional e-commerce platform with product listings, shopping cart, and secure payment processing.',
    },
    {
        title: 'Blog Platform',
        description:
            'Build a blog platform where users can create, publish, and manage their blog posts, with features like comments and social media sharing.',
    },
    {
        title: 'Fitness Tracker',
        description:
            'Create a fitness tracking app allowing users to set goals, log workouts, track progress, and view statistics.',
    },
    {
        title: 'To-Do List App',
        description:
            'Develop a to-do list application with features for creating tasks, setting deadlines, and organizing tasks into categories.',
    },
    {
        title: 'Quiz App',
        description:
            'Design a quiz application with customizable quizzes on various topics, including features like scoring and leaderboards.',
    },
    {
        title: 'Music Player',
        description:
            'Develop a simple music player application with features for playing, pausing, skipping tracks, and creating playlists.',
    },
]
</script>

<template>
    <div class="flex gap-4 pt-12 overflow-x-scroll">
        <div v-for="project in frontendProjects">
            <ProjectCard
                :title="project.title"
                :description="project.description"
            />
        </div>
    </div>
</template>
