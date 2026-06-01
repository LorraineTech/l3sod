<template>
  <div class="language-switcher">
    <select v-model="currentLanguage" class="px-3 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500" aria-label="Select language">
      <option v-for="(label, code) in languages" :key="code" :value="code">
        {{ label }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { useTranslation } from '../composables/useTranslation'
const { currentLanguage, languages } = useTranslation()
</script>

<style scoped>
.language-switcher {
  display: inline-block;
}

select {
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
}
</style>
