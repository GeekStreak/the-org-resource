<template>
    <div class="min-h-screen bg-gray-100">
        <nav class="bg-white border-b border-gray-100">
            <!-- Primary Navigation Menu -->
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex">
                        <!-- Logo -->
                        <div class="shrink-0 flex items-center">
                            <router-link :to="{name:'posts.indexadmin'}" class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out">
                                <img src="https://drive.google.com/uc?export=view&id=1skSaMLEtwko6BSfdT26umo0w4ti6L6qd" class="block h-10 w-auto fill-current text-gray-600">
                            </router-link>
                        </div>

                        <!-- Navigation Links -->
                        <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                            <router-link :to="{name:'posts.indexadmin'}" active-class="border-b-2 border-indigo-400" class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out">
                                Servers
                            </router-link>
                            <router-link :to="{name:'posts.create'}" active-class="border-b-2 border-indigo-400" class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out">
                                Add Server
                            </router-link>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <div>
                            <div>Hi, {{user.name}}</div>
                            <div class="text-sm text-gray-500">{{user.email}} </div>
                        </div>
                    </div>
                    <button @click="logout" type="button" class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150 ml-4" :class="{ 'opacity-25': processing }" :disabled="processing">
                        Log out
                    </button>
                </div>
            </div>
        </nav>

        <!-- Page Heading -->
        <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                    {{currentPageTitle}}
                </h2>
            </div>
        </header>

        <!-- Page Content -->
        <main>
            <div class="py-12">
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div class="p-6 bg-white border-b border-gray-200">
                            <router-view></router-view>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import { reactive } from '@vue/runtime-core'
import { useRouter} from 'vue-router';
export default {
    data() {
        return {
            user: reactive({
                        name: '',
                        email: '',
                    }),
            processing: false,
            router: useRouter(),
        }
    },
    computed: {
        currentPageTitle(){
            return this.$route.meta.title;
        },
        userData(){
            return this.$store.getters.userData;
        }
    },
    mounted() {
        this.test()
        this.getUser()
    },
    methods: {
        test(){
            console.log('TESTER!!!!!');
        },
        getUser(){
            axios.get('/api/user')
            .then(response => {
                this.user.name = response.data.name
                console.log(this.user.name);
                this.user.email = response.data.email
                console.log(this.user.email);
                console.log("get the damn user");
                //this.$store.commit('storeUser',response)
                //this.router.push({name: 'posts.index'})
            })
        },
        logout() {
            
            if (this.processing) return

            this.processing = true

            axios.post('/logout')
                .then(response => this.router.push({ name: 'login' }))
                .catch(error => {
                        this.$swal({icon: 'error',text:'Login Issues'})
                })
                .finally(() => {
                   this.processing = false
                })
        }
    }
}
</script>