<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Inventarios

      Separador

    p En las organizaciones el concepto de los inventarios está asociado con la planificación estratégica y la logística. Uno de los procesos a los que se les debe brindar mayor relevancia e importancia es al control y manejo de inventarios, ya que si no se tiene un buen monitoreo de las materias primas fácilmente los procesos de producción no van a marchar al ritmo que se tiene planeado para cumplir con la demanda. Otro de los inconvenientes que se presentan a diario en las empresas, es que no hacen el correcto uso de los inventarios, en muchas ocasiones se quedan con los productos que son menormente adquiridos por los clientes y se agotan los más vendidos. Los inventarios se realizan tanto para materias primas como para productos terminados.

    p Los inventarios se pueden clasificar dependiendo de sus fases, estos son:

    SlyderC.mb-5(:datos="datosSlyder")

    p En el proceso de inventarios se tienen en cuenta ciertos criterios que deben ser considerados para lograr una correcta gestión:

    .row
      .col-md-4
        figure
          img(src="@/assets/template/acordion1.svg", alt="alt")
      .col-md-8
        AcordionA(tipo="b" clase-tarjeta="tarjeta color-primario")
          .row(titulo="Demanda")
            .col-md-11.mb-4.mb-md-0
              p Es la proyección que se realiza de manera probabilística de la cantidad de artículos o servicios que se planean vender.
        AcordionA(tipo="b" clase-tarjeta="tarjeta color-primario")
          .row(titulo="Tiempo")
            .col-md-11.mb-4.mb-md-0
              p Es el cálculo en cuanto a tiempos desde que se tiene la necesidad de adquirir la mercancía hasta que llega a la empresa. También aplica para el proceso de producción y se da desde el momento que se brinda una orden, hasta el momento en que se da inicio a la misma.
        AcordionA(tipo="b" clase-tarjeta="tarjeta color-primario")
          .row(titulo="Costos")
            .col-md-11.mb-4.mb-md-0
              p Los inventarios representan una serie de gastos para su manejo, es aquí donde se tienen en cuenta costos operativos como lo son los almacenes, softwares, mantenimientos, penalizaciones adquisiciones de materias primas, etc.
  
    Separador

    #t_1_1.titulo-segundo.color-black
      h2 1.1  Política de inventarios

</template>

<script>
import Separador from 'ecored-base-pkg/src/components/Separador.vue'
import ImagenInfografica from 'ecored-base-pkg/src/components/ImagenInfografica.vue'
export default {
  name: 'Tema1',
  components: { Separador, ImagenInfografica },
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Materias primas',
        texto:
          'Son todos los materiales que se utilizan para la fabricación del producto.',
        imagen: require('@/assets/template/slider1-1-materias-primas.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Producto en proceso',
        texto:
          'Fases por las que es sometido el producto en su proceso de producción.',
        imagen: require('@/assets/template/slider1-2-producto-proceso.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Producto terminado',
        texto:
          'Artículo listo para ser comercializado y entregado al cliente final.',
        imagen: require('@/assets/template/slider1-3-producto-terminado.svg'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
