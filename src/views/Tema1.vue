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
    br
    | Los inventarios se pueden clasificar dependiendo de sus fases, estos son:

    SlyderC.mb-5(:datos="datosSlyder")

    p En el proceso de inventarios se tienen en cuenta ciertos criterios que deben ser considerados para lograr una correcta gestión:

    .row
      .col-md-4
        figure
          img(src="@/assets/template/acordion1.svg", alt="alt")
      .col-md-8
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta color-primario")
          .row(titulo="Demanda")
            .col-12
              p.mb-0 Es la proyección que se realiza de manera probabilística de la cantidad de artículos o servicios que se planean vender.
          .row(titulo="Tiempo")
            .col-12
              p.mb-0 Es el cálculo en cuanto a tiempos desde que se tiene la necesidad de adquirir la mercancía hasta que llega a la empresa. También aplica para el proceso de producción y se da desde el momento que se brinda una orden, hasta el momento en que se da inicio a la misma.
          .row(titulo="Costos")
            .col-12
              p.mb-0 Los inventarios representan una serie de gastos para su manejo, es aquí donde se tienen en cuenta costos operativos como lo son los almacenes, softwares, mantenimientos, penalizaciones adquisiciones de materias primas, etc.
  
    Separador

    #t_1_1.titulo-segundo.color-black
      h2 1.1  Política de inventarios

    .row
      .col-md-2
        img(src="@/assets/curso/temas/tema1/t1-1.png", alt="")
      .col-md-10
        p Cuando se habla de política administrativa o empresarial, se hace referencia a un grupo de directrices que van alineadas con las medidas, normas, estrategias y decisiones que toma un área directiva con un alto nivel jerárquico, con el fin de brindar orden en las actividades a desarrollar, alcanzando acuerdos armónicos entre colaboradores y líderes de forma democrática para lograr cumplir con la misión y los objetivos trazados en la planificación. 
        br
        | Cuando se decide formular una política empresarial se debe iniciar con una notificación concreta de lo que se quiere, seguido se debe comunicar a quienes va dirigida esta política (especificar el área administrativa u operativa), decretar el departamento encargado de que estas políticas se lleven a cabo y, por último, precisar los procedimientos de vigilancia y control con el fin de verificar que se cumpla con lo propuesto.
        br
        | Cuando una empresa decide implementar dentro de sus procesos el control o manejo de inventarios, lo primero que se debe de realizar o formular es la política de inventarios. Allí se tendrá que plasmar cuáles son esas directrices cómo se llevará a cabo este proceso para que se obtenga un mínimo margen de error en su ejecución y con ello disminuir gastos. Para ello se deben de tener en cuenta variables tales como:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          br
          img(src="@/assets/curso/temas/sintasis/sintesis.svg", alt="alt")

    Separador

    #t_1_2.titulo-segundo.color-black
      h2 1.2  Normatividad 


    .row.justify-content-center.mt-5
      .cajon.color-primario.p-4.mb-4
      //.cajon.color-acento-botones.p-4.mb-4  
      .col-lg-2
        img(src="@/assets/curso/temas/tema1/t1-2.png", alt="")
      .col-lg-10
        p Una norma empresarial la componen una serie de reglas que deben ser acatadas por las organizaciones legalmente constituidas, las cuales están impuestas por un ente gubernamental con el fin de tener un control de las conductas o procederes de las compañías. Las empresas deben reportar al menos una vez al año los inventarios que tienen, esto realizado al finalizar el periodo, debido a que es de suma importancia en los procesos contables, por ejemplo, los balances generales. Es allí donde los gerentes o administradores van a demostrar toda su gestión, con lo cual van a identificar una serie de factores que les permitirá reconocer lo que se está haciendo de buena manera y las fallas que se están teniendo, logrando corregir a tiempo y conseguir una mejora continua. La que rige los inventarios es la NIC 2 y junto a este también se tiene el Decreto 2649 de 1993.         
        | Para conocer más sobre la Normatividad, haga clic en #[b ver más.]
        br
        | de los inventarios, descargue el siguiente documento:
      .col-auto
        a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/prueba.pdf')" target="_blank" type="application/pdf")
          span Descargar
          i.fas.fa-file-download

    Separador

    #t_1_3.titulo-segundo.color-black
      h2 1.3  Sistema de reposición de inventarios

    .row.justify-content-center.mb-3
      .col-lg-1
        img(src="@/assets/curso/temas/tema1/t1-3.png", alt="")
      .col-lg-11
        p Un sistema de reposición tiene como objetivo que las empresas, ya sean distribuidores, pymes o industrias, tengan un buen flujo de ventas o de producción, donde siempre se cuente con las materias primas necesarias para los procesos productivos, o en el caso de las compañías comerciales que siempre tengan el artículo que el cliente está solicitando para así lograr una relación armónica y cumplir con sus necesidades y expectativas.
        | Empleando un sistema de reposición de inventarios todo será más sencillo, ya que allí estará importada toda la información relacionada con ventas, materias primas, insumos, compras, entradas, salidas, entre otros, por lo cual este software sabrá cuándo se deberá realizar un reabastecimiento, solicitar insumos a los proveedores, productos que están agotados o a punto de agotarse, artículos que llevan cierta cantidad de tiempo almacenados.

    Separador

    #t_1_4.titulo-segundo.color-black
      h2 1.4  Importancia de los inventarios

    .row.justify-content-center.mb-3
      .col-lg-8
        p Los inventarios son de suma importancia en las empresas industriales, distribuidoras, pymes y todas aquellas que tengan por actividad económica la compra y venta de bienes o servicios. Cada uno de estos bienes, productos, servicios y materias primas deberán estar ordenadas, caracterizadas y cualificadas para lograr ser organizadas en los almacenes y así la empresa saber cuál es su patrimonio y en base a esto planificar sus estrategias de producción y ventas.
        p El proceso de inventarios también incluye o aporta beneficios en el área logística de la empresa debido a que son dos departamentos que deben de trabajar en conjunto para conseguir una correcta gestión de funciones de almacenamiento y distribución para cumplir con la demanda proyectada.
        p La importancia de implementar el control de inventarios en las empresas radica en que pueden sacar provecho en la incursión de las economías a escala, la cual consiste en fabricar una mayor cantidad de productos a un menor costo, esto gracias a la buena gestión de los inventarios que permiten tener un buen almacenamiento de materias primas.
        p Si desea profundizar en el tema Importancia de los inventarios, haga clic en #[b ver más.]
      .col-lg-4
        img(src="@/assets/curso/temas/tema1/t1-4.png", alt="")
    
    .tarjeta.color-secundario.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-1.col-sm-2.col-lg-1
          img(src="@/assets/componentes/ej-01.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-5.mb-sm-0.col-lg-9
              p.text-small La importancia de implementar el control de inventarios en las empresas radica en que pueden sacar provecho en la incursión de las economías a escala, la cual consiste en fabricar una mayor cantidad de productos a un menor costo, esto gracias a la buena gestión de los inventarios que permiten tener un buen almacenamiento de materias primas. Si desea profundizar en el tema Importancia de los inventarios, descargue el siguiente documento:  
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
                
    Separador

    #t_1_5.titulo-segundo.color-black
      h2 1.5 Métodos de control de inventarios 

    p Existen diferentes tipos de métodos para el manejo y control de inventarios, los cuales cada uno posee diferentes características que deberán ser analizadas por las personas especializadas para saber cuál se ajusta de manera más efectiva a la empresa dependiendo de su actividad económica y del producto que comercialicen.

    .row.justify-content-center
      .col-md-6.col-lg-4
          figure
            img(src='@/assets/curso/temas/tema1/t1-5.svg', alt='Texto que describa la imagen')
    br
    .tarjeta.color-primario.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-1.col-sm-2.col-lg-1
          img(src="@/assets/componentes/ej-02.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-5.mb-sm-0.col-lg-9
              p.text-small Existen algunos tipos de métodos para el control de inventarios, para profundizar en el tema descargue el siguiente documento. 
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

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
