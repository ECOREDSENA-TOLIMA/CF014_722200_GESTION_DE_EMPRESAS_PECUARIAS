<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p Para recapitular, dentro del componente formativo, <strong>Manejo de residuos y registros en la bioseguridad de las producciones pecuarias,</strong> se abarcan temas como los sistemas de producción, en el cual se incluyen sistemas industriales, mixtos y de pastoreo; igualmente se tiene en cuenta el bienestar animal, como base para la producción animal; las especies animales en Colombia clasificadas en mayores y menores; incorporando el manejo animal en reproducción, de la misma forma se tiene en cuenta el aprovechamiento de excretas y purinas, también los insumos para producción de otros productos, la bioseguridad para el manejo y control de riesgo; se resalta el los registros y formatos ante la autoridad ambiental, la regulación del manejo de envases, empaque y embalaje, para finalizar lo concerniente al plan de contingencia como respuesta inmediata ante emergencia ambiental.
    p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
