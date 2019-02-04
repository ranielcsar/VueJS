<template>
  <div>
    <meuCanvas :x = "x" :y = "y"/>
  </div>
</template>

<script>

import meuCanvas from './components/meuCanvas.vue';

export default {
  name: 'app',

  components: { meuCanvas },

  data() {
    return {
      x: 10,
      y: 10
    }
  },

  methods: {
    mover(evento)
    {
      switch (evento.keyCode)
      {
        case 37:
          this.x -= 3;
          break;
        case 38:
          this.y -= 3;
          break;
        case 39:
          this.x += 3;
          break;
        case 40:
          this.y += 3;
          break;
      }
    }
  },

  mounted() { addEventListener("keydown", this.mover); }
}
</script>

<style>

</style>
