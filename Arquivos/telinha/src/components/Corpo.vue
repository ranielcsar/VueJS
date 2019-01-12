<template>
  <div class="news">
    <img :src= "imagem" class="foto">
    <div><p>{{ descricao }}</p></div>
    <a :href= "link">Saiba mais...</a>
  </div>  
</template>

<script type="text/javascript">

export default {
  props: [ 
    'imagem',
    'descricao',
    'link'
  ],

  data()
  {
    this.imagem = 'https://homemaranha60s.files.wordpress.com/2012/07/4.jpg',
    this.descricao = 'Homem-aranha 60s',
    this.link = '#'
  }  
}

</script>

<style type="text/css">
   
.news {
   margin: 10px 2%;   
   float: left;
   width: calc(100% - 15px);   
   border: 1px solid black;   
   border-radius: 0.5em;
   overflow: auto;
}

.news a {
   padding: 10px;
   text-decoration: none;
}  

.news p {
   padding: 0.5em;
   text-align: center;
}

.foto {    
    width: 100%;    
    height: auto;        
}

    .foto:after,
    .foto:before
    { content: ""; clear: both; }
</style>
