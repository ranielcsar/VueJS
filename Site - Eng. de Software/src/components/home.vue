<template>
  <div class="container">
    <h2 class="text-md-center titulo">EVENTOS</h2>

    <div class="row">
      <div class="col-md-6 col-lg-4" v-for="(evento, index) in eventos" :key="evento.id">
        <div class="card" style="width: 100%;">
          <img class="card-img-top imagem" :src="evento.imagem" alt="Card image cap">
          <div class="card-body">
            
            <div class="descricaoEvento text-left">
              <p>Evento: <b>{{ evento.nome }}</b></p>
              <p>Data: <b>{{ evento.dataEvento }}</b></p>
              <p>Local: <b>{{ evento.local }}</b></p>
              <p>Valor: <b>{{ evento.valor }}</b></p>
            </div>
            <button type="submit" class="botao" @click="enviarPedido(index)">Enviar pra caixinha</button>
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
          { imagem: 'https://bit.ly/2t9jFTf',
            nome: 'GeoBonfim', 
            dataEvento: '03/03/2019',
            local: 'IF Baiano - Sr. do Bonfim',
            valor: 'Entrada franca',
            id: 1 },

            { imagem: 'https://bit.ly/2StC4Z3',
            nome: 'FECITEC', 
            dataEvento: '10/03/2019',
            local: 'Praça Nova do Congresso',
            valor: 'Entrada franca',
            id: 2 },

            { imagem: 'https://bit.ly/2DWE4kK',
            nome: 'O que tem no IF?', 
            dataEvento: 'Qualquer dia! :D',
            local: 'IF Baiano - Sr. do Bonfim',
            valor: 'Entrada franca',
            id: 3 }
        ]
      }
   },

  methods:
  {
    enviarPedido(i) {
      bus.$emit('addPedido', this.eventos[i]);
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