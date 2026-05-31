<template>
  <section class="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 text-slate-900 py-12 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div>
          <span class="inline-flex rounded-full bg-emerald-200 px-3 py-1 text-sm font-semibold text-emerald-800 mb-4">Northern Province</span>
          <h1 class="text-4xl sm:text-5xl font-bold mb-6">Explore Rwanda’s highland region</h1>
          <p class="text-lg text-slate-600 leading-8 mb-8">
            Northern Province is home to the misty volcanoes and endangered mountain gorillas. It’s perfect for adventure seekers and nature lovers.
          </p>
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="rounded-3xl border border-emerald-200 bg-white p-6 shadow-sm">
              <h2 class="text-xl font-semibold text-emerald-800 mb-2">Volcanoes Park</h2>
              <p class="text-slate-600">Trek through lush forest and see Rwanda’s famous volcanoes up close.</p>
            </div>
            <div class="rounded-3xl border border-emerald-200 bg-white p-6 shadow-sm">
              <h2 class="text-xl font-semibold text-emerald-800 mb-2">Gorilla Trekking</h2>
              <p class="text-slate-600">Experience unforgettable wildlife encounters in one of the world’s most special ecosystems.</p>
            </div>
          </div>
        </div>
        <div class="overflow-hidden rounded-[2rem] border border-emerald-200 shadow-xl">
          <img src="../../assets/images/volcanoes.jpg" alt="Northern Province" class="h-full w-full object-cover" />
        </div>
      </div>

      <div class="mt-12 grid gap-6 lg:grid-cols-3">
        <article class="rounded-[2rem] overflow-hidden bg-white shadow-lg border border-emerald-100">
          <img src="../../assets/images/gorilla.jpg" alt="Gorilla trekking" class="h-48 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-3 text-emerald-800">Mountain Gorillas</h3>
            <p class="text-slate-600">Join guided treks and observe gorilla families in their natural habitat.</p>
          </div>
        </article>
        <article class="rounded-[2rem] overflow-hidden bg-white shadow-lg border border-emerald-100">
          <img src="../../assets/images/view.jpg" alt="Volcano landscape" class="h-48 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-3 text-emerald-800">Volcano Views</h3>
            <p class="text-slate-600">Take in dramatic scenery from Rwanda’s famous mountain peaks.</p>
          </div>
        </article>
        <article class="rounded-[2rem] overflow-hidden bg-white shadow-lg border border-emerald-100">
          <img src="../../assets/images/culture.jpg" alt="Highland village" class="h-48 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-3 text-emerald-800">Local Villages</h3>
            <p class="text-slate-600">Explore hillside communities and learn about everyday life in the north.</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>