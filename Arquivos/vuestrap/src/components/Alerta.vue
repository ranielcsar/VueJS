<template>
   <div>
      <b-alert show v-for="variante in variantes" :variant="variante.valor">
         {{ variante.valor }} alert
      </b-alert>
   </div>
</template>

<script>
   
   export default {

      data: function()
      {
         return {
            variantes:
            [
               {valor: 'primary'},
               {valor: 'secondary'},
               {valor: 'success'},
               {valor: 'danger'},
               {valor: 'warning'},
               {valor: 'info'},
               {valor: 'light'}, 
               {valor: 'dark'}
            ]            
         }
      }
   }

</script>