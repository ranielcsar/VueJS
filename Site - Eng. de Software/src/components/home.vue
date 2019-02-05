<template>
  <div class="container">
    <h2 class="text-md-center titulo">EVENTOS</h2>

    <div class="row">
      <div class="col-md-4 col-lg-4" v-for="evento in eventos" :key="evento.id">
        <div class="card" style="width: 100%;">
          <img class="card-img-top" :src="evento.imagem" alt="Card image cap">
          <div class="card-body">
            <p class="card-text descricao">{{ evento.descricao }}</p>
            <button type="submit" class="botao" @click="enviarPedido">Enviar pra caixinha</button>
          </div>
        </div>
      </div>   
    </div>
  </div>
</template>

<script>

import { bus } from '../bus.js';

export default {
  name: 'home',

  data: function()
   {
      return {
        eventos: [
          { imagem: 'https://goo.gl/5bqKtQ', 
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            id: 1 },

            { imagem: 'https://goo.gl/5bqKtQ', 
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            id: 2 },

            { imagem: 'https://goo.gl/5bqKtQ', 
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            id: 3 }
        ]
      }
   },

  methods:
  {
    enviarPedido() {
      bus.$emit('addPedido', this.eventos);
      alert('Pedido enviado!');
    }
  }
}
</script>


<style scoped>

.titulo {
  margin-bottom: 1em;
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
  padding: 4% 15%;
  transition-duration: 0.2s;
}
  .botao:hover {
    background-color: #37395b;    
  }

.descricao {
  font-size: 1em;
}


</style>
