<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Sistemas de producción 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-left")
      .col-md-4.mb-3
        img(src="@/assets/curso/temas/tema1/img-1.svg")
      .col-md-8
        p Los sistemas de producción pecuaria involucran varios aspectos que interactúan entre ellos, para que el desarrollo de la actividad productiva llegue al fin esperado.
        p La relación de aguas, tierras, personal y capital es practicada en todo el mundo desde la antigüedad y aun en esta época es un sistema eficaz y necesario para solventar la demanda de alimentos producto de la sobrepoblación. 
        p Para la Organización de las Naciones Unidas para la Alimentación y la Agricultura FAO existen tres sistemas principales de producción pecuaria, los cuales de describen a continuación:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1" data-aos="fade-down-left")
      .row(titulo="Sistemas industriales ")
        .col-md-8.mb-4.mb-md-0
          p Este tipo de sistemas se presentan cuando las especies animales no tienen interacción con el campo abierto y se encuentran confinados en un solo sector, siendo dependientes totalmente de procesos industriales para el abastecimiento alimenticio y demás actividades propias de cada sistema.  
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema1/img-2.png', alt='')

      .row(titulo="Sistemas mixtos")
        .col-md-7.mb-4.mb-md-0
          p Los sistemas mixtos se presentan cuando de combinan las actividades pecuarias con las actividades agrícolas en una sola parcela o finca productora. Este tipo de sistemas se encuentran en mayor escala en los pequeños productores.
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema1/img-3.png', alt='')

      .row(titulo="Sistemas de pastoreo ")
        .col-md-8.mb-4.mb-md-0
          p Los sistemas de pastoreo son la interacción de especies animales con cultivos, generalmente establecidos para el consumo de los animales. Este tipo de proceso mejora los estándares de producción y calidad de los productos a obtener, ya que el aumento de la calidad y cantidad de nutrientes tiene efecto positivo en el desarrollo de los animales disminuyendo tiempos de producción y costos de producción. 
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema1/img-4.png', alt='')
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
