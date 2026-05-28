<template>
  <section class="bg-gray-50 text-slate-900">
    <div class="mx-auto max-w-6xl px-6 py-20 text-center">
      <p class="text-sm uppercase tracking-[0.35em] text-emerald-600">About Rwanda Tours</p>
      <h1 class="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">A travel experience designed for discovery and ease</h1>
      <p class="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600">We help visitors connect with Rwanda’s natural beauty, local communities, and cultural stories through curated routes, friendly guidance, and thoughtful experiences.</p>
      <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <router-link to="/contact" class="inline-flex rounded-full bg-emerald-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500">Contact Us</router-link>
        <router-link to="/services" class="inline-flex rounded-full border border-emerald-500 bg-white px-8 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50">See Services</router-link>
      </div>
    </div>
  </section>

  <section class="bg-white py-16">
    <div class="mx-auto max-w-6xl px-6">
      <div class="grid gap-8 lg:grid-cols-3">
        <article class="rounded-3xl border border-gray-100 bg-gray-50 p-8 shadow-sm">
          <h2 class="text-2xl font-semibold text-slate-900">Our Mission</h2>
          <p class="mt-4 text-sm leading-7 text-slate-600">To make Rwanda accessible, inspiring, and memorable by sharing stories, supporting communities, and crafting authentic travel experiences.</p>
        </article>
        <article class="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
          <h2 class="text-2xl font-semibold text-slate-900">Our Vision</h2>
          <p class="mt-4 text-sm leading-7 text-slate-600">A travel destination where every visitor feels welcomed, every local story is respected, and every journey leaves a positive footprint.</p>
        </article>
        <article class="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
          <h2 class="text-2xl font-semibold text-slate-900">Our Values</h2>
          <p class="mt-4 text-sm leading-7 text-slate-600">Respect, sustainability, curiosity, and thoughtful discovery are at the heart of everything we share.</p>
        </article>
      </div>
    </div>
  </section>

  <section class="bg-gray-50 py-16">
    <div class="mx-auto max-w-6xl px-6">
      <div class="mb-12 text-center">
        <p class="text-sm uppercase tracking-[0.35em] text-emerald-600">Meet the team</p>
        <h2 class="mt-4 text-3xl font-bold text-slate-900">People behind the experience</h2>
      </div>
      <div class="grid gap-6 md:grid-cols-3">
        <article class="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <div class="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-3xl text-emerald-700">A</div>
          <h3 class="text-xl font-semibold text-slate-900">Amina</h3>
          <p class="mt-3 text-sm leading-6 text-slate-600">Travel designer and local guide focused on authentic, sustainable routes.</p>
        </article>
        <article class="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <div class="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-3xl text-emerald-700">B</div>
          <h3 class="text-xl font-semibold text-slate-900">Ben</h3>
          <p class="mt-3 text-sm leading-6 text-slate-600">Community outreach lead who ensures every visit benefits local people.</p>
        </article>
        <article class="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <div class="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-3xl text-emerald-700">S</div>
          <h3 class="text-xl font-semibold text-slate-900">Samuel</h3>
          <p class="mt-3 text-sm leading-6 text-slate-600">Experience planner delivering smooth journeys across Rwanda’s top destinations.</p>
        </article>
      </div>
    </div>
  </section>

  <section class="bg-gray-100 py-16">
    <div class="mx-auto max-w-6xl px-6">
      <div class="grid gap-8 lg:grid-cols-3">
        <div class="rounded-3xl border border-gray-200 bg-white p-8">
          <h3 class="text-xl font-semibold text-slate-900">Why choose us</h3>
          <ul class="mt-5 space-y-4 text-sm leading-7 text-slate-600">
            <li>• Personalized itineraries for culture, nature, and adventure</li>
            <li>• Friendly local support from arrival to departure</li>
            <li>• Sustainable activities that respect communities and wildlife</li>
          </ul>
        </div>
        <div class="rounded-3xl border border-gray-200 bg-white p-8">
          <h3 class="text-xl font-semibold text-slate-900">Our promise</h3>
          <p class="mt-5 text-sm leading-7 text-slate-600">Every trip is built with thoughtful detail, clear guidance, and immersive experiences so your time in Rwanda feels memorable and effortless.</p>
        </div>
        <div class="rounded-3xl border border-gray-200 bg-white p-8">
          <h3 class="text-xl font-semibold text-slate-900">Get started</h3>
          <p class="mt-5 text-sm leading-7 text-slate-600">Ready to explore? Tap Contact or Services to begin planning a journey tailored to your interests.</p>
        </div>
      </div>
    </div>
  </section>
</template>