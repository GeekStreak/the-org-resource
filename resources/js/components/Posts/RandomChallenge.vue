<template>
    <div class="flex justify-center items-center">
        <div>
            <h2 class="m-0"><b>{{ resource.title }}</b></h2>
            <p class="m-0">{{ resource.content }}</p><br>
            <div class="flex justify-center">
              <button @click="fetchResources" class="text-center bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 m-2 border border-blue-700 rounded">New Random Challenge</button>
            </div>      
        </div>
    </div>
</template>

<script>
import { reactive } from '@vue/runtime-core'
export default {
    data() {
        return {
            resource: reactive({ title: '', content: '', type: '' }),
            validationErrors: {},
            id: '',
            totalEntries: 0, // Variable to store the total number of entries
        }
    },
    mounted() {
        console.log('test');
        this.fetchResources();
        console.log('test2');
    },
    methods: {
        fetchResources() {
            axios.get('/api/resources')
                .then(response => {
                    this.totalEntries = response.data.data.length; // Set the total number of entries
                    this.id = Math.floor(Math.random() * this.totalEntries) + 1; // Generate a random ID
                    this.fetchResourceById(this.id); // Fetch resource by the generated ID
                })
                .catch(error => console.log(error))
        },
        fetchResourceById(id) {
            axios.get('/api/resources/' + id)
                .then(response => {
                    this.resource = response.data.data;
                    console.log(this.resource);
                })
                .catch(error => console.log(error))
        }
    }
}
</script>
<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
.router-link-active {
  font-weight: bold;
  color: blue;
}

</style>