<template>
  <div id="app">
    <barraLogin></barraLogin>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <rodape></rodape>   
  </div>
</template>

<script>
import barraLogin from '../src/components/barraLogin';
import rodape from '../src/components/rodape';

export default {
  name: 'App',

  components:
  {
    barraLogin,
    rodape
  }
}
</script>

<style>

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

body {
  background-color: #fdfdfd;
  font-family: 'Roboto Condensed', sans-serif;
}

.titulo {
  margin: 2em 0;

  text-decoration: underline;
  text-underline-position: under;

  color: #404040;  
}

</style>
