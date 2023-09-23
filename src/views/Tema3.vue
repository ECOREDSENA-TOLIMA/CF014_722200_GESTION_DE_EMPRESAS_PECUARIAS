<template lang="pug">
.curso-main-container.pb-3.tema3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Insumos

    p Los insumos en el sector pecuario se pueden definir como un producto que se usa para la producción de otros productos, de acuerdo con las necesidades y el tipo de sistema productivo.
    p.mb-5 Estos insumos son realizados previamente por otros productores, con el fin de suplir necesidades en el campo agrícola, que apoyan el desarrollo productivo de las especies, ya sean:

    .row.mb-5
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.color-secundario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema3/decorador-1.svg', alt='Texto que describa la imagen')

          h3.text-center Medicamentos

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.color-secundario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema3/decorador-2.svg', alt='Texto que describa la imagen')

          h3.text-center Alimentos

      .col-sm-6.col-lg-3.mb-4.mb-sm-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.color-secundario.text-white--hover.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema3/decorador-3.svg', alt='Texto que describa la imagen')

          h3.text-center Herramientas

      .col-sm-6.col-lg-3
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.color-secundario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema3/decorador-4.svg', alt='Texto que describa la imagen')

          h3.text-center Materiales

    .row
      .col-lg-3
        .tarjeta.tarjeta-1.p-4.mb-5(style="background-color:#1B3F5E")(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-lg-9
              h2(data-aos="fade-left")(style="color:#ffff") Ficha técnica

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-md-8
        p Cada insumo proveniente del exterior o elaborado en Colombia y que tenga registro INVIMA posee una ficha técnica en la que se describe la información necesaria con base en sus características físicas, químicas, técnicas, modos de uso y demás datos que sean importantes para que el comprador defina si ese producto es el que necesita, de acuerdo con su actividad productiva.
        p Asimismo, los subproductos que se puedan realizar utilizando como materia prima los residuos provenientes de los procesos pecuarios deben tener una ficha técnica, si se tiene en mente la comercialización de estos como insumos, para este caso se debe hacer análisis de los componentes para describir e informar las cualidades de estos.
      .col-md-4
        img(src="@/assets/curso/temas/tema3/img-1.svg")
    
    .row
      .col-lg-3
        .tarjeta.tarjeta-1.p-4.mb-5(style="background-color:#1B3F5E")(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-lg-9
              h2(data-aos="fade-left")(style="color:#ffff") Protocolo     

    .row.justify-content-center.align-items-center
      .color-primario.p-4(style="background-color:#DBF9BD")
        p.mb-0 Los protocolos de uso de los insumos agrícolas o pecuarios están definidos por el Gobierno Nacional debido a la emergencia sanitaria a través de la <strong>Resolución 773</strong> de 2020, en la cual se adopta el protocolo de bioseguridad para el manejo y control del riesgo de la enfermedad COVID 19 en el sector pecuario, para más información leer la Resolución 773 de 2020, ubicada en la sección del material complementario.
      figure
        img.mb-0(src='@/assets/curso/temas/tema3/img-2.png', alt='') 





</template>

<script>
export default {
  name: 'Tema3',
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
