<template>
<body>
    <h1 class="text lg"><b>Useful Websites</b></h1><br>
    <h2 class="whitespace-no-wrap text-m leading-5 text-gray-900 underline"><router-link :to="{name: 'posts.GeneralSites'}" class="router-link-active"><b>General Useful Sites</b></router-link></h2>
    <p>Full of generally useful sites for hosting your own orgs...</p><br>
    <h2 class="whitespace-no-wrap text-m leading-5 text-gray-900 underline"><router-link :to="{name: 'posts.ChallengeSites'}" class="router-link-active"><b>Sites For Challenges</b></router-link></h2>
    <p>Full of sites that are very useful for running challenges in your orgs...</p><br>
    <br>
    <h1 class="text lg"><b>Tools</b></h1><br>
    <h2 class="whitespace-no-wrap text-m leading-5 text-gray-900 underline"><router-link :to="{name: 'posts.RandomChallenge'}" class="router-link-active"><b>Random Challenge Generator</b></router-link></h2>
    <p>Need inspiration for your next challenge, this generator will pick a random challenge from the database to help fuel your ideas...</p>
    <br><h2>More Tools Coming Soon...</h2>
</body>
</template>
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