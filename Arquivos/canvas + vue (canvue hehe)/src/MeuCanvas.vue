<template>
   <div class="meu-canvas-wrapper">
      <canvas ref="meu-canvas"></canvas>
      <slot></slot>
   </div>
</template>

<script>
   export default {
      data()
      {
         return {
            provider: {
               context: null
            }
         }
      },

      provide()
      {
         return {
            provider: this.provider
         }
      },

      mounted()
      {
         this.provider.context = this.$refs['meu-canvas'].getContext('2d')

         this.$refs['meu-canvas'].width = this.$refs['meu-canvas'].parentElement.clientWidth
         this.$refs['meu-canvas'].height = this.$refs['meu-canvas'].parentElement.clientHeight
      }
   }
</script>