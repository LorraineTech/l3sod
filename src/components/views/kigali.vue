<template>
  <section class="min-h-screen bg-gradient-to-br from-red-50 to-red-100 text-slate-900 py-12 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div>
          <span class="inline-flex rounded-full bg-red-200 px-3 py-1 text-sm font-semibold text-red-800 mb-4">Kigali City</span>
          <h1 class="text-4xl sm:text-5xl font-bold mb-6">Discover Rwanda’s vibrant capital</h1>
          <p class="text-lg text-slate-600 leading-8 mb-8">
            Kigali blends modern cuisine, artisan markets, museums, and calm green spaces with a welcoming local culture — the perfect city base for every Rwanda itinerary.
          </p>
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="rounded-3xl border border-red-200 bg-white p-6 shadow-sm">
              <h2 class="text-xl font-semibold text-red-800 mb-2">City Culture</h2>
              <p class="text-slate-600">Explore galleries, museums, and the stories of Rwanda’s modern history.</p>
            </div>
            <div class="rounded-3xl border border-red-200 bg-white p-6 shadow-sm">
              <h2 class="text-xl font-semibold text-red-800 mb-2">Markets & Dining</h2>
              <p class="text-slate-600">Sample local cuisine and discover handmade crafts in vibrant city markets.</p>
            </div>
          </div>
        </div>

        <div class="overflow-hidden rounded-[2rem] border border-red-200 shadow-xl">
          <img src="../../assets/images/kigali.jpg" alt="Kigali city" class="h-full w-full object-cover" />
        </div>
      </div>

      <div class="mt-12 grid gap-6 lg:grid-cols-3">
        <article class="rounded-[2rem] overflow-hidden bg-white shadow-lg border border-red-100">
          <img src="../../assets/images/hero.png" alt="Kigali museum" class="h-48 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-3 text-red-800">Museums & Heritage</h3>
            <p class="text-slate-600">Visit the Kigali Genocide Memorial and local galleries to understand Rwanda’s rich history.</p>
          </div>
        </article>
        <article class="rounded-[2rem] overflow-hidden bg-white shadow-lg border border-red-100">
          <img src="../../assets/images/night.jpg" alt="Kigali nightlife" class="h-48 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-3 text-red-800">Nightlife & Events</h3>
            <p class="text-slate-600">Discover live music, modern bars, and evening events across the city.</p>
          </div>
        </article>
        <article class="rounded-[2rem] overflow-hidden bg-white shadow-lg border border-red-100">
          <img src="../../assets/images/newLogo.jpg" alt="Kigali street scene" class="h-48 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-3 text-red-800">City Walks</h3>
            <p class="text-slate-600">Stroll safe neighborhoods, parks, and viewpoints for an authentic Kigali experience.</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>