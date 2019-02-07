<template>
   <div>
      <h2>Sua caixinha!</h2>      

      <div class="row container">
        <div class="col-md-6 col-lg-4" v-for="(pedido, index) in pedidos">
          <div class="card" style="width: 100%;">
            <img class="card-img-top imagem" :src="pedido.imagem" alt="Card image cap">
            <div class="card-body">
              
              <div class="text-left">
                <p>Evento: <b>{{ pedido.nome }}</b></p>
                <p>Data: <b>{{ pedido.dataEvento }}</b></p>
                <p>Local: <b>{{ pedido.local }}</b></p>
                <p>Valor: <b>{{ pedido.valor }}</b></p>
              </div>
              
            </div>
          </div>
        </div>   
      </div>
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