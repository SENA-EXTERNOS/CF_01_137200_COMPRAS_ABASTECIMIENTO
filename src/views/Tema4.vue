<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Costos de inventarios

    .row 
      .col-lg-3
        img(src="@/assets/curso/temas/tema4/g1.svg", alt="Texto de la imagen").banner-principal-decorativo-3
      .col-lg-9
        p Anteriormente evidenciamos la importancia de realizar una buena gestión de inventarios para mejorar la producción y rentabilidad de una empresa, pero también debemos conocer que el realizar este tipo de procesos conlleva una serie de costos que deben de ser aplicados en cada una de las fases, bien sea en la adquisición de materias primas, almacenamiento o producción, entre otros. Estos se dividen en dos: costos fijos y costos variables. Es por esto que se debe hacer una buena planificación y estrategia en los inventarios para lograr minimizar todos los gastos que esta metodología proporciona. 

    Separador
    
    #t_4_1.titulo-segundo.color-primario
      h2 4.1.	Tipos de costos

    p Dentro de los tipos de costos tenemos: adquisición y aprovisionamiento, mantenimiento y almacenamiento, y costos administrativos.

    .row.mt-5
      TabsC.color-secundario
        .py-3.py-md-4(titulo="Costos de aprovisionamiento")
          .row.justify-content-around.align-items-center
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema4/g2.svg', alt='Texto que describa la imagen')
            
            .col-md-8.mb-4.mb-md-0
              h4 Costos de aprovisionamiento:
              p.mb-0 Son todos los costos INDIRECTOS del producto, dentro de los cuales están actividades de compras de mercancías, insumos y materias primas que son necesarias para la fase productiva. 
              | También se tienen en cuenta procesos como las órdenes de pedidos, selección de proveedores, negociaciones, recepción de pedidos, organización de las mercancías y control del inventario. 
              | Esto quiere decir que los costes de aprovisionamiento son todos los gastos de las gestiones que se realizan para poder producir un producto. 
              | Por ejemplo: las oficinas, maquinarias, gastos de personal que laboran en el área, consumo de energía, agua, internet, etc.

                
        .py-3.py-md-4(titulo="Costos de mantenimiento y almacenamiento")
          .row.justify-content-around.align-items-center
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema4/g3.svg', alt='Texto que describa la imagen')
                
            .col-md-8.mb-4.mb-md-0
              h4 Costos de mantenimiento y almacenamiento:
              p.mb-0 Los costos de almacenamiento son todos los gastos que conlleva el tener en funcionamiento las bodegas para almacenar los productos, mercancías, insumos y materias primas.
              | Estos costos se pueden dividir en: 
              | Infraestructura: uno de ellos puede ser la renta del almacén o bodega
              | Instalaciones: por ejemplo, los carros elevadores de mercancía.
              | Mantenimiento del stock: dentro de este se encuentran los costos del stock y el costo de los seguros.
              | Riesgos: están relacionados con el daño, extravío y hurto de mercancías.

        
        .py-3.py-md-4(titulo="Costos por falta de existencias")
          .row.justify-content-around.align-items-center
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema4/g4.svg', alt='Texto que describa la imagen')
                
            .col-md-8.mb-4.mb-md-0
              h4 Costos por falta de existencias: 
              p.mb-0 Este tipo de costos sucede cuando la empresa recibe un pedido y no tiene dentro de su inventario el producto o la mercancía para cumplir con el mismo. Es ahí donde se decide que ocurrió un costo por pérdida de venta. Este costo se deduce de la ganancia que había sido generada por dicho pedido pero que no ingresó a caja por la cancelación del mismo.
              | Dentro de este también se encuentran casos como el de pedidos retrasados los cuales generan unos costos adicionales debido a que si bien la venta sigue en pie, la demora en la entrega va a generar unos gastos adicionales de personal, transporte, entre otros.

    Separador
    
    #t_4_2.titulo-segundo.color-primario
      h2 4.2.	Costos relacionados con el #[i stock]

    .row 
      .col-lg-4
        img(src='@/assets/curso/temas/tema4/g5.svg', alt='Texto que describa la imagen')
      .col-lg-8
        .cajon-b.color-primario.p-3.mb-5
          p.mb-0 Para lograr una buena gestión del #[i stock] y los inventarios es importante que las empresas tengan en cuenta y planifiquen los costos que este proceso conlleva. A esta fase hay que aportar todos los conocimientos, requerimiento e inversiones debido a que dicha estrategia ayudará a las empresas a ser mucho más productivas y competitivas en el mercado, logrando optimizar muchos recursos que al final van a representar utilidades. Los costos que se deben tener en cuenta son los de: adquisición, pedido, almacenamiento y ruptura.

    Separador
    
    #t_4_3.titulo-segundo.color-primario
      h2 4.3.	Costes de pedidos

    .bloque-texto-b.color-acento-contenido.p-3 
      .bloque-texto-b__texto
        p Los costes de los pedidos abarcan una serie de factores que están asociados a todo el proceso de adquisición de materias primas, almacenamiento, producción y venta. Este tipo de sistema se da cuando un determinado cliente ordena un pedido con ciertas características y cantidades. 
    br

    .row
      .col-lg-1
      .col-lg-10
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema4/mini.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small Para iniciar el cálculo de costes de los pedidos se debe empezar con los costos de producción directos e indirectos, donde la primera parte hace referencia a las materias primas, insumos y mano de obra. Y los costos indirectos son todos los gastos de aprovisionamiento, donde se hacía referencia a las gestiones realizadas y pago de servicios públicos. 
                  p.text-small Hacer click en ver la hoja de pedido
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_4.docx')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
      .col-lg-1

    Separador
    
    #t_4_4.titulo-segundo.color-primario
      h2 4.4.	Precio de adquisición

    .bloque-texto-b.color-texto-anexo.p-4
      p El precio de adquisición es el valor que se le determina a una compra. Allí es importante calcular debidamente el precio de la mercancía para dar una valoración acertada a dicha adquisición. ¿Por qué se hace énfasis en esto? Lo que sucede es que a las compras se les aplica unos descuentos, gastos, impuestos y otros costos que deben ser tenidos en cuenta en la valoración.
      | El primer dato a tener en cuenta es el del valor de la mercancía, el cual es asignado y negociado directamente con el proveedor. Sin embargo, el valor de adquisición comprende otra serie de factores a tener en cuenta, entre los cuales se encuentran una serie de descuentos aplicados.

      .row.justify-content-center 
        .col-lg-12.mb-5
          figure
            img(src="@/assets/curso/temas/tema4/rueda.png", alt="alt")

    .row
      .col-lg-1
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema4/mini1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  //img(src="@/assets/curso/temas/tema4/flechas.png")
                  p.text-small Para iniciar el cálculo de costes de los pedidos se debe empezar con los costos de producción directos e indirectos, donde la primera parte hace referencia a las materias primas, insumos y mano de obra. Y los costos indirectos son todos los gastos de aprovisionamiento, donde se hacía referencia a las gestiones realizadas y pago de servicios públicos. 
                  p.text-small Si desea profundizar en los Tipos de descuentos, descarga el siguiente documento:
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_5.docx')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
      .col-lg-1  

    Separador
    
    #t_4_5.titulo-segundo.color-primario
      h2 4.5.	Métodos de costeo

    .row 
      .col-lg-1
        img(src='@/assets/curso/temas/tema4/g7.svg', alt='Texto que describa la imagen')
      .col-lg-11
        .cajon-b.color-primario.p-3.mb-5
          p.mb-0 Los costes en una empresa se deben administrar de una manera delicada y correcta ya que de esto depende en gran medida la productividad y el rendimiento de la misma. La estructura de costes de la empresa está compuesta principalmente por costes fijos y variables. Los primeros costes hacen referencia a todos los gastos presentes que no van a poseer ningún cambio y no se pueden evitar independientemente de la producción, van a permanecer por el hecho de la empresa funcionar diariamente. 

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema4/g8.svg', alt='Texto que describa la imagen')
          
        h2.text-center Discrecionales
        p Son costes que se encuentran debidamente planificados, los cuales se pueden llegar a minimizar en determinado momento. Un ejemplo de ellos son los gastos de #[i marketing], publicidad, etc.

      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema4/g9.svg', alt='Texto que describa la imagen')
          
        h2.text-center Comprometidos
        p En este apartado se encuentran los gastos que difícilmente se pueden modificar debido a que si se llegan a realizar, la empresa podría sufrir problemas de rendimiento y productividad.
    
    .cajon-b.color-acento-contenido.p-3.mb-5
      p Otros son los #[b costes variables], estos dependen de la actividad de la organización, de la cantidad de producción y sus ventas. Cuando la producción aumenta, los costes lo harán de igual manera, y cuando disminuyan los gastos harán lo propio. Este tipo de gastos teniendo una correcta planificación pueden ser controlables en un corto plazo y pueden clasificarse de la siguiente manera:

    .row.mb-5
      .col-sm-4.col-xl-4.mb-4.mb-xl-0
        figure
          img(src='@/assets/curso/temas/tema4/g10.svg', alt='Texto que describa la imagen')

      .col-sm-4.col-xl-4.mb-5.mb-xl-0
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              br
              img(width="125" height="125" src='@/assets/curso/temas/tema4/mini2.svg', alt='Texto que describa la imagen')
              br
              h1.text-center Costes variables progresivos
            .tarjeta-flip__contenido.p-4.p-xl-5.text-center
              h1 Costes variables progresivos
              p Este tipo de coste está asociado a la producción de la empresa. Por ejemplo, entre más mercancía llegue, más se debe de pagar en transporte.     
        
      .col-sm-4.col-xl-4.mb-5.mb-xl-0
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              br
              img(width="125" height="125" src='@/assets/curso/temas/tema4/mini3.svg', alt='Texto que describa la imagen')
              br
              h1.text-center Costes variables regresivos
            .tarjeta-flip__contenido.p-4.p-xl-5.text-center
              h1 Costes variables regresivos
              p Son gastos que funcionan en contra del nivel de producción. En este caben de ejemplo los descuentos por volumen. Entre más cantidad de mercancía se compre, menos se va a pagar.

    .row
      .col-lg-1
      .col-lg-10         
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema4/mini4.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small Si desea visualizar algunas fórmulas para el cálculo de los tipos de costes y algunas técnicas para la reducción de los mismos. 
                  p.text-small Descarga el siguiente documento:
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_6.docx')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
        .col-lg-1

    Separador
    
    #t_4_6.titulo-segundo.color-primario
      h2 4.6.	Costeo de inventarios

    .row 
      .col-lg-1
        img(src='@/assets/curso/temas/tema4/mini5.svg', alt='Texto que describa la imagen').banner-principal-decorativo-3
      .col-lg-11
        .bloque-texto-b.color-acento-contenido.p-3 
          .bloque-texto-b__texto
            p Los costes de los inventarios son todos los gastos que se requieren para llevar a cabo este proceso que comprende tantas actividades y que ninguna de ellas se puede dejar pasar por alto, estas se encuentran debidamente planificadas, organizadas y estarán controladas por una persona o un 
              i software. 
              | Todas estas fases comprenden una serie de gastos que la empresa debe asumir, bien sean del personal operativo, los alquileres de almacenes o bodegas, 
              i softwares, 
              | maquinarias para el cargue y descargue de mercancías, entre otros.


</template>

<script>
import Separador from 'ecored-base-pkg/src/components/Separador.vue'
export default {
  name: 'Tema4',
  components: { Separador },
  data: () => ({
    indicadorTarjetaFlip: true,
    indicadorImagenZoom: true,
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
