<script setup>
import { useTranslation } from '../../composables/useTranslation'
const { t } = useTranslation()

const heroImage = new URL('../../assets/images/kigali.jpg', import.meta.url).href
const cardImages = {
  museum: new URL('../../assets/images/tradi.jpg', import.meta.url).href,
  night: new URL('../../assets/images/kgl.jpg', import.meta.url).href,
  walks: new URL('../../assets/images/Gasabo.jpg', import.meta.url).href,
}
</script>

<template>
  <section class="min-h-screen bg-gradient-to-br from-red-50 to-red-100 text-slate-900 py-12 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div>
          <span class="inline-flex rounded-full bg-red-200 px-3 py-1 text-sm font-semibold text-red-800 mb-4">{{ t('kigaliBadge') }}</span>
          <h1 class="text-4xl sm:text-5xl font-bold mb-6">{{ t('kigaliTitle') }}</h1>
          <p class="text-lg text-slate-600 leading-8 mb-8">{{ t('kigaliText') }}</p>
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="rounded-3xl border border-red-200 bg-white p-6 shadow-sm">
              <h2 class="text-xl font-semibold text-red-800 mb-2">{{ t('kigaliCard1Title') }}</h2>
              <p class="text-slate-600">{{ t('kigaliCard1Text') }}</p>
            </div>
            <div class="rounded-3xl border border-red-200 bg-white p-6 shadow-sm">
              <h2 class="text-xl font-semibold text-red-800 mb-2">{{ t('kigaliCard2Title') }}</h2>
              <p class="text-slate-600">{{ t('kigaliCard2Text') }}</p>
            </div>
          </div>
        </div>

        <div class="overflow-hidden rounded-[2rem] border border-red-200 shadow-xl">
          <img :src="heroImage" alt="Kigali city" class="h-full w-full object-cover" />
        </div>
      </div>

      <div class="mt-12 grid gap-6 lg:grid-cols-3">
        <article class="rounded-[2rem] overflow-hidden bg-white shadow-lg border border-red-100 transition hover:-translate-y-1 hover:shadow-xl">
          <img :src="cardImages.museum" alt="Kigali museum" class="h-48 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-3 text-red-800">{{ t('kigaliCard1Title') }}</h3>
            <p class="text-slate-600">{{ t('kigaliCard1Text') }}</p>
          </div>
        </article>
        <article class="rounded-[2rem] overflow-hidden bg-white shadow-lg border border-red-100 transition hover:-translate-y-1 hover:shadow-xl">
          <img :src="cardImages.night" alt="Kigali nightlife" class="h-48 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-3 text-red-800">{{ t('kigaliCard2Title') }}</h3>
            <p class="text-slate-600">{{ t('kigaliCard2Text') }}</p>
          </div>
        </article>
        <article class="rounded-[2rem] overflow-hidden bg-white shadow-lg border border-red-100 transition hover:-translate-y-1 hover:shadow-xl">
          <img :src="cardImages.walks" alt="Kigali street scene" class="h-48 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-3 text-red-800">{{ t('kigaliCard3Title') }}</h3>
            <p class="text-slate-600">{{ t('kigaliCard3Text') }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>