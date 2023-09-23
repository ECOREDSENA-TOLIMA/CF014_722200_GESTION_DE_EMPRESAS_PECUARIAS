<template lang="pug">
.curso-main-container.pb-3.tema6
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Residuos       

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-left")
      .col-md-8.mb-3
        img(src="@/assets/curso/temas/tema6/img-1.png")
      .col-md-4
        p La utilización de residuos pecuarios como fertilizantes agrícolas permite recuperar la fertilidad química y física de los suelos, aumentando la producción de los cultivos. Pese a los beneficios y a que disminuye el uso de fertilizantes minerales, su utilización es escasa, debido al desconocimiento generalizado sobre el manejo, tratamiento y posterior utilización como abono orgánico para los suelos.

    .row
      .col-lg-2
        .tarjeta.tarjeta-1.p-4.mb-5(style="background-color:#1B3F5E")(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-lg-8
              h2(data-aos="fade-left")(style="color:#ffff") Tipos

    p.mb-5 En la industria pecuaria se producen tres tipos de residuos, la mayoría pueden ser aprovechados si se cuenta con un Plan de Gestión Integral de Residuos Sólidos PGIRS, en cual se dictamine los pasos a seguir para la separación en la fuente, aprovechamiento y posterior disposición final. Estos tipos de residuos son:

    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema6/decorador-1.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-primario(style="background-color:#EBEEE8")
            .p-4
              h2(style="color:#000") Residuos sólidos comunes
              p(style="color:#000") Este tipo de residuos son producidos por las actividades antrópicas y se clasifican como aprovechables, orgánicos y no aprovechables. 

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema6/decorador-2.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-acento-botones(style="background-color:#EBEEE8")
            .p-4
              h2(style="color:#000") Residuos pecuarios
              p(style="color:#000") Son los residuos de origen orgánico que se producen por las actividades de producción (heces, orín, residuos de alimentos, etc.), los cuales son aptos para un proceso de transformación para producir abono orgánico.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema6/decorador-3.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-acento-contenido(style="background-color:#EBEEE8")
            .p-4
              h2(style="color:#000") Residuos peligrosos
              p(style="color:#000") Son los que están relacionados con el uso de plaguicidas y químicos en la industria pecuaria.

    .row
      .col-lg-5
        .tarjeta.tarjeta-1.p-4.mb-5(style="background-color:#1B3F5E")(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-lg-9
              h2(data-aos="fade-left")(style="color:#ffff") Clasificación y disposición 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.mb-5.mb-lg-0
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 A partir de la <strong>Resolución 2184 de 2019</strong> del Ministerio de Ambiente y Desarrollo Sostenible el código de colores para el manejo de residuos cambió, empezando a regir a partir del 1° de enero de 2020 definido por tres colores para el manejo de los residuos sólidos comunes, ver figura.  
          .bloque-texto-d__autor
            span -  <strong>Ministerio de Ambiente y Desarrollo Sostenible</strong>
            i.fas.fa-quote-right

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-12.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 3.] <em>Código de colores residuos sólidos comunes</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema6/img-2-1.svg', alt='')  

    .row.mt-5
      .col-10.col-md-10.col-lg-12.movil.mb-5(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 3.] <em>Código de colores residuos sólidos comunes</em>
        figure
          img(src='@/assets/curso/temas/tema6/img-2-2.svg', alt='o')  
    
    .row.justify-content-center.align-items-center
      .col-lg-10
        .color-primario.p-4.mb-5(data-aos="fade-down-left")(style="background-color:#DBF9BD")
          p Un residuo o desecho peligroso es aquel que, por sus características corrosivas, reactivas, explosivas, tóxicas, inflamables, infecciosas o radiactivas, puede causar algún riesgo o daño para la salud humana y el ambiente cuando es inadecuadamente manejado. Los envases que los contienen también son considerados residuos peligrosos (Decreto 4741 de 2015).

    p.mb-4 Para una mejor comprensión del manejo de residuos peligrosos se recomienda ver el <strong>Decreto 4741 de 2015,</strong> ubicado en la sección del material complementario. 

    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-down-left")
      .col-md-2.mb-3
        img(src="@/assets/curso/temas/tema6/decorador-4.svg")
      .col-md-10
        p El Gobierno Nacional a través del Ministerio de Ambiente y Desarrollo Sostenible ha expedido la normatividad necesaria para el impulso de programas de manejo integral de residuos peligrosos y para garantizar el posconsumo, tras un proceso de transformación que los convierte en nuevas materia primas, para esto se busca que los residuos destinados al posconsumo sean separados de los residuos sólidos comunes u ordinarios y que sean manejados de manera que no se conviertan en un riesgo para la salud y el ambiente, para así ser reciclados o aprovechados por empresas que estén autorizadas para la manipulación de estos;  nada de esto se puede lograr si los consumidores no asumen comportamientos y hábitos de consumo saludable.

    p Se solicita al aprendiz revisar el artículo de Javier Martínez (2005) sobre la guía para la gestión integral de residuos peligrosos, ubicado en la sección del material complementario.



</template>

<script>
export default {
  name: 'Tema6',
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
