<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const submitted = ref(false)

const handleSubmit = () => {
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    form.value = { name: '', email: '', message: '' }
  }, 3000)
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4">
    <div class="max-w-2xl mx-auto">
      <h1 class="text-4xl font-bold text-center mb-8 text-blue-700">Contact Us</h1>
      
      <div v-if="submitted" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
        Thank you! We'll get back to you soon.
      </div>

      <form @submit.prevent="handleSubmit" class="bg-white shadow-lg rounded-lg p-8">
        <div class="mb-6">
          <label class="block text-gray-700 font-semibold mb-2">Name</label>
          <input v-model="form.name" type="text" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name">
        </div>

        <div class="mb-6">
          <label class="block text-gray-700 font-semibold mb-2">Email</label>
          <input v-model="form.email" type="email" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="your@email.com">
        </div>

        <div class="mb-6">
          <label class="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea v-model="form.message" required rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your message"></textarea>
        </div>

        <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition">
          Send Message
        </button>
      </form>
    </div>
  </div>
</template>
