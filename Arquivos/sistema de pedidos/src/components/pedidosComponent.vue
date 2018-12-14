<template>
   <div>
      <ul>
         <li v-for="pedido in listaPedidos">
            {{ pedido }}
         </li>
      </ul>
   </div>
</template>

<script>
   
   export default {
      data()
      {
         return {
            listaPedidos: []
         }
      }
   }

</script>