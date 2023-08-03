export default {
  global: {
    componenteFormativo: 'Inventario y sistemas de gestión de información',
    descripcionCurso:
      'El componente formativo tiene como objetivo que el aprendiz adquiera conocimientos de inventarios, normatividad, elaboración de flujogramas de procesos, sistemas de información logística, metodologías y criterios de valoración, costos de inventarios, pedidos, etc. Con el fin de que descubra como es el manejo de inventarios de una organización.',
    fondoBannerPrincipal: require('@/assets/curso/portada/principal.svg'),
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/fechaizquierda.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/fechaderecha.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Inventarios',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Sistemas de información logística y sus elementos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Métodos de valoración de inventarios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Costos de inventarios',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
        desarrolloContenidos: false,
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
        desarrolloContenidos: false,
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
        desarrolloContenidos: false,
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
        desarrolloContenidos: false,
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
        desarrolloContenidos: false,
      },
    ],
  },
  complementario: [
    {
      tema: 'Inventarios',
      referencia:
        'Vidal Holguín, C. J. (2010). <em>Fundamentos de control y gestión de inventarios</em>. Programa Editorial UNIVALLE.',
      tipo: 'Libro',
      link:
        'https://books.google.es/books?hl=es&lr=&id=IRPmDwAAQBAJ&oi=fnd&pg=PA11&dq=gesti%C3%B3n+de+inventarios&ots=jzfHxLumMN&sig=ZWfCP8jcJGf-PVIoZxUklt22SAE',
    },
    {
      tema: 'Inventarios',
      referencia:
        'Juárez, A. C., Zúñiga, C. A., Flores, J. L. M., & Partida, D. S. (2018). Gestión de políticas de inventario en el almacenamiento de materiales de acero para la construcción. <em>Revista Ingeniería Industrial, 17</em>(1), p. 5-22.',
      tipo: 'PDF',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=7047360 ',
    },
    {
      tema: 'Inventarios',
      referencia:
        'Contabilidad, N. I. (2013). <em>NIC 2 Inventarios<em>. NIC 2 Inventarios.',
      tipo: 'PDF',
      link:
        'https://asesorateenbolivia.com/media/anexos/2019/09/01/13_Norma_Contable_NC_2.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Costo',
      significado:
        'El costo de producción (o costo de operación) es el gasto necesario para fabricar un bien o para generar un servicio. (Arias E. R., 2020)',
    },
    {
      termino: 'Competitividad',
      significado:
        'La capacidad de una persona u organización para desarrollar ventajas competitivas con respecto a sus competidores (Roldán, Economipedia, 2016).',
    },
    {
      termino: 'Control',
      significado:
        'Etapa de la gestión administrativa que se refiere a la evaluación de procesos y del rendimiento administrativo, así como de la identificación de desviaciones y posibles anomalías. (Galán, 2021).',
    },
    {
      termino: 'Inventario',
      significado:
        'Es el registro de los bienes que pertenecen a una persona natural o jurídica. Así, queda constancia de una serie de activos u objetos (Westreicher, Economipedia, 2020).',
    },
    {
      termino: 'Logística',
      significado:
        'Son todas las operaciones llevadas a cabo para hacer posible que un producto llegue al consumidor desde el lugar donde se obtienen las materias primas, pasando por el lugar de su producción (Arias A. S., 2012).',
    },
    {
      termino: 'Producción',
      significado:
        'Es la actividad económica que se encarga de transformar los insumos para convertirlos en productos (Quiroa, 2020).',
    },
    {
      termino: 'Sistema',
      significado:
        'Está conformado por una serie de datos vinculados entre sí para conseguir un objetivo común (Peiró, 2020).',
    },
    {
      termino: 'Tecnología',
      significado:
        'Es el conjunto de conocimientos y técnicas que se aplican de manera ordenada para alcanzar un determinado objetivo o resolver un problema (Roldán, Economipedia, 2017).',
    },
  ],
  referencias: [
    {
      referencia:
        'Contabilidad, N. I. (2013). <em>NIC 2 Inventarios</em>. NIC 2 Inventarios.',
      link:
        'https://asesorateenbolivia.com/media/anexos/2019/09/01/13_Norma_Contable_NC_2.pdf',
    },
    {
      referencia:
        'García, M., Pantoja, C. y Ramírez, C. (2010). <em>Fundamentos y técnicas de costos</em>.',
      link:
        'https://www.unilibre.edu.co/cartagena/pdf/investigacion/libros/ceac/FUNDAMENTOS_Y_TECNICAS%20DE%20COSTO.pdf',
    },
    {
      referencia: 'Galán, J. S. (2021). <em>Control administrativo</em>.',
      link: 'https://economipedia.com/definiciones/control-administrativo.html',
    },
    {
      referencia: 'Peiró, R. (2020). <em>Sistema de información<em>.',
      link: 'https://economipedia.com/definiciones/sistema-de-informacion.html',
    },
    {
      referencia: 'Quiroa, M. (2020). <em>Producción</em>.',
      link: 'https://economipedia.com/definiciones/produccion.html',
    },
    {
      referencia: 'Roldán, P. N. (2016). <em>Competitividad.</em>',
      link: 'https://economipedia.com/definiciones/competitividad.html',
    },
    {
      referencia: 'Roldán, P. N. (2017). <em>Tecnología.</em>',
      link: 'https://economipedia.com/definiciones/tecnologia.html',
    },
    {
      referencia:
        'Westreicher, G. (2020). <em>Diferencia entre método y metodología.</em>',
      link:
        'https://economipedia.com/definiciones/diferencia-entre-metodo-y-metodologia.html',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
