<template>
  <div  class="container">
    <btnVoltar></btnVoltar>

  <div>
   <h1>CADASTRO</h1>

    <!-- DADOS PESSOAIS-->
    <div class="p1">       
      <legend><h2>DADOS PESSOAIS</h2></legend>
      <table class="dados" cellspacing="10">
         <label>Nome: {{ dados.nome }}</label>
         <input type="text" placeholder="Nome" v-model="dados.nome">
         <label>Sobrenome: </label>
         <input type="text" placeholder="Sobrenome" v-model="dados.sobrenome">
         <label>Nascimento: </label>
         <input type="date" v-model="dados.nascimento" name="dia" size="2" maxlength="2" value="dd" placeholder="nascimento">
         <label>RG: {{dados.rg}} </label>
         <input type="text" v-model="dados.rg" name="rg" size="13" maxlength="13" placeholder="RG">
         <label>CPF: {{dados.cpf}}</label>
         <input type="text" v-model="dados.cpf" placeholder="111.111.111-11" name="cpf" size="14" maxlength="14">     
      </table>
    </div>
  </div>
</div>
</template>

<script>

import btnVoltar from '../btnVoltar';

export default {
  components: { btnVoltar },

  data()
  {
    return {
      dados:
      {
        nome: '',
        sobrenome: '',
        nascimento: '',
        estado: '',
        cep: '',
        rg: '',
        cpf: ''
      }
    }
  }
}
</script>

<style scoped>

.dados {
   display: flex;
   flex-direction: column;
}

h1 {
    color:  #333;
    font-weight: 500;
    text-align: center;
    text-shadow: 2px 1px white;
}

h2 {
  text-align: center;
  color: #333;
}

.p1 {
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    border: 2px solid #4CB8C4;
    padding: 19px 100px;
    width: 60%;
    outline: none;
    color: #4CB8C4;
    border-radius: 24px;
    transition: 0.25s;
    cursor: pointer;
}
</style>