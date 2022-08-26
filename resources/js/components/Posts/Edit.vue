<template>
    <form @submit.prevent="updatePost(post)">
        <!-- Title -->
        <div>
            <label for="post-title" class="block font-medium text-sm text-gray-700">
                Title
            </label>
            <input v-model="post.title" id="post-title" type="text" class="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            <div class="text-red-600 mt-1">
                <div v-for="message in validationErrors?.title">
                    {{ message }}
                </div>
            </div>
        </div>
        <!-- Content -->
        <div class="mt-4">
            <label for="post-content" class="block font-medium text-sm text-gray-700">
                Content
            </label>
            <textarea v-model="post.content" id="post-content" class="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
            <div class="text-red-600 mt-1">
                <div v-for="message in validationErrors?.content">
                    {{ message }}
                </div>
            </div>
        </div>
        <!-- Category -->
        <div class="mt-4">
            <label for="post-category" class="block font-medium text-sm text-gray-700">
                Category
            </label>
            <select v-model="post.category_id" id="post-category" class="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                <option value="" selected>-- Choose category --</option>
                <option v-for="category in categories" :value="category.id">
                    {{ category.name }}
                </option>
            </select>
            <div class="text-red-600 mt-1">
                <div v-for="message in validationErrors?.category_id">
                    {{ message }}
                </div>
            </div>
        </div>
        <!-- Link -->
        <div class="mt-4">
            <label for="post-link" class="block font-medium text-sm text-gray-700">
                Link
            </label>
            <input v-model="post.link" id="post-link" type="text" class="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            <div class="text-red-600 mt-1">
                <div v-for="message in validationErrors?.link">
                    {{ message }}
                </div>
            </div>
        </div>
        <!-- Buttons -->
        <div class="mt-4">
            <button class="px-3 py-2 bg-blue-600 text-white rounded">Save</button>
        </div>
    </form>
</template>
<script>
import { reactive } from '@vue/runtime-core'
export default {
    data() {
        return {
            categories: {},
            selectedCategory: '',
            post: reactive({title: '', content: '', link: '', category_id: ''}),
            validationErrors: {},
            id: '',
        }
    },
    mounted() {
        this.fetchPost(this.$route.params.id)
        this.test()
        this.getCategories()
    },
    methods: {
        fetchPost(id) {
            axios.get('/api/posts/' + id)
            .then(response => this.post = response.data.data)
            .catch(error => console.log(error))
        },
        updatePost(post, validationErrors){
            axios.put('/api/posts/' + post.id, post)
            .then(response => this.$router.push({name: 'posts.indexadmin'}), this.$swal('Post Edited Successfully'))
            .catch(error => {
                if (error.response?.data) {
                    this.validationErrors = error.response.data.errors
                    console.log(validationErrors?.title)
                }
            })
        },
        getCategories() {
            axios.get('/api/categories')
            .then(response => this.categories = response.data.data)
            .catch(error => console.log(error))
        },
        test(){
            console.log(this.post.title)
        }
    }
}
</script>