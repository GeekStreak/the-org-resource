<template>
    <div class="p-6 bg-white border-gray-200">
        <h1><b>Find your next ORG below...</b></h1><br>
        <div class="max-w-screen">
            <table class="min-w-full divide-y divide-gray-200 border overflow-x-auto hidden md:block">
                <thead>
                <tr>
                    <th class="px-6 py-3 bg-gray-50 text-left">
                        <input v-model="search_title" type="text" class="inline-block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Filter by Title">
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left">
                        <select v-model="search_category" class="inline-block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                            <option value="" selected>-- all types --</option>
                            <option v-for="category in categories" :value="category.id">
                                {{ category.name }}
                            </option>
                        </select>
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left">
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left"></th>
                    <th class="px-6 py-3 bg-gray-50 text-left"></th>
                    <!--<th class="px-6 py-3 bg-gray-50 text-left"></th>-->
                </tr>
                <tr>
                    <th class="px-6 py-3 bg-gray-50 text-left">
                        <div class="flex flex-row items-center justify-between cursor-pointer" @click="updateOrdering('title')">
                            <div class="leading-4 font-medium text-gray-500 uppercase tracking-wider" :class="{ 'font-bold text-blue-600': orderColumn === 'title' }">
                                Title
                            </div>
                            <div class="select-none">
                                <span :class="{
                                  'text-blue-600': orderDirection === 'asc' && orderColumn === 'title',
                                  'hidden': orderDirection !== '' && orderDirection !== 'asc' && orderColumn === 'title',
                                }">&uarr;</span>
                                <span :class="{
                                  'text-blue-600': orderDirection === 'desc' && orderColumn === 'title',
                                  'hidden': orderDirection !== '' && orderDirection !== 'desc' && orderColumn === 'title',
                                }">&darr;</span>
                            </div>
                        </div>
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left">
                        <span class="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Type</span>
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left">
                        <span class="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Description</span>
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left">
                        <span class="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Link</span>
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left">
                                                <div class="flex flex-row items-center justify-between cursor-pointer" @click="updateOrdering('created_at')">
                            <div class="leading-4 font-medium text-gray-500 uppercase tracking-wider" :class="{ 'font-bold text-blue-600': orderColumn === 'created_at' }">
                                Created At
                            </div>
                            <div class="select-none">
                                <span :class="{
                                  'text-blue-600': orderDirection === 'asc' && orderColumn === 'created_at',
                                  'hidden': orderDirection !== '' && orderDirection !== 'asc' && orderColumn === 'created_at',
                                }">&uarr;</span>
                                <span :class="{
                                  'text-blue-600': orderDirection === 'desc' && orderColumn === 'created_at',
                                  'hidden': orderDirection !== '' && orderDirection !== 'desc' && orderColumn === 'created_at',
                                }">&darr;</span>
                            </div>
                        </div>
                    </th>
                    <!--
                    <th class="px-6 py-3 bg-gray-50 text-left">
                        Actions
                    </th>-->
                </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200 divide-solid">
                <tr v-for="post in posts.data">
                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                        {{ post.title }}
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                        {{ post.category }}
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                        {{ post.contentShort }}
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900 underline">
                        <a :href="post.link" class="hover:text-indigo-500 hover:underline">{{ post.link }}</a>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                        {{ post.created_at }}
                    </td>
                </tr>
                </tbody>
            </table>
            <div class="max-w-screen overflow-x-auto md:hidden">
                <table class="min-w-full">
                    <thead>
                        <tr class="flex flex-col">
                            <th class="px-6 py-3 bg-gray-50 text-left">
                                <input v-model="search_title" type="text" class="inline-block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Filter by Title">
                            </th>
                            <th class="px-6 py-3 bg-gray-50 text-left">
                                <select v-model="search_category" class="inline-block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                    <option value="" selected>-- all types --</option>
                                    <option v-for="category in categories" :value="category.id">{{ category.name }}</option>
                                </select>
                            </th>
                        </tr>
                    </thead>
                    <br>
                    <tbody class="bg-white divide-y divide-gray-200 divide-solid">
                        <tr v-for="post in posts.data">
                            <div class="shadow">
                                <h2 class="px-6 py-2 whitespace-no-wrap text-base leading-5 text-gray-900 bg-stone-100"><b>{{ post.title }}</b> <i>{{ post.category }}</i></h2>
                                <p class="px-6 py-2 whitespace-no-wrap text-sm leading-5 text-gray-900">{{ post.contentShort }} </p>
                                <div class="text-center">
                                    <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 m-2 border border-blue-700 rounded">
                                    <a :href="post.link" class="hover:text-white">
                                        Join Server
                                    </a>
                                    </button>
                                </div>
                            </div>
                            <br>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Pagination :data="posts" @pagination-change-page="page => fetchPosts(page, search_category, orderColumn, orderDirection)" />
        </div>
        <br>
        <p>Are you a host that wants their org on this list? Join the discord below</p>
        <a href="https://discord.gg/zV7HJA85Qk">
        <img src="https://the-org-resource-images.s3.eu-west-2.amazonaws.com/Survivor/62a07b53139aec4c1fd07771_discord-logo.png" width="300">
        </a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: {},
            categories: {},
            search_category: '',
            search_title: '',
            orderColumn: 'created_at',
            orderDirection: 'desc',
            id: '',
        }
    },
    mounted() {
        this.fetchPosts(),
        this.getCategories()
    },
    methods: {
        fetchPosts(page = 1, search_category='', search_title='', order_column = 'created_at', order_direction = 'desc') {
            axios.get('/api/posts?page=' + page + 
            '&search_category=' + search_category + 
            '&search_title=' + search_title + 
            '&order_column=' + order_column + 
            '&order_direction=' + order_direction)
            .then(response => this.posts = response.data)
            .catch(error => console.log(error))
        },
        getCategories() {
            axios.get('/api/categories')
            .then(response => this.categories = response.data.data)
            .catch(error => console.log(error))
        },
        updateOrdering(column) {
           this.orderColumn = column;
           this.orderDirection = (this.orderDirection === 'asc') ? 'desc' : 'asc';
           this.fetchPosts(1,this.search_category,this.search_title,this.orderColumn,this.orderDirection)
        },
        deletePost(id){
            this.$swal({
                title: 'Are you sure?',
                text: 'You won\'t be able to revert this action!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                confirmButtonColor: '#ef4444',
                timer: 20000,
                timerProgressBar: true,
                reverseButtons: true
            })
            .then(result => {
                if (result.isConfirmed){
                    axios.delete('/api/posts/' + id)
                    .then(response => this.fetchPosts(), this.$router.push({name: 'posts.index'}), this.$swal({icon: 'success',text:'Post Deleted Successfully'}))
                    .catch(error => {
                        this.$swal({icon: 'error',text:'Failed to delete post'})
                    })
                }
            })
        },
    },
    watch: {
        search_category(current, previous) {
            this.fetchPosts(1,current,this.search_title,)
        },
        search_title(current, previous) {
            this.fetchPosts(1,this.search_category,current)
        },
    },
}
</script>

<style>
.pagination {
    display: flex;
    justify-content: center;
    margin: 15px 0;
}
li.page-item {
    margin: 0 3px;
}
a.page-link {
    border-radius: 50%;
    display: block;
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    place-items: center;
    transition: all 0.18s ease-in-out;
}
a.page-link:hover {
    background: rgba(0, 0, 0, 0.05);
    transform: scale(1.2);
}
.active a.page-link {
    background: rgba(0, 0, 0, 0.1);
}
a.page-link span.sr-only {
    display: none;
}
div.max-w-screen {
  overflow-x: auto;
}
</style>