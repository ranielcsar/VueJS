<template>
   <table class="tabela">
      <tbody>
      <tr v-for="item in itens">
         <td>{{ item.nome + "." }}</td>      
         <td>{{ "R$ " + item.preco }}</td>
      </tr>
      </tbody>     
   </table>
</template>

<script>
   export default {
      name: 'lista',

      data()
      {
         return {
            itens:
            [
               {nome: 'Pão', preco: 0.30},
               {nome: 'Farinha', preco: 2.30},
               {nome: 'Cuscuz', preco: 3.75},
               {nome: 'Feijão', preco: 5.60}
            ]
         }
      }
   }
</script>

<style type="text/css">
   
   .tabela {
      text-align: justify;
      margin: 20%;
   }

</style>