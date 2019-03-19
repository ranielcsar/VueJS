<template>
   <div class="loginHeader">
     <span class="registro"><router-link :to="{ path: '/telaLogin'}">ENTRAR</router-link> ou <router-link :to="{ path: '/telaCadastro'}">REGISTRAR</router-link> | {{ dataAtual() }}</span>

     <search></search>
   </div>   
</template>

<script>

import search from './search';
   
export default {
   name: 'login',

   components: { search },
   
   methods:
   {
      dataAtual: function()
      {
         let data = new Date();
         let dia = data.getDate();
         let mes = data.toLocaleString('pt-BR', { month: 'long' });

         let dataFinal = mes.charAt(0).toUpperCase(0) + mes.slice(1) + ' ' + dia + ', ' +
         data.getFullYear();

         return dataFinal;
      }
  }
}
</script>

<style>

.loginHeader {
   background-color: #333333;
   padding: 1.5%;
}

.registro {
   margin-left: 10%;
   color: white;
}

</style>