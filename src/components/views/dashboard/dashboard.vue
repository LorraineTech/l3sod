<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeMenu = ref('overview')
const destination = ref('')
const date = ref('')
const seats = ref(1)
const notes = ref('')
const bookings = ref([])
const users = ref(JSON.parse(localStorage.getItem('users') || '[]'))

const addBooking = (event) => {
    event.preventDefault()
    if (!destination.value || !date.value) {
        alert('Please choose a destination and date.')
        return
    }
    bookings.value.push({
        id: Date.now(),
        destination: destination.value,
        date: date.value,
        seats: seats.value,
        notes: notes.value,
    })
    destination.value = ''
    date.value = ''
    seats.value = 1
    notes.value = ''
}

const logout = () => {
    router.push('/login')
}
</script>
<template>
    <div class="flex h-screen bg-gray-100">
        <!--aside which will be used to call the items content -->
        <aside class="w-64 bg-green-800 text-white flex flex-col">
            <div class="p-7 text-2xl font-bold border-green-700">Dashboard</div>
            <nav class="flex-1 p-4 space-y-2">
                <button
                    @click="activeMenu = 'overview'"
                    :class="activeMenu === 'overview' ? 'bg-green-700 px-3 py-2 rounded' : 'px-3 py-2 rounded hover:bg-green-700'"
                >
                    Overview
                </button>
                <button
                    @click="activeMenu = 'booking'"
                    :class="activeMenu === 'booking' ? 'bg-green-700 px-3 py-2 rounded' : 'px-3 py-2 rounded hover:bg-green-700'"
                >
                    Booking
                </button>
                <button
                    @click="activeMenu = 'users'"
                    :class="activeMenu === 'users' ? 'bg-green-700 px-3 py-2 rounded' : 'px-3 py-2 rounded hover:bg-green-700'"
                >
                    Users
                </button>
            </nav>

            <button @click="logout" class="w-full bg-red-500 hover:bg-red-400 px-2 py-2 rounded mt-auto mb-4">Logout</button>
        </aside>

        <!--Main content-->
        <main class="flex-1 overflow-y-auto p-8">
            <section v-if="activeMenu === 'overview'">
                <h2 class="text-xl font-semibold text-green-800 mb-4">Overview</h2>
                <p class="text-gray-700">Welcome to your dashboard. Use the menu to navigate.</p>
            </section>
            <section v-if="activeMenu === 'booking'">
                <h2 class="text-xl font-semibold text-green-800 mb-4">Booking</h2>
                <form @submit="addBooking" class="grid gap-4 max-w-lg">
                    <input
                        v-model="destination"
                        type="text"
                        placeholder="Destination"
                        required
                        class="border border-gray-300 rounded px-4 py-2"
                    />
                    <input
                        v-model="date"
                        type="date"
                        required
                        class="border border-gray-300 rounded px-4 py-2"
                    />
                    <input
                        v-model.number="seats"
                        type="number"
                        min="1"
                        class="border border-gray-300 rounded px-4 py-2"
                    />
                    <textarea
                        v-model="notes"
                        placeholder="Notes (optional)"
                        class="border border-gray-300 rounded px-4 py-2"
                    ></textarea>
                    <button type="submit" class="bg-green-700 text-white rounded px-4 py-2 w-32">Add Booking</button>
                </form>

                <div class="mt-8">
                    <h3 class="text-lg font-semibold mb-3">Your Bookings</h3>
                    <div v-if="bookings.length" class="space-y-3">
                        <div v-for="booking in bookings" :key="booking.id" class="p-4 border rounded bg-white text-gray-800">
                            <div><strong>Destination:</strong> {{ booking.destination }}</div>
                            <div><strong>Date:</strong> {{ booking.date }}</div>
                            <div><strong>Seats:</strong> {{ booking.seats }}</div>
                            <div><strong>Notes:</strong> {{ booking.notes || 'None' }}</div>
                        </div>
                    </div>
                    <p v-else class="text-gray-600">No bookings yet.</p>
                </div>
            </section>
            <section v-if="activeMenu === 'users'">
                <h2 class="text-xl font-semibold text-green-800 mb-4">Users</h2>
                <div class="space-y-3">
                    <div v-if="users.length" class="space-y-3">
                        <div v-for="(user, index) in users" :key="index" class="p-4 border rounded bg-white text-gray-800">
                            <div><strong>Name:</strong> {{ user.name }}</div>
                            <div><strong>Email:</strong> {{ user.email }}</div>
                            <div><strong>Phone:</strong> {{ user.phone }}</div>
                            <div><strong>Gender:</strong> {{ user.gender }}</div>
                            <div><strong>Age:</strong> {{ user.age }}</div>
                        </div>
                    </div>
                    <p v-else class="text-gray-600">No registered users yet.</p>
                </div>
            </section>
        </main>
    </div>
</template>