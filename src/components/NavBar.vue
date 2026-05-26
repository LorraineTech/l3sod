<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const isActive = (name) => router.currentRoute.value.name === name
</script>

<template>
    <nav class="bg-blue-600 text-white py-4 px-6 shadow-lg">
        <div class="max-w-6xl mx-auto flex justify-between items-center">
            <div class="text-2xl font-bold">Tembera U Rwanda</div>
            <ul class="flex gap-6 items-center">
                <li>
                    <router-link to="/" :class="['hover:text-blue-200 transition', isActive('home') ? 'text-yellow-300 font-bold' : '']">Home</router-link>
                </li>
                <li>
                    <router-link to="/contact" :class="['hover:text-blue-200 transition', isActive('contact') ? 'text-yellow-300 font-bold' : '']">Contact</router-link>
                </li>
                <li>
                    <router-link to="/login" class="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded transition">Login</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>