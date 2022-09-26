<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Sintesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.justify-content-center
        .col-lg-8.sm-8
          .titulo-sexto.color-acento-contenido
            b Compras y abastecimiento
            p Síntesis: Inventario y sistemas de gestión de información

        .col-lg-2
          figure
          img(src="@/assets/curso/temas/sintasis/g4.svg" width='89,61' height='86,7')

    .row.justify-content-center
      .col-lg-10.mb-5
        br
        p Estimado aprendiz, lo invitamos a ver el mapa conceptual donde encontrará una síntesis de todos los elementos desarrollados en este componente formativo acerca de la temática Inventario y sistemas de gestión de información.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintasis/s1.png", alt="alt")

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
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
