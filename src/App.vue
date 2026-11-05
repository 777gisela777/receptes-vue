<template>
    <div class="min-h-screen bg-orange-50 text-stone-800">
        <nav class="flex items-center justify-center gap-3 border-b border-orange-200 bg-white/80 px-4 py-4 shadow-sm backdrop-blur-sm">
            <RouterLink to="/" class="rounded-full px-3 py-2 text-sm font-semibold text-stone-700 transition hover:bg-orange-100 hover:text-orange-700">Inici</RouterLink>
            <span class="text-orange-300">|</span>
            <RouterLink to="/receptes" class="rounded-full px-3 py-2 text-sm font-semibold text-stone-700 transition hover:bg-orange-100 hover:text-orange-700">Receptes</RouterLink>
        </nav>
        <RouterView />
    </div>
</template>