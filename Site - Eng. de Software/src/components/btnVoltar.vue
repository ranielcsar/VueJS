<template>
   <div class="voltar">
     <router-link class="link" :to="{ path: '/'}">
       <h6>VOLTAR PARA A PÁGINA INICIAL</h6>
     </router-link>
   </div>
</template>

<style>

.voltar {
  margin: 1em 0;  
  background-color: transparent;
  width: max-content;
  border: 1px solid gray;
  border-radius: 7px;
}
  .voltar h6 {
    padding: 7px;
    text-align: center;
    margin: 1px 0;
    text-decoration: none;

    color: gray;
  }

  .voltar .link:hover {
    text-decoration: none;
  }

  .voltar h6:hover {
    color: black;
  }

</style>