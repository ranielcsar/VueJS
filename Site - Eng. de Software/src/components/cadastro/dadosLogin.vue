<template>
  <div class="p3">

    <!-- DADOS DE LOGIN -->
    <legend><h2>LOGIN</h2></legend>
    <table class="dados">
      <label for="email">E-mail: </label> 
      <input type="text" name="email" placeholder="Email">
      
      <label for="login">Login de usuário: </label>
     <input type="text" name="login" placeholder="Login">
     
     <label for="pass">Senha: </label>
     <input type="password" name="pass" placeholder="Senha">
      
      <label for="passconfirm">Confirme a senha: </label>
      <input type="password" name="passconfirm" placeholder="Confirma senha">
      <br />  
      <button type="submit" value="Enviar">Enviar</button>
    </table>
    </div>
</template>

<style scoped>

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

.dados {
   display: flex;
   flex-direction: column;
}

.p3 {
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

button {
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #4CB8C4;
    padding: 14px 40px;
    width: 50%;
    outline: none;
    color: #333;
    border-radius: 24px;
    transition: 0.25s;
    cursor: pointer;
  }
  button:hover {
     background: #3c939c;
     color: white;
  }
</style>