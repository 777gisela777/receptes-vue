<template>
    <div class="min-h-screen bg-pink-50 text-slate-800">
        <nav class="flex items-center justify-center gap-3 border-b border-pink-200 bg-white/80 px-4 py-4 shadow-sm backdrop-blur-sm">
            <RouterLink to="/" class="rounded-full px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-pink-600 hover:text-white">Inici</RouterLink>
            <span class="text-cyan-300">|</span>
            <RouterLink to="/receptes" class="rounded-full px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-pink-600 hover:text-white">Receptes</RouterLink>
        </nav>
        <RouterView />
    </div>
</template>