<script setup>
import { useTranslation } from '../../composables/useTranslation'
const { t } = useTranslation()
</script>

<template>
  <section class="relative min-h-[85vh] bg-cover bg-center" style="background-image:url(/src/assets/images/mm.jpg)">
    <div class="absolute inset-0 bg-black/70"></div>
    <div class="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center px-6 text-center text-slate-900">
      <span class="inline-flex rounded-full border border-emerald-300 bg-emerald-50 px-4 py-2 text-xs uppercase tracking-[0.35em] text-emerald-700">{{ t('homeBadge') }}</span>
      <h1 class="mt-6 text-4xl font-extrabold leading-tight sm:text-6xl text-white">{{ t('homeTitle') }}</h1>
      <p class="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white sm:text-base">{{ t('homeDescription') }}</p>
      <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <router-link to="/destinations" class="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-emerald-500">{{ t('homeDestinationsBtn') }}</router-link>
        <router-link to="/about" class="inline-flex items-center justify-center rounded-full border border-emerald-500 bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-emerald-700 transition hover:bg-emerald-50">{{ t('homeAboutBtn') }}</router-link>
      </div>
    </div>
  </section>


  <section class="bg-gray-50 text-slate-900 py-16">
    <div class="mx-auto max-w-6xl px-6">
      <div class="mb-10 text-center">
        <p class="text-sm uppercase tracking-[0.3em] text-emerald-600">{{ t('homeSpecialLabel') }}</p>
        <h2 class="mt-4 text-3xl font-bold sm:text-4xl">{{ t('homeSpecialTitle') }}</h2>
      </div>
      <div class="grid gap-6 md:grid-cols-3">
        <article class="rounded-3xl border border-gray-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg">
          <h3 class="text-xl font-semibold text-slate-900">{{ t('homeCulturalTitle') }}</h3>
          <p class="mt-3 text-sm leading-6 text-slate-600">{{ t('homeCulturalText') }}</p>
        </article>
        <article class="rounded-3xl border border-gray-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg">
          <h3 class="text-xl font-semibold text-slate-900">{{ t('homeNatureTitle') }}</h3>
          <p class="mt-3 text-sm leading-6 text-slate-600">{{ t('homeNatureText') }}</p>
        </article>
        <article class="rounded-3xl border border-gray-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg">
          <h3 class="text-xl font-semibold text-slate-900">{{ t('homePlanningTitle') }}</h3>
          <p class="mt-3 text-sm leading-6 text-slate-600">{{ t('homePlanningText') }}</p>
        </article>
      </div>
    </div>
  </section>

  <section class="bg-white py-16">
    <div class="mx-auto max-w-6xl px-6">
      <div class="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p class="text-sm uppercase tracking-[0.35em] text-emerald-600">{{ t('homeHighlightsBadge') }}</p>
          <h2 class="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">{{ t('homeHighlightsTitle') }}</h2>
          <p class="mt-4 text-base leading-7 text-slate-600">{{ t('homeHighlightsText') }}</p>
          <div class="mt-8 grid gap-4 sm:grid-cols-2">
            <div class="rounded-3xl border border-gray-200 bg-emerald-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <h3 class="font-semibold text-slate-900">{{ t('homeKigaliHeading') }}</h3>
              <p class="mt-2 text-sm text-slate-600">{{ t('homeKigaliText') }}</p>
            </div>
            <div class="rounded-3xl border border-gray-200 bg-emerald-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <h3 class="font-semibold text-slate-900">{{ t('homeParkHeading') }}</h3>
              <p class="mt-2 text-sm text-slate-600">{{ t('homeParkText') }}</p>
            </div>
          </div>
        </div>
        <div class="grid gap-4 sm:grid-cols-2">
          <router-link to="/kigali" class="group overflow-hidden rounded-4xl bg-emerald-600 p-6 text-white transition hover:bg-emerald-500">
            <div class="text-sm uppercase tracking-[0.35em] text-white/80">{{ t('homeCityCard') }}</div>
            <h3 class="mt-4 text-2xl font-bold">{{ t('homeCityCardTitle') }}</h3>
            <p class="mt-3 text-sm leading-6 text-white/90">{{ t('homeCityCardText') }}</p>
          </router-link>
          <router-link to="/north" class="group overflow-hidden rounded-4xl bg-slate-100 p-6 text-slate-900 transition hover:bg-slate-200">
            <div class="text-sm uppercase tracking-[0.35em] text-slate-500">{{ t('homeNorthCard') }}</div>
            <h3 class="mt-4 text-2xl font-bold">{{ t('homeNorthCardTitle') }}</h3>
            <p class="mt-3 text-sm leading-6 text-slate-600">{{ t('homeNorthCardText') }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>