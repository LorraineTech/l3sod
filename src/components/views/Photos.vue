<template>
  <section class="bg-slate-50 min-h-screen text-slate-900 py-12 px-4">
    <div class="max-w-6xl mx-auto">
      <header class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4 text-slate-900">{{ t('photosTitle') }}</h1>
        <p class="text-slate-600 max-w-2xl mx-auto">{{ t('photosText') }}</p>
      </header>
      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <article v-for="photo in photos" :key="photo.titleKey" class="group rounded-[2rem] overflow-hidden shadow-lg bg-white cursor-pointer transition hover:-translate-y-1 hover:shadow-2xl" @click="openPhoto(photo)">
          <img :src="photo.src" :alt="t(photo.titleKey)" class="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
          <div class="p-6">
            <h2 class="text-2xl font-semibold mb-2">{{ t(photo.titleKey) }}</h2>
            <p class="text-slate-600">{{ t(photo.captionKey) }}</p>
          </div>
        </article>
      </div>

      <div v-if="selectedPhoto" class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
        <div class="relative max-w-4xl w-full rounded-[2rem] overflow-hidden bg-white shadow-2xl">
          <button @click="closePhoto" class="absolute right-4 top-4 z-10 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">Close</button>
          <img :src="selectedPhoto.src" :alt="t(selectedPhoto.titleKey)" class="h-[60vh] w-full object-cover" />
          <div class="p-8">
            <h2 class="text-3xl font-bold mb-4">{{ t(selectedPhoto.titleKey) }}</h2>
            <p class="text-slate-600 mb-4">{{ t(selectedPhoto.captionKey) }}</p>
            <p class="text-sm uppercase tracking-[0.2em] text-slate-500">{{ t('photoPreviewNote') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useTranslation } from '../../composables/useTranslation'
const { t } = useTranslation()
const selectedPhoto = ref(null)

const photos = [
  {
    src: new URL('../../assets/images/kigali.jpg', import.meta.url).href,
    titleKey: 'photoKigaliTitle',
    captionKey: 'photoKigaliCaption'
  },
  {
    src: new URL('../../assets/images/volcanoes.jpg', import.meta.url).href,
    titleKey: 'photoMountainsTitle',
    captionKey: 'photoMountainsCaption'
  },
  {
    src: new URL('../../assets/images/kivu.jpg', import.meta.url).href,
    titleKey: 'photoLakeTitle',
    captionKey: 'photoLakeCaption'
  },
  {
    src: new URL('../../assets/images/akagera.jpg', import.meta.url).href,
    titleKey: 'photoSafariTitle',
    captionKey: 'photoSafariCaption'
  },
  {
    src: new URL('../../assets/images/gorilla.jpg', import.meta.url).href,
    titleKey: 'photoGorillaTitle',
    captionKey: 'photoGorillaCaption'
  },
  {
    src: new URL('../../assets/images/img.jpg', import.meta.url).href,
    titleKey: 'photoWesternTitle',
    captionKey: 'photoWesternCaption'
  }
]

const openPhoto = (photo) => {
  selectedPhoto.value = photo
}

const closePhoto = () => {
  selectedPhoto.value = null
}
</script>
