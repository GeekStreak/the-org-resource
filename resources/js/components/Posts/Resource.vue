<template>
    <!--<body>
        <h1><b>Challenges</b></h1><br>
            <tbody class="bg-white divide-y divide-gray-200 divide-solid">
                <tr v-for="r in resource.data">
                    <h2 class="px-6 py-2 whitespace-no-wrap text-sm leading-5 text-gray-900"><b>{{ r.title }}</b></h2>
                    <p class="px-6 py-2 whitespace-no-wrap text-sm leading-5 text-gray-900">{{ r.content }}</p><br>
                </tr>
            </tbody>
    </body>-->
        <div>
            <h2><b>{{resource.title}}</b></h2>
            <p>{{resource.content}}</p>
        </div>
</template>

<script>
import { reactive } from '@vue/runtime-core'
export default {
    data() {
        return {
            resource: reactive({title: '', content: '', type: ''}),
            validationErrors: {},
            id: '',
        }
    },
    mounted() {
        this.fetchResources(this.$route.params.id)
        this.test(this.resource)
    },
    methods: {
        fetchResources(id) {
            console.log('test')
            axios.get('/api/resources/' + id)
            .then(response => this.resource = response.data.data, console.log(id))
            .catch(error => console.log(error))
        },
        test(resource){
            console.log(this.resource.title)
        }
    }
}
</script>