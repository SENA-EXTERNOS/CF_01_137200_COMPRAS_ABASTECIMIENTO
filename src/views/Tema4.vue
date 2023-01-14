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
     
    .row.mt-5  
      h3 Tipos de costos

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
              p Son todos los costos INDIRECTOS del producto, dentro de los cuales están actividades de compras de mercancías, insumos y materias primas que son necesarias para la fase productiva. 

              p También se tienen en cuenta procesos como las órdenes de pedidos, selección de proveedores, negociaciones, recepción de pedidos, organización de las mercancías y control del inventario. 

              p Esto quiere decir que los costos de aprovisionamiento son todos los gastos de las gestiones que se realizan para poder producir un producto.
              
              pPor ejemplo: las oficinas, maquinarias, gastos de personal que laboran en el área, consumo de energía, agua, internet, etc.

                
        .py-3.py-md-4(titulo="Costos de mantenimiento y almacenamiento")
          .row.justify-content-around.align-items-center
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema4/g3.svg', alt='Texto que describa la imagen')
                
            .col-md-8.mb-4.mb-md-0
              h4 Costos de mantenimiento y almacenamiento:
              p Los costos de almacenamiento son todos los gastos que conlleva el tener en funcionamiento las bodegas para almacenar los productos, mercancías, insumos y materias primas.

              p Estos costos se pueden dividir en: 

              p Infraestructura: uno de ellos puede ser la renta del almacén o bodega
              p Instalaciones: por ejemplo, los carros elevadores de mercancía.

              p Mantenimiento del stock: dentro de este se encuentran su costo y el costo de los seguros.

              p Riesgos: están relacionados con el daño, extravío y hurto de mercancías.


        
        .py-3.py-md-4(titulo="Costos por falta de existencias")
          .row.justify-content-around.align-items-center
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema4/g4.svg', alt='Texto que describa la imagen')
                
            .col-md-8.mb-4.mb-md-0
              h4 Costos por falta de existencias: 
              p Este tipo de costos sucede cuando la empresa recibe un pedido y no tiene dentro de su inventario el producto o la mercancía para cumplir con el mismo.
              p Es ahí donde se decide que ocurrió un costo por pérdida de venta. Este costo se deduce de la ganancia que había sido generada por dicho pedido pero que no ingresó a caja por la cancelación del mismo.
              p Dentro de este también se encuentran casos como el de pedidos retrasados los cuales generan unos costos adicionales debido a que si bien la venta sigue en pie, la demora en la entrega va a generar unos gastos adicionales de personal, transporte, entre otros.
                  
    .row.mt-5
      h3 Costos relacionados con el #[i stock]

    .row 
      .col-lg-4
        img(src='@/assets/curso/temas/tema4/g5.png', alt='Texto que describa la imagen')
      .col-lg-8
        .cajon-b.color-primario.p-3.mb-5
          p.mb-0 Para lograr una buena gestión del #[i stock] y los inventarios es importante que las empresas tengan en cuenta y planifiquen los costos que este proceso conlleva. A esta fase hay aportarle todos los conocimientos, requerimiento e inversiones debido a que dicha estrategia ayudará a las empresas a ser mucho más productivas y competitivas en el mercado, logrado optimizar muchos recursos que al final van a representar utilidades. Los costos que se deben tener en cuenta son los de: adquisición, pedido, almacenamiento y ruptura.

    .row.mt-5
      h3 Costos de pedidos

    .row.justify-content-center.align-items-center.mt-3
      .col-lg-8
        p Los costos de los pedidos abarcan una serie de factores que están asociados a todo el proceso de adquisición de materias primas, almacenamiento, producción y venta. Este tipo de sistema se da cuando un determinado cliente ordena un pedido con ciertas características y cantidades. 

        .cajonAmarillo.bgr-tarjeta1-tema1.p-4.mt-3
            p(data-aos="fade-down") Para iniciar el cálculo de costos de los pedidos, se debe empezar con los costos de producción directos e indirectos, donde la primera parte hace referencia a las materias primas, insumos y mano de obra. Y los costos indirectos son todos los gastos de aprovisionamiento, donde se hacía referencia a las gestiones realizadas y pago de servicios públicos. 

      .col-lg-4
        img(src='@/assets/curso/temas/tema4/img1.svg', alt='Texto que describa la imagen')


    .row.mt-5
      p En la siguiente tabla podrá ver una hoja un ejemplo de pedidos:

    .row.mt-3.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido            
          p #[b Tabla 1]
          p #[i Hoja de pedido]  

        img(src='@/assets/curso/temas/tema4/tabla1.svg', alt='Texto que describa la imagen')

    .row.mt-5
      h3 Precio de adquisición

      p El precio de adquisición es el valor que se le determina a una compra. Allí es importante calcular debidamente el precio de la mercancía para dar una valoración acertada a dicha adquisición. ¿Por qué se hace énfasis en esto? Lo que sucede es que a las compras se les aplican unos descuentos, gastos, impuestos y otros costos que deben ser tenidos en cuenta en la valoración.

      p El primer dato a tener en cuenta es el del valor de la mercancía, el cual es asignado y negociado directamente con el proveedor. Sin embargo, el valor de adquisición comprende otra serie de factores a tener en cuenta, entre los cuales se encuentran una serie de descuentos aplicados.
    
      .row.justify-content-center.mt-3
        .col-lg-12.mb-5
          figure
            img(src="@/assets/curso/temas/tema4/img5.png", alt="alt")

    .row.mt-5
      p #[b Tipos de descuentos aplicados al valor de adquisición ]

    .row.justify-content-center
      .col-lg-10.mb-5
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema4/img3.svg', alt='Texto que describa la imagen')

          .tarjeta.color-secundario2.p-3(x="23%" y="50%" numero="+") 
            p El descuento comercial hace referencia a la negociación que hace el fabricante con sus proveedores, el cual le descuenta un porcentaje determinado por ser cliente.

          .tarjeta.color-secundario2.p-3(x="48%" y="50%" numero="+") 
            p Cuando se habla de descuento por volumen, se hace referencia a una reducción en el valor de la mercancía, donde el proveedor trata de incentivar a sus clientes para que adquieran grandes cantidades de mercancía. Este tipo de descuento se realiza a parte del descuento comercial y pueden ser o no acumulativos.

          .tarjeta.color-secundario2.p-3(x="73%" y="50%" numero="+") 
            p Cuando un cliente realiza una negociación con su proveedor, este tiene una fecha límite para realizar el pago. En muchas ocasiones, cuando el cliente cancela el pedido antes de la fecha estipulada, el proveedor le concede un descuento por pronto pago, el cual es deducido del importe bruto.

          .tarjeta.color-secundario2.p-3(x="96%" y="50%" numero="+") 
            p En muchas ocasiones cuando un cliente realiza cierta cantidad de compras a su proveedor, este le ofrece ciertas bonificaciones en unidades, un ejemplo de ello son las ofertas de 2x1.

    .row.mt-5
      p Pero aparte de los descuentos que se le aplican al valor de adquisición, a estos también se les deben de determinar ciertos gastos.

    .row.mt-3
      h3 Métodos de costeo

    .row 
      .col-lg-1
        img(src='@/assets/curso/temas/tema4/g7.svg', alt='Texto que describa la imagen')
      .col-lg-11
        .cajon-b.color-primario.p-3.mb-5
          p.mb-0 Los costos en una empresa se deben administrar de una manera delicada y correcta, pues depende en gran medida la productividad y el rendimiento de la misma. La estructura de estos está compuesta principalmente por costos fijos y variables. Los primeros hacen referencia a todos los gastos presentes que no van a poseer ningún cambio y no se pueden evitar independientemente de la producción, van a permanecer por el hecho de la empresa funcionar diariamente. 

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema4/img8.svg', alt='Texto que describa la imagen')
          
        h2.text-center Discrecionales
        p Son costos que se encuentran debidamente planificados, los cuales se pueden llegar a minimizar en determinado momento. Un ejemplo de ellos son los gastos de #[i marketing], publicidad, etc.

      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema4/g9.svg', alt='Texto que describa la imagen')
          
        h2.text-center Comprometidos
        p En este apartado se encuentran los gastos que difícilmente se pueden modificar debido a que si se llegan a realizar, la empresa podría sufrir problemas de rendimiento y productividad.

    .row.mt-5
      p Otros son los #[b costos variables], estos dependen de la actividad de la organización, de la cantidad de producción y sus ventas. Cuando la producción aumenta, sus costos lo harán de igual manera, y cuando disminuyan los gastos harán lo propio. Este tipo de gastos teniendo una correcta planificación pueden ser controlables en un corto plazo y pueden clasificarse de la siguiente manera:

      h3 Clasificación de costos variables

    .row.mb-5.mt-5
      .col-sm-4.col-xl-4.mb-4.mb-xl-0
        figure
          img(src='@/assets/curso/temas/tema4/g10.svg', alt='Texto que describa la imagen')

      .col-sm-4.col-xl-4.mb-5.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.bgr-avatar-tema4
              br
              img(width="125" height="125" src='@/assets/curso/temas/tema4/mini2.svg', alt='Texto que describa la imagen')
              br
              h2.text-center Costos variables <br> progresivos
            .tarjeta-flip__contenido.p-4.p-xl-5.text-center
              h3 Costos variables progresivos
              p Este tipo de coste está asociado a la producción de la empresa. Por ejemplo, entre más mercancía llegue, más se debe de pagar en transporte.

      .col-sm-4.col-xl-4.mb-5.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.bgr-avatar-tema4
              br
              img(width="125" height="125" src='@/assets/curso/temas/tema4/mini3.svg', alt='Texto que describa la imagen')
              br
              h2.text-center Costos variables <br> regresivos
            .tarjeta-flip__contenido.p-4.p-xl-5.text-center
              h3 Costos variables regresivos
              p Son gastos que funcionan en contra del nivel de producción. En este caben de ejemplo los descuentos por volumen. Entre más cantidad de mercancía se compre, menos se va a pagar.

    .row.mt-5
      h3 Tipos de costes

      p Existen una serie de fórmulas que nos van a permitir calcular los tipos de costos según se requiera. Toda vez que identifiquemos los fijos o variables, se podrá iniciar a calcular el punto de equilibrio, costo variable unitario o el costo fijo unitario.

    .row 
      .col-lg-12
        img(src='@/assets/curso/temas/tema4/img4.svg', alt='Texto que describa la imagen')

    .row.mt-5.justify-content-center
      .col-lg-8
        .cajonAmarillo.bgr-tarjeta1-tema1.p-4.mt-3
          p.mb-0 Reducir los costes de la empresa es un tema que siempre van a querer los empresarios pero que muchas veces no saben cómo hacerlo. Si se logra esto, los gastos en el balance general se van a reducir y por ende las ganancias aumentarán.
       
   
    .row.mt-5
      h3 Costeo de inventarios

    .row 
      .col-lg-1
        img(src='@/assets/curso/temas/tema4/mini5.svg', alt='Texto que describa la imagen').banner-principal-decorativo-3
      .col-lg-11
        .bloque-texto-b.color-acento-contenido.p-3 
          .bloque-texto-b__texto
            p Los costes de los inventarios son todos los gastos que se requieren para llevar a cabo este proceso que comprende tantas actividades y que ninguna de ellas se puede dejar pasar por alto, estas se encuentran debidamente planificadas, organizadas y estarán controladas por una persona o un 
              i <em>software</em>. 
              | Todas estas fases comprenden una serie de gastos que la empresa debe asumir, bien sean del personal operativo, los alquileres de almacenes o bodegas, 
              i <em>software</em>, 
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
