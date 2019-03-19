<template>
   <nav class="cabecalho">
      <div class="divTitulo">        
        <a href="#"><h1 class="titulo">INGRESSO</h1></a>

        <div class="menu">
          <ul class="container">
            <li class="menuItem">
              <router-link class="" :to="{ path: '/'}"><span>EVENTOS</span></router-link>
            </li>

            <li class="menuItem">
              <router-link class="" :to="{ path: 'caixinha'}"><span>CAIXINHA DE INGRESSOS</span></router-link>
            </li>

            <li class="menuItem">
              <router-link class="" :to="{ path: 'sobre'}"><span>SOBRE</span></router-link>
            </li>
          </ul>         
        </div>
      </div>
    </nav>
</template>

<script type="text/javascript">

import Caixinha from './caixinha';

export default {  

  components: { Caixinha }
}

</script>

<style scoped>

a {
  text-decoration: none;
}

li {
  list-style: none;
}

/* TITULO */
.divTitulo {
  width: 100%;
  background-image: linear-gradient(260deg, #4CB8C4, #516395);
  padding: 30px;   
}

.titulo {
  font-size: 9vh;
  color: #e0f3fb;
  text-align: center;
  margin: 0; 
}


/* MENU */
.menuItem {
  display: inline-block;
  padding: 30px 0 0 0;  
  margin-left: 2.5%;
  height: 50px;  
}

.menuItem span {
  color: white;
}
  .menuItem span:hover {
    text-decoration: underline;
  }


.container {
  margin-left: 31%;
  margin-right: auto;
}

</style>