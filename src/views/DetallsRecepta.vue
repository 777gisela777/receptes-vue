<template>
    <div v-if="recepta" class="mx-auto max-w-4xl px-4 py-10">
        <div class="overflow-hidden rounded-[2rem] border border-orange-200 bg-white shadow-lg shadow-orange-100">
            <img :src="recepta.img" :alt="recepta.nom" class="h-72 w-full object-cover sm:h-96"/>
            <div class="p-6 sm:p-8">
                <h2 class="text-3xl font-black text-stone-900">{{ recepta.nom }}</h2>
                <p class="mt-4 text-base leading-7 text-stone-600">{{ recepta.desc }}</p>
                <h3 class="mt-6 text-xl font-bold text-stone-900">Ingredients:</h3>
                <ul class="mt-3 space-y-2 text-stone-700">
                    <li v-for="(ingredient, index) in recepta.ingredients" :key="index" class="flex gap-2">
                        <span class="mt-2 h-2 w-2 rounded-full bg-orange-500"></span>
                        <span>{{ ingredient }}</span>
                    </li>
                </ul>

                <h3 class="mt-6 text-xl font-bold text-stone-900">Elaboració:</h3>
                <ol class="mt-3 list-decimal space-y-2 pl-5 text-stone-700">
                    <li v-for="(pas, index) in recepta.elaboracio" :key="index" class="pl-2 leading-7">
                        {{ pas }}
                    </li>
                </ol>
            </div>
        </div>
    </div>
    <p v-else class="px-4 py-10 text-center text-stone-600">Recepta no trobada.</p>
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
    nom: 'Vi fermentat amb excrements humans (Ttongsul)',
    desc: 'Medicina tradicional coreana amb un 9% d\'alcohol i excrements d\'humans d\'entre 4 i 7 anys d\'edat.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Ttongsul_%28imitation%29.jpg?utm_source=ca.wikipedia.org&utm_campaign=index&utm_content=original',
    ingredients: [
      'Excrements d\'infants (de 4 a 7 anys, refrigerats)',
      'Aigua',
      'Arròs cuit (normal i glutinós)',
      'Levadura / Starter tradicional (Nurouk)',
      'Plantes medicinals tradicionals (opcional)'
    ],
    elaboracio: [
      'Mesclar els excrements amb aigua i deixar refrigerat durant 1 dia per diluir-ho.',
      'Filtrar la mescla per extreure el líquid dissolt i descartar les restes sòlides.',
      'Barrejar el líquid filtrat amb l\'arròs cuit i la levadura (Nurouk).',
      'Fermentar la barreja en un recipient de terrissa a temperatura constant durant 3 o 4 mesos.',
      'Filtrar de nou el líquid fermentat resultant (Ttongsul) abans de la seva presa.'
    ]
  },
  { 
    id: 2,
    nom: 'Balut',
    desc: 'Ou d\'ànec ja fertilitzat amb el seu embrió a dins que es cou tal com un ou bullit.',
    img: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/eb/Hotvitlon.jpg/1920px-Hotvitlon.jpg?utm_source=ca.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    ingredients: [
      'Ou d\'ànec fertilitzat (d\'entre 14 i 21 dies d\'incubació)',
      'Aigua',
      'Sal gruixuda',
      'Pebrot picant o xili (per servir)',
      'Vinagre de maó o llima (per servir)'
    ],
    elaboracio: [
      'Comprovar la fertilitat i l\'edat de l\'embrió de l\'ou a la llum d\'una espelma o llanterna.',
      'Netejar la closca exterior amb aigua freda.',
      'Bullir l\'ou en aigua amb un pessic de sal durant aproximadament 20 a 30 minuts.',
      'Treure de l\'aigua i servir immediatament ben calent.',
      'Per menjar-ho, fer un petit forat a la closca superior, beure el caldo interior i condimentar la resta amb vinagre, sal i xili.'
    ]
  },
  { 
    id: 3,
    nom: 'Casu marzu',
    desc: 'Formatge tradicional de Sardenya fermentat per cucs vius que el descomponen i li produeixen un fort i vomitiva olor.',
    img: 'https://www.mundoquesos.com/wp-content/uploads/2026/01/Casu-Marzu-3_Gran-1.jpg',
    ingredients: [
      'Formatge Pecorino Sard (llet de ovella)',
      'Larves de la mosca del formatge (Piophila casei)'
    ],
    elaboracio: [
      'Elaborar o aconseguir una roda fresca de formatge Pecorino de llet d\'ovella.',
      'Perforar o tallar part de la crosta superior per deixar la pasta interior al descobert.',
      'Deixar el formatge a l\'aire lliure perquè les mosques Piophila casei hi ponguin els ous.',
      'Emagatzemar en un lloc fosc i humit durant 2 o 3 mesos fins que les larves neixin i digereixin els greixos de la massa.',
      'Servir el formatge un cop la textura sigui cremosa, consumint-ho directament amb les larves vives.'
    ]
  }
])
const recepta = receptes.value.find(r => r.id === receptaId)
</script>