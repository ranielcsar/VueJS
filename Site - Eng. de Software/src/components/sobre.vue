<template>
   <div class="sobre">
      <h2>{{ sobre }}</h2>
   </div>
</template>

<script>

export default {
   name: 'sobre',

   data: function()
   {
      return {
         sobre: 'SOBRE'
      }
   }
}

</script>

<style scoped>

h2 {
   margin: 2.5% 0;
}

</style>