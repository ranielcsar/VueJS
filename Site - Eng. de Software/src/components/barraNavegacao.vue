<template>

   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Ingresso Rápido</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">

         <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
               <router-link class="nav-link" to="/">Página inicial <span class="sr-only">(current)</span></router-link>
             </li>

             <li class="nav-item">
               <router-link class="nav-link" to="/caixinha">Caixinha de ingressos</router-link>
             </li>

             <li class="nav-item">
               <router-link class="nav-link" to="/sobre">Sobre</router-link>
             </li>          
         </ul>

         <ul class="navbar-nav">
            <li class="nav-item">
               <router-link class="nav-link" to="">LOGIN</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="">REGISTRAR</router-link>
            </li>
        </ul>

      </div>
   </nav>
</template>

<style scoped>

nav {
   margin-bottom: 3%;
}

</style>