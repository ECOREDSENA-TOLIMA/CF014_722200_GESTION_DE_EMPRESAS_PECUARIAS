<template lang="pug">
.curso-main-container.pb-3.tema4
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Excretas y purines

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las excretas son el resultado del proceso digestivo de los seres vivos en los que se desecha el material que no es apto para su digestión, en donde existe una gran carga orgánica que contiene microorganismos dañinos que pueden causar enfermedades. 
          br
          br
          | Por su parte, los purines son la mezcla producida por las heces y orines de los animales con los restos de comida y agua, que son fuente de abono orgánico para la fertilización de terrenos para el cultivo.
    
    .row
      .col-lg-3
        .tarjeta.tarjeta-1.p-4.mb-5(style="background-color:#1B3F5E")(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-lg-9
              h2(data-aos="fade-left")(style="color:#ffff") Manejo

    p.mb-5 Para el manejo de las excretas y los purines es vital la infraestructura que se tenga para su recolección, ya que en los sistemas de producción a espacio abierto es más difícil, comparado con los sistemas bajo techo que poseen una menor área de ejecución. 

    .row.justify-content-center.align-items-center 
      .col-12
        .tarjeta.tarjeta.p-4.mb-5(style="background-color:#FFFAD0")(data-aos="flip-up")
          .row.justify-content-center.align-items-center 
            .col-8.mb-3
              p En el caso concreto del ganado cuando su permanencia es solo en potreros las heces de estos van directamente al suelo, aportando nutrientes para el crecimiento del forraje. Caso diferente en los hatos lecheros donde la infraestructura del suelo rígido facilita la recolección por medio de canales de los orines que contienen urea y de las excretas de manera manual o mecánica.
              p Lo mismo ocurre en la avicultura, gracias a los pisos de los galpones que generalmente se construyen de manera que las heces caigan a una plataforma movible para su recolección.
              p En la porcicultura es necesario que las cocheras se construyan con un piso en concreto, con un desnivel hacia el canal de salida, en el cual se dispondrá un recipiente para la recolección. 
            .col-lg-4
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema4/img-2.svg', alt='Texto que describa la imagen') 
    
    .row.mb-3.mb-5
      .col-md-4
        img(src='@/assets/curso/temas/tema4/img-3.png' alt='')
      
      .col-md-8
        h2 Almacenamiento
        p Para el almacenamiento de los residuos provenientes de los animales es necesario la construcción de un sitio para el compostaje, el cual debe estar alejado de la vivienda, con buena ventilación y cubierto. En este lugar se dispondrá lo recolectado de la unidad de producción y se adelantará el proceso de transformación elegido por el finquero para la producción de abono orgánico. 
        p Es importante señalar que el mal acondicionamiento del sitio de almacenamiento puede ocasionar la propagación de vectores y roedores, por esta razón es importante documentarse antes de realizar la instalación. 
  
    .row
      .col-lg-3
        .tarjeta.tarjeta-1.p-4.mb-5(style="background-color:#1B3F5E")(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-lg-12
              h3(data-aos="fade-left")(style="color:#ffff") Aprovechamiento

    .cajon.color-primario.p-4.mb-5(data-aos="fade-down-left")(style="background-color:#EBEEE8")
      p En Colombia el sacrificio de vacunos destinado a la exportación presentó una disminución de 28,9 %, una tendencia que ha sido generalizada en el año. Pasó de un equivalente de 82.731 cabezas en el 3er trimestre de 2021 a 58.794 cabezas durante el mismo trimestre de 2022.  En comparación con el tercer trimestre del año 2018 alcanzó un total de 496.445 toneladas con un rendimiento carnal para el ganado vacuno de 52,4 % y para el porcino 79,7 %. En el sector avícola el rendimiento oscila entre el 71 % y 73 %. La mayoría de los residuos de la industria pecuaria son considerados subproductos y se utilizan como aditivos o materias primas en alimentos o piensos para animales (Gómez, 2019).
    
    p En los sistemas pecuarios también existen otro tipo de residuos que son producidos durante el proceso de desarrollo de los animales (heces, orín, plumas, desperdicio de alimentos, entre otros) que son aptos para un proceso de aprovechamiento.
    p.mb-5 Para complementar el tema sobre el proceso de aprovechamiento de residuos, ver el siguiente vídeo: 

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/OXCcle6aU08" title="Uso de residuos pecuarios" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row
      .col-lg-3
        .tarjeta.tarjeta-1.p-4.mb-5(style="background-color:#1B3F5E")(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-lg-10
              h2(data-aos="fade-left")(style="color:#ffff") Normativa

    p.mb-5 El marco normativo vigente que regula la gestión de los residuos orgánicos a nivel nacional es el siguiente:

    .row.mb-5
      .col-md-6.col-xl.mb-4.mb-xl-0
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-primario.p-5(style="height:100%")
          .tarjeta-numerada__numero
            .h2 1
          p.text-center 
            b Conpes 3874 de 2016 Republica de Colombia 21 de noviembre de 2016.
          p.text-center Política nacional para la gestión integral de residuos sólidos hermanos. 

      .col-md-6.col-xl.mb-4.mb-xl-0
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            .h2 2
          p.text-center 
            b Resolución 0316 de 2018 emitida por el Ministerio de Ambiente y Desarrollo Sostenible 01 de marzo de 2018.
          p.text-center Por la cual se establecen disposiciones relacionadas con la gestión de aceites de cocina usados y se dictan otras disposiciones. 

      .col-md-6.col-xl.mb-4.mb-xl-0
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-primario.p-5(style="height:100%")
          .tarjeta-numerada__numero
            .h2 3
          p.text-center 
            b Resolución No. 1096 de 2000 emitida por el Ministerio de Desarrollo Económico 17 de noviembre de 2000. 
          p.text-center Por la cual se adopta el Reglamento Técnico para el sector de Agua Potable y Saneamiento Básico RAS.

      .col-md-6.col-xl.mb-4.mb-xl-0
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-acento-contenido.p-5(style="height:100%")
          .tarjeta-numerada__numero
            .h2 4
          p.text-center 
            b Norma técnica colombiana NTC5167 de 2011 por Icontec
          p.text-center Productos para la Industria Agrícola. Productos Orgánicos usados como abonos o fertilizantes y enmiendas o acondicionadores del suelo. 
      
    p.mb-5 Para complementar el tema sobre manejo y disposición de residuos de la producción pecuaria, como la normativa, ver el siguiente vídeo: 

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/xR21CVyJNJU" title="Manejo y disposición de residuos de la producción avícola" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)




</template>

<script>
export default {
  name: 'Tema4',
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
