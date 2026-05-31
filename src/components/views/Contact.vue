<template>
  <section class="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 text-slate-900 py-12 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
        <div>
          <span class="inline-flex items-center rounded-full bg-yellow-200 px-3 py-1 text-sm font-semibold text-yellow-800 mb-4">Contact & Support</span>
          <h1 class="text-4xl font-bold tracking-tight mb-4">Let's plan your next Rwanda adventure</h1>
          <p class="text-lg text-slate-600 mb-8">
            Reach out for travel advice, tour packages, booking support, or help choosing the best provinces to visit.
          </p>
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="rounded-3xl border border-yellow-200 bg-white p-6 shadow-sm">
              <h2 class="text-xl font-semibold mb-2 text-yellow-800">Customer Care</h2>
              <p class="text-slate-600 text-sm">Questions about itineraries, availability, or payments? Our team is ready to help.</p>
              <p class="mt-4 text-sm font-semibold text-yellow-700">mugemanalorraine5@gmail.com</p>
            </div>
            <div class="rounded-3xl border border-yellow-200 bg-white p-6 shadow-sm">
              <h2 class="text-xl font-semibold mb-2 text-yellow-800">Book a Tour</h2>
              <p class="text-slate-600 text-sm">Need a custom trip or group experience? Send us your travel dates and preferences.</p>
              <p class="mt-4 text-sm font-semibold text-yellow-700">+250 795 815734</p>
            </div>
          </div>
        </div>

        <div class="rounded-[2rem] border border-yellow-200 bg-white shadow-xl p-8">
          <h2 class="text-2xl font-bold mb-6 text-slate-900">Send a Message</h2>
          <form class="space-y-5">
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-2">Name</label>
              <input type="text" placeholder="Your name" class="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-100" />
            </div>
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-2">Email</label>
              <input type="email" placeholder="you@example.com" class="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-100" />
            </div>
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-2">Message</label>
              <textarea rows="5" placeholder="Tell us what you'd like to explore" class="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-100"></textarea>
            </div>
            <button class="w-full rounded-2xl bg-yellow-500 px-5 py-3 text-white font-semibold hover:bg-yellow-600 transition">Send message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>