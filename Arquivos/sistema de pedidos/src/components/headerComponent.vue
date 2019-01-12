<template>
   <header>
      <h2>PIZZA IMAGINÁRIA <span>| PEDIDOS</span></h2>
      <nav>
         <ul>
            <li><a href="#">Editar pedido</a></li>
            <li><a href="#">Relatório do dia</a></li>
         </ul>
      </nav>
   </header>
</template>

<script>

   export default {
      
   }

</script>

<style scoped>
   header {
      width: 100%;
      background-color: #333333;
      padding: 5px 10%;
      float: left;
      margin-bottom: 2%;
   }

   header h2 {
      color: #fad05a;
      float: left;
   }

   header h2 span {
      color: #fff;
   }

   /* NAVEGAÇÃO */
   header nav {
      width: 40%;
      float: right;
      margin-bottom: 2%;
   }

   header nav ul li {
      list-style: none;
      display: inline-block;
      padding: 10px;
   }

   header nav ul li a {
      color: #fad05a;
      padding: 5px;
      text-decoration: none;
   }

   header nav ul li a:hover {
      color: #fff;
   }
</style>