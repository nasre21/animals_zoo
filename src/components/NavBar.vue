<template>
<nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
    <h1>hola</h1>
    <h2>hola</h2>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li v-for='nav in navBar' :key='nav.title' class="nav-item">
          <router-link style="color: white;" :to="nav.rout" class="nav-link active" aria-current="page" >{{ nav.title }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script setup>

const navBar=[
  {
   
    title: require('@/assets/imagenZoo/logo.png'),
    alt:"Photo Home",
    rout:"/"
  },
  {
    title: "News",
    alt:"Photo Home",
    rout:"/news"
  },
  {
    title: "Actividades",
    alt:"Photo Home",
    rout:"/actividades"
  },
  {
    title: "Contactos",
    alt:"Photo Home",
    rout:"/contactos"
  },

]




</script>


<style lang="scss" scoped>


</style>