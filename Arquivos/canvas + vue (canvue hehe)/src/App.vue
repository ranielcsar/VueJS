<template>
  <div id="app">
    <h2>Exemplo de gráfico de barras</h2>
    <meu-canvas class="meuCanvas">
      <minha-caixa
        v-for="objeto, index of valorGrafico"
        :x1 = "((index / valorGrafico.length) * 100)"
        :x2 = "((index / valorGrafico.length) * 100) + (100 / valorGrafico.length)"
        :y1 = "100"
        :y2 = "100 - objeto.valor" 
        :cor = "objeto.cor"
        :valor = "objeto.valor">      
      </minha-caixa>
    </meu-canvas>
  </div>  
</template>

<script>

import MeuCanvas from './MeuCanvas.vue';
import MinhaCaixa from './MinhaCaixa.vue';

export default {
  name: 'app',
  components: 
  {
    MeuCanvas,
    MinhaCaixa
  },

  data()
  {
    return {
      valorGrafico:
      [
        { valor: 24, cor: '#d12e4b' },
        { valor: 32, cor: '#e8ce1f' },
        { valor: 69, cor: '#a7e546' },
        { valor: 1, cor: '#432e67' },
        { valor: 28, cor: '#128bd2' },
        { valor: 60, cor: '#333333' }
      ]
    }
  },

  mounted()
  {
    let direcao = 1;
    let valorSelecionado = Math.floor(Math.random() * this.valorGrafico.length);

    setInterval(() => {
      if (Math.random() > 0.995) direcao *= -1;

      if (Math.random() > 0.99) valorSelecionado = Math.floor(Math.random() * this.valorGrafico.length);

      this.valorGrafico[valorSelecionado].valor = Math.min(Math.max(this.valorGrafico[valorSelecionado].valor + direcao * 0.5, 0), 100);
    }, 5);
  }
}

</script>

<style>

html, body {
  margin: 0;
  padding: 0;
}

h2 {
  border: 2px solid #333333;
  border-radius: 10px;
  padding: 5px;
  text-align: center;
  width: 50%;
  margin-left: 5%;
}

.meuCanvas {  
  width: 50%;
  height: 350px;
  margin-left: 5%;
}

</style>
