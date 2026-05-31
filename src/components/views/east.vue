<template>
  <section class="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-100 text-slate-900 py-12 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div>
          <span class="inline-flex rounded-full bg-yellow-200 px-3 py-1 text-sm font-semibold text-yellow-800 mb-4">Eastern Province</span>
          <h1 class="text-4xl sm:text-5xl font-bold mb-6">Adventure across eastern savanna</h1>
          <p class="text-lg text-slate-600 leading-8 mb-8">
            Eastern Province is a safari destination with Akagera National Park, rolling grasslands, and beautiful countryside villages.
          </p>
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="rounded-3xl border border-yellow-200 bg-white p-6 shadow-sm">
              <h2 class="text-xl font-semibold text-yellow-800 mb-2">Akagera Safari</h2>
              <p class="text-slate-600">Spot wildlife on guided game drives across expansive savanna landscapes.</p>
            </div>
            <div class="rounded-3xl border border-yellow-200 bg-white p-6 shadow-sm">
              <h2 class="text-xl font-semibold text-yellow-800 mb-2">Birding & Lakes</h2>
              <p class="text-slate-600">Watch birds, enjoy lake views, and experience wide-open African scenery.</p>
            </div>
          </div>
        </div>
        <div class="overflow-hidden rounded-[2rem] border border-yellow-200 shadow-xl">
          <img src="../../assets/images/akagera.jpg" alt="Eastern Province" class="h-full w-full object-cover" />
        </div>
      </div>

      <div class="mt-12 grid gap-6 lg:grid-cols-3">
        <article class="rounded-[2rem] overflow-hidden bg-white shadow-lg border border-yellow-100">
          <img src="../../assets/images/rw.jpg" alt="Akagera" class="h-48 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-3 text-yellow-800">Akagera Park</h3>
            <p class="text-slate-600">Enjoy wildlife viewing, boat rides, and scenic drives through open plains.</p>
          </div>
        </article>
        <article class="rounded-[2rem] overflow-hidden bg-white shadow-lg border border-yellow-100">
          <img src="../../assets/images/view.jpg" alt="Savanna landscape" class="h-48 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-3 text-yellow-800">Savanna Views</h3>
            <p class="text-slate-600">Capture expansive landscapes with easy access from Kigali.</p>
          </div>
        </article>
        <article class="rounded-[2rem] overflow-hidden bg-white shadow-lg border border-yellow-100">
          <img src="../../assets/images/real.jpg" alt="Country village" class="h-48 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-3 text-yellow-800">Village Life</h3>
            <p class="text-slate-600">Visit traditional communities and learn about eastern Rwanda’s culture.</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>