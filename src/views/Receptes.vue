<script setup>
import { ref } from 'vue'
const receptes = ref([
  {
    id: 1,
    nom: 'Pizza Peppa Pig',
    desc: 'Una pizza casolana modelada amb forma de Peppa Pig que ha agafat un aspecte bastant terrorífic al forn.',
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/04/bf/8b/0b/pizza-peppa-pig.jpg'
  },
  {
    id: 2,
    nom: 'Pastís Eggdward Cullen',
    desc: 'Un pastís decorat amb la cara d\'Edward Cullen en forma d\'ou i llaços de cinta negra.',
    img: 'https://preview.redd.it/what-i-asked-for-vs-what-i-got-v0-ajnff9e5c64h1.jpg?width=334&format=pjpg&auto=webp&s=67de8d3e132ce10d396283a75cf3429520ce9c53'
  },
  {
    id: 3,
    nom: 'Pastís Harry Potter',
    desc: 'Réplica del famós pastís d\'aniversari rosa i verd que Hagrid li regala a Harry Potter a la primera pel·lícula.',
    img: 'https://www.aimeemars.com/wp-content/uploads/2023/07/harry-potter-birthday-cake.jpg'
  },
  {
    id: 4,
    nom: 'Pastís Bibble',
    desc: 'Pastís escultòric en forma de Bibble, l\'emblemàtic persontage de Barbie Fairytopia, col·locat sobre un plat pintat amb flames d\'infern.',
    img: 'https://i.pinimg.com/736x/e8/42/b1/e842b16a7c79cefc5d5536d88d608789.jpg'
  },
  {
    id: 5,
    nom: 'Pastís Elsa de Frozen',
    desc: 'Un intent de pastís en 3D del bust de la princesa Elsa de Frozen amb proporcions facials molt peculiars.',
    img: 'https://i.pinimg.com/736x/9d/fc/d9/9dfcd9df78585835da98f4a7301bfc14.jpg'
  },
  {
    id: 6,
    nom: 'Pastís Minion',
    desc: 'Un pastís d\'aniversari temàtic de Minion amb ulls de plàstic i una dentadura feta de núvols (marshmallows).',
    img: 'https://i.pinimg.com/736x/a8/23/44/a82344f847ff627e38a59a10f9425ae5.jpg'
  }
])
</script>
<template>
  <main class="min-h-screen bg-pink-50 px-4 py-10 text-slate-800">
    <section class="mx-auto max-w-6xl">
      <div class="mb-8 text-center">
        <h2 class="mt-2 text-3xl font-black text-cyan-500">Llista de receptes</h2>
      </div>

      <ul class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <li v-for="recepta in receptes" :key="recepta.id" class="overflow-hidden rounded-2xl border border-pink-200 bg-white shadow-md shadow-pink-100">
          <img :src="recepta.img" :alt="recepta.nom" class="h-52 w-full object-cover" />
          <div class="p-5">
            <h3 class="text-xl font-bold text-cyan-500">{{ recepta.nom }}</h3>
            <p class="mt-2 text-sm leading-6 text-slate-600">{{ recepta.desc }}</p>
            <RouterLink :to="`/receptes/${recepta.id}`" class="mt-5 inline-block rounded-full bg-cyan-300 px-3 py-2 text-sm font-semibold text-slate-900 transition hover:bg-cyan-400">Veure recepta</RouterLink>
          </div>
        </li>
      </ul>

      <div class="mt-8">
        <RouterView :key="$route.fullPath" />
      </div>
    </section>
  </main>
</template>
