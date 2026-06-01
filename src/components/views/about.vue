<script setup>
import { useTranslation } from '../../composables/useTranslation'
const { t } = useTranslation()
</script>

<template>
  <section class="relative min-h-[85vh] bg-cover bg-center" style="background-image:url(/src/assets/MMM.jpg)">
    <div class="mx-auto max-w-6xl px-6 py-20 text-center">
      <p class="text-sm uppercase tracking-[0.35em] text-emerald-600">{{ t('aboutBadge') }}</p>
      <h1 class="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">{{ t('aboutTitle') }}</h1>
      <p class="mx-auto mt-6 max-w-3xl text-base leading-8 text-black-600">{{ t('aboutText') }}</p>
      <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <router-link to="/contact" class="inline-flex rounded-full bg-emerald-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500">{{ t('aboutContactBtn') }}</router-link>
        <router-link to="/services" class="inline-flex rounded-full border border-emerald-500 bg-white px-8 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50">{{ t('aboutServicesBtn') }}</router-link>
      </div>
    </div>
  </section>

  <section class="bg-white py-16">
    <div class="mx-auto max-w-6xl px-6">
      <div class="grid gap-8 lg:grid-cols-3">
        <article class="rounded-3xl border border-gray-100 bg-gray-50 p-8 shadow-sm">
          <h2 class="text-2xl font-semibold text-slate-900">{{ t('aboutMissionTitle') }}</h2>
          <p class="mt-4 text-sm leading-7 text-slate-600">{{ t('aboutMissionText') }}</p>
        </article>
        <article class="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
          <h2 class="text-2xl font-semibold text-slate-900">{{ t('aboutVisionTitle') }}</h2>
          <p class="mt-4 text-sm leading-7 text-slate-600">{{ t('aboutVisionText') }}</p>
        </article>
        <article class="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
          <h2 class="text-2xl font-semibold text-slate-900">{{ t('aboutValuesTitle') }}</h2>
          <p class="mt-4 text-sm leading-7 text-slate-600">{{ t('aboutValuesText') }}</p>
        </article>
      </div>
    </div>
  </section>

  <section class="bg-gray-50 py-16">
    <div class="mx-auto max-w-6xl px-6">
      <div class="mb-12 text-center">
        <p class="text-sm uppercase tracking-[0.35em] text-emerald-600">{{ t('aboutTeamBadge') }}</p>
        <h2 class="mt-4 text-3xl font-bold text-slate-900">{{ t('aboutTeamTitle') }}</h2>
      </div>
      <div class="grid gap-6 md:grid-cols-3">
        <article class="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <div class="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-3xl text-emerald-700">A</div>
          <h3 class="text-xl font-semibold text-slate-900">{{ t('aboutMemberA') }}</h3>
          <p class="mt-3 text-sm leading-6 text-slate-600">{{ t('aboutMemberAText') }}</p>
        </article>
        <article class="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <div class="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-3xl text-emerald-700">B</div>
          <h3 class="text-xl font-semibold text-slate-900">{{ t('aboutMemberB') }}</h3>
          <p class="mt-3 text-sm leading-6 text-slate-600">{{ t('aboutMemberBText') }}</p>
        </article>
        <article class="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <div class="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-3xl text-emerald-700">S</div>
          <h3 class="text-xl font-semibold text-slate-900">{{ t('aboutMemberS') }}</h3>
          <p class="mt-3 text-sm leading-6 text-slate-600">{{ t('aboutMemberSText') }}</p>
        </article>
      </div>
    </div>
  </section>

  <section class="bg-gray-100 py-16">
    <div class="mx-auto max-w-6xl px-6">
      <div class="grid gap-8 lg:grid-cols-3">
        <div class="rounded-3xl border border-gray-200 bg-white p-8">
          <h3 class="text-xl font-semibold text-slate-900">{{ t('aboutWhyTitle') }}</h3>
          <ul class="mt-5 space-y-4 text-sm leading-7 text-slate-600">
            <li>• {{ t('aboutWhyText1') }}</li>
            <li>• {{ t('aboutWhyText2') }}</li>
            <li>• {{ t('aboutWhyText3') }}</li>
          </ul>
        </div>
        <div class="rounded-3xl border border-gray-200 bg-white p-8">
          <h3 class="text-xl font-semibold text-slate-900">{{ t('aboutPromiseTitle') }}</h3>
          <p class="mt-5 text-sm leading-7 text-slate-600">{{ t('aboutPromiseText') }}</p>
        </div>
        <div class="rounded-3xl border border-gray-200 bg-white p-8">
          <h3 class="text-xl font-semibold text-slate-900">{{ t('aboutGetStartedTitle') }}</h3>
          <p class="mt-5 text-sm leading-7 text-slate-600">{{ t('aboutGetStartedText') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>