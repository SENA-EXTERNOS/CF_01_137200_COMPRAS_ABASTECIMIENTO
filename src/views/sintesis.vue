<template lang="pug">
.curso-main-container.pb-3
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-1
      // .col-md-1
      //  figure
      //    img(width="12" height="15" src="@/assets/curso/temas/sintasis/rectangulo.png", alt="alt")
      .col-md-9
        h3.titulo-tercero Compras y abastecimiento
        p Estimado aprendiz, lo invitamos a ver el mapa conceptual donde encontrará una síntesis de todos los elementos desarrollados en este componente formativo acerca de la temática Inventario y sistemas de gestión de información.
      //.col-md-2
      //  figure
      //    img(src="@/assets/curso/temas/sintasis/icosena.png", alt="alt")
    
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintasis/sintesis.svg", alt="alt")

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
