<template >
    <section class="text-white mt-20" id="services">
        <div class="px-4 xl:pl-16">
            <h2 class="text-4xl font-bold text-white mb-4">My Services</h2>
        </div>
        <div class="py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
            <div v-for="service in services" :key="service.id" data-aos="fade-up"
            class="px-8 py-12 rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641]"
            >
                <div class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                    <div>
                        <img :src="service.icon" alt="service icon">
                    </div>
                </div>
                <div class="text-center">
                    <h3 class="pt-8 text-lg font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary lg:text-xl">
                        {{ service.name }}
                    </h3>
                    <p class="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                        {{ service.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import {ref} from 'vue';
const services =ref([
    {
        id:1,
        icon:'code.png',
        name:'Backend DEVELOPMENT',
        description:'Building scalable RESTful APIs with C#, JAVA, Nodejs, Spring Boot, ASP.NET Core, Web API, and Windows Form using object-oriented programming principles.'
    },
    {
        id:2,
        icon:'code.png',
        name:'Frontend DEVELOPMENT',
        description:'Designing and developing responsive and user-friendly web applications with HTML, CSS, JavaScript, Vue.js, React.'
    },
    {
        id:3,
        icon:'tech.png',
        name:'Technical',
        description:'C#, JAVA, Nodejs, HTML, CSS, JavaScript'
    },
    {
        id:4,
        icon:'tech.png',
        name:'Framework',
        description:'Spring Boot, ASP.NET Core'
    },
    {
        id:5,
        icon:'architecture1.png',
        name:'Architecture',
        description:'Microservice architecture, Clean Architecture, and Domain Driven Design.'
    },
    {
        id:6,
        icon:'database.png',
        name:'Database',
        description:'SQL Server, MySQL, PostgreSQL, MongoDB, and Redis for caching solutions.'
    },
    {
        id:7,
        icon:'git.png',
        name:'distributed version control system',
        description:'Git and Gitlab'
    },
    {
        id:8,
        icon:'other.png',
        name:'Others',
        description:'Grafana/Prometheus, Docker'
    },
    ])
</script>