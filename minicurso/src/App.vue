<template>
  <div id="app">
    <div class="conteudo">
      <cabecalho></cabecalho>
      <minhaLista></minhaLista>
      <barraNavegacao></barraNavegacao>
    </div>        
  </div>
</template>

<script>

import cabecalho from './components/headerComponent.vue';
import minhaLista from './components/listComponent.vue';
import barraNavegacao from './components/navbarComponent.vue';

  export default {
    name: 'app',

    components:
    {
      cabecalho,
      minhaLista,
      barraNavegacao
    }
  }

</script>

<style>
.conteudo {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;  
  margin-top: 60px;
}
</style>
