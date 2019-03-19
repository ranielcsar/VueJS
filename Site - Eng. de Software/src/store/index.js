import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
   state: {
      eventList: 
      [
         { imagem: 'https://bit.ly/2t9jFTf',
         nome: 'GeoBonfim', 
         dataEvento: '03/03/2019',
         local: 'IF Baiano - Sr. do Bonfim',
         cidade: 'Senhor do Bonfim',
         valor: 'Entrada franca',
         id: 1 },

         { imagem: 'https://bit.ly/2StC4Z3',
         nome: 'FECITEC', 
         dataEvento: '10/03/2019',
         local: 'Orla',
         cidade: 'Juazeiro',
         valor: 'Entrada franca',
         id: 2 },

         { imagem: 'https://bit.ly/2DWE4kK',
         nome: 'O que tem no IF?', 
         dataEvento: 'Qualquer dia! :D',
         local: 'IF Baiano - Sr. do Bonfim',
         cidade: 'Senhor do Bonfim',
         valor: 'Entrada franca',
         id: 3 }
      ],

      cidade: ''
   },

   mutations: {
      mudarCidade(state, cidade)
      {
         state.cidade = cidade;
      }
   }
})