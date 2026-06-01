<script setup>
//port HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue';
import Footer from './components/views/Footer.vue';
import Translator from './components/Translator.vue';
import Home from './components/views/Home.vue';
import Kigali from './components/views/kigali.vue';
import North from './components/views/north.vue';
import West from './components/views/west.vue';
import South from './components/views/south.vue';
import East from './components/views/east.vue';


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
