<template>
   <div class="pedido">
      <fieldset>
         <legend>LISTA DE PEDIDOS</legend>
         <ul>
            <li v-for="pedido in listaPedidos">
               {{ pedido.pizza }} {{ pedido.bebida }}            
            </li>
         </ul>

         <button class="btnConfirma">CONFIRMAR PEDIDO</button>         
      </fieldset>      
   </div>
</template>

<script>
import { EventBus } from '../event-bus.js';
   
   export default {
      data()
      {
         return {
            listaPedidos: []
         }
      },

      mounted()
      {
         EventBus.$on('addPedido', data => {
            this.listaPedidos.push(data);            
         });
      }
   }

</script>

<style>

.pedido {
   float: right;
   margin-right: -18%;
   margin-top: -38.5%;
}

.pedido li {
   list-style: none;
}

.btnConfirma {
   outline: none;
   border: none;
   border-radius: 0.3em;
   padding: 10px;
   width: 100%;
   background-color: #d41b1b;
   color: #f5f5f5;
   font-size: 0.8em;
   box-shadow: 1px 1px 4px #333333;
}

   .btnConfirma:hover {
      background-color: #f9bd14;
      color: #3c3c3c;
   }

</style>