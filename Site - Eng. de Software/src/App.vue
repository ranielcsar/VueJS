<template>
  <div id="app">
    <barraNavegacao></barraNavegacao>
    <!--<meuSlider></meuSlider>--> 

    <keep-alive>        
      <router-view></router-view>
    </keep-alive>   
  </div>
</template>

<script>

import barraNavegacao from '../src/components/barraNavegacao';
import meuSlider from '../src/components/slider';

export default {
  name: 'App',

  components:
  {
    barraNavegacao,
    meuSlider
  }
}
</script>

<style>

html {
  scroll-behavior: smooth;
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
