<template>
   <div class="p2 container">
   <!-- ENDEREÇO -->
      <legend><h2>ENDEREÇO</h2></legend> 
      <table class="dados">
       <label>Rua: {{dados.rua}}</label>
       <input v-model="dados.rua" type="text" placeholder="Rua">
       
       <label>Número: </label>     
      <input v-model="dados.numero" type="text" name="numero" size="4">
      
      <label>Bairro: </label>
      <input v-model="dados.bairro" type="text" name="bairro" placeholder="Bairro">
      
      <label>Estado: </label>
      <select v-model="dados.estado" required>
         <option value="">Escolha um Estado</option> 
         <option value="pe">Pernambuco</option> 
         <option value="pi">Piauí</option> 
         <option value="rj">Rio de Janeiro</option> 
         <option value="rn">Rio Grande do Norte</option> 
         <option value="ro">Rondônia</option> 
         <option value="rs">Rio Grande do Sul</option> 
         <option value="rr">Roraima</option> 
         <option value="sc">Santa Catarina</option> 
         <option value="se">Sergipe</option> 
         <option value="sp">São Paulo</option> 
         <option value="to">Tocantins</option> 
        </select>
        
         <label for="cidade">Cidade:</label>
         <input type="text" name="cidade" v-model="dados.cidade" placeholder="Cidade">
         
         <label for="cep">CEP:</label>
         <input type="text" v-model="dados.cep" name="cep" size="8" maxlength="8">
         
       </table>
 </div>
</template>

<script>

export default {
   data()
   {
      return {
         dados:
         {
            rua: '',
            numero: '',
            bairro: '',
            estado: '',
            cidade: '',
            cep: ''
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

.p2 {
   border: 0;
   background: none;
   display: block;
   margin: 20px auto;
   border: 2px solid #4CB8C4;
   padding: 19px 100px;
   width: 50%;
   outline: none;
   color: #4CB8C4;
   border-radius: 24px;
   transition: 0.25s;
   cursor: pointer;
}

</style>