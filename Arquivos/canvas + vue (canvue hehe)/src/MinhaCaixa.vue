<script>
   const larguraPixel = (porcentagem, tela) => Math.floor((tela.canvas.width / 100) * porcentagem)
   const alturaPixel = (porcentagem, tela) => Math.floor((tela.canvas.height / 100) * porcentagem)

   export default {
      inject: ['provider'],

      props:
      {
         x1: {
            type: Number,
            default: 0
         },

         y1: {
           type: Number,
           default: 0 
         },

         x2: {
            type: Number,
            default: 0
         },

         y2: {
           type: Number,
           default: 0 
         },

         valor: {
           type: Number,
           default: 0
         },

         cor: {
            type: String,
            default: '#e2e2e2'
         }
      },

      data()
      {
         return {
            caixaVelha:
            {
               x: null,               
               y: null,               
               width: null,               
               height: null               
            }
         }
      },

      computed:
      {
         calculoCaixa()
         {
            const tela = this.provider.context

            const calculos = {
               x: larguraPixel(this.x1, tela),
               y: larguraPixel(this.y1, tela),
               width: larguraPixel(this.x2 - this.x1, tela),
               height: larguraPixel(this.y2 - this.y1, tela)
            }

            this.caixaVelha = calculos
            return calculos
         }         
      },

      render()
      {
         if (!this.provider.context) return;

         const tela = this.provider.context,
         caixaVelha = this.caixaVelha,
         novaCaixa = this.calculoCaixa

         tela.beginPath();

         tela.clearRect(caixaVelha.x, caixaVelha.y, caixaVelha.width, caixaVelha.height);
         tela.clearRect(novaCaixa.x, novaCaixa.y, novaCaixa.width, novaCaixa.height);

         tela.rect(novaCaixa.x, novaCaixa.y, novaCaixa.width, novaCaixa.height);
         tela.fillStyle = this.cor;
         tela.fill();

         tela.fillStyle = 'white';
         tela.font = '28px sans-serif';
         tela.textAlign = 'center';
         tela.fillText(Math.floor(this.valor), (novaCaixa.x + (novaCaixa.width / 2)), novaCaixa.y - 14);
      }
   }
</script>