<script setup>
import { useTranslation } from '../composables/useTranslation'
const { t } = useTranslation()
</script>

<template>
 <nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-between shadow-lg">
   <img src="../../public/newLogo.jpg" alt="logo" class="h-10">

<ul class="flex gap-8 text-sm font-medium ">
   <li><router-link to="/" class="hover:text-yellow-300">{{ t('navHome') }}</router-link></li>
   <li><router-link to="/about" class="hover:text-yellow-300">{{ t('navAbout') }}</router-link></li>
   <li><router-link to="/services" class="hover:text-yellow-300">{{ t('navServices') }}</router-link></li>
   <li class="relative group"> 
      <a href="#" class="hover:text-yellow-300">{{ t('navGallery') }} <span>✔</span></a>
   <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0 z-50">
      <li><router-link to="/photos" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ t('navPhotos') }}</router-link></li>
      <li><router-link to="/videos" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ t('navVideos') }}</router-link></li>
   </ul>
   </li>
  <li class="relative group"> 
      <a href="#" class="hover:text-yellow-300">{{ t('navDestinations') }} <span>✔</span></a><ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0 z-50">
      <li><router-link to="/destinations" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ t('navAllDestinations') }}</router-link></li>
      <li><router-link to="/north" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ t('navNorth') }}</router-link></li>
      <li><router-link to="/south" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ t('navSouth') }}</router-link></li>
      <li><router-link to="/east" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ t('navEast') }}</router-link></li>
      <li><router-link to="/west" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ t('navWest') }}</router-link></li>
      <li><router-link to="/kigali" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ t('navKigali') }}</router-link></li>
   </ul>
   </li>

   <li><router-link to="/contact" class="hover:text-yellow-300">{{ t('navContact') }}</router-link></li>
   
   <li>
     <router-link to="/login" class="bg-yellow-400 text-green-900 font-semibold px-3 py-2 rounded-md hover:bg-yellow-400 hover:text-green-950">
       Login
     </router-link>
   </li>
</ul>
 </nav>
</template>