<template>
   <div class="procurar">
      <input class="searchBar" type="text" v-model="procurarCidade" placeholder="Procure eventos na sua cidade!">
      <i class="fa fa-search searchBtn"></i>
   </div>
</template>

<script>
import { bus } from '../bus.js';

export default {
   name: 'search',

   data() { return { city: '' } },

   computed: {
      procurarCidade: {
         get() {},

         set(city)
         {
            if (!city)
            {
               this.$store.commit('mudarCidade', '')
            } else {
               this.$store.commit('mudarCidade', city);
            }
         }   
      }
   }
  
}

</script>

<style>

.procurar {
   margin-top: -0.4em;
   float: right;
   width: 30%;
}

.searchBar {   
   width: 90%;
   padding: 0.5em;
   font-size: 2.5vh;
   font-weight: bold;

   outline: none;   
   border-radius: 5px;
   border: none;
   
   margin-right: 0.4em;

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
}

</style>