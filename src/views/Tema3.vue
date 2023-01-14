<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Métodos de valoración de inventarios

    .row
      .col-1
        img(src="@/assets/curso/temas/tema3/g1.svg", alt="Texto de la imagen").banner-principal-decorativo-3 

      .col-11
        p La evaluación de los inventarios es un proceso determinado y formulado por las personas encargadas del control de la empresa. El diseño de la valoración permitirá obtener el valor real en términos monetarios de la cantidad total de cada uno de los productos que allí se encuentran acaparados. Existen tres métodos principales para el planteamiento de la evaluación: identificación específica, Primeras en Entrar, Primeras en Salir (PEPS o FIFO), Método de costo promedio y Últimas en Entrar Primeras en Salir (LIFO o UEPS). A continuación, se tratará a profundidad el tema en el siguiente video:
        
      
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption VIDEO

    
    .row.mt-5
      h3 Tipos de métodos

      p La Norma Internacional de Contabilidad 2 (NIC 2) contempla una serie de ítems a tener en cuenta a la hora de realizar los procesos contables y los cálculos de los costos de inventarios, y a su vez determina siete (7) métodos de valoración de inventarios, aunque la normatividad colombiana solo tiene en cuenta cuatro de ellos.

      p Características de los tipos de métodos de valoración de inventarios

    .row.justify-content-center.mt-5
      .col-lg-8 
        .tarjeta--container.row.mb-3
          .col-md-3.tarjeta.color-primario.pl-2
            .row.justify-content-center.mb-2
              .col-lg-3
                figure
              br
              h3.text-center Identificación específica:
              
          
          .col-md-3.tarjeta.color-acento-botones-neutro.p-2
            .row.justify-content-center.mb-2
              .col-lg-3
                figure              
              img(width="80" height="80" src="@/assets/curso/temas/tema3/p1.svg", alt="Texto de la imagen" )
              
          
          .col-md-6.tarjeta.color-acento-botones-neutro.col-md-3.tarjeta.color-acento-botones-neutro.text-white.p-7
            .row.justify-content-center.mb-2
              .col-lg-6
                figure
            p.texto-color-negro.mb-0 <i class="fas fa-angle-right"></i> Fabricación de pocas unidades. 
            p.texto-color-negro.mb-0 <i class="fas fa-angle-right"></i> Costo de producción alto.
            p.texto-color-negro.mb-0 <i class="fas fa-angle-right"></i> Sus características no son intercambiables entre sí.

            
        .tarjeta--container.row.mb-3
          .col-md-3.tarjeta.color-primario.pl-2
            .row.justify-content-center.mb-2
              .col-lg-3
                figure
              br
              h3.text-center PEP o FIFO:  
              
          
          .col-md-3.tarjeta.color-acento-botones-neutro.p-2
            .row.justify-content-center.mb-2
              .col-lg-3
                figure              
              img(width="80" height="80" src="@/assets/curso/temas/tema3/p2.svg", alt="Texto de la imagen" )

          .col-md-6.tarjeta.color-acento-botones-neutro.col-md-3.tarjeta.color-acento-botones-neutro.text-white.p-7
            .row.justify-content-center.mb-2
              .col-lg-6
                figure
                
              p.texto-color-negro.mb-0 <i class="fas fa-angle-right"></i> Primeras mercancías adquiridas o fabricadas, serán las primeras en ser vendidas.
              p.texto-color-negro.mb-0 <i class="fas fa-angle-right"></i> El inventario final estará valorado con los últimos precios. 
              
            
        .tarjeta--container.row.mb-3
          .col-md-3.tarjeta.color-primario.pl-2
            .row.justify-content-center.mb-2
              .col-lg-3
                figure
              br
              h3.text-center Promedio ponderado:
          
          .col-md-3.tarjeta.color-acento-botones-neutro.p-2
            .row.justify-content-center.mb-2
              .col-lg-3
                figure              
              img(width="80" height="80" src="@/assets/curso/temas/tema3/p3.svg", alt="Texto de la imagen")
              
          
          .col-md-6.tarjeta.color-acento-botones-neutro.col-md-3.tarjeta.color-acento-botones-neutro.text-white.p-7
            .row.justify-content-center.mb-2
              .col-lg-6
                figure 

            p.texto-color-negro.mb-0 <i class="fas fa-angle-right"></i> Método de valoración más utilizado.
            p.texto-color-negro.mb-0 <i class="fas fa-angle-right"></i> Promedia costos antiguos y actuales.
            p.texto-color-negro.mb-0 <i class="fas fa-angle-right"></i> Costo único para cada referencia.
            
        .tarjeta--container.row.mb-3
          .col-md-3.tarjeta.color-primario.pl-2
            .row.justify-content-center.mb-2
              .col-lg-3
                figure
              br  
              h3.text-center UEPS o LIFO:
          
          .col-md-3.tarjeta.color-acento-botones-neutro.p-2
            .row.justify-content-center.mb-2
              .col-lg-3
                figure              
              img(width="80" height="80" src="@/assets/curso/temas/tema3/p4.svg", alt="Texto de la imagen")
              
          
          .col-md-6.tarjeta.color-acento-botones-neutro.col-md-3.tarjeta.color-acento-botones-neutro.text-white.p-7
            .row.justify-content-center.mb-2
              .col-lg-6
                figure
                
            p.texto-color-negro.mb-0 <i class="fas fa-angle-right"></i> Últimos costos son los primeros en salir. 
            p.texto-color-negro.mb-0 <i class="fas fa-angle-right"></i> Genera costos altos.
            p.texto-color-negro.mb-0 <i class="fas fa-angle-right"></i> Tiene como ventaja el pagar menos impuestos.
            p.texto-color-negro.mb-0 <i class="fas fa-angle-right"></i> Es una metodología prohibida por la NIC 2.
             
      .col-lg-4 
        figure
          img(src="@/assets/curso/temas/tema3/g2.svg", alt="Texto de la imagen").banner-principal-decorativo-3
    
    .row.mt-5
      h3 Metodologías para la medición de existencias y el manejo de inventarios

    .row
      .col-lg-3
        img(src="@/assets/curso/temas/tema3/g3.png", alt="Texto de la imagen")
      .col-lg-9
        p La gestión logística y de inventarios juega un papel fundamental al interior de la empresa, inclusive en algunas el control de los mismos es prioritario debido a que desde allí se logra optimizar una serie de recursos representan costos monetarios, al tiempo que reducirán los desperdicios de materias primas, productos y dinero. Cuando se desea aumentar la productividad se debe recurrir al uso de tecnologías, las cuales nos ayudarán a automatizar los procesos y brindan información relevante como una serie de indicadores que evidencian cuáles han sido los comportamientos en temas de entradas y salidas de mercancías. 
        | La medición de existencias las podemos llevar a cabo con metodologías de cálculo o #[i softwar] que tengan en cuenta los volúmenes de mercancía de acuerdo a los inventarios, la ocupación del lugar donde se almacenan las mercancías y los costos operacionales. Al momento de emplear este tipo de tecnologías o metodologías, será mucho más fácil hallar los cálculos que sean necesarios para el manejo y medición de los inventarios, que permitan analizar toda esta información para llegar a tomar decisiones.

    .row.mt-5
      h3 Criterios de valoración

      p Al momento de realizar una valoración de los inventarios se deben tener en cuenta unos criterios que indican cómo realizar este procedimiento y cuál se ajusta mejor a la actividad de la empresa:

    .row.center
      .tabla-a.color-acento-contenido 
        table
          thead
            tr
              th Sistema de inventario periódico
              th Sistema de inventario continuo
          tbody
            tr
              td.col-lg-12 
                .tarjeta-np.tarjeta-slide.izquierda.color-secundario-2(@mouseover="indicadorTarjetaSlide = false")
                  .tarjeta-slide__contenedor
                    .tarjeta-slide__img
                      br
                      br
                      br
                      img(width="150" height="150" src="@/assets/curso/temas/tema3/h1.svg", alt="Texto de la imagen")
                    .tarjeta-slide__contenido
                      figure 
                        img(src="@/assets/curso/temas/tema3/t3-3-p1.png", alt="Texto de la imagen")
              td.col-lg-12
                .tarjeta-np.tarjeta-slide.derecha.color-secundario-2(@mouseover="indicadorTarjetaSlide = false")
                    .tarjeta-slide__contenedor
                      .tarjeta-slide__img
                        br
                        br
                        br
                        img(width="150" height="150" src="@/assets/curso/temas/tema3/h2.svg", alt="Texto de la imagen")
                      .tarjeta-slide__contenido
                        figure 
                          img(src="@/assets/curso/temas/tema3/t3-3-p2.png", alt="Texto de la imagen")
          tfoot
            tr
              td.col-lg-12 
                  p Cuando hacemos referencia al sistema de revisión periódica, se refiere a esa vigilancia que se le realiza a los artículos o materias primas, las cuales se les practicarán en tiempos equivalentes, ya sea semana a semana, mes a mes, trimestre a trimestre, etc. Lo que quiere decir que, hasta no terminar ese lapso, no se podrá realizar nuevos pedidos a proveedores.
              td.col-lg-12
                  p En este tipo de revisión, la inspección de las mercancías se realiza de manera permanente y seguida. Cada vez que se tiene información de una compra o de una orden de producción en el #[i software], inmediatamente se debe realizar la revisión del inventario.

</template>

<script>
import Separador from 'ecored-base-pkg/src/components/Separador.vue'
export default {
  name: 'Tema3',
  components: { Separador },
  data: () => ({
    indicadorTarjetaSlide: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
