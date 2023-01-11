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
      .col-md-3
        img(src="@/assets/curso/introduccion/banner-intro.svg", alt="").banner-principal-decorativo-3
      .col-md-9
        p En el módulo formativo se apropiarán conocimientos relacionados con los inventarios, la importancia de aplicarlos en las empresas, cómo formular una política de inventarios, normativas que los rigen, sistemas de reposición, métodos de control, métodos de evaluación y costos que implica la implementación de estos procesos, los cuales le permitirán a la empresa tener un control de sus productos y llevar su producción a altos estándares, brindando cumplimiento a sus clientes y productos de calidad.

        .cajonAmarillo.bgr-tarjeta1-tema1.p-4.mt-3
          p(data-aos="fade-down") El método Delphi consiste en reunir a expertos de diferentes disciplinas para lograr dar respuesta o solucionar un problema determinado, a través de la lluvia de ideas que se genere en esa reunión.


    .row.mt-5
      p Estimado aprendiz lo invitamos a enfocarse en adquirir los conocimientos adecuados y en la implementación de las técnicas y procesos abordados durante la formación, esto le permitirá adoptar habilidades de manejo de inventarios al interior de las organizaciones, por lo cual se debe acoger al componente formativo desde la óptica del auto aprendizaje.

      p En el siguiente vídeo de introducción podrá conocer acerca de lo que encontrará durante esta etapa formativa. Deseamos que pueda culminar de manera satisfactoria este componente. ¡Muchos éxitos!




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
