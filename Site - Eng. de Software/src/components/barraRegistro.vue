<template>
   <div class="header">
      <span class="registro"><a href="#">ENTRAR</a> ou <a href="#">REGISTRAR</a> | {{ dataAtual() }}</span>
      <ul class="links">
         <li><a href="#">Minha conta</a></li>
         <li><a href="#">Lista de desejos</a></li>
      </ul>
   </div>
</template>

<script>

export default {
   name: 'header',
   
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

.registro {
   margin-left: 10%;
   color: white;
}

.header {
   background-color: #191919;
   padding: 10px;
}

.links {
   margin-right: 4%;   
   list-style: none;
   float: right;   
}
   .links li {
      display: inline-block;
      padding-left: 2em;      
   }

</style>