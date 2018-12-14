<template>
  <div id="app">
    <div class="conteudo">
      <cabecalho></cabecalho>
      <minhaLista></minhaLista>      
    </div>

    <pedidos></pedidos>        
  </div>
</template>

<script>

import cabecalho from './components/headerComponent.vue';
import minhaLista from './components/listComponent.vue';
import pedidos from './components/pedidosComponent.vue';


  export default {
    name: 'app',

    components:
    {
      cabecalho,
      minhaLista,
      pedidos      
    }
  }

</script>

<style>
body, html {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 83%;
  text-align: center;
}
</style>
