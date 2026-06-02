<script setup>
import { ref } from 'vue'

const fullName = ref('')
const email = ref('')
const gender = ref('')
const password = ref('')
const confirmPassword = ref('')
const age = ref('')
const phone = ref('')

const handleRegister = (event) => {
  event.preventDefault()
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match.')
    return
  }

  // Add actual registration logic here
  alert('Registration submitted successfully!')
}
</script>

<template>
  <div class="flex items-center justify-center bg-green-100 min-h-screen">
    <div class="bg-white p-8 rounded-1g shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold text-green-400 mb-7 text-center">Register</h2>
      <form @submit="handleRegister" class="flex flex-col gap-4">
        <input
          v-model="fullName"
          type="text"
          placeholder="Enter your full name"
          required
          class="border border-gray-300 rounded px-4 py-2 focus:outline-one focus:border-green-700"
        />
        <input
          v-model="email"
          type="email"
          placeholder="Please enter your email"
          required
          class="border border-gray-300 rounded px-4 py-2 focus:outline-one focus:border-green-700"
        />
        <input
          v-model="phone"
          type="tel"
          placeholder="Phone number"
          required
          class="border border-gray-300 rounded px-4 py-2 focus:outline-one focus:border-green-700"
        />
        <label class="sr-only">Gender</label>
        <select
          v-model="gender"
          required
          class="border border-gray-300 rounded px-4 py-2 focus:outline-one focus:border-green-700 bg-white"
        >
          <option value="" disabled>Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input
          v-model="password"
          type="password"
          placeholder="Please enter your password"
          required
          class="border border-gray-300 rounded px-4 py-2 focus:outline-one focus:border-green-700"
        />
        <input
          v-model="Age"
          type="number"
          placeholder="Enter your age"
          required
          class="border border-gray-300 rounded px-4 py-2 focus:outline-one focus:border-green-700"
        />
        <button type="submit" class="bg-green-800 text-white py-2 rounded hover:bg-green-700 font-semibold">
          Register
        </button>
      </form>
      <p class="text-center text-sm wt-4 text-gray-500 mt-4">
        Already have an account?
        <routerLink to="/login" class="text-green-600 hover:underline">Login</routerLink>
      </p>
    </div>
  </div>
</template>