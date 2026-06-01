<template>
  <section class="bg-slate-50 min-h-screen text-slate-900 py-12 px-4">
    <div class="max-w-7xl mx-auto">
      <header class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4 text-slate-900">Rwanda Photo Gallery</h1>
        <p class="text-slate-600 max-w-2xl mx-auto">A visual journey through Rwanda's landscapes, cities, and cultural highlights.</p>
      </header>
      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <article v-for="photo in photos" :key="photo.title" class="group rounded-[2rem] overflow-hidden shadow-lg bg-white cursor-pointer transition hover:-translate-y-1 hover:shadow-2xl" @click="openPhoto(photo)">
          <img :src="photo.src" :alt="photo.title" class="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
          <div class="p-6">
            <h2 class="text-2xl font-semibold mb-2">{{ photo.title }}</h2>
            <p class="text-slate-600">{{ photo.caption }}</p>
          </div>
        </article>
      </div>

      <div v-if="selectedPhoto" class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
        <div class="relative max-w-4xl w-full rounded-[2rem] overflow-hidden bg-white shadow-2xl">
          <button @click="closePhoto" class="absolute right-4 top-4 z-10 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">Close</button>
          <img :src="selectedPhoto.src" :alt="selectedPhoto.title" class="h-[60vh] w-full object-cover" />
          <div class="p-8">
            <h2 class="text-3xl font-bold mb-4">{{ selectedPhoto.title }}</h2>
            <p class="text-slate-600 mb-4">{{ selectedPhoto.caption }}</p>
            <p class="text-sm uppercase tracking-[0.2em] text-slate-500">Click outside this card to close the gallery preview.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const selectedPhoto = ref(null)

const photos = [
  {
    src: new URL('../../assets/images/kigali.jpg', import.meta.url).href,
    title: 'Kigali City',
    caption: 'Modern cityscapes, markets, and vibrant street life in the heart of Rwanda.'
  },
  {
    src: new URL('../../assets/images/volcanoes.jpg', import.meta.url).href,
    title: 'Mountain Landscapes',
    caption: 'Rolling hills, misty volcanoes, and dramatic views across the northern highlands.'
  },
  {
    src: new URL('../../assets/images/kivu.jpg', import.meta.url).href,
    title: 'Lakeside Views',
    caption: 'Peaceful lake shores and colorful sunsets from Rwanda’s western province.'
  },
  {
    src: new URL('../../assets/images/akagera.jpg', import.meta.url).href,
    title: 'Akagera Safari',
    caption: 'Wildlife safaris, golden grasslands, and unforgettable game drives in the east.'
  },
  {
    src: new URL('../../assets/images/gorilla.jpg', import.meta.url).href,
    title: 'Gorilla Trekking',
    caption: 'Explore the misty forests of northern Rwanda and meet mountain gorillas in the wild.'
  },
  {
    src: new URL('../../assets/images/img.jpg', import.meta.url).href,
    title: 'Western Lakes',
    caption: 'Crystal-clear waters, island views, and serene lakeside escapes in the west.'
  }
]

const openPhoto = (photo) => {
  selectedPhoto.value = photo
}

const closePhoto = () => {
  selectedPhoto.value = null
}
</script>
