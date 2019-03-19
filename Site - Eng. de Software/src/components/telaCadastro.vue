<template>
   <div>
      <dadosPessoais></dadosPessoais>
      <endereco></endereco>
      <dadosLogin></dadosLogin>
   </div>
</template>

<script>

import dadosPessoais from './cadastro/pessoais.vue'
import endereco from './cadastro/endereco.vue'
import dadosLogin from './cadastro/dadosLogin.vue'

export default {
   name: 'telaCadastro',

   components:
   {
      dadosPessoais,
      endereco,
      dadosLogin
   }   
}

</script>

<style scoped>

</style>