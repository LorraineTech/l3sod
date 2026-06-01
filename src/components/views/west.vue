<template>
  <section class="min-h-screen bg-gradient-to-br from-purple-50 to-violet-100 text-slate-900 py-12 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div>
          <span class="inline-flex rounded-full bg-purple-200 px-3 py-1 text-sm font-semibold text-purple-800 mb-4">Western Province</span>
          <h1 class="text-4xl sm:text-5xl font-bold mb-6">Discover crater lakes and lakefront beauty</h1>
          <p class="text-lg text-slate-600 leading-8 mb-8">
            Western Province is known for its shimmering lakes, rocky ridges, and lakeside towns that invite quiet exploration.
          </p>
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="rounded-3xl border border-purple-200 bg-white p-6 shadow-sm">
              <h2 class="text-xl font-semibold text-purple-800 mb-2">Lake Kivu Shore</h2>
              <p class="text-slate-600">Relax beside peaceful lakes and discover picturesque waterfront towns.</p>
            </div>
            <div class="rounded-3xl border border-purple-200 bg-white p-6 shadow-sm">
              <h2 class="text-xl font-semibold text-purple-800 mb-2">Hiking Trails</h2>
              <p class="text-slate-600">Explore crater rims and forested hills for dramatic western panoramas.</p>
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
            <h3 class="text-2xl font-semibold mb-3 text-purple-800">Crater Lakes</h3>
            <p class="text-slate-600">Visit stunning crater lakes set against lush green hills.</p>
          </div>
        </article>
        <article class="rounded-[2rem] overflow-hidden bg-white shadow-lg border border-purple-100 transition hover:-translate-y-1 hover:shadow-xl">
          <img :src="cardImages.town" alt="Lakeside town" class="h-48 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-3 text-purple-800">Lakeside Towns</h3>
            <p class="text-slate-600">Discover charming lakeside communities and relaxing waterfront activities.</p>
          </div>
        </article>
        <article class="rounded-[2rem] overflow-hidden bg-white shadow-lg border border-purple-100 transition hover:-translate-y-1 hover:shadow-xl">
          <img :src="cardImages.forest" alt="Forest path" class="h-48 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-3 text-purple-800">Nature Walks</h3>
            <p class="text-slate-600">Hike through quiet nature paths and enjoy the western region’s calm scenery.</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const heroImage = new URL('../../assets/images/yy.jpg', import.meta.url).href
const cardImages = {
  crater: new URL('../../assets/images/volcanoes.jpg', import.meta.url).href,
  town: new URL('../../assets/images/huye.jpg', import.meta.url).href,
  forest: new URL('../../assets/images/zebra.jpg', import.meta.url).href,
}
</script>