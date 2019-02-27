<template>
   <div class="container">
      <h2 class="titulo">{{ sobre }}</h2>

      <p><b>INGRESSOS</b> é um sistema de venda de ingressos feito pelos alunos da disciplina de Engenharia de Software, seguindo o método 'Scrum'.</p>
   </div>
</template>

<script>

export default {
   name: 'sobre',

   data: function()
   {
      return {
         sobre: 'SOBRE'
      }
   }
}

</script>

<style scoped>

b { color: #2a5a8c; }

</style>