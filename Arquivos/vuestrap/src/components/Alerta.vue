<template>
   <div>
      <b-alert show v-for="variante in variantes" :variant="variante.valor" class="teste">
         Alerta {{ variante.nome }}.
      </b-alert>
   </div>
</template>

<script>
   
   export default {

      data: function()
      {
         return {
            variantes:
            [
               { nome: 'primário',   valor: 'primary'   },
               { nome: 'secundário', valor: 'secondary' },
               { nome: 'de sucesso', valor: 'success'   },
               { nome: 'de erro',    valor: 'danger'    },
               { nome: 'de aviso',   valor: 'warning'   },
               { nome: 'padrão',     valor: 'info'      },
               { nome: 'claro',      valor: 'light'     }, 
               { nome: 'escuro',     valor: 'dark'      }
            ]            
         }
      }
   }

</script>

<style>

.teste {
   transition: 300ms;
}

   .teste:hover {
      transform: scale(1.01);
   }

</style>
