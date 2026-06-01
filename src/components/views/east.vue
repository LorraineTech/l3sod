<script setup>
import { useTranslation } from '../../composables/useTranslation'
const { t } = useTranslation()

const heroImage = new URL('../../assets/images/akagera.jpg', import.meta.url).href
const cardImages = {
  safari: new URL('../../assets/images/zebra.jpg', import.meta.url).href,
  lake: new URL('../../assets/images/birds.jpg', import.meta.url).href,
  village: new URL('../../assets/images/cows.jpg', import.meta.url).href,
}
</script>

<template>
  <section class="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-100 text-slate-900 py-12 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div>
          <span class="inline-flex rounded-full bg-yellow-200 px-3 py-1 text-sm font-semibold text-yellow-800 mb-4">{{ t('eastBadge') }}</span>
          <h1 class="text-4xl sm:text-5xl font-bold mb-6">{{ t('eastTitle') }}</h1>
          <p class="text-lg text-slate-600 leading-8 mb-8">{{ t('eastText') }}</p>
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="rounded-3xl border border-yellow-200 bg-white p-6 shadow-sm">
              <h2 class="text-xl font-semibold text-yellow-800 mb-2">{{ t('eastCard1Title') }}</h2>
              <p class="text-slate-600">{{ t('eastCard1Text') }}</p>
            </div>
            <div class="rounded-3xl border border-yellow-200 bg-white p-6 shadow-sm">
              <h2 class="text-xl font-semibold text-yellow-800 mb-2">{{ t('eastCard2Title') }}</h2>
              <p class="text-slate-600">{{ t('eastCard2Text') }}</p>
            </div>
          </div>
        </div>
        <div class="overflow-hidden rounded-[2rem] border border-yellow-200 shadow-xl">
          <img src="../../assets/images/akagera.jpg" alt="Eastern Province" class="h-full w-full object-cover" />
        </div>
      </div>

      <div class="mt-12 grid gap-6 lg:grid-cols-3">
        <article class="rounded-[2rem] overflow-hidden bg-white shadow-lg border border-yellow-100">
          <img :src="cardImages.safari" alt="Akagera" class="h-48 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-3 text-yellow-800">{{ t('eastCard1Title') }}</h3>
            <p class="text-slate-600">{{ t('eastCard1Text') }}</p>
          </div>
        </article>
        <article class="rounded-[2rem] overflow-hidden bg-white shadow-lg border border-yellow-100">
          <img :src="cardImages.lake" alt="Savanna landscape" class="h-48 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-3 text-yellow-800">{{ t('eastCard2Title') }}</h3>
            <p class="text-slate-600">{{ t('eastCard2Text') }}</p>
          </div>
        </article>
        <article class="rounded-[2rem] overflow-hidden bg-white shadow-lg border border-yellow-100">
          <img :src="cardImages.village" alt="Country village" class="h-48 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-3 text-yellow-800">{{ t('eastCard3Title') }}</h3>
            <p class="text-slate-600">{{ t('eastCard3Text') }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>