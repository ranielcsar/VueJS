<template>
   <div class="container-fluid conteudo">
      <h3 align="center">EVENTOS</h3>
      <br>

      <b-container class="bv-example-row">
         <b-row>
            <b-col class="teste" v-for="col in colunas">
               <div class="card" style="width: 17rem;">
                 <img class="card-img-top" src="https://goo.gl/5bqKtQ" alt="Card image cap">
                 <div class="card-body">
                   <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                   <b-button class="botao" href="#">Mais detalhes...</b-button>
                 </div>                 
               </div>
            </b-col>            
         </b-row>         
      </b-container>
   </div>
</template>

<script>

export default {
   name: 'grid',

   data: function()
   {
      return {
         colunas: [1, 2, 3, 4, 5, 6]
      }
   }
}

</script>

<style>

.teste {
   text-align: center;   
}

.conteudo {
   margin-top: 5%;
}

.card {
   margin-bottom: 5%;
}

.botao {
  background-color: #4f5283;
  color: white;
  border: none;
  width: 90%;
  border-radius: 5px;
  padding: 10px 30px;
  transition-duration: 0.2s;
}
  .botao:hover {
    background-color: #37395b;    
  }

</style>