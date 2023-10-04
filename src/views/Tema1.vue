<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Inventarios

    p En las organizaciones el concepto de los inventarios está asociado con la planificación estratégica y la logística. Uno de los procesos a los que se les debe brindar mayor relevancia e importancia es al control y manejo de inventarios, ya que si no se tiene un buen monitoreo de las materias primas fácilmente los procesos de producción no van a marchar al ritmo que se tiene planeado para cumplir con la demanda. Otro de los inconvenientes que se presentan a diario en las empresas, es que no hacen el correcto uso de los inventarios, en muchas ocasiones se quedan con los productos que son menormente adquiridos por los clientes y se agotan los más vendidos. Los inventarios se realizan tanto para materias primas como para productos terminados.
    p Los inventarios se pueden clasificar dependiendo de sus fases, estos son:
    
    .row.mt-5 
      SlyderC.mb-5(:datos="datosSlyder").bgr1-tema1.p-4

    .row
      p En el proceso de inventarios se tienen en cuenta ciertos criterios que deben ser considerados para lograr una correcta gestión:

    .row.mt-3
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
              p.mb-0 Los inventarios representan una serie de gastos para su manejo, es aquí donde se tienen en cuenta costos operativos como lo son los almacenes, #[i software], mantenimientos, penalizaciones adquisiciones de materias primas, etc.
              
    .row.mt-5
      h3 Política de inventarios

    .row
      .col-md-2
        img(src="@/assets/curso/temas/tema1/t1-1.png", alt="").banner-principal-decorativo-3
      .col-md-10
        p Cuando se habla de política administrativa o empresarial, se hace referencia a un grupo de directrices que van alineadas con las medidas, normas, estrategias y decisiones que toma un área directiva con un alto nivel jerárquico, con el fin de brindar orden en las actividades a desarrollar, alcanzando acuerdos armónicos entre colaboradores y líderes de forma democrática para lograr cumplir con la misión y los objetivos trazados en la planificación. 
        p Cuando se decide formular una política empresarial se debe iniciar con una notificación concreta de lo que se quiere, seguido se debe comunicar a quienes va dirigida esta política (especificar el área administrativa u operativa), decretar el departamento encargado de que estas políticas se lleven a cabo y, por último, precisar los procedimientos de vigilancia y control con el fin de verificar que se cumpla con lo propuesto.
        p Cuando una empresa decide implementar dentro de sus procesos el control o manejo de inventarios, lo primero que se debe de realizar o formular es la política de inventarios. Allí se tendrá que plasmar cuáles son esas directrices cómo se llevará a cabo este proceso para que se obtenga un mínimo margen de error en su ejecución y con ello disminuir gastos. Para ello se deben de tener en cuenta variables tales como:

    
    .row.mt-5
      h3.text-center Variables de las políticas de inventarios
    
    .row.justify-content-center
      .col-lg-12.mb-5
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img1.svg', alt='Texto que describa la imagen')

          .tarjeta.color-secundario2.p-3(x="43%" y="12%" numero="+") 
            p El tipo de producto que vamos a almacenar, teniendo presente el tiempo que podrá estar acaparado sin que sufra ningún daño. 

          .tarjeta.color-secundario1.p-3(x="58%" y="12%" numero="+") 
            p Tener conocimiento de la proyección de la demanda para realizar un estudio sobre el proceder de estas materias primas o artículos en un futuro.

          .tarjeta.color-secundario1.p-3(x="58%" y="65%" numero="+") 
            p Establecer los costos de los inventarios, considerando todos los aspectos que conlleva el monitoreo de este proceso.

          .tarjeta.color-secundario2.p-3(x="43%" y="65%" numero="+") 
            p Determinar la extensión del lugar donde se va a realizar el almacenamiento y así establecer la cantidad de materias primas o productos que se van a poder ordenar.

    .row.mt-5
      h3 Normatividad 

    .row.justify-content-center.mt-5
      .col-lg-3
        img(src="@/assets/curso/temas/tema1/t1-2.svg", alt="")
      .col-lg-9
        p Una norma empresarial la componen una serie de reglas que deben ser acatadas por las organizaciones legalmente constituidas, las cuales están impuestas por un ente gubernamental con el fin de tener un control de las conductas o procederes de las compañías. Las empresas deben reportar al menos una vez al año los inventarios que tienen, esto realizado al finalizar el periodo, debido a que es de suma importancia en los procesos contables, por ejemplo, los balances generales. Es allí donde los gerentes o administradores van a demostrar toda su gestión, con lo cual van a identificar una serie de factores que les permitirá reconocer lo que se está haciendo de buena manera y las fallas que se están teniendo, logrando corregir a tiempo y conseguir una mejora continua.

        p El Decreto 2649 de 1993, se encuentra otra de las normas que rige el proceso de los inventarios, es el Artículo 63 denominado #[b Inventarios] donde le brindan a las empresas una serie de directrices que serán apoyo para llevar a cabo este proceso. Allí se explica cómo valorar los inventarios, maneras de hallar el inventario final anual, los efectos de la inflación y cómo determinar los costos de ventas.

    .row.mt-5.justify-content-center
      .col-lg-10
        .cajonAmarillo.bgr-tarjeta1-tema1.p-4.mt-3
            p(data-aos="fade-down") Por otra parte, se encuentra con la Norma Internacional de Contabilidad 2 Inventarios (NIC 2) la cual busca brindar una guía sobre cómo realizar un trámite riguroso a los inventarios en temas de costos teniendo en cuenta todos los aspectos en cuanto a recursos que implica llevar a cabo este proceso como lo son costos de inventario, costos de adquisición, costos de transformación, técnicas de medición de costos, fórmulas de cálculo del costo, etc.

            p Si desea profundizar en el tema Normatividad, haga clic en los siguientes enlaces:

            .row.mt-3
              .col-lg-6
                a.anexo.mb-4.mb-lg-0(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=9863#:~:text=Reglamenta%20la%20Contabilidad%20en%20General,resultados%20y%20de%20cobro%2C%20revelaciones%2C" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p #[b Enlace web.] Decreto 2649 de 1993

              .col-lg-6
                a.anexo.mb-4.mb-lg-0(href="https://www.mef.gob.pe/contenidos/conta_publ/con_nor_co/vigentes/nic/2_NIC.pdf" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p #[b Enlace web.] Norma internacional de contabilidad 2 inventarios

    .row.mt-5
      h3 Sistema de reposición de inventarios

    .row.justify-content-center.mb-3
      .col-lg-1
        img(src="@/assets/curso/temas/tema1/t1-4.svg", alt="").banner-principal-decorativo-3
      .col-lg-11
        p Un sistema de reposición tiene como objetivo que las empresas, ya sean distribuidores, pymes o industrias, tengan un buen flujo de ventas o de producción, donde siempre se cuente con las materias primas necesarias para los procesos productivos, o en el caso de las compañías comerciales que siempre tengan el artículo que el cliente está solicitando para así lograr una relación armónica y cumplir con sus necesidades y expectativas.

        p Empleando un sistema de reposición de inventarios todo será más sencillo, ya que allí estará importada toda la información relacionada con ventas, materias primas, insumos, compras, entradas, salidas, entre otros, por lo cual este #[i software] sabrá cuándo se deberá realizar un reabastecimiento, solicitar insumos a los proveedores, productos que están agotados o a punto de agotarse, artículos que llevan cierta cantidad de tiempo almacenados.
    
    .row.mt-5
      h3 Importancia de los inventarios

    .row.justify-content-center.mb-3.align-items-center
      .col-lg-7
        p Los inventarios cumplen un papel fundamental en las empresas industriales, distribuidoras, pymes y todas aquellas que tengan por actividad económica la compra y venta de bienes o servicios. Cada uno de estos bienes, productos, servicios y materias primas deberán estar ordenadas, caracterizadas y cualificadas para lograr ser organizadas en los almacenes y así la empresa saber cuál es su patrimonio y en base a esto planificar sus estrategias de producción y ventas.

        .cajonAmarillo.bgr-tarjeta1-tema1.p-4.mt-3
          p(data-aos="fade-down") La importancia de implementar el control de inventarios en las empresas radica en que pueden sacar provecho en la incursión de las economías a escala, la cual consiste en fabricar una mayor cantidad de productos a un menor costo, esto gracias a la buena gestión de los inventarios que permiten tener un buen almacenamiento de materias primas.

      .col-lg-5
        img(src="@/assets/curso/temas/tema1/t1-3.png", alt="")

    .row.justify-content-center.mb-3.align-items-center
      .col-lg-3
        img(src="@/assets/curso/temas/tema1/img2.svg", alt="")

      .col-lg-9
        p Por otra parte, se conoce que, si se trabaja con demanda probabilística, nunca se sabrá a ciencia cierta la cantidad de productos que se podrá llegar a vender. Si se logra tener un almacén organizado, esto permitirá disminuir una serie de inconvenientes debido a que al momento de un cliente solicitar un producto será mucho más fácil localizarlo y con esto cumplir con una excelente atención al cliente y satisfacción de la demanda.

        .cajonAmarillo.bgr-tarjeta1-tema1.p-4.mt-3
          p(data-aos="fade-down") El control de inventarios continuo, es de suma importancia debido a que este método ofrece la posibilidad de tener una mayor vigilancia de los productos y materias primas por si en algún momento alguno de ellos se encuentra cerca de agotarse, se pueda generar una alerta y ordenar más producción o llamar a proveedores para adquirir más insumos. 

        p.mt-3 Tener a disposición cierta cantidad de materia prima en el área productiva, es necesario debido a que, si esto no llega a suceder por una mala proyección o proceder de las personas encargadas del inventario y compras, sería algo lamentable para la empresa ya que todo este departamento quedaría imposibilitado para continuar con las labores por falta de materiales. De ahí el valor que se le debe de brindar a la correcta gestión de los inventarios.   
      
    .row.justify-content-center.mb-3.align-items-center.mt-5
      h3 Métodos de control de inventarios 

      p Existen diferentes tipos de métodos para el manejo y control de inventarios, los cuales cada uno posee diferentes características que deberán ser analizadas por las personas especializadas para saber cuál se ajusta de manera más efectiva a la empresa dependiendo de su actividad económica y del producto que comercialicen.

    .row.justify-content-center.mb-3.align-items-center.mt-3
      .col-lg-9
        .cajonAmarillo.bgr-tarjeta1-tema1.p-4.mt-3
            p #[b Tipos de métodos de control de inventarios]

            ul.lista-ul--color
              li 
                i.fas.fa-angle-right
                p.mb-0 #[b Justo a tiempo:] este método fue creado para ser empleado en los procesos logísticos y de almacenamiento donde el principal objetivo es el de contar con la cantidad exacta de materias primas para la fabricación de los productos demandados, evitando los desperdicios y optimizando la capacidad de almacenamiento y logrando la mayor eficiencia.


              li 
                i.fas.fa-angle-right
                p.mb-0 #[b Sistema ABC:] Es una metodología basada en realizar una segmentación de los productos que se van a almacenar para brindar un orden de acuerdo a los niveles de importancia en cada uno de ellos. 

      .col-lg-3
        img(src="@/assets/curso/temas/tema1/img3.svg", alt="")


    .row.mt-5
      p Se puede interpretar de la siguiente manera:    


    .row.justify-content-center.mt-5
      .col-md-6.col-lg-4
          figure
            img(src='@/assets/curso/temas/tema1/t1-5.png', alt='Texto que describa la imagen')



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
        imagen: require('@/assets/curso/temas/tema1/slider1.png'),
      },
      {
        titulo: 'Producto en proceso',
        texto:
          'Fases por las que es sometido el producto en su proceso de producción.',
        imagen: require('@/assets/curso/temas/tema1/slider2.png'),
      },
      {
        titulo: 'Producto terminado',
        texto:
          'Artículo listo para ser comercializado y entregado al cliente final.',
        imagen: require('@/assets/curso/temas/tema1/slider3.png'),
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
