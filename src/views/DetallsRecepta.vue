<template>
    <div v-if="recepta" class="mx-auto max-w-4xl px-4 py-10">
        <div class="overflow-hidden rounded-[2rem] border border-pink-200 bg-white shadow-lg shadow-pink-100">
            <img :src="recepta.img" :alt="recepta.nom" class="h-72 w-full object-cover sm:h-96"/>
            <div class="p-6 sm:p-8">
                <h2 class="text-3xl font-black text-cyan-500">{{ recepta.nom }}</h2>
                <p class="mt-4 text-base leading-7 text-slate-600">{{ recepta.desc }}</p>
                <h3 class="mt-6 text-xl font-bold text-cyan-500">Ingredients:</h3>
                <ul class="mt-3 space-y-2 text-slate-700">
                    <li v-for="(ingredient, index) in recepta.ingredients" :key="index" class="flex gap-2">
                        <span class="mt-2 h-2 w-2 rounded-full bg-pink-600"></span>
                        <span>{{ ingredient }}</span>
                    </li>
                </ul>

                <h3 class="mt-6 text-xl font-bold text-cyan-500">Elaboració:</h3>
                <ol class="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
                    <li v-for="(pas, index) in recepta.elaboracio" :key="index" class="pl-2 leading-7">
                        {{ pas }}
                    </li>
                </ol>
            </div>
        </div>
    </div>
    <p v-else class="px-4 py-10 text-center text-slate-600">Recepta no trobada.</p>
    <RouterView />
</template>
<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const receptaId = parseInt(route.params.id)

