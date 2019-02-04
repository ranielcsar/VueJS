<template>
   <canvas width="850" height="590" class="canvas"></canvas>
</template>

<script>
   
export default {
   props: { x: Number, y: Number },

   methods:
   {
      draw()
      {
         this.lapis.clearRect(0, 0, 850, 590)
         this.lapis.beginPath();
         this.quadrado();
      },

      quadrado()
      {
         this.lapis.fillStyle = "#07fdb5";
         this.lapis.fillRect(this.x, this.y, 50, 50);
      }
   },

   mounted()
   {
      this.lapis = this.$el.getContext('2d');

      setInterval(this.draw, 5);
   }
}

</script>

<style scoped>

.canvas { 
   background-color: #2d3030;
   margin: 0 15%;
}

</style>