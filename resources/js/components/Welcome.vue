<template>
    <div>
        <h2><b>The home of many resources for Online Reality Games!</b></h2><br>
        <h3>Find your next ORG to join</h3>
        <router-link :to="{name:'posts.index'}" active-class="border-b-2 border-indigo-400" class="router-link-active inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out">
            FIND ORGS
        </router-link>
        <br>
        <br>
        <h3>Get some inspiration (or straight up copy) some challenges for your own orgs</h3>
        <router-link :to="{name:'posts.resources'}" active-class="border-b-2 border-indigo-400" class="router-link-active inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out">
            BROWSE CHALLENGES
        </router-link>
        <br>
        <br>
        <h3>Click here for some FREE graphics, to make hosting a little bit easier</h3>
        <router-link :to="{name:'posts.graphics'}" active-class="border-b-2 border-indigo-400" class="router-link-active inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out">
            DOWNLOAD GRAPHICS
        </router-link>
        <br>
        <br>
        <h3>Join our discord below</h3>
        <a href="https://discord.gg/sB5znWMetA">
        <img src="https://drive.google.com/uc?export=view&id=1tUrYfvXDyVSSDWKs2RghremB-F9SEgz9" width="300">
        </a>
        <br>
        <br>
    </div>
</template>

<style>
.td {
  font-weight: bold;
}

.router-link-active {
    color: blue;
}
</style>