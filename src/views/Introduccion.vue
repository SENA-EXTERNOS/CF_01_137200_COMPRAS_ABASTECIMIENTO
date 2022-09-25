<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row
      .col-md-2
        img(src="@/assets/curso/introduccion/banner-intro.jpg", alt="")
      .col-md-10
        p Estimado aprendiz, bienvenido a este componente formativo donde apropiará conocimientos relacionados con los inventarios, la importancia de aplicarlos en las empresas, cómo formular una política de inventarios, normativas que los rigen, sistemas de reposición, métodos de control, métodos de evaluación y costos que implica la implementación de estos procesos, los cuales le permitirán a la empresa tener un control de sus productos y llevar su producción a altos estándares, brindando cumplimiento a sus clientes y productos de calidad.
        
        p.mb-5 Estos conocimientos permitirán que los colaboradores estén debidamente preparados para lo que está demandando en el mercado global en la actualidad, en lo que tiene que ver con la sistematización de los procesos, manejo de estándares de calidad, automatización e implementación de sistemas tecnológicos que brinden un mayor rendimiento. Es por ello que los empleadores deben estar atentos para capacitar a su personal para poder introducirse en las nuevas tendencias y lograr ser competitivos en el mercado.
    
    p Lo invitamos a ver el siguiente video donde encontrará una introducción a las temáticas del componente formativo.
    p.mb-5 ¡Muchos éxitos!


    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption VIDEO

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
