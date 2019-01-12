<template>
   <div>
      <header>
         <h4 class="tituloSite">INGRESSO RÁPIDO</h4>

         <ul class="link">
            <li><a href="#home">HOME</a></li>
            <li><a href="#categorias">CATEGORIAS</a></li>
            <li><a href="#eventos">EVENTOS DO DIA</a></li>
            <li><a href="#sobre">SOBRE NÓS</a></li>
         </ul>

         <ul class="link2">
            <li><a href="#"><img class="lupa" title="Procurar" src="../assets/search.png"></a></li>
            <li><a href="#"><img class="caixinha" title="Caixinha de ingressos" src="../assets/caixinha.png"></a></li>            
         </ul>
      </header>           
   </div>
</template>
   
<script>
   
</script>

<style>

header {   
   color: #333333;
   height: 4em;
   font-family: 'Roboto Condensed', sans-serif;
}

header li { font-family: 'Thasadith', sans-serif; }

.tituloSite, .link { float: left;  }

.tituloSite {
   margin: 15px 0 0 5%;
   font-size: 4.7vh;   
}

.link li {
   display: inline-block;
   padding: 10px 2em 0 0;
   margin: 0 0 0 3em;  
}
   .link li a {
      color: #333;   
      font-size: 1.3em;
      font-weight: bold; 
   }
      .link li a:hover {
         color: #a673d8;
         text-decoration: none;       
      }

.link2 {
   float: right;
   margin: 5px 2em 0 0;
   list-style: none;   
}
   .link2 li {
      display: inline-block;
      padding: 0 2em 0 0;
   }
     
</style>