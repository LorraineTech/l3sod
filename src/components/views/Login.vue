<script setup>
import { ref } from 'vue'

const form = ref({
  email: '',
  password: ''
})

const showPassword = ref(false)

const handleLogin = () => {
  console.log('Login attempt with:', form.value)
  alert('Login feature coming soon!')
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center px-4">
    <div class="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
      <h1 class="text-3xl font-bold text-center mb-8 text-blue-700">Login</h1>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label class="block text-gray-700 font-semibold mb-2">Email Address</label>
          <input v-model="form.email" type="email" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="your@email.com">
        </div>

        <div>
          <label class="block text-gray-700 font-semibold mb-2">Password</label>
          <div class="relative">
            <input :type="showPassword ? 'text' : 'password'" v-model="form.password" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••">
            <button type="button" @click="showPassword = !showPassword" class="absolute right-3 top-2 text-gray-600">
              {{ showPassword ? '👁️' : '👁️‍🗨️' }}
            </button>
          </div>
        </div>

        <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition">
          Sign In
        </button>
      </form>

      <div class="mt-6 text-center">
        <p class="text-gray-600">Don't have an account? <a href="#" class="text-blue-600 hover:text-blue-700 font-semibold">Sign up</a></p>
      </div>
    </div>
  </div>
</template>
