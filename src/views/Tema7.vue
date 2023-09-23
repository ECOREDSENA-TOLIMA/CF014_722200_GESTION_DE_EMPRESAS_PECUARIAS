<template lang="pug">
.curso-main-container.pb-3.tema7
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Registros     

    .row.mb-3.mb-5
      .col-md-3
        img(src='@/assets/curso/temas/tema7/img-1.png' alt='')
      .col-md-9
        .color-primario.p-4.mb-4(style="background-color:#DBF9BD")
          p.mb-0 El registro de generadores de residuos o desechos peligrosos es la herramienta de captura de información establecida en el Capítulo VI del Decreto 4741 del 30 de diciembre de 2005 “Por el cual se reglamenta parcialmente la prevención y manejo de los residuos o desechos peligrosos generados en el marco de la gestión integral", expedido por el Ministerio de Ambiente, Vivienda y Desarrollo Territorial -MAVDT.
        p Esta herramienta facilita el conocimiento de la problemática asociada a este tipo de residuos, la planificación de su gestión y el establecimiento de prioridades para la definición de acciones que contribuyan a la solución de esta problemática.
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0Mediante Mediante la Resolución 1362 del 2 de agosto de 2007 el MAVDT estableció los requisitos y procedimientos para el Registro de generadores de residuos o desechos peligrosos a que hacen referencia los Artículos 27 y 28 del Decreto 4741 de 2005 
          .bloque-texto-d__autor
            span -  <strong>-  RESPEL - IDEAM, 2007</strong>
            i.fas.fa-quote-right
       
    p Lo anterior hace parte del registro que grandes generadores de residuos peligrosos deben hacer ante la autoridad ambiental, todo en el marco del cumplimiento de la legislación colombiana y para llevar un control detallado sobre los alcances de las políticas públicas en materia de manejo de los RESPEL.
    p.mb-5 Para los finqueros y pequeños productores es primordial llevar un registro de la cantidad de residuos peligrosos que se generan en las actividades pecuarias y, realizar formatos que contengan la información básica del control que se realiza en el manejo y la posterior entrega al gestor. 

    .row.justify-content-center.mb-5 
      .cajon.p-4(style="background-color:#FFFAD0")(data-aos="flip-up")
        .col-lg-4
          .tarjeta.tarjeta-1.p-4.mb-5(style="background-color:#1B3F5E")(data-aos="flip-up")
            .row.justify-content-center.align-items-center
              .col-lg-9
                h2(data-aos="fade-left")(style="color:#ffff") Diligenciamiento

        .row.justify-content-center
          .col-sm-2
            figure(data-aos="flip-up")
              img(src='@/assets/curso/temas/tema7/decorador-1.svg', alt='Texto que describa la imagen')
          .col-sm-10
            p(data-aos="fade-left") Se debe establecer un formato para el registro de los RESPEL, en el cual se encuentre la cronología de los plaguicidas desde la adquisición hasta la entrega, el tipo de sustancia, uso, personal responsable de la manipulación, lavado, almacenamiento y entrega final en los sitios autorizados. 
            p(data-aos="fade-left") El diligenciamiento será responsabilidad del personal encargado de la manipulación de los RESPEL, con la supervisión del almacenista o administrador de la finca, con el fin de definir responsabilidades.

    .row
      .col-lg-4
        .tarjeta.tarjeta-1.p-4.mb-5(style="background-color:#1B3F5E")(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-lg-9
              h2(data-aos="fade-left")(style="color:#ffff") Formatos 

    p No existe un formato único para el control de registro RESPEL, por tal razón los formatos son formulados por el finquero y deben contener la información básica necesaria. En el material complementario podrá acceder a ejemplos de formatos de RESPEL, relacionados con la Unidad de víctimas y el ICBF.
    p.mb-5 Para complementar el tema sobre RESPEL, ver el siguiente vídeo: 

    Separador



</template>

<script>
export default {
  name: 'Tema7',
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
