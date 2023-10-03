export default {
  global: {
    componenteFormativo:
      'Manejo de residuos y registros en la bioseguridad de las producciones pecuarias ',
    descripcionCurso:
      'El manejo de los residuos provenientes de la actividad pecuaria es una herramienta que apoya la reducción de costos en fertilizantes, ya que su aprovechamiento en la producción de abono orgánico, es una ventaja para el finquero y una excelente opción para la mejora de los suelos, propendiendo por la protección del medio ambiente. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Sistemas de producción',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Especie animal',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Insumos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Excretas y purines',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Envases, empaque y embalaje',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Residuos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Registros',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Plan de contingencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Manejo de intoxicaciones',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Manejo de derrame de sustancias',
            hash: 't_8_2',
          },
        ],
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
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_14_722200.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Sistemas de producción',
      referencia:
        'Decreto 4741 de 2015. [Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. “Por el cual se reglamenta parcialmente la prevención y manejo de los residuos o desechos peligrosos generados en el marco de la gestión integral”. Diciembre 30 de 2005.',
      tipo: 'Documento legal',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=18718',
    },
    {
      tema: '1. Sistemas de producción',
      referencia:
        'Martínez, J. (2005). Guía para la Gestión integral de residuos peligrosos. Centro Coordinador del Convenio de Basilea para América Latina y el Caribe.',
      tipo: 'PDF',
      link:
        'https://www.cempre.org.uy/docs/biblioteca/guia_para_la_gestion_integral_residuos/gestion_respel01_fundamentos.pdf',
    },
    {
      tema: '1. Sistemas de producción',
      referencia:
        'Ángel, J. (2017). Cómo funciona la lombricultura. TV Agro, [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=FE7C-K6x3bg',
    },
    {
      tema: '3. Insumos',
      referencia:
        'Criador. (2020). Insecticida/concentrado emulsionable ficha técnica.',
      tipo: 'PDF',
      link:
        'https://www.syngenta.com.mx/sites/g/files/kgtney1381/files/media/document/2022/07/28/fichatecnica-cridor.pdf',
    },
    {
      tema: '3. Insumos',
      referencia:
        'Centro de Información de Sustancias Químicas, Emergencias y Medio Ambiente. (2010). Atención de derrames.',
      tipo: 'PDF',
      link: 'https://www.arlsura.com/files/atencion_derrames.pdf',
    },
    {
      tema: '4. Excretas y purines',
      referencia:
        'Resolución 773 de 2020. [Ministerio de Salud Protección Social de Colombia]. Por medio de la cual se adopta el protocolo de bioseguridad para el manejo y control del riesgo de la enfermedad COVID 19 en el sector pecuario, para las explotaciones avícolas, porcícolas, ganadera, equina, acuícolas, pesquero y predios productores de pequeñas especies y empresas productoras, importadoras, de almacenamiento, acondicionadoras y comercializadoras de insumos pecuarios. (2020).',
      tipo: 'Documento legal',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Forms/DispForm.aspx?ID=6059',
    },
    {
      tema: '4. Excretas y purines',
      referencia:
        'Ángel, J. (2015). Técnica para la elaboración de compostaje en una granja. TV Agro, [video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/e4poW8buvVU?si=oV2zs3HCud18oBNy',
    },
    {
      tema: '7. Registros',
      referencia:
        'Unidad para las Victimas. (2016). Formato etiquetado de residuos peligrosos proceso de gestión administrativa.',
      tipo: 'Formato',
      link:
        'https://www.unidadvictimas.gov.co/es/etiqueta-residuos-peligrosos-v2/14943',
    },
    {
      tema: '7. Registros',
      referencia:
        'Bienestar Familiar (2019). Proceso servicios administrativos formato manejo residuos peligrosos.',
      tipo: 'Formato',
      link:
        'https://www.icbf.gov.co/system/files/procesos/f1.p27.sa_formato_manejo_de_residuos_peligrosos_v4_1.xlsx',
    },
  ],
  glosario: [
    {
      termino: 'Eclosión',
      significado:
        'Acción de nacer o brotar un ser vivo después de romper la envoltura.',
    },
    {
      termino:
        'Acción de nacer o brotar un ser vivo después de romper la envoltura.',
      significado: 'Incubar los huevos.',
    },
    {
      termino: 'EPP',
      significado: 'Elementos de protección personal.',
    },
    {
      termino: 'Heces',
      significado: 'Material que se evacua durante la defecación.',
    },
    {
      termino: 'IAP',
      significado: 'Investigación Acción Participativa.',
    },
    {
      termino: 'PGIRS',
      significado: 'Plan de Gestión Integral de Residuos Sólidos.',
    },
    {
      termino: 'Purines',
      significado:
        'Material carbonatado de origen animal que se utiliza como abono.',
    },
    {
      termino: 'RESPEL',
      significado:
        'Residuos peligrosos - es el instrumento de gestión de información mediante el cual se captura información normalizada, homogénea, sistemática sobre la generación y el manejo de residuos o desechos peligrosos, originados por las diferentes actividades productivas y sectoriales del país.',
    },
  ],
  referencias: [
    {
      referencia:
        'Centro de Información de Sustancias Químicas, Emergencias y Medio Ambiente. (2010). Atención de derrames.',
      link: 'https://www.arlsura.com/files/atencion_derrames.pdf',
    },
    {
      referencia:
        'Decreto 4741 de 2015. [Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. “Por el cual se reglamenta parcialmente la prevención y manejo de los residuos o desechos peligrosos generados en el marco de la gestión integral”.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=18718',
    },
    {
      referencia:
        'Elempaque.com. (2021). Colombia estrena el código unificado de colores para la separación de residuos en la fuente.',
      link:
        'https://www.elempaque.com/temas/Colombia-estrena-el-codigo-unificado-de-colores-para-la-separacion-de-residuos-en-la-fuente+136549',
    },
    {
      referencia:
        'Fedegan. (2015). Número de vacas por hectárea se duplica en fincas tecnificadas.',
      link:
        'https://www.fedegan.org.co/noticias/numero-de-vacas-por-hectarea-se-duplica-en-fincas-tecnificadas',
    },
    {
      referencia:
        'Gómez, J., Sánchez, O. Pérez, L. (2019). Residuos urbanos, agrícolas y pecuarios en el contexto de las biorrefinerías. Revista Facultad de Ingeniería. Universidad de Caldas.',
      link: 'https://www.redalyc.org/journal/4139/413961282001/html/',
    },
    {
      referencia:
        'IDEAM. (2019). Plan de contingencias de residuos peligrosos. IDEAM.',
      link:
        'http://sgi.ideam.gov.co/documents/412030/41385931/E-SGI-A-PL003+PLAN+DE+CONTINGENCIAS+DE+RESIDUOS+PELIGROSOS.pdf/ac57ef69-4deb-4415-a680-21d696034c0c?version=1.0#:~:text=El%20plan%20de%20contingencia%20de,de%20generar%20un%20riesgo%20ambiental',
    },
    {
      referencia:
        'Instituto Nacional de Salud. (2011). Protocolo de vigilancia y control de intoxicaciones por plaguicidas. Subdirección de Vigilancia y Control en Salud Pública.',
      link: '',
    },
    {
      referencia:
        'Martínez, J. (2005). Guía para la gestión integral de residuos peligrosos. Centro Coordinador del Convenio de Basilea para América Latina y El Caribe.',
      link: '',
    },
    {
      referencia:
        'Resolución 773 de 2020. [Ministerio de Salud Protección Social de Colombia]. Por medio de la cual se adopta el protocolo de bioseguridad para el manejo y control del riesgo de la enfermedad COVID 19 en el sector pecuario, para las explotaciones avícolas, porcícolas, ganadera, equina, acuícolas, pesquero y predios productores de pequeñas especies y empresas productoras, importadoras, de almacenamiento, acondicionadoras y comercializadoras de insumos pecuarios. Mayo 14 de 2020.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Forms/DispForm.aspx?ID=6059',
    },
    {
      referencia:
        'IDEAM. (2007). Registro de generadores de residuos o desechos peligrosos. RESPEL - IDEAM.',
      link:
        'http://www.ideam.gov.co/web/contaminacion-y-calidad-ambiental/respel',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Felipe Avilan Lozano',
          cargo: 'Experto temático',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
        {
          nombre: 'Diana Marcela Luis Vásquez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Ana Vela Rodríguez Velásquez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Evaluadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñadora y Evaluador Instruccional',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Humberto Arias Díaz',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Inés Machado López',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador web',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyborad e Ilustración',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelsón Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Livtin',
          cargo: 'Animador',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
