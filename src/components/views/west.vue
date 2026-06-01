<template>
  <section class="min-h-screen bg-gradient-to-br from-purple-50 to-violet-100 text-slate-900 py-12 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div>
          <span class="inline-flex rounded-full bg-purple-200 px-3 py-1 text-sm font-semibold text-purple-800 mb-4">{{ t('westBadge') }}</span>
          <h1 class="text-4xl sm:text-5xl font-bold mb-6">{{ t('westTitle') }}</h1>
          <p class="text-lg text-slate-600 leading-8 mb-8">{{ t('westText') }}</p>
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="rounded-3xl border border-purple-200 bg-white p-6 shadow-sm">
              <h2 class="text-xl font-semibold text-purple-800 mb-2">{{ t('westCard1Title') }}</h2>
              <p class="text-slate-600">{{ t('westCard1Text') }}</p>
            </div>
            <div class="rounded-3xl border border-purple-200 bg-white p-6 shadow-sm">
              <h2 class="text-xl font-semibold text-purple-800 mb-2">{{ t('westCard2Title') }}</h2>
              <p class="text-slate-600">{{ t('westCard2Text') }}</p>
            </div>
          </div>
        </div>
        <div class="overflow-hidden rounded-[2rem] border border-purple-200 shadow-xl">
          <img :src="heroImage" alt="Western Province" class="h-full w-full object-cover" />
        </div>
      </div>

      <div class="mt-12 grid gap-6 lg:grid-cols-3">
        <article class="rounded-[2rem] overflow-hidden bg-white shadow-lg border border-purple-100 transition hover:-translate-y-1 hover:shadow-xl">
          <img :src="cardImages.crater" alt="Crater lakes" class="h-48 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-3 text-purple-800">{{ t('westCard1Title') }}</h3>
            <p class="text-slate-600">{{ t('westCard1Text') }}</p>
          </div>
        </article>
        <article class="rounded-[2rem] overflow-hidden bg-white shadow-lg border border-purple-100 transition hover:-translate-y-1 hover:shadow-xl">
          <img :src="cardImages.town" alt="Lakeside town" class="h-48 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-3 text-purple-800">{{ t('westCard2Title') }}</h3>
            <p class="text-slate-600">{{ t('westCard2Text') }}</p>
          </div>
        </article>
        <article class="rounded-[2rem] overflow-hidden bg-white shadow-lg border border-purple-100 transition hover:-translate-y-1 hover:shadow-xl">
          <img :src="cardImages.forest" alt="Forest path" class="h-48 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-3 text-purple-800">{{ t('westCard3Title') }}</h3>
            <p class="text-slate-600">{{ t('westCard3Text') }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useTranslation } from '../../composables/useTranslation'
const { t } = useTranslation()

const heroImage = new URL('../../assets/images/culture.jpg', import.meta.url).href
const cardImages = {
  crater: new URL('../../assets/images/kivu.jpg', import.meta.url).href,
  town: new URL('../../assets/images/crater.jpg', import.meta.url).href,
  forest: new URL('../../assets/images/west.jpg', import.meta.url).href,
}
</script>