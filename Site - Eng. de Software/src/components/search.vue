<template>
   <div class="procurar">
      <input class="searchBar" type="text" v-model="cidade" placeholder="Procure eventos na sua cidade!">
      <i @click="procurarCidade(cidade)" class="fa fa-search searchBtn"></i>
   </div>
</template>

<script>
import { bus } from '../bus.js';

export default {
   name: 'search',

   data()
   {
      return { 
         cidade: '',
         evento: null
      }
   },

   methods: {
      procurarCidade(cidade)
      {         
         bus.$emit('buscarCidade', cidade);   
      }
   }
}

</script>

<style>

.procurar {
   display: flex;
   margin-top: -0.4em;

   float: right;
   width: 27%;
}

.searchBar, .searchBtn {
   outline: none;   
   border-radius: 5px;
   border: none;
   
   margin-right: 0.4em;
} 

.searchBar {   
   width: 100%;
   padding: 0.5em;
   font-size: 2.5vh;
   font-weight: bold;

   transition: 0.3s;
   border: 1px solid #bdbdbd;

   background-color: transparent;     
}
   .searchBar:focus {
      border-color: #516395;
      color: white;      
   }
   ::placeholder { color: gray; }

.searchBtn {
   color: white;
   background-color: gray;
   padding: 10px;
   width: 2em;
}

</style>