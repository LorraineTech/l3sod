<script setup>
import { useTranslation } from '../../composables/useTranslation'
const { t } = useTranslation()

const heroImage = new URL('../../assets/images/kivu.jpg', import.meta.url).href
const cardImages = {
  lake: new URL('../../assets/images/img.jpg', import.meta.url).href,
  tea: new URL('../../assets/images/north.jpg', import.meta.url).href,
  forest: new URL('../../assets/images/nyungwe.jpg', import.meta.url).href,
}
</script>

<template>
  <section class="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 text-slate-900 py-12 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div>
          <span class="inline-flex rounded-full bg-blue-200 px-3 py-1 text-sm font-semibold text-blue-800 mb-4">{{ t('southBadge') }}</span>
          <h1 class="text-4xl sm:text-5xl font-bold mb-6">{{ t('southTitle') }}</h1>
          <p class="text-lg text-slate-600 leading-8 mb-8">{{ t('southText') }}</p>
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="rounded-3xl border border-blue-200 bg-white p-6 shadow-sm">
              <h2 class="text-xl font-semibold text-blue-800 mb-2">{{ t('southCard1Title') }}</h2>
              <p class="text-slate-600">{{ t('southCard1Text') }}</p>
            </div>
            <div class="rounded-3xl border border-blue-200 bg-white p-6 shadow-sm">
              <h2 class="text-xl font-semibold text-blue-800 mb-2">{{ t('southCard2Title') }}</h2>
              <p class="text-slate-600">{{ t('southCard2Text') }}</p>
            </div>
          </div>
        </div>
        <div class="overflow-hidden rounded-[2rem] border border-blue-200 shadow-xl">
          <img :src="heroImage" alt="Southern Province" class="h-full w-full object-cover" />
        </div>
      </div>

      <div class="mt-12 grid gap-6 lg:grid-cols-3">
        <article class="rounded-[2rem] overflow-hidden bg-white shadow-lg border border-blue-100 transition hover:-translate-y-1 hover:shadow-xl">
          <img :src="cardImages.lake" alt="Lake Kivu" class="h-48 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-3 text-blue-800">{{ t('southCard1Title') }}</h3>
            <p class="text-slate-600">{{ t('southCard1Text') }}</p>
          </div>
        </article>
        <article class="rounded-[2rem] overflow-hidden bg-white shadow-lg border border-blue-100 transition hover:-translate-y-1 hover:shadow-xl">
          <img :src="cardImages.tea" alt="Tea plantations" class="h-48 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-3 text-blue-800">{{ t('southCard2Title') }}</h3>
            <p class="text-slate-600">{{ t('southCard2Text') }}</p>
          </div>
        </article>
        <article class="rounded-[2rem] overflow-hidden bg-white shadow-lg border border-blue-100 transition hover:-translate-y-1 hover:shadow-xl">
          <img :src="cardImages.forest" alt="Nyungwe forest" class="h-48 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-3 text-blue-800">{{ t('southCard3Title') }}</h3>
            <p class="text-slate-600">{{ t('southCard3Text') }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>