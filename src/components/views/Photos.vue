<template>
  <section class="bg-slate-50 min-h-screen text-slate-900 py-12 px-4">
    <div class="max-w-6xl mx-auto">
      <header class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4 text-slate-900">Rwanda Photo Gallery</h1>
        <p class="text-slate-600 max-w-2xl mx-auto">A visual journey through Rwanda's landscapes, cities, and cultural highlights.</p>
      </header>
      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <article class="rounded-[2rem] overflow-hidden shadow-lg bg-white">
          <img src="../../assets/images/kigali.jpg" alt="Kigali city" class="h-64 w-full object-cover" />
          <div class="p-6">
            <h2 class="text-2xl font-semibold mb-2">Kigali City</h2>
            <p class="text-slate-600">Modern cityscapes, markets, and vibrant street life in the heart of Rwanda.</p>
          </div>
        </article>
        <article class="rounded-[2rem] overflow-hidden shadow-lg bg-white">
          <img src="../../assets/images/mount.jpg" alt="Volcanoes mountain" class="h-64 w-full object-cover" />
          <div class="p-6">
            <h2 class="text-2xl font-semibold mb-2">Mountain Landscapes</h2>
            <p class="text-slate-600">Rolling hills, misty volcanoes, and dramatic views across the northern highlands.</p>
          </div>
        </article>
        <article class="rounded-[2rem] overflow-hidden shadow-lg bg-white">
          <img src="../../assets/images/city.jpg" alt="Lake Kivu view" class="h-64 w-full object-cover" />
          <div class="p-6">
            <h2 class="text-2xl font-semibold mb-2">Lakeside Views</h2>
            <p class="text-slate-600">Peaceful lake shores and colorful sunsets from Rwanda's western province.</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
