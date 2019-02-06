<template>
   <div>
      <h2>Sua caixinha!</h2>
      
      <ul>
         <li v-for="evento in pedidos">
           <p>Evento: <b>{{ evento.nome }}</b></p>
           <p>Data: <b>{{ evento.dataEvento }}</b></p>
           <p>Local: <b>{{ evento.local }}</b></p>
           <p>Valor: <b>{{ evento.valor }}</b></p>
         </li>
      </ul>
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

         console.log(this.pedidos);
      })      
   }
}

</script>