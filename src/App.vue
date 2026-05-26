<script setup>
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue';
import Footer from './components/views/Footer.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!--Hello word-->
    <NavBar />
    <main class="flex-1">
      <router-view />
    </main>
    <Footer />
  </div>
</template>
