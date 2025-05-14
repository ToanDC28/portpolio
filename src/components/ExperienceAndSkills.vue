<template>
    <section class="text-white mt-18" id="skills">
        <div class="absolute right-0 top-[110rem] h-full w-full justify-end">
            <span class="flex opacity-20">
                <span class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"></span>
                <span class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"></span>
            </span>
        </div>
        <div class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 xl:px-16">
            <div class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full w-[80%]">
                <div class="sticky pb-4">
                    <h2 class="text-4xl font-bold text-white text-left mb-4"> 
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Certificates</span>
                    </h2>
                </div>
                <div class="max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-[#131d30]">
                    <div class="mt-8" v-for="skill in Skills" :key="skill.id">
                        <div class="flex items-end justify-between" data-aos="fade-right">
                            <a :href="skill.links" target="_blank" class="font-semibold uppercase text-white">
                                {{ skill.name }}
                            </a>
                            <h4 class="font-semibold uppercase text-white">{{ skill.due }}</h4>
                        </div>
                        <div class="mt-2 h-1 w-full bg-[#131d30] rounded-full">
                            <div class="h-1 rounded-full bg-primary" :style="`width :${skill.width}`"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="flip-left">
                <h2 class="text-4xl font-bold text-white text-left mb-8 md:text-center md:mt-0 mt-8">My Experiences</h2>
                <div class="space-y-8 py-8" data-aos="fade-left">
                    <div v-for="element in Experinces" :key="element.id"
                    class="flex  items-center rounded-xl p-4 bg-[#111a3e] shadow-lg border border-[#1f1641]"
                    >
                    <div class="w-1/4">
                        <img src="https://img.icons8.com/ios-filled/100/ffffff/lawyer.png" alt="lawyer">
                    </div>
                    <div class="w-3/4 pl-4">
                        <h3 class="text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            {{ element.role }}
                        </h3>
                        <p class="text-white">{{ element.company }}</p>
                        <p class="text-white">{{ element.date }}</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
const Skills =ref([
    {
        id:1,
        name:'Academic Skills for University Success',
        university: "The University of Sydney",
        due: "April 9, 2022",
        links:'https://www.coursera.org/account/accomplishments/specialization/certificate/LAVECUQWYTG6'
    },
    {
        id:2,
        name:'Computer Communications',
        university: "University of Colorado System",
        due: "July 3, 2022",
        links:'https://www.coursera.org/account/accomplishments/specialization/certificate/W47KGZBT3CNH'
    },
    {
        id:3,
        name:'Web Design for Everybody: Basics of Web Development & Coding',
        university: "UUniversity of Michigan",
        due: "December 9, 2022",
        links:'https://www.coursera.org/account/accomplishments/specialization/certificate/6JNGR6B7JNR2'
    },
    {
        id:4,
        name:'Software Development Lifecycle',
        university: "University of Minnesota",
        due: "April 18, 2023",
        links:'https://www.coursera.org/account/accomplishments/specialization/certificate/GTDHBDZANEDV'
    },
    {
        id:5,
        name:'CertNexus Certified Ethical Emerging Technologist',
        university: "CertNexus",
        due: "August 2, 2023",
        links:'https://www.coursera.org/account/accomplishments/specialization/certificate/2AJR2XK4BVZ7'
    },
    {
        id:6,
        name:'Academic English: Writing',
        university: "University of California, Irvine",
        due: "December 13, 2023",
        links:'https://www.coursera.org/account/accomplishments/specialization/certificate/C3L27MZEXP8R'
    },
    {
        id:7,
        name:'Project Management Principles and Practices',
        university: "University of California, Irvine",
        due: "April 2, 2024",
        links:'https://www.coursera.org/account/accomplishments/specialization/certificate/VWN8REXF84S5'
    },
    {
        id:8,
        name:'User Experience Research and Design',
        university: "University of Michigan",
        due: "August 9, 2024",
        links:'https://www.coursera.org/account/accomplishments/specialization/certificate/JH9HK817QOWW'
    },
]);

const Experinces =ref([
    {
        id:1,
        role:'Intern Java Developer',
        company:'FPT Software',
        date:'September 2023 - December 2023'
    },
])
</script>
<style scoped>
.custom-scrollbar::-webkit-scrollbar {
    width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: #131d30;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: var(--color-primary);
    border-radius: 3px;
}
</style>