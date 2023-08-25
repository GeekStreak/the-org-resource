<template>
<body>
        <div class="flex justify-center items-center">
            <div>
                <h2 class="m-0 text-sm text-center"><b>Looking For Inspiration?</b></h2>
                <button class="text-center bg-indigo-500 hover:bg-indigo-700 text-white text-sm font-bold py-2 px-4 m-2 border border-blue-700 rounded"><router-link :to="{name: 'posts.RandomChallenge'}">Generate A Random Challenge</router-link></button><br><br>
            </div>
        </div>
        <tbody class="bg-white divide-y divide-gray-200 divide-solid">
            <tr v-for="resource in resources.data">
                <h2 class="px-6 py-2 whitespace-no-wrap text-sm leading-5 text-gray-900"><b>{{ resource.title }}</b></h2>
                <p class="px-6 py-2 whitespace-no-wrap text-sm leading-5 text-gray-900">{{ resource.contentShort }} <router-link :to="{name: 'posts.resource', params: {id: resource.id}}" class="router-link-active"><b>View More</b></router-link></p>
                <br>
            </tr>
        </tbody>
</body>
</template>
<script>
export default {
    data() {
        return {
            id: '',
            resources: {},
        }
    },
    mounted() {
        this.getResources()
    },
    methods: {
        getResources() {
            axios.get('/api/resources')
            .then(response => this.resources = response.data)
            .catch(error => console.log(error))
        },
    },
}
</script>

<style>
.td {
  font-weight: bold;
}

.router-link-active {
    color: blue;
}

.p-blue:hover {
@apply bg-blue-700;
}
</style>