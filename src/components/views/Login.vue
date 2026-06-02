<template>
    <div class="flex items-center justify-center  bg-green-100  min-h-screen">
        <div class="bg-white p-8 rounded-1g shadow-md w-full max-w-md">
            <h2 class="text-2xl font-bold text-green-400 mb-7 text-center">Login</h2>
<form class="flex flex-col gap-4">
  <input  type="email" placeholder="please enter your email" required  class="border border-gray-300 rounded px-4 py-2 focus:outline-one focus:border-green-700"/>
  <input  type="password" placeholder="please enter your password" required  class="border border-gray-300 rounded px-4 py-2 focus:outline-one focus:border-green-700"/>
<button type="submit" class="bg-green-800 text-white py-2 rounded hover:bg-green-700 font-semibold">Sign in</button>
</form>
<p class="text-center text-sm wt-4 text-gray-500"> Dont have an account? Please create it here 
  <routerLink to="/register" class="text-green-600 hover:underline">Regiter</routerLink>
</p>
        </div>
        </div>
</template>