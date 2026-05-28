<template>
 <nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-between shadow-lg">
   <img src="../../public/newLogo.jpg" alt="logo"class="h-10">

<ul class="flex gap-8 text-sm font-medium ">
   <li><router-link to="/" class="hover:text-yellow-300">Home</router-link></li>
   <li><router-link to="/about" class="hover:text-yellow-300">About Us</router-link></li>
   <li><router-link to="/services" class="hover:text-yellow-300">Services</router-link></li>
   <li class="relative group"> 
      <a href="#" class="hover:text-yellow-300">Gallery <span>✔</span></a>
   <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0 z-50">
      <li><a href="/photos" class="block px-4 py-2 hover:bg-green-200 text-green-900">Photos</a></li>
      <li><a href="/videos" class="block px-4 py-2 hover:bg-green-200 text-green-900">Videos</a></li>
   </ul>
   </li>
  <li class="relative group"> 
      <a href="#" class="hover:text-yellow-300">Destinations <span>✔</span></a><ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0 z-50">
      <li><router-link to="/destinations" class="block px-4 py-2 hover:bg-green-200 text-green-900">All Destinations</router-link></li>
      <li><a href="/north" class="block px-4 py-2 hover:bg-green-200 text-green-900">Northern Province</a></li>
      <li><a href="/south" class="block px-4 py-2 hover:bg-green-200 text-green-900">Southern Province</a></li>
      <li><a href="/east" class="block px-4 py-2 hover:bg-green-200 text-green-900">Eastern Province</a></li>
      <li><a href="/west" class="block px-4 py-2 hover:bg-green-200 text-green-900">Western Province</a></li>
      <li><a href="/kigali" class="block px-4 py-2 hover:bg-green-200 text-green-900">KIGALI CITY</a></li>
   </ul>
   </li>

   <li><router-link to="/contact" class="hover:text-yellow-300">Contact Us</router-link></li>
</ul>
 </nav>
</template>