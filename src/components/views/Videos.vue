<script setup>
import { useTranslation } from '../../composables/useTranslation'
const { t } = useTranslation()
</script>

<template>
  <section class="bg-white min-h-screen text-slate-900 py-12 px-4">
    <div class="max-w-6xl mx-auto">
      <header class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4 text-slate-900">{{ t('videosTitle') }}</h1>
        <p class="text-slate-600 max-w-2xl mx-auto">{{ t('videosText') }}</p>
      </header>
      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <article class="rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
          <img src="../../assets/images/night.jpg" alt="Rwanda night scene" class="h-64 w-full object-cover" />
          <div class="p-6">
            <h2 class="text-2xl font-semibold mb-3">{{ t('videosCard1Title') }}</h2>
            <p class="text-slate-600 mb-4">{{ t('videosCard1Text') }}</p>
            <span class="inline-flex items-center rounded-full bg-indigo-100 text-indigo-800 px-3 py-1 text-sm font-semibold">{{ t('videosWatchNow') }}</span>
          </div>
        </article>
        <article class="rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
          <img src="../../assets/images/stade.jpg" alt="Rwanda nature view" class="h-64 w-full object-cover" />
          <div class="p-6">
            <h2 class="text-2xl font-semibold mb-3">{{ t('videosCard2Title') }}</h2>
            <p class="text-slate-600 mb-4">{{ t('videosCard2Text') }}</p>
            <span class="inline-flex items-center rounded-full bg-indigo-100 text-indigo-800 px-3 py-1 text-sm font-semibold">{{ t('videosWatchNow') }}</span>
          </div>
        </article>
        <article class="rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
          <img src="../../assets/images/yy.jpg" alt="Rwanda cultural tour" class="h-64 w-full object-cover" />
          <div class="p-6">
            <h2 class="text-2xl font-semibold mb-3">{{ t('videosCard3Title') }}</h2>
            <p class="text-slate-600 mb-4">{{ t('videosCard3Text') }}</p>
            <span class="inline-flex items-center rounded-full bg-indigo-100 text-indigo-800 px-3 py-1 text-sm font-semibold">{{ t('videosWatchNow') }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
