<template>
   <div>
      <h2>CAIXINHA</h2>      
   </div>
</template>

<script>

import { bus } from '../bus.js';

export default {
   name: 'caixinha',

   data: function()
   {
      return {
         pedidos: []
      }
   },

   mounted() {
      bus.$on('addPedido', data => {
         this.pedidos.push(data);

         console.log('funfou');
      })      
   }
}

</script>