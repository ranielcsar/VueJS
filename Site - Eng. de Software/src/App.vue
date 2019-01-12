<template>
  <div id="principal">
    <barraRegistro></barraRegistro>
    <cabecalho></cabecalho>
    <carrossel></carrossel>
    <conteudo></conteudo>
  </div>
</template>

<script>

import barraRegistro from '../src/components/barraRegistro.vue';
import cabecalho from '../src/components/mainHeader.vue';
import carrossel from '../src/components/slider.vue';
import conteudo from '../src/components/container.vue';

export default {
  name: 'app',

  components:
  {
    barraRegistro,
    cabecalho,
    carrossel,
    conteudo
  }
}

</script>

<style>

#principal {
  padding: 0;  
  margin: 0;
  box-sizing: border-box;  
  font-size: 15px; 
  background-color: #fbfcfc; 
}

</style>
