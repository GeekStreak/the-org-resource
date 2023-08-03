import { createRouter, createWebHistory } from "vue-router";

import AuthenticatedLayout from "../layouts/Authenticated";
import GuestLayout from "../layouts/Guest";

import PostsIndex from '../components/Posts/Index'
import PostsIndexAdmin from '../components/Posts/IndexAdmin'
import PostsCreate from '../components/Posts/Create'
import PostsResource from '../components/Posts/Resource'
import PostsGraphics from '../components/Posts/Graphics'
import PostsEdit from '../components/Posts/Edit'
import PostsResources from '../components/Posts/Resources'
import Login from '../components/Login'
import Welcome from '../components/Welcome'
import PostsMore from '../components/Posts/More'
import PostsRandomChallenge from '../components/Posts/RandomChallenge'


function auth(to, from, next) {
    if (JSON.parse(localStorage.getItem('loggedIn'))) {
        next()
    }
    else {
        next('/welcome')
    }
}

const routes = [
    {
        path: '/',
        redirect: { name: 'welcome' },
        component: GuestLayout,
        children: [
            {
                path: '/welcome',
                name: 'welcome',
                component: Welcome,
                meta: { title: 'Welcome to the ORG RESOURCE!' }
            },
            {
                path: '/login',
                name: 'login',
                component: Login,
                meta: { title: 'Login' }
            },
            {
                path: '/posts',
                name: 'posts.index',
                component: PostsIndex,
                meta: { title: 'Servers' }
            },
            {
                path: '/posts/resources',
                name: 'posts.resources',
                component: PostsResources,
                meta: { title: 'Challenges' }
            },
            {
                path: '/posts/graphics',
                name: 'posts.graphics',
                component: PostsGraphics,
                meta: { title: 'Graphics' }
            },
            {
                path: '/posts/resource/:id',
                name: 'posts.resource',
                component: PostsResource,
                meta: { title: 'Challenges' }
            },
            {
                path: '/posts/more',
                name: 'posts.more',
                component: PostsMore,
                meta: { title: 'More' }
            },
            {
                path: '/posts/RandomChallenge',
                name: 'posts.RandomChallenge',
                component: PostsRandomChallenge,
                meta: { title: 'Challenge Randomiser' }
            },
        ]
    },
    { 
        component: AuthenticatedLayout,
        beforeEnter: auth,
        children: [
            {
                path: '/posts',
                name: 'posts.indexadmin',
                component: PostsIndexAdmin,
                meta: { title: 'Servers' }
            },
            {
                path: '/posts/create',
                name: 'posts.create',
                component: PostsCreate,
                meta: { title: 'Add new server' }
            },
            {
                path: '/posts/edit/:id',
                name: 'posts.edit',
                component: PostsEdit,
                meta: { title: 'Edit post' }
            },
        ]
    },
]

export default createRouter({
    history: createWebHistory(),
    routes
})

