<script setup>
import { ref } from 'vue'
import { useTranslation } from '../../composables/useTranslation'
const { t } = useTranslation()

const form = ref({
  email: '',
  password: ''
})

const showPassword = ref(false)

const handleLogin = () => {
  console.log('Login attempt with:', form.value)
  alert(t('loginAlert'))
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center px-4">
    <div class="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
      <h1 class="text-3xl font-bold text-center mb-8 text-blue-700">{{ t('loginTitle') }}</h1>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label class="block text-gray-700 font-semibold mb-2">{{ t('loginEmailLabel') }}</label>
          <input v-model="form.email" type="email" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" :placeholder="t('loginPlaceholderEmail')">
        </div>

        <div>
          <label class="block text-gray-700 font-semibold mb-2">{{ t('loginPasswordLabel') }}</label>
          <div class="relative">
            <input :type="showPassword ? 'text' : 'password'" v-model="form.password" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" :placeholder="t('loginPlaceholderPassword')">
            <button type="button" @click="showPassword = !showPassword" class="absolute right-3 top-2 text-gray-600">
              {{ showPassword ? '👁️' : '👁️‍🗨️' }}
            </button>
          </div>
        </div>

        <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition">{{ t('loginSubmit') }}</button>
      </form>

      <div class="mt-6 text-center">
        <p class="text-gray-600">{{ t('loginPrompt') }} <a href="#" class="text-blue-600 hover:text-blue-700 font-semibold">{{ t('loginSignUp') }}</a></p>
      </div>
    </div>
  </div>
</template>
