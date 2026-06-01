<template>
  <section class="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 text-slate-900 py-12 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div>
          <span class="inline-flex rounded-full bg-blue-200 px-3 py-1 text-sm font-semibold text-blue-800 mb-4">Southern Province</span>
          <h1 class="text-4xl sm:text-5xl font-bold mb-6">Relax by lakes, tea hills, and forest trails</h1>
          <p class="text-lg text-slate-600 leading-8 mb-8">
            Southern Province offers calm lakeside views, lush tea plantations, and the magical Nyungwe Forest home to chimpanzees and canopy walks.
          </p>
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="rounded-3xl border border-blue-200 bg-white p-6 shadow-sm">
              <h2 class="text-xl font-semibold text-blue-800 mb-2">Lake Kivu</h2>
              <p class="text-slate-600">Enjoy boat trips, beaches, and sunsets on one of Africa’s most beautiful lakes.</p>
            </div>
            <div class="rounded-3xl border border-blue-200 bg-white p-6 shadow-sm">
              <h2 class="text-xl font-semibold text-blue-800 mb-2">Nyungwe Forest</h2>
              <p class="text-slate-600">Walk through ancient rainforest and spot chimpanzees and birdlife.</p>
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
            <h3 class="text-2xl font-semibold mb-3 text-blue-800">Lake Shores</h3>
            <p class="text-slate-600">Relax by the water, enjoy boat rides, and discover lakeside communities.</p>
          </div>
        </article>
        <article class="rounded-[2rem] overflow-hidden bg-white shadow-lg border border-blue-100 transition hover:-translate-y-1 hover:shadow-xl">
          <img :src="cardImages.tea" alt="Tea plantations" class="h-48 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-3 text-blue-800">Tea Plantations</h3>
            <p class="text-slate-600">Visit rolling tea estates and learn how some of Rwanda’s best tea is grown.</p>
          </div>
        </article>
        <article class="rounded-[2rem] overflow-hidden bg-white shadow-lg border border-blue-100 transition hover:-translate-y-1 hover:shadow-xl">
          <img :src="cardImages.forest" alt="Nyungwe forest" class="h-48 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-3 text-blue-800">Forest Trails</h3>
            <p class="text-slate-600">Hike rainforest paths, spot wildlife, and cross the famous canopy walk.</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const heroImage = new URL('../../assets/images/kivu.jpg', import.meta.url).href
const cardImages = {
  lake: new URL('../../assets/images/yy.jpg', import.meta.url).href,
  tea: new URL('../../assets/images/mm.jpg', import.meta.url).href,
  forest: new URL('../../assets/images/gorilla.jpg', import.meta.url).href,
}
</script>