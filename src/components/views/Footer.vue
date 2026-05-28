<template>
    <footer class="bg-green-800 text-gray-200 py-10 px-4 mt-auto">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"> 
            <div>
                <h3 class="text-xl font-bold text-yellow-400 mb-2">Tembera U Rwanda</h3>
                <p class="text-sm">Doscover the beauty of the land of a thousand hills</p>
            </div>

            <div>
                <h2 class="text-yellow-300 font-bold text-1g mb-3"> QUICK LINKS</h2>
                    <ul class="space-y-2 text-sm">
               <li><RouterLink to="/" class="hover:text-yellow-200">Home</RouterLink></li>
               <li><RouterLink to="/about" class="hover:text-yellow-200">About</RouterLink></li>
               <li><RouterLink to="/contact" class="hover:text-yellow-200">Contact</RouterLink></li>
               <li><RouterLink to="/services" class="hover:text-yellow-200">Services</RouterLink></li>
               </ul>
               </div>
               
               <!--Destinations-->
               <div>
                <h3 class="text-yellow-300 font-bold text-1g mb-3">Destinations</h3>
                <ul class="space-y-2 text-sm">
                    <li>
                        <RouterLink to="/north"  class="hover:text-yellow-300">Nothern province</RouterLink>
                    </li>
                      <li>
                        <RouterLink to="/south"  class="hover:text-yellow-300">Southern province</RouterLink>
                    </li>
                      <li>
                        <RouterLink to="/east"  class="hover:text-yellow-300">Eastern province</RouterLink>
                    </li>
                      <li>
                        <RouterLink to="/west"  class="hover:text-yellow-300">Western province province</RouterLink>
                    </li>
                      <li>
                        <RouterLink to="/kigali"  class="hover:text-yellow-300">Kigali city</RouterLink>
                    </li>
                    
                </ul>
</div>
                <!--Contact Info-->
                <div>
                    <h4 class="text-yellow-300 font-bold text-1g b-3">Contact Info</h4>
            
                    <ul class="space-y-2 text-green-300">
                    <li> Ahantu nyaburanga</li>
                    <li>+250795815794</li>
                    <li> kabuge kigali Rwanda</li>
                    </ul>
                </div>
               </div>
               <!--place for copyright-->

            <div class="text-center text-sm">
                <p>&copy; 2026 Tembera U Rwanda. All rights reserved.</p>
            </div>
        
        
    </footer>
</template> 
   