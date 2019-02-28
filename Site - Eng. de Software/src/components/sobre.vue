<template>
   <div class="container">

    <btnVoltar></btnVoltar>

      <h2 class="titulo">SOBRE</h2>

         <p><b>INGRESSOS</b> é um sistema de venda de ingressos feito pelos alunos da disciplina de Engenharia de Software, seguindo o método 'Scrum'. Usando a ferramente online 'Trello' conseguimos nos organizar melhor. O 'Trello' unido à metodologia do 'Scrum', faz com que a colaboração em equipe seja melhor na hora de desenvolver alguma atividade.</p>

      <h2 class="titulo">GRUPO</h2>
         <div class="row">
            <div class="col-4">
               <div style="width: 18em">
                 <img class="card-img-top perfil" src="../perfil.jpg" alt="Card image cap">
                 <div class="card-body">
                   <p class="card-text text-center">RANIEL</p>
                   <h6 class="card-subtitle mb-2 text-muted">Graduando no curso de Licenciatura em Ciências da Computação pelo IF Baiano, Campus Senhor do Bonfim - BA.</h6>
                 </div>
               </div>
            </div>

            <div class="col-4">
               <div style="width: 18em">
                 <img class="card-img-top perfil" src="../perfil.jpg" alt="Card image cap">
                 <div class="card-body">
                   <p class="card-text text-center">GLEYCIN</p>
                   <h6 class="card-subtitle mb-2 text-muted">Graduando no curso de Licenciatura em Ciências da Computação pelo IF Baiano, Campus Senhor do Bonfim - BA.</h6>
                 </div>
               </div>
            </div>

            <div class="col-4">
               <div style="width: 18em">
                 <img class="card-img-top perfil" src="../perfil.jpg" alt="Card image cap">
                 <div class="card-body">
                   <p class="card-text text-center">JERSIVALS</p>
                   <h6 class="card-subtitle mb-2 text-muted">Graduando no curso de Licenciatura em Ciências da Computação pelo IF Baiano, Campus Senhor do Bonfim - BA.</h6>
                 </div>
               </div>
            </div>
         </div>

   </div>
</template>

<script type="text/javascript">
  
  import btnVoltar from './btnVoltar';

  export default {
    components: { btnVoltar }
  }

</script>

<style scoped>

b { color: #2a5a8c; }

.text-muted {
   text-align: justify;
}

</style>