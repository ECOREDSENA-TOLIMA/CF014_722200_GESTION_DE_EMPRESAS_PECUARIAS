<template lang="pug">
.curso-main-container.pb-3.tema2
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Especie animal 

    .row.justify-content-center.align-items-center.mb-5.cuadro-1
      .col-md-10.col-10
        p.mb-5.parrafo En la producción pecuaria se exaltan algunas especies, las más utilizadas en Colombia son los bovinos, los porcinos, las aves, los caprinos y los ovinos, siendo catalogados como especies mayores los bovinos y como especies menores los demás.
      .col-10.col-md-10.col-lg-10.imagen(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 1.] <em>Especies pecuarias</em>
        figure
          img(src='@/assets/curso/temas/tema2/img-1.svg', alt='Figura 1 Especies pecuarias. En la figura se observa como ejemplo un equino, bovino, oveja, gallo y cerdo.')  

    .row
      .col-lg-3
        .tarjeta.tarjeta-1.p-4.mb-5(style="background-color:#1B3F5E")(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-lg-12
              h3(data-aos="fade-left")(style="color:#ffff") Características

    p.mb-5 Las diferentes especies de animales se caracterizan por:

    LineaTiempoD.color-acento-contenido.mb-5
      .row(numero="1" titulo="Bovinos")
        .col-md-6.mb-4.mb-md-0
          p.text-small Mamíferos introducidos en América tras la conquista española como fuente de alimento, su carne y la producción de leche. Estos animales son catalogados como rumiantes debido a su particular sistema digestivo, poseen un estómago divido en cuatro compartimientos cada uno con una función específica en donde la digestión microbiana y química de adelantan para el procesamiento de los nutrientes provenientes de los alimentos. La capacidad de estas especies de devolver el bolo alimenticio desde el rumen a la boca se denomina rumen y se realiza para masticar nuevamente y lubricar por medio de la saliva el bolo para mejorar la digestión.
          
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema2/img-2.png', alt='Texto que describa la imagen')

      .row(numero="2" titulo="Porcinos")
        .col-md-6.mb-4.mb-md-0
          p.text-small Se desarrollan en menor y gran escala ya que esta especie pude ser producida por una familia para su propio consumo o en una gran industria para comercializar sus derivados (carne, manteca o grasa); tienen ventaja debido a que su proceso de producción es más corto comparado con los bovinos y su carne es muy apetecida ya que tiene un gran contenido nutricional. En Colombia en los sistemas de producción a gran escala se destacan dos razas la primera de ellas Landrace la cual tiene una gran adaptación a la diversidad de climas y la Yorkshire que posee una gran capacidad reproductora.

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema2/img-3.png', alt='Texto que describa la imagen')

      .row(numero="3" titulo="Aves")
        .col-md-6.mb-4.mb-md-0
          p.text-small Generalmente gallinas y pollos, es tal vez el sistema de producción pecuario más común y adoptado por familias en menor escala debido a que su producción es menos compleja y de menor tiempo en comparación con el resto de las especies. Su aporte de carne con grandes contenidos nutricionales y del huevo rico en proteína como un alimento base de las comidas colombianas. Esta actividad también es realizada a gran escala donde la elección de la raza es determinante para el tipo de producción que se desee, ya sea pollos de engorde o gallinas ponedoras que a diferencia de las criollas tienen tiempos de crecimiento y producción mucho menores favoreciendo los intereses del productor.

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema2/img-4.png', alt='Texto que describa la imagen')

      .row(numero="4" titulo="Caprinos y ovinos")
        .col-md-6.mb-4.mb-md-0
          p.text-small También fueron introducidos después de la conquista española principalmente como abastecimiento de lana, carne y leche. Existen dos tipos de ovinos (ovejas) los de lana y los de pelo, siendo estos últimos los más adaptables a los climas tropicales, sin embargo, debido a la gran biodiversidad de climas en Colombia la oveja de lana también es una opción en los lugares que sean aptos para su producción. Los caprinos y los ovinos son considerados como pequeños rumiantes y tienen la capacidad de que su crecimiento es bastante acelerado siendo una opción bastante favorable para la satisfacer la demanda de carne.

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema2/img-5.png', alt='Texto que describa la imagen')

    .row
      .col-lg-3
        .tarjeta.tarjeta-1.p-4.mb-5(style="background-color:#1B3F5E")(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-lg-9
              h2(data-aos="fade-left")(style="color:#ffff") Manejo

    p.mb-5 El manejo de los animales depende de cada especie; sin embargo, existen procesos que básicamente son los mismos y difieren en acciones menores.

    .row.justify-content-center.align-items-center.mb-5.cuadro-2(data-aos="fade-down-left")
      .col-md-2.mb-3.mt-3
        img(src="@/assets/curso/temas/tema2/decorador-1.svg")
      .col-md-8.mt-3
        p En la reproducción se debe garantizar que los cruces a realizar sean de los individuos que mejor material genético contengan, de esta manera se asegura que las crías hereden dicho material genético y se conviertan en un producto de calidad, así mismo, el clima es un factor determinante al momento de elegir la reproducción, ya que se pueden hacer cruces de razas para que su adaptabilidad al medio sea mejor.

    p.mb-5(data-aos="fade-down-left") En el apareamiento se presentan dos tipos:

    .row.mb-5(data-aos="fade-down-left")
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img-6.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-primario(style="background-color:#EBEEE8")
            .p-4
              h2.text-center(style="color:#000") Consanguíneo
              p(style="color:#000") Básicamente es el cruce de animales que están emparentados con el fin de  perpetuar la raza, la desventaja de este sistema es que se pueden presentar bajos rendimientos productivos o degeneración de la raza; esta actividad se realiza generalmente cruzando padres con hijas, madres con hijos o  apareamientos entre hermanos. 

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img-7.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-acento-botones(style="background-color:#EBEEE8")
            .p-4
              h2.text-center(style="color:#000") Cruzamiento
              p(style="color:#000") Que es cuando los individuos no tienen ninguna relación parental, generalmente se realiza entre diferentes razas buscando la mejora genética.

    p La reproducción animal se puede realizar de dos maneras, mediante la monta (proceso reproductivo natural) o por medio de la inseminación artificial, en ambos casos la hembra deberá estar en periodo de celo y debe estar controlada por el personal de la finca para proyectar las fechas del posible parto.
    p.mb-5 Las etapas de reproducción son:

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 2.] <em>Etapas de reproducción</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema2/img-8-1.svg', alt='Celo Monta Gestación Parto Lactación Destete')  

    .row.mt-5
      .col-10.col-md-10.col-lg-10.movil.mb-5(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 2.] <em>Etapas de reproducción</em>
        figure
          img(src='@/assets/curso/temas/tema2/img-8-2.svg', alt='Celo Monta Gestación Parto Lactación Destete')  

    p.mb-5 En el proceso de reproducción aviar no se tienen en cuenta las etapas de lactancia y destete, ya que, a nivel industrial después de la postura de los huevos, estos son incubados de manera mecánica para su eclosión.

    .row
      .col-lg-3
        .tarjeta.tarjeta-1.p-4.mb-5(style="background-color:#1B3F5E")(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-lg-9
              h2(data-aos="fade-left")(style="color:#ffff") Bienestar

    p.mb-5 El bienestar animal es la base primordial para una buena producción, un animal al que se le garantice un espacio adecuado y los nutrientes necesarios tendrá un nivel de producción maximizado comparado con un animal que no esté a gusto con su entorno.

    .row.mb-3.mb-5
      .col-md-5
        img(src='@/assets/curso/temas/tema2/img-9.png' alt='')
      .col-md-7
        p A menudo se tiene referencia del estrés animal y más concretamente en la producción lechera, debido a que es una actividad de gran carga para las hembras, estas suelen pasar por situaciones emocionales que repercuten en la producción de leche, por esta razón existen hatos lecheros que mantienen un trato diferencial, propendiendo por que el animal se sienta a gusto en la actividad, mejorando su producción, por ejemplo, masajes mamarios, música y rotación de potreros.

        .color-primario.p-4(style="background-color:#DBF9BD")
          p.mb-0 La infraestructura juega un papel destacado en el bienestar animal, por ejemplo, un lote de vacas debe tener su espacio, en predios tecnificados se pueden hallar 3 o 4 reses por hectárea (Fedegan, 2015) y en el caso de las gallinas, 5 animales por metro cuadrado, dependiendo del factor climático, de esta manera garantizar el espacio necesario para los animales permitirá su adaptación al medio y se verá reflejado en los productos y ganancias.

    p.mb-5 El sistema sanitario y manejo de residuos provenientes de la producción es vital para que no se presenten factores que puedan afectar el sistema, como roedores y vectores que a su vez pueden provocar enfermedades causando pérdidas para el finquero y gastos adicionales en medicamentos y agroquímicos.



</template>

<script>
export default {
  name: 'Tema2',
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
