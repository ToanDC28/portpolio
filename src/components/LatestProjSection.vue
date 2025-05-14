<template>
    <section class="text-white mt-20" id="projects">
        <div class="px-4 xl:pl-16">
            <div class="mb-4 md:flex md:justify-between xl:pr-16">
                <h2 class="text-4xl font-bold text-white"> My Latest Projects</h2>
                <!-- <div class="flex space-x-4 mb-4 mt-5 md:mt-0">
                    <button class="hover:text-primary" v-for="category in ['all', 'web development', 'Mobile App']"
                        :key="category" @click="() => selectedCategory = category">
                        {{ category }}
                    </button>
                </div> -->
            </div>
            <ul class="px-4 sm:py-16 xl:pr-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
                data-aos="fade-right">
                <div v-for="project in filteredProjects" :key="project.id" class="flex flex-col h-[32rem]">
                    <div class="h-52 rounded-t-xl relative group flex-shrink-0"
                    :style="{ backgroundImage: 'url(' + project.image + ')', backgroundSize: 'cover' }">                    
                    <div class="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0
                    hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500
                    ">
                        <a class="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                            :href="project.webURL"> <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                data-slot="icon"
                                class="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5">
                                </path>
                            </svg></a><a
                            class="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                            :href="project.gitURL"> <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                data-slot="icon"
                                class="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z">
                                </path>
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                            </svg></a>
                    </div>
                </div>
                <div class="text-white rounded-b-xl mt-3 bg-[#111a3e] shadow-lg border border-[#1f1641] py-6 px-4 flex-grow flex flex-col">
                    <h3 class="text-lg font-semibold uppercase lg:text-xl mb-2"> {{ project.title }}</h3>
                    <p class="text-[#ADB7BE] line-clamp-3 mb-4 cursor-pointer hover:text-primary transition-colors duration-300" 
                       @click="openModal(project)">{{ project.description }}</p>
                    <div class="flex flex-wrap gap-2 mt-auto">
                        <div v-for="technology in project.technologies" :key="technology" 
                            class="text-center rounded-3xl bg-[#111827] px-2 py-1 text-sm"
                            style="box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); border: 1px solid #111827;backdrop-filter: blur(9px);-webkit-backdrop-filter: blur(9px);">
                            {{ technology }}
                        </div>
                    </div>
                </div>
                </div>
            </ul>
        </div>

        <!-- Project Modal -->
        <div v-if="selectedProject" 
             class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
             @click.self="closeModal">
            <div class="bg-[#111a3e] rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div class="p-6">
                    <div class="flex justify-between items-start mb-4">
                        <h3 class="text-2xl font-bold text-white">{{ selectedProject.title }}</h3>
                        <button @click="closeModal" class="text-white hover:text-primary transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div class="space-y-4">
                        <p class="text-[#ADB7BE]">{{ selectedProject.description }}</p>
                        <div class="flex flex-wrap gap-2">
                            <div v-for="technology in selectedProject.technologies" :key="technology" 
                                class="text-center rounded-3xl bg-[#111827] px-3 py-1 text-sm">
                                {{ technology }}
                            </div>
                        </div>
                        <div class="flex gap-4 mt-6">
                            <a v-if="selectedProject.gitURL" 
                               :href="selectedProject.gitURL" 
                               target="_blank"
                               class="flex items-center gap-2 text-white hover:text-primary transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                View on GitHub
                            </a>
                            <a v-if="selectedProject.webURL" 
                               :href="selectedProject.webURL" 
                               target="_blank"
                               class="flex items-center gap-2 text-white hover:text-primary transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                Visit Website
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const Projects = ref([
    {
        id: 1,
        category: 'Backend Development',
        image: 'src/assets/project.png',
        title: 'Academy Management System',
        description: 'The Academy Management System (AMS) is an all-in-one platform designed to streamline academy operations. It includes user management with role-based access, syllabus management to maintain up-to-date course content, training program coordination with trainer assignments and linked syllabi, and class management for scheduling and organizing classes efficiently.',
        technologies: ['Java', 'Spring Boot', 'RESTful API', 'MySQL', 'JUnit', 'Maven', 'GitHub', 'Docker', 'AWS', 'Jenkins', 'CI/CD'],
        gitURL: 'https://github.com/ToanDC28/SpringBootWebAPI',
        webURL: ''
    },
    {
        id: 2,
        category: 'Web Development',
        image: 'src/assets/mobile.jpg',
        title: 'Human Resource Management System',
        description: 'The IT Human Resource Management System is a web-based application developed to help IT companies manage employee information and automate salary calculations. Built with Java and CSS, and powered by Microsoft SQL Server and Apache Tomcat, the system supports role-based access, streamlined HR operations, and a user-friendly interface for administrators. It provides essential features like employee record management, payroll processing, and secure data handling, making it a practical solution for internal HR management in IT businesses.',
        technologies: [ 'Java', 'Servlet', 'JSP', 'JDBC', 'MySQL', 'CSS', 'HTML', 'Apache Tomcat', 'GitHub'],
        gitURL: '',
        webURL: ''
    },
    {
        id: 3,
        category: 'Backend Development',
        image: 'src/assets/project.png',
        title: 'Dental Clinic Management System',
        description: 'The Dr. Dentist API is a backend system built with .NET 7 and PostgreSQL 16, designed to support dental clinic operations through features like appointment scheduling, patient record management, treatment planning, and billing. It follows a multi-tenant architecture with role-based access control, ensuring secure and scalable management for multiple clinics. The system also integrates Redis for caching and real-time updates via SignalR, and uses Hangfire for background job processing. With support for Docker deployment, it offers a modern and efficient solution for digitizing dental clinic workflows.',
        technologies: [ '.NET 7', 'PostgreSQL', 'Entity Framework', 'ASP.NET Core', 'RESTful API', 'Redis', 'SignalR', 'Hangfire', 'Docker', 'GitHub', 'CI/CD'],
        gitURL: 'https://github.com/ToanDC28/dr-dentist-api',
        webURL: ''
    },
    {
        id: 4,
        category: 'Web Development',
        image: 'src/assets/mobile.jpg',
        title: 'Spotify',
        description: 'The Spotify project is a full-stack web application inspired by Spotify\'s music streaming platform. Built primarily with TypeScript and JavaScript, it features a modular architecture with separate frontend and backend directories. The project aims to replicate core features like music playback, user authentication, and playlist management, serving as a foundation for learning full-stack development.',
        technologies: ['TypeScript', 'JavaScript', 'React', 'Node.js', 'Clerk', 'MongoDB', 'Tailwind CSS', 'Socket.io', 'Cloudinary', 'Express'],
        gitURL: 'https://github.com/ToanDC28/spotify-clone',
        webURL: ''
    }
]);

const selectedCategory = ref('all');
const filteredProjects = computed(() => {
    if (selectedCategory.value === 'all') {
        return Projects.value;
    }
    return Projects.value.filter(project => project.category.toLocaleLowerCase() === selectedCategory.value.toLocaleLowerCase());
})

const selectedProject = ref(null);

const openModal = (project) => {
    selectedProject.value = project;
};

const closeModal = () => {
    selectedProject.value = null;
};
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}
</style>