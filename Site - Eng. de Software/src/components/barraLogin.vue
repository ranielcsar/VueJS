<template>
   <div class="loginHeader">
     <span class="registro"><a href="#">ENTRAR</a> ou <a href="#">REGISTRAR</a> | {{ dataAtual() }}</span>
   </div>
</template>

<script>
   
export default {
   name: 'login',
   
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
   padding: 5px;
}

.registro {
   margin-left: 10%;
   color: white;
}

</style>