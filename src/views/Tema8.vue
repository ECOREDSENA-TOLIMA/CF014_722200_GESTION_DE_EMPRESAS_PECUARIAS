<template lang="pug">
.curso-main-container.pb-3.tema8
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Plan de contingencias     

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema8/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los planes de contingencias están definidos como los procedimientos operativos que permiten determinar la respuesta inmediata a eventos atípicos que pueden ocasionar una emergencia ambiental, con el fin de atenderlos de manera efectiva y eficiente para mitigar los riesgos ambientales (IDEAM, 2019).

    #t_8_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.1 Manejo de intoxicaciones 

    p.mb-5 Para el manejo adecuado ante una posible intoxicación por plaguicidas o químicos utilizados en el sistema productivo pecuario, primero se debe tener en cuenta la clasificación y el tipo de plaguicida utilizado, para ello se debe tener en cuenta la siguiente tabla:

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10(alt="Tabla 1 Especies forestales. En la tabla se observan los nombres comunes, nombre científico, tropico y uso.")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Tabla 1.] <em>Tipos de plaguicidas</em>
        .tabla-a.color-secundario
          table
            caption Nota. Tomado del Instituto Nacional de Salud (2011).
            thead
              tr
                th Tipo
                th Características
                th Actividades
            tbody
              tr
                td Inorgánicos 
                td Fabricados a partir de metales como cobre, plomo, arsénico.
                td Oxicloruro de cobre <br>Oxicloruro de zinc 
              tr
                td(style="background-color:#E2E8EC") Plaguicidas vegetales 
                td(style="background-color:#E2E8EC") Son extraídos de diversas partes de vegetales
                td(style="background-color:#E2E8EC") Piretrinas <br>Nicotina 
              tr
                td Plaguicidas vegetales 
                td Son sintetizados por el hombre en el laboratorio. Comprenden un amplio grupo de sustancias. 
                td Organofosforados <br>Organoclorados <br>Carbamantos <br>Ditiocarbamantos <br>Biperidilos <br>Derivados <br>warfarinicos 
              tr
                td(style="background-color:#E2E8EC") Microorganismos vivos  
                td(style="background-color:#E2E8EC") Son sintetizados por el hombre en el laboratorio. Comprenden un amplio grupo de sustancias. 
                td(style="background-color:#E2E8EC") <em>Thichoderma harzianum</em> <br><em>Paecilomuces lilacinus</em> <br><em>Metarhizium abisopliae</em> <br><em>Beauveria bassiana</em>
              
    p.mb-5 Después de tener claro el tipo de sustancia que se utiliza y los derivados, se debe clasificar el tipo de intoxicación de acuerdo con la exposición, tipo u origen, como se muestra a continuación:

    .tarjeta.color-secundario.p-4.mb-5(data-aos="fade-down-left")(style="background-color:#DBF9BD") 
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Intoxicación aguda
            p El cuadro clínico se presenta en las primeras 24 horas luego de la exposición a plaguicidas cuyos signos y síntomas dependen del grupo químico al que pertenecen (1,2,3,4).
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema8/img-2.png', alt='')
        
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Intoxicación crónica 
            p Cuando el cuadro clínico que se presenta luego de exposición repetida a dosis bajas de plaguicidas por periodos de tiempo prolongados. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema8/img-3.png', alt='')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Exposición aguda 
            p <strong>Ocupacional:</strong> compromete a grupos de edad laboralmente activos durante las actividades de producción y uso.
            p <strong>Accidental:</strong> exposición de manera no intencional e inesperada (incluye intoxicaciones alimentarias).
            p <strong>Intencional:</strong> se produce con el propósito de causar daño; incluye intentos de suicidio y homicidio.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema8/img-4.png', alt='')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Exposición crónica 
            p <strong>Ocupacional:</strong> por la exposición repetida a dosis bajas por periodos de tiempos largos con procesos productivos y uso (procesos de preparación de plaguicidas).
            p <strong>Medioambiental:</strong> cuando la población en general está expuesta a plaguicidas por diferentes vías o rutas de exposición (agua, aire, alimentos contaminados).
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema8/img-5.png', alt='')


    p.mb-5 De acuerdo con la clasificación de la intoxicación se definen los criterios para la medición de la afectación en cada caso, esto se hace con la ayuda de pruebas de laboratorio, revisión médica o con los síntomas asociados. En cualquier caso, es mejor recurrir al especialista para iniciar un tratamiento de desintoxicación, ver tabla.

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10(alt="Tabla 2 Especies forestales. En la tabla se observan los nombres comunes, nombre científico, tropico y uso.")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Tabla 2.] <em>Definición operativa de caso</em>
        .tabla-a.color-secundario
          table
            caption Nota. Tomado Instituto Nacional de Salud (2011).
            thead
              tr
                th Tipo de caso
                th Característica de la 
            tbody
              tr
                td(style="background-color:#E2E8EC") Caso confirmado por laboratorio 
                td(style="background-color:#E2E8EC")
                  ul.lista-ul.mb-3
                    li 
                      i.lista-ul__vineta
                      | Caso que sugiere IAP por presentar síntomas o signos compatibles con una intoxicación o cuadro clínico relacionado o atribuible a una exposición a plaguicidas, en el que los laboratorios (según sea el caso) evidencien una alteración atribuible a la exposición a plaguicidas.
                    li 
                      i.lista-ul__vineta
                      | Antecedentes de exposición al tóxico con indicador biológico alterado (de exposición o de efecto) de acuerdo con el plaguicida. 
                    li  
                      i.lista-ul__vineta
                      | En caso de fallecimiento, confinación de la intoxicación por medio de procedimientos médicos legales.
              tr
                td Caso confirmado clínicamente
                td Caso en el que se establece al menos uno de los siguientes criterios:
                  ul.lista-ul.mb-3
                    li 
                      i.lista-ul__vineta
                      | Antecedente comprobado de exposición al plaguicida y manifestaciones clínicas como consecuencia de esta exposición.
                    li 
                      i.lista-ul__vineta
                      | Que las características del cuadro clínico, la o las vías de exposición implicadas, la relación entre el agente y el mecanismo de acción y su asociación en el tiempo se relacionen con las manifestaciones clínicas de la intoxicación.médicos legales.
              tr
                td(style="background-color:#E2E8EC") Caso confirmado por nexo epidemiológico 
                td(style="background-color:#E2E8EC") Caso con cuadro clínico compatible con IAP relacionable con otro(s) caso(s) confirmado(s) o evento(s) medioambientales, en los cuales estén implicados plaguicidas. <br>El nexo debe tener relación en el tiempo y la zona geográfica.
              tr
                td Brote  
                td Episodio en el cual dos o más personas presentan un cuadro clínico compatible con IAP en un mismo lugar o zona geográfica y, donde se compruebe la exposición efectiva al agente causal y se identifiquen factores de riesgo asociados.
              tr
                td(style="background-color:#E2E8EC") Alerta
                td(style="background-color:#E2E8EC") Conjunto de eventos relacionados con las intoxicaciones por plaguicidas que, según criterios epidemiológicos, demandan una acción de manera inmediata. <br>Ellos son:
                  br
                  br
                  ul.lista-ul.mb-3
                    li 
                      i.lista-ul__vineta
                      | Intoxicación de gestantes y/o lactantes.
                    li 
                      i.lista-ul__vineta
                      | Intoxicación en menores de edad.
                    li 
                      i.lista-ul__vineta
                      | Intoxicación con plaguicidas no registrados o prohibidos.
                    li 
                      i.lista-ul__vineta
                      | Situaciones de emergencia donde estén involucrados plaguicidas tales como derrames, fugas, desastres naturales, desastres tecnológicos.
                    li 
                      i.lista-ul__vineta
                      | Brotes.
                    li 
                      i.lista-ul__vineta
                      | Toda intoxicación individual o colectiva asociada al programa de erradicación de cultivos ilícitos con el herbicida glifosato.
                    li 
                      i.lista-ul__vineta
                      | Aquellas alertas que las comisiones, comités o consejos de vigilancia de plaguicidas consideren que deben ser investigadas.

    Separador 

    #t_8_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.2 Manejo de derrame de sustancias 

    p.mb-5 Para el manejo de sustancias químicas peligrosas se tienen en el mercado una gama de productos para la contención y recolección de acuerdo con su composición, entre los que se encuentran:

    .row.justify-content-center.mb-5 
      .cajon.p-4(style="background-color:#FFFAD0")(data-aos="flip-up")
        .row.justify-content-center
          .col-sm-2.mb-3
            figure(data-aos="flip-up")
              img(src='@/assets/curso/temas/tema8/decorador-1.svg', alt='Texto que describa la imagen')
          .col-sm-10
            ol.lista-ol
              li 
                span.text-bold 1. 
                | Estibas contenedoras.
              li 
                span.text-bold 2. 
                | Materiales absorbentes.
              li 
                span.text-bold 3. 
                | Kit de emergencia o de derrames.
            p(data-aos="fade-left") El uso de estos elementos debe hacerse de acuerdo con las recomendaciones del fabricante y con el uso de los EPP para evitar cualquier riesgo a la salud humana.

    p.mb-5 Para más información sobre el manejo de derrames se solicita al aprendiz revisar el documento atención de derrames de la ARP Sura, ubicado en la sección del material complementario. Para complementar el tema sobre manejo ecológico de plagas, ver el siguiente vídeo: 

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/0eoL8DTl7P8" title="Manejo ecológico de plagas y enfermedades" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)





</template>

<script>
export default {
  name: 'Tema8',
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
