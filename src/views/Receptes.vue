<script setup>
import { ref } from 'vue'
const receptes = ref([
  { id: 1,
    nom: 'Vi fermentat amb excrements humans (Ttongsul)',
    desc: 'Medicina coreana amb un 9% d\'alcohol i excrements d\'humans d\'entre 4 i 7 anys d\'edat.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Ttongsul_%28imitation%29.jpg?utm_source=ca.wikipedia.org&utm_campaign=index&utm_content=original'
  },
  { id: 2,
    nom: 'Balut',
    desc: 'Ou d\'ànec ja fertilitzat amb el seu embrió a dins que es cou tal com un ou bullit.',
    img: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/eb/Hotvitlon.jpg/1920px-Hotvitlon.jpg?utm_source=ca.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail'
  },
  { id: 3,
    nom: 'Casu marzu',
    desc: 'Formatge tradicional de Sardenya fermentat per cucs vius que el descomponen i li produeixen un fort i vomitiva olor.',
    img: 'https://www.mundoquesos.com/wp-content/uploads/2026/01/Casu-Marzu-3_Gran-1.jpg'
  }
])
</script>
<template>
  <main class="min-h-screen bg-orange-50 px-4 py-10 text-stone-800">
    <section class="mx-auto max-w-6xl">
      <div class="mb-8 text-center">
        <h2 class="mt-2 text-3xl font-black text-stone-900">Llista de receptes</h2>
      </div>

      <ul class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <li v-for="recepta in receptes" :key="recepta.id" class="overflow-hidden rounded-2xl border border-orange-200 bg-white shadow-md shadow-orange-100">
          <img :src="recepta.img" :alt="recepta.nom" class="h-52 w-full object-cover" />
          <div class="p-5">
            <h3 class="text-xl font-bold text-stone-900">{{ recepta.nom }}</h3>
            <p class="mt-2 text-sm leading-6 text-stone-600">{{ recepta.desc }}</p>
            <RouterLink :to="`/receptes/${recepta.id}`" class="mt-5 inline-block rounded-full bg-orange-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-orange-600">Veure recepta</RouterLink>
          </div>
        </li>
      </ul>

      <div class="mt-8">
        <RouterView :key="$route.fullPath" />
      </div>
    </section>
  </main>
</template>