const receptes = ref([
  {
    id: 1,
    nom: 'Pizza Peppa Pig',
    desc: 'Una pizza casolana modelada amb forma de Peppa Pig que ha agafat un aspecte bastant terrorífic al forn.',
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/04/bf/8b/0b/pizza-peppa-pig.jpg',
    ingredients: [
      'Massa de pizza artesanal',
      'Pernil dolç tallat a tiretes primes',
      'Formatge mozzarella o salsa blanca per als ulls',
      'Olives negres per a les pupil·les',
      'Ketchup o salsa de tomàquet per a la boca i les galtes'
    ],
    elaboracio: [
      'Modelar la massa de pizza donant-li la forma del cap i les orelles de Peppa Pig.',
      'Enfornar la massa fins que estigui daurada.',
      'Cobrir tota la superfície de la cara amb una capa densa de tiretes de pernil dolç.',
      'Crear els ulls amb dos cercles de massa/formatge i dues olives negres a sobre.',
      'Dibuixar un somriure inquietant i els rubors de les galtes amb ketchup.'
    ]
  },
  {
    id: 2,
    nom: 'Pastís Eggdward Cullen',
    desc: 'Un pastís decorat amb la cara d\'Edward Cullen en forma d\'ou i llaços de cinta negra.',
    img: 'https://preview.redd.it/what-i-asked-for-vs-what-i-got-v0-ajnff9e5c64h1.jpg?width=334&format=pjpg&auto=webp&s=67de8d3e132ce10d396283a75cf3429520ce9c53',
    ingredients: [
      'Pa de pessic de xocolata o vainilla',
      'Crema de mantega (buttercream) blanca o de vainilla',
      'Full de sucre comestible imprès amb la cara d\'Edward Cullen',
      'Llaços de cinta de setí negra per a la decoració'
    ],
    elaboracio: [
      'Enfornar i muntar un pastís cilíndric de diversos pisos.',
      'Cobrir tot el pastís amb buttercream blanc ben suau.',
      'Col·locar la impressió de paper de sucre d\'Edward Cullen a la part superior.',
      'Dibuixar una sanefa de rossetes de buttercream al voltant de la cara i a la base.',
      'Decorar els laterals amb petits laços negres de cinta.'
    ]
  },
  {
    id: 3,
    nom: 'Pastís Harry Potter',
    desc: 'Rèplica del famós pastís d\'aniversari rosa i verd que Hagrid li regala a Harry Potter a la primera pel·lícula.',
    img: 'https://www.aimeemars.com/wp-content/uploads/2023/07/harry-potter-birthday-cake.jpg',
    ingredients: [
      'Pa de pessic de xocolata',
      'Cobertura de buttercream de color rosa intens',
      'Glaze o buttercream verd per al text',
      'Colorant alimentari rosa i verd'
    ],
    elaboracio: [
      'Enfornar un pa de pessic rodó de xocolata.',
      'Cobrir el pastís amb el buttercream rosa, deixant una textura lleugerament rústica i desigual.',
      'Fer una petita fenedura al mig del pastís per simular que el Hagrid l\'ha tingut al sobre.',
      'Amb una màniga pastelera i cobertura verda, escriure "HAPPEE BIRTHDAE HARRY" amb lletres imperfectes.'
    ]
  },
  {
    id: 4,
    nom: 'Pastís Bibble',
    desc: 'Pastís escultòric en forma de Bibble, l\'emblemàtic persontage de Barbie Fairytopia, col·locat sobre un plat pintat amb flames d\'infern.',
    img: 'https://i.pinimg.com/736x/e8/42/b1/e842b16a7c79cefc5d5536d88d608789.jpg',
    ingredients: [
      'Pa de pessic modelable',
      'Fondant de colors (blau, rosa, negre, blanc)',
      'Salsa de maduixa / caramel de taronja o pintura alimentària vermella i groga'
    ],
    elaboracio: [
      'Modelar el pa de pessic amb la forma ovalada del cos del Furby.',
      'Cobrir amb fondant blau fent textura de pèl i afegir els detalls dels ulls, boca i peus.',
      'Pintar la base del plat amb salses de colors vermell i taronja creant l\'efecte de flames.',
      'Servir el Bibble al mig de la composició en flames.'
    ]
  },
  {
    id: 5,
    nom: 'Pastís Elsa de Frozen',
    desc: 'Un intent de pastís en 3D del bust de la princesa Elsa de Frozen amb proporcions facials molt peculiars.',
    img: 'https://i.pinimg.com/736x/9d/fc/d9/9dfcd9df78585835da98f4a7301bfc14.jpg',
    ingredients: [
      'Estrutura interna per a pastís 3D',
      'Pa de pessic i farcit de crema',
      'Fondant groc per al cabell',
      'Fondant blau cel i blanc per al vestit i joies',
      'Colorants alimentaris per als detalls facials'
    ],
    elaboracio: [
      'Muntar l\'estructura del bust i cobrir-la amb pa de pessic i crema.',
      'Esculpir el cap i la cara amb fondant donant-li la forma dels ulls i la boca.',
      'Afegir la trena groga amb detalls de flocs de neu blancs.',
      'Modelar el vestit blau cel i afegir una placa amb el nom del celebrant a la base.'
    ]
  },
  {
    id: 6,
    nom: 'Pastís Minion',
    desc: 'Un pastís d\'aniversari temàtic de Minion amb ulls de plàstic i una dentadura feta de núvols (marshmallows).',
    img: 'https://i.pinimg.com/736x/a8/23/44/a82344f847ff627e38a59a10f9425ae5.jpg',
    ingredients: [
      'Pa de pessic rodó',
      'Buttercream de color groc i blau',
      'Buttercream negre per a la cinta i la boca',
      'Núvols (marshmallows) petits tallats per fer de dents',
      'Ulls de plàstic de joguina (no comestibles, només decoratius)'
    ],
    elaboracio: [
      'Cobrir la superfície del pastís amb buttercream groc i els laterals inferiors amb blau.',
      'Dibuixar la boca fosca i la cinta de les ulleres amb buttercream negre.',
      'Incustar els núvols petits a la boca simulant una dentadura humana.',
      'Col·locar els ulls de plàstic al centre sobre ulleres fetes de buttercream blau.'
    ]
  }
])
const recepta = receptes.value.find(r => r.id === receptaId)
</script>