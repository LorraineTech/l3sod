<script setup>
import { useTranslation } from '../../composables/useTranslation'
const { t } = useTranslation()
</script>

<template>
  <section class="bg-gradient-to-br from-slate-50 via-white to-slate-100 min-h-screen text-slate-900 py-12 px-4">
    <div class="max-w-6xl mx-auto">
      <header class="text-center mb-12">
        <span class="inline-flex rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-800 mb-4">{{ t('servicesBadge') }}</span>
        <h1 class="text-4xl font-bold mb-4">{{ t('servicesTitle') }}</h1>
        <p class="text-slate-600 max-w-2xl mx-auto">{{ t('servicesText') }}</p>
      </header>

      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <article class="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 class="text-2xl font-semibold mb-3 text-green-800">{{ t('serviceItineraryTitle') }}</h2>
          <p class="text-slate-600 mb-4">{{ t('serviceItineraryText') }}</p>
          <p class="text-sm font-semibold text-slate-500">{{ t('serviceItineraryMeta') }}</p>
        </article>
        <article class="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 class="text-2xl font-semibold mb-3 text-green-800">{{ t('serviceGuidesTitle') }}</h2>
          <p class="text-slate-600 mb-4">{{ t('serviceGuidesText') }}</p>
          <p class="text-sm font-semibold text-slate-500">{{ t('serviceGuidesMeta') }}</p>
        </article>
        <article class="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 class="text-2xl font-semibold mb-3 text-green-800">{{ t('serviceTransportTitle') }}</h2>
          <p class="text-slate-600 mb-4">{{ t('serviceTransportText') }}</p>
          <p class="text-sm font-semibold text-slate-500">{{ t('serviceTransportMeta') }}</p>
        </article>
        <article class="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 class="text-2xl font-semibold mb-3 text-green-800">{{ t('serviceAdventureTitle') }}</h2>
          <p class="text-slate-600 mb-4">{{ t('serviceAdventureText') }}</p>
          <p class="text-sm font-semibold text-slate-500">{{ t('serviceAdventureMeta') }}</p>
        </article>
        <article class="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 class="text-2xl font-semibold mb-3 text-green-800">{{ t('serviceAccommodationTitle') }}</h2>
          <p class="text-slate-600 mb-4">{{ t('serviceAccommodationText') }}</p>
          <p class="text-sm font-semibold text-slate-500">{{ t('serviceAccommodationMeta') }}</p>
        </article>
        <article class="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 class="text-2xl font-semibold mb-3 text-green-800">{{ t('serviceGroupTitle') }}</h2>
          <p class="text-slate-600 mb-4">{{ t('serviceGroupText') }}</p>
          <p class="text-sm font-semibold text-slate-500">{{ t('serviceGroupMeta') }}</p>
        </article>
      </div>
    </div>
  </section>
</template>