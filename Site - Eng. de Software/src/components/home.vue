<template>
  <div>

    <barraNavegacao></barraNavegacao>
    <div class="container" id="eventos">    
      <h2 class="titulo">EVENTOS</h2>

      <div class="row">
        <div class="col-md-6 col-lg-4" v-for="(evento, index) in eventos" :key="evento.id">
          <div class="card" style="width: 100%;">
            <img class="card-img-top imagem" :src="evento.imagem" alt="Card image cap">
            <div class="card-body">
              
              <div class="descricaoEvento">
                <p>Evento: <b>{{ evento.nome }}</b></p>
                <p>Data: <b>{{ evento.dataEvento }}</b></p>
                <p>Local: <b>{{ evento.local }}</b></p>
                <p>Cidade: <b>{{ evento.cidade }}</b></p>
                <p>Valor: <b>{{ evento.valor }}</b></p>
              </div>
              
              <button type="submit" class="botao" @click="enviarPedido(index)">Enviar pra caixinha</button>
            </div>
          </div>
        </div>   
      </div>
    </div>
    
  </div>
</template>

<script>

import { bus } from '../bus.js';
import barraNavegacao from './barraNavegacao';

export default {
  name: 'home',

  components: { barraNavegacao },

  computed:
  {
     eventos() 
     {
        return this.$store.state.eventList.filter(evento => {
          return evento.cidade.toLowerCase().includes(this.$store.state.cidade.toLowerCase())
        })
     }
  },
  
  methods: {
    enviarPedido(i)
    {
      bus.$emit('addPedido', this.eventos[i]);
      alert('Pedido enviado!');
    }
  }
}
</script>


<style scoped>

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
  margin-left: 10px;
  transition-duration: 0.2s;
}
  .botao:hover {
    background-color: #37395b;    
  }

.descricaoEvento {
  font-size: 1em;
  list-style: none;
  text-align: left;
}

.imagem {
  width: 100%;
  height: 130px;
}


</style>