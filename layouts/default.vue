<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()
const route = useRoute()
const mobileOpen = ref(false)

const toggleMobile = () => {
  mobileOpen.value = !mobileOpen.value
}

watch(
  () => route.fullPath,
  () => {
    mobileOpen.value = false
  }
)
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header class="sticky top-0 z-50 bg-bone/90 backdrop-blur border-b border-navy-950/10 shadow-sm">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-3">
        <NuxtLink :to="localePath('/')" class="flex items-center gap-3 focus-ring rounded min-w-0">
          <img src="/LOGO-BALKAN.png" alt="Balkan Constructions" class="h-8 sm:h-9 w-auto max-w-[180px] sm:max-w-none object-contain" />
          <span class="sr-only">Balkan Constructions</span>
        </NuxtLink>

        <nav class="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
          <NuxtLink :to="localePath('/company')" class="text-navy-950/85 hover:text-copper-500 transition-colors duration-200 focus-ring rounded">{{ $t('nav.company') }}</NuxtLink>
          <NuxtLink :to="localePath('/services')" class="text-navy-950/85 hover:text-copper-500 transition-colors duration-200 focus-ring rounded">{{ $t('nav.services') }}</NuxtLink>
          <NuxtLink :to="localePath('/projects')" class="text-navy-950/85 hover:text-copper-500 transition-colors duration-200 focus-ring rounded">{{ $t('nav.projects') }}</NuxtLink>
          <NuxtLink :to="localePath('/contact')" class="text-navy-950/85 hover:text-copper-500 transition-colors duration-200 focus-ring rounded">{{ $t('nav.contact') }}</NuxtLink>

          <div class="flex items-center gap-1 pl-6 border-l border-navy-950/10">
            <NuxtLink
              v-for="l in locales"
              :key="l.code"
              :to="switchLocalePath(l.code)"
              class="px-2 py-1 rounded focus-ring transition-colors duration-200 hover:bg-navy-950/5"
              :class="l.code === locale ? 'text-copper-400' : 'text-navy-950/70 hover:text-navy-950'"
            >
              {{ l.code.toUpperCase() }}
            </NuxtLink>
          </div>
        </nav>

        <button
          class="md:hidden shrink-0 text-navy-950 focus-ring rounded-lg border border-navy-950/10 bg-white/80 p-2.5 shadow-sm transition-colors duration-200 hover:bg-bone"
          aria-label="Menu"
          aria-controls="mobile-menu"
          :aria-expanded="mobileOpen ? 'true' : 'false'"
          @click.stop="toggleMobile"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path v-if="!mobileOpen" d="M3 6h18M3 12h18M3 18h18" />
            <path v-else d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="mobileOpen" class="md:hidden border-t border-navy-950/10 bg-bone/95">
          <div class="px-4 sm:px-6 py-4">
            <div id="mobile-menu" class="rounded-2xl border border-navy-950/10 bg-white shadow-lg p-3 flex flex-col gap-1">
              <NuxtLink :to="localePath('/company')" class="rounded-xl px-4 py-3 text-navy-950/90 hover:text-copper-500 hover:bg-bone transition-colors duration-200 font-mono text-sm uppercase tracking-widest" @click="mobileOpen = false">{{ $t('nav.company') }}</NuxtLink>
              <NuxtLink :to="localePath('/services')" class="rounded-xl px-4 py-3 text-navy-950/90 hover:text-copper-500 hover:bg-bone transition-colors duration-200 font-mono text-sm uppercase tracking-widest" @click="mobileOpen = false">{{ $t('nav.services') }}</NuxtLink>
              <NuxtLink :to="localePath('/projects')" class="rounded-xl px-4 py-3 text-navy-950/90 hover:text-copper-500 hover:bg-bone transition-colors duration-200 font-mono text-sm uppercase tracking-widest" @click="mobileOpen = false">{{ $t('nav.projects') }}</NuxtLink>
              <NuxtLink :to="localePath('/contact')" class="rounded-xl px-4 py-3 text-navy-950/90 hover:text-copper-500 hover:bg-bone transition-colors duration-200 font-mono text-sm uppercase tracking-widest" @click="mobileOpen = false">{{ $t('nav.contact') }}</NuxtLink>
              <div class="mt-2 pt-3 border-t border-navy-950/10 flex gap-2">
                <NuxtLink
                  v-for="l in locales"
                  :key="l.code"
                  :to="switchLocalePath(l.code)"
                  class="px-3 py-2 rounded-lg focus-ring transition-colors duration-200 hover:bg-navy-950/5 font-mono text-xs uppercase tracking-widest"
                  :class="l.code === locale ? 'bg-copper-500/10 text-copper-500' : 'text-navy-950/75 hover:text-navy-950'"
                  @click="mobileOpen = false"
                >
                  {{ l.code.toUpperCase() }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <footer class="border-t border-navy-950/10 bg-white">
      <div class="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3 text-sm text-navy-950/80">
        <div>
          <div class="font-display font-semibold text-navy-950 mb-2">Balkan Constructions</div>
          <p>Ορφανίδου 1, 546 26 Θεσσαλονίκη</p>
          <p>ΤΗΛ: 231-052-5885</p>
        </div>
        <div class="font-mono text-xs uppercase tracking-widest flex flex-col gap-2 md:items-center">
          <NuxtLink :to="localePath('/company')" class="hover:text-copper-400">{{ $t('nav.company') }}</NuxtLink>
          <NuxtLink :to="localePath('/services')" class="hover:text-copper-400">{{ $t('nav.services') }}</NuxtLink>
          <NuxtLink :to="localePath('/projects')" class="hover:text-copper-400">{{ $t('nav.projects') }}</NuxtLink>
          <NuxtLink :to="localePath('/contact')" class="hover:text-copper-400">{{ $t('nav.contact') }}</NuxtLink>
        </div>
        <div class="md:text-right">
          <p>secretariat@balkan-constructions.gr</p>
          <p class="mt-4 text-navy-950/55">© 1989–{{ new Date().getFullYear() }} Balkan Constructions. {{ $t('footer.rights') }}</p>
        </div>
      </div>
    </footer>
  </div>
</template>
