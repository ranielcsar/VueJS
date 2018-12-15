<template>
   <section class="pedidos">
       <fieldset>
         <legend> PEDIDO </legend>

         <form action="index.html" method="post" class="formulario">
            <label>Dados do pedido</label> <br>

            <input type="text" name="nome" placeholder="Nome do cliente" id="inNome"> <br>            

            <input type="text" name="telefone" placeholder="Telefone do cliente" id="inTelefone"> 
            <br><br>

            <label>PIZZA</label> <br>
               <select class="opcoes" id="opcaoPizza">
                  <option>Selecione uma pizza!</option>
                  <option v-for="pizza in pizzas">{{ pizza.sabor }}</option>                  
               </select>
               <br><br>

            <label>BEBIDA</label> <br>
               <select class="opcoes" id="opcaoBebida">
                  <option>Selecione a bebida!</option>
                  <option v-for="bebida in bebidas">{{ bebida.nome }}</option>
               </select>
               <br><br>

            <input type="button" name="enviar" @click="addPedido" value="ENVIAR PEDIDO"></input>
         </form>
      </fieldset>                
   </section>
</template>

<script>

import pedidos from '../components/pedidosComponent.vue';
import { EventBus } from '../event-bus.js';

   export default {
      name: 'lista',

      components: { pedidos },

      data()
      {
         return {
            pizzas:
            [
               {sabor: 'Frango com catupiry'},
               {sabor: 'Portuguesa'},
               {sabor: '4 Queijos'},
               {sabor: 'Calabresa'}
            ],

            bebidas:
            [
               {nome: 'Guaraná 1L'},
               {nome: 'Guaraná 2L'},
               {nome: 'Fanta 2L'},
               {nome: 'Coca-cola 1L'}
            ]
         }
      },

      methods:
      {
         addPedido: function()
         {
            var pizza = document.getElementById('opcaoPizza').value;
            var bebida = document.getElementById('opcaoBebida').value;
           
            EventBus.$emit('addPedido', {pizza: pizza, bebida: bebida});
         }
      }
   }
</script>

<style type="text/css">

.pedidos {
   width: 75%;
   margin-left: 4%;
}

fieldset { text-align: left; }

input[type='text'] {
   width: 70%;
   height: 20px;
   padding: 5px;
   margin-bottom: 2%;
   border-radius: 0.3em;
   outline: none;
}

input[type='button'] {
   outline: none;
   border: none;
   border-radius: 2px;
   padding: 10px;
   width: 100%;
   background-color: #f9bd14;
   box-shadow: 1px 1px 4px #333333;
   color: #3c3c3c;
   font-size: 0.8em;
   font-weight: bold;
} 

   input[type='button']:hover {
      background-color: #d41b1b;
      color: white;
   }

.opcoes {  
   outline: none;
   padding: 5px;
   border-radius: 0.3em;
}  

</style>