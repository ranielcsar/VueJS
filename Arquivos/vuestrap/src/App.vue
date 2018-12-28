<template>
  <div id="principal">
    <alerta></alerta>
  </div>
</template>

<script>

import alerta from '../src/components/Alerta.vue'

export default {
  name: 'app',

  components:
  {
    alerta
  }
}

</script>

<style>

#principal {
  padding: 0;
  margin-left: 10%;
  box-sizing: border-box;
  width: 80%;
  font-size: 15px;
}

</style>
