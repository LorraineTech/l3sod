<script setup>
import NavBar from './components/NavBar.vue';
import Footer from './components/views/Footer.vue';
import Translator from './components/Translator.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <NavBar />
    <div class="bg-white border-b border-slate-200 px-6 py-4">
      <div class="mx-auto flex justify-end max-w-6xl">
        <Translator />
      </div>
    </div>
    <main class="flex-1">
      <router-view />
    </main>
    <Footer/>
  </div>
</template>
