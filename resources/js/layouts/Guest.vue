<template>
    <div class="min-h-screen bg-gray-100">
        <nav class="bg-white border-b border-gray-100">
            <!-- Primary Navigation Menu -->
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex">
                        <!-- Logo -->
                        <div class="shrink-0 flex items-center">
                            <router-link :to="{name:'welcome'}" class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out">
                                <img src="https://drive.google.com/uc?export=view&id=1skSaMLEtwko6BSfdT26umo0w4ti6L6qd" class="block h-10 w-auto fill-current text-gray-600">
                            </router-link>
                        </div>

                        <!-- Navigation Links -->
                        <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                            <router-link :to="{name:'posts.index'}" active-class="border-b-2 border-indigo-400" class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out">
                                Servers
                            </router-link>
                            <router-link :to="{name:'posts.resources'}" active-class="border-b-2 border-indigo-400" class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out">
                                Challenges
                            </router-link>
                            <router-link :to="{name:'posts.graphics'}" active-class="border-b-2 border-indigo-400" class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out">
                                Graphics
                            </router-link>
                        </div>
                    </div>

                    <!-- Mobile Links -->
                    <div class="sm:hidden sm:block flex items-center">
                        <div @click="showMenu = !showMenu" class="flex md:hidden">
                            <button
                            type="button"
                            class="
                                text-gray-800
                                hover:text-gray-400
                                focus:outline-none focus:text-gray-400
                            "
                            >
                            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                <path
                                fill-rule="evenodd"
                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                ></path>
                            </svg>
                            </button>
                        </div>
                        <ul
                            :class="showMenu ? 'flex' : 'hidden'"
                            class="
                                text-white
                                flex-col
                                mt-8
                                space-y-4
                                md:flex
                                md:space-y-0
                                md:flex-row
                                md:items-center
                                md:space-x-10
                                md:mt-0
                                bg-white
                                absolute
                                top-5
                                p-3
                                shadow-xl
                            "
                            >
                            <li class="text-sm font-bold text-white hover:text-blue-400">
                                <router-link :to="{name:'posts.index'}" active-class="border-b-2 border-indigo-400" class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out">
                                    Servers
                                </router-link>
                            </li>
                            <li class="text-sm font-bold text-white hover:text-blue-400">
                                <router-link :to="{name:'posts.resources'}" active-class="border-b-2 border-indigo-400" class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out">
                                    Challenges
                                </router-link>
                            </li>
                            <li class="text-sm font-bold text-white hover:text-blue-400">
                            <router-link :to="{name:'posts.graphics'}" active-class="border-b-2 border-indigo-400" class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out">
                                Graphics
                            </router-link>
                            </li>
                        </ul>
                    </div>

                    <button type="button">
                        <router-link :to="{name:'login'}" active-class="border-b-2 border-indigo-400" class="text-grey inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out">
                            Login
                        </router-link>
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
export default {
    computed: {
        currentPageTitle(){
            return this.$route.meta.title;
        },
    }
}
</script>
    