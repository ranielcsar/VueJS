<template>  
   <div class="container">
    
    <btnVoltar></btnVoltar>

      <h2 class="titulo text-center">SUA CAIXINHA <span v-if="checar()">ESTÁ VAZIA :/</span></h2>

      <h2 class="andamento" v-if="pedidos.length > 0">PEDIDOS EM ANDAMENTO:</h2>
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

              <button class="btnConfirma" @click="confirmarCompra(pedido, index)">Confirmar compra</button>
              <button class="btnCancela" @click="cancelarCompra(index)">Cancelar</button>

            </div>
          </div>
        </div>
      </div>

      <!-- COMPRAS FEITAS -->
      <h2 class="titulo" v-if="compraFeita.length > 0">COMPRAS CONCLUÍDAS</h2>
      <div class="row container">
        <div class="col-md-6 col-lg-4" v-for="(compra, index) in compraFeita">
          <div class="card" style="width: 100%;">
            <img class="card-img-top imagem" :src="compra.imagem" alt="Card image cap">
            <div class="card-body">
              
              <div class="text-left">
                <p>Evento: <b>{{ compra.nome }}</b></p>
                <p>Data: <b>{{ compra.dataEvento }}</b></p>
                <p>Local: <b>{{ compra.local }}</b></p>
                <p>Valor: <b>{{ compra.valor }}</b></p>
              </div>

            </div>
          </div>
        </div>
      </div>
   </div>
</template>

<script>

import { bus } from '../bus.js';
import btnVoltar from './btnVoltar';

export default {
   name: 'caixinha',

   components: { btnVoltar },

   data: function()
   {
      return {
         pedidos: [],
         compraFeita: []
      }
   },

   mounted() {
      bus.$on('addPedido', data => {
         this.pedidos.push(data);
      })      
   },

   methods: {
      cancelarCompra(index)
      {
         this.pedidos.splice(index, 1);         
      },

      confirmarCompra(pedido, index)
      {
        this.compraFeita.push(pedido);

        this.pedidos.splice(index, 1);
      },

      checar()
      {
        if (this.pedidos.length == 0 && this.compraFeita.length == 0)
        {
          return true;
        }

        return false;
      }
   }
}

</script>

<style>

.btnConfirma, .btnCancela {
   background-color: #1c528d;
   color: white;
   border: none;
   outline: none;
   width: auto;
   border-radius: 5px;
   padding: 4%;

   transition: 0.2s;
   box-shadow: 1px 2px 1px #33333385;
}

.btnCancela {
   border: 1px solid #333;
   background-color: transparent;
   padding: 2.5%;
   margin-left: 10px;

   color: #333;
}
   .btnCancela:hover {
      background-color: #c33;
      color: white;
   }

.card img {
  width: 100%;
  height: 130px;
}

.andamento {
  margin: 1em 0;
}

</style>