<template>
  <div class="container">    
   <form class="box" method="post">
    <h1>LOGIN CLIENTE</h1>
      <input type="text" name="" placeholder="Nome">
      <input type="password" name="" placeholder="Senha">
      <input type="submit" name="" value="Entrar">
   </form>

   <btnVoltar></btnVoltar>
  </div>
</template>

<script>

import btnVoltar from './btnVoltar';

  export default {
    components: { btnVoltar }
  }

</script>

<style>
  .box {
    width: 30%;
    padding: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);    
    text-align: center;
  }
  .box h1 {
     color: #333;
     font-weight: 500;
  }
  .box input[type = "text"], .box input[type ="password"] {
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #516395;
    padding: 14px 10px;
    width: 100%;
    outline: none;
    border-radius: 24px;
    transition: 0.25s;
  }

  .box input[type = "text"], .box input[type ="password"] {
    width: 100%;
    border-color: #333;
  }

  .box input[type = "submit"] {
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
  .box input[type = "submit"]:hover {
    background: #4CB8C4;
  }
</style>