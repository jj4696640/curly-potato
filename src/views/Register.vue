<template>
    <div>
        <!--<img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company" />-->
        <h2 class="mt-6 text-center text-5xl font-bold tracking-tight text-gray-900">Toolbox</h2>
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Register</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
            Or
            {{ ' ' }}
            <router-link :to="{ name: 'Login' }" class="font-medium text-indigo-600 hover:text-indigo-500">Log into your
                account</router-link>
        </p>
    </div>
    <form class="mt-8 space-y-6" @submit="register">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
            <div>
                <label for="firstName" class="sr-only">First Name</label>
                <input id="firstName" name="firstName" type="text" autocomplete="firstName" required=""
                    class="relative block w-full appearance-none rounded-none rounded mt-1 border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="First Name" v-model="user.firstName" />
            </div>
            <div>
                <label for="surname" class="sr-only">Surname</label>
                <input id="surname" name="surname" type="text" autocomplete="surname" required=""
                    class="relative block w-full appearance-none rounded-none rounded mt-1 border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Surname" v-model="user.surname" />
            </div>
            <div>
                <label for="otherName" class="sr-only">Other Name</label>
                <input id="otherName" name="otherName" type="text" autocomplete="otherName" required="false"
                    class="relative block w-full appearance-none rounded-none rounded mt-1 border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Other Name" v-model="user.otherName" />
            </div>
            <div>
                <label for="email-address" class="sr-only">Email address</label>
                <input id="email-address" name="email" type="email" autocomplete="email" required=""
                    class="relative block w-full appearance-none rounded-none rounded mt-1 border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Email address" v-model="user.email" />
            </div>
            <div>
                <label for="telephone" class="sr-only">Telephone</label>
                <input id="telephone" name="telephone" type="text" autocomplete="telephone" required=""
                    class="relative block w-full appearance-none rounded-none rounded mt-1 border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Telephone" v-model="user.telephone" />
            </div>
            <div>
                <label for="forceNumber" class="sr-only">Force Number</label>
                <input id="forceNumber" name="forceNumber" type="text" autocomplete="forceNumber" required=""
                    class="relative block w-full appearance-none rounded-none rounded mt-1 border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Force Number" v-model="user.forceNumber" />
            </div>
            <div>
                <label for="region" class="sr-only">Region</label>
                <input id="region" name="region" type="text" autocomplete="region" required=""
                    class="relative block w-full appearance-none rounded-none rounded mt-1 border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Region" v-model="user.region" />
            </div>
            <div>
                <label for="station" class="sr-only">Station</label>
                <input id="station" name="station" type="text" autocomplete="station" required=""
                    class="relative block w-full appearance-none rounded-none rounded mt-1 border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Station" v-model="user.station" />
            </div>
            <div>
                <label for="rank" class="sr-only">Rank</label>
                <input id="rank" name="rank" type="text" autocomplete="rank" required=""
                    class="relative block w-full appearance-none rounded-none rounded mt-1 border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Rank" v-model="user.rank" />
            </div>
            <div>
                <label for="directorate" class="sr-only">Directorate</label>
                <input id="directorate" name="directorate" type="text" autocomplete="directorate" required=""
                    class="relative block w-full appearance-none rounded-none rounded mt-1 border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Directorate" v-model="user.directorate" />
            </div>
            <div>
                <label for="officeRole" class="sr-only">Office Role</label>
                <input id="officeRole" name="officeRole" type="text" autocomplete="officeRole" required=""
                    class="relative block w-full appearance-none rounded-none rounded mt-1 border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Office Role" v-model="user.officeRole" />
            </div>
            <div>
                <label for="password" class="sr-only">Password</label>
                <input id="password" name="password" type="password" autocomplete="current-password" required=""
                    class="relative block w-full appearance-none rounded-none rounded mt-1 border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Password" v-model="user.password" />
            </div>
            <div>
                <label for="password_confirmation" class="sr-only">Confirm Password</label>
                <input id="password_confirmation" name="password_confirmation" type="password"
                    autocomplete="current-password_confirmation" required=""
                    class="relative block w-full appearance-none rounded-none rounded mt-1 border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Password" v-model="user.password_confirmation" />
            </div>
        </div>

        <div>
            <button type="submit"
                class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Sign in
            </button>
        </div>
    </form>
</template>
  
<script setup>
import { LockClosedIcon } from '@heroicons/vue/20/solid'
import { useRouter } from 'vue-router';
import store from "../store"

const user = {
    'firstName': "",
    'surname': "",
    'otherName': "",
    'email': "",
    'telephone': "",
    'forceNumber': "",
    'region': "",
    'station': "",
    'rank': "",
    'directorate': "",
    'officeRole': "",
    'password': "",
    'password_confirmation': "",
}
const router = useRouter()
function register(ev) {
    ev.preventDefault()
    store.dispatch("register", user).then((res) => {
        router.push({ name: "Dashboard" })
    })
}
</script>