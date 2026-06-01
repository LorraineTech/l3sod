<template>
  <section class="bg-slate-50 min-h-screen text-slate-900 py-12 px-4">
    <div class="max-w-7xl mx-auto">
      <div class="grid gap-10 lg:grid-cols-[1.4fr_0.9fr] items-start">
        <div>
          <p class="text-sm uppercase tracking-[0.24em] text-slate-500 mb-4">Discover Rwanda</p>
          <h1 class="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Destinations to explore in every province</h1>
          <p class="text-lg text-slate-600 leading-8">
            Choose from Rwanda’s five main regions and let us guide you to the places that best match your travel style.
          </p>
        </div>
        <div class="rounded-[2rem] bg-white p-8 shadow-lg border border-slate-200">
          <h2 class="text-2xl font-semibold mb-4 text-slate-900">Plan your route</h2>
          <p class="text-slate-600 mb-6">Click any province to view more details and image cards for each region.</p>
          <div class="space-y-3">
            <router-link class="block rounded-2xl bg-green-50 px-5 py-4 text-slate-900 font-semibold hover:bg-green-100 transition" to="/kigali">Kigali City</router-link>
            <router-link class="block rounded-2xl bg-sky-50 px-5 py-4 text-slate-900 font-semibold hover:bg-sky-100 transition" to="/north">Northern Province</router-link>
            <router-link class="block rounded-2xl bg-blue-50 px-5 py-4 text-slate-900 font-semibold hover:bg-blue-100 transition" to="/south">Southern Province</router-link>
            <router-link class="block rounded-2xl bg-yellow-50 px-5 py-4 text-slate-900 font-semibold hover:bg-yellow-100 transition" to="/east">Eastern Province</router-link>
            <router-link class="block rounded-2xl bg-purple-50 px-5 py-4 text-slate-900 font-semibold hover:bg-purple-100 transition" to="/west">Western Province</router-link>
          </div>
        </div>
      </div>

      <div class="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <article class="rounded-[2rem] overflow-hidden shadow-lg bg-white">
          <img src="../../assets/images/kigali.jpg" alt="Kigali City skyline" class="h-64 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-2 text-red-800">Kigali City</h3>
            <p class="text-slate-600 mb-4">The capital offers museums, markets, modern dining, and a warm cultural welcome.</p>
            <router-link to="/kigali" class="inline-flex items-center text-red-600 font-semibold hover:text-red-800">Explore Kigali →</router-link>
          </div>
        </article>
        <article class="rounded-[2rem] overflow-hidden shadow-lg bg-white">
          <img src="../../assets/images/mount.jpg" alt="Northern Province view" class="h-64 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-2 text-green-800">Northern Province</h3>
            <p class="text-slate-600 mb-4">Visit gorilla trekking, volcanoes, and highland villages surrounded by misty peaks.</p>
            <router-link to="/north" class="inline-flex items-center text-green-600 font-semibold hover:text-green-800">Explore North →</router-link>
          </div>
        </article>
        <article class="rounded-[2rem] overflow-hidden shadow-lg bg-white">
          <img src="../../assets/images/city.jpg" alt="Southern Province landscape" class="h-64 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-2 text-blue-800">Southern Province</h3>
            <p class="text-slate-600 mb-4">Lake Kivu, tea estates, and forest hikes make the south ideal for nature lovers.</p>
            <router-link to="/south" class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800">Explore South →</router-link>
          </div>
        </article>
        <article class="rounded-[2rem] overflow-hidden shadow-lg bg-white">
          <img src="../../assets/images/pk.jpg" alt="Eastern Province landscape" class="h-64 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-2 text-yellow-800">Eastern Province</h3>
            <p class="text-slate-600 mb-4">Akagera safari parks, savanna scenes, and birding adventures await here.</p>
            <router-link to="/east" class="inline-flex items-center text-yellow-600 font-semibold hover:text-yellow-800">Explore East →</router-link>
          </div>
        </article>
        <article class="rounded-[2rem] overflow-hidden shadow-lg bg-white">
          <img src="../../assets/images/yy.jpg" alt="Western Province lakes" class="h-64 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-2 text-purple-800">Western Province</h3>
            <p class="text-slate-600 mb-4">Crater lakes, tea terraces, and lakeside villages define the western region.</p>
            <router-link to="/west" class="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800">Explore West →</router-link>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
