<script setup>
import { useTranslation } from '../../composables/useTranslation'
const { t } = useTranslation()
</script>

<template>
  <section class="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 text-slate-900 py-12 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
        <div>
          <span class="inline-flex items-center rounded-full bg-yellow-200 px-3 py-1 text-sm font-semibold text-yellow-800 mb-4">{{ t('contactHeadline') }}</span>
          <h1 class="text-4xl font-bold tracking-tight mb-4">{{ t('contactTitle') }}</h1>
          <p class="text-lg text-slate-600 mb-8">{{ t('contactText') }}</p>
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="rounded-3xl border border-yellow-200 bg-white p-6 shadow-sm">
              <h2 class="text-xl font-semibold mb-2 text-yellow-800">{{ t('contactCustomerTitle') }}</h2>
              <p class="text-slate-600 text-sm">{{ t('contactCustomerText') }}</p>
              <p class="mt-4 text-sm font-semibold text-yellow-700">{{ t('contactEmail') }}</p>
            </div>
            <div class="rounded-3xl border border-yellow-200 bg-white p-6 shadow-sm">
              <h2 class="text-xl font-semibold mb-2 text-yellow-800">{{ t('contactBookTitle') }}</h2>
              <p class="text-slate-600 text-sm">{{ t('contactBookText') }}</p>
              <p class="mt-4 text-sm font-semibold text-yellow-700">{{ t('contactPhone') }}</p>
            </div>
          </div>
        </div>

        <div class="rounded-[2rem] border border-yellow-200 bg-white shadow-xl p-8">
          <h2 class="text-2xl font-bold mb-6 text-slate-900">{{ t('contactFormTitle') }}</h2>
          <form class="space-y-5">
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-2">{{ t('contactNameLabel') }}</label>
              <input type="text" :placeholder="t('contactNameLabel')" class="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-100" />
            </div>
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-2">{{ t('contactEmailLabel') }}</label>
              <input type="email" :placeholder="t('contactEmailLabel')" class="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-100" />
            </div>
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-2">{{ t('contactMessageLabel') }}</label>
              <textarea rows="5" :placeholder="t('contactMessagePlaceholder')" class="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-100"></textarea>
            </div>
            <button class="w-full rounded-2xl bg-yellow-500 px-5 py-3 text-white font-semibold hover:bg-yellow-600 transition">{{ t('contactSendButton') }}</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>