<script setup>
import { useTranslation } from '../../composables/useTranslation'
const { t } = useTranslation()
</script>

<template>
    <footer class="bg-green-800 text-gray-200 py-10 px-4 mt-auto">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"> 
            <div>
                <h3 class="text-xl font-bold text-yellow-400 mb-2">{{ t('footerBrand') }}</h3>
                <p class="text-sm">{{ t('footerTagline') }}</p>
            </div>

            <div>
                <h2 class="text-yellow-300 font-bold text-1g mb-3">{{ t('footerQuickLinks') }}</h2>
                    <ul class="space-y-2 text-sm">
               <li><RouterLink to="/" class="hover:text-yellow-200">{{ t('navHome') }}</RouterLink></li>
               <li><RouterLink to="/about" class="hover:text-yellow-200">{{ t('navAbout') }}</RouterLink></li>
               <li><RouterLink to="/contact" class="hover:text-yellow-200">{{ t('navContact') }}</RouterLink></li>
               <li><RouterLink to="/services" class="hover:text-yellow-200">{{ t('navServices') }}</RouterLink></li>
               </ul>
               </div>
               
               <!--Destinations-->
               <div>
                <h3 class="text-yellow-300 font-bold text-1g mb-3">{{ t('footerDestinations') }}</h3>
                <ul class="space-y-2 text-sm">
                    <li>
                        <RouterLink to="/north"  class="hover:text-yellow-300">{{ t('navNorth') }}</RouterLink>
                    </li>
                      <li>
                        <RouterLink to="/south"  class="hover:text-yellow-300">{{ t('navSouth') }}</RouterLink>
                    </li>
                      <li>
                        <RouterLink to="/east"  class="hover:text-yellow-300">{{ t('navEast') }}</RouterLink>
                    </li>
                      <li>
                        <RouterLink to="/west"  class="hover:text-yellow-300">{{ t('navWest') }}</RouterLink>
                    </li>
                      <li>
                        <RouterLink to="/kigali"  class="hover:text-yellow-300">{{ t('navKigali') }}</RouterLink>
                    </li>
                </ul>
</div>
                <!--Contact Info-->
                <div>
                    <h4 class="text-yellow-300 font-bold text-1g b-3">{{ t('footerContactInfo') }}</h4>
            
                    <ul class="space-y-2 text-green-300">
                    <li>Ahantu nyaburanga</li>
                    <li>+250795815794</li>
                    <li>{{ t('footerLocation') }}</li>
                    </ul>
                </div>
               </div>
               <!--place for copyright-->

            <div class="text-center text-sm">
                <p>{{ t('footerCopy') }}</p>
            </div>
    </footer>
</template> 
   