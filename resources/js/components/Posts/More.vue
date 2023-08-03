<template>
<body>
    <h2 class="whitespace-no-wrap text-m leading-5 text-gray-900 underline"><router-link :to="{name: 'posts.RandomChallenge'}" class="router-link-active"><b>Random Challenge Generator</b></router-link></h2>
    <p>Need inspiration for your next challenge, this generator will pick a random challenge from the database to help fuel your ideas...</p>
    <br><br><h2>More Tools Coming Soon...</h2>
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