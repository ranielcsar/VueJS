<template>
   <div class="view-carrosel">
      <transition-group class="carrosel" tag="div">
        <div v-for="slide in slides" :key="slide.id" class="slide">
          <img class="slide__image" :src="slide.imagem">          
        </div>
      </transition-group>
   </div>
</template>

<script>
   
export default {
  name: 'carrossel',

  data: function() 
  {
     return {
       slides:
       [
          { imagem: 'http://www.kidzherald.com/images/spectrum/55496780.jpg', id: 1 },
          { imagem: 'http://2.bp.blogspot.com/-iHDkaOnk3s4/U1x_Cb_xSDI/AAAAAAAAALo/8lvOee0wX1A/s1600/1.jpg', id: 2 },
          { imagem: 'http://www.rockstar-gym.com/media/images/slides/cd-website-banner-01-1-.jpg', id: 3 }
       ]
     }
  },

  methods:
  {
     next: function()
     {
        const primeiro = this.slides.shift();
        this.slides = this.slides.concat(primeiro);
     },

     previous: function()
     {
        const ultimo = this.slides.pop();
        this.slides = [ultimo].concat(this.slides);
     }
  },

  created: function()
  {
    setInterval(this.next, 4000);
  }
}  

</script>

<style scoped>

.carrosel {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  width: 100%;
  min-height: 25em;
  margin-top: 0.1em;

  z-index: 0;  
}

.carrosel-view {  
  display: flex;
  flex-direction: column;
  align-items: center;
}

.slide {
  flex: 0 0 20em;
  height: 20em;
  margin: 1em;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: transform 0.7s ease-in-out;
}

.slide:first-of-type {
  opacity: 0;
}

.slide:last-of-type {
  opacity: 0;
}

.slide__image {
  width: 91.5em;
  height: auto;
  display: flex;  
}

</style>