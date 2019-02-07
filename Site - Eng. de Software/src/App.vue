<template>
  <div id="app">
    <barraNavegacao></barraNavegacao>
    
    <keep-alive>      
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>

import barraNavegacao from '../src/components/barraNavegacao';

export default {
  name: 'App',

  components:
  {
    barraNavegacao
  }
}
</script>

<style>

h2 {
  text-align: center;
}

</style>
