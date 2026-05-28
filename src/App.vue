<script setup>
//port HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue';
import Home from './components/views/Home.vue';
import Footer from './components/views/Footer.vue';
import Kigali from './components/views/kigali.vue';
import North from './components/views/north.vue';
import West from './components/views/west.vue';
import South from './components/views/south.vue';
import East from './components/views/east.vue';

</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!--Hello word-->
    <NavBar />
    <main class="flex-1">
      <router-view />
    </main>
    <!--<Home/>-->
    <Footer/>
    
  </div>
</template>
