<script setup>
const { t, locale } = useI18n()
const localePath = useLocalePath()

useSeoMeta({
  title: () => t('home.title'),
  ogTitle: () => t('home.title'),
  description: () => t('home.subtitle')
})

const advantageKeys = ['experience', 'knowledge', 'coverage', 'solutions']

const { data: company } = await useAsyncData(
  () => `home-company-${locale.value}`,
  () => queryContent(`/${locale.value}/company`).findOne(),
  { watch: [locale] }
)

const { data: servicePreviews } = await useAsyncData(
  () => `home-services-${locale.value}`,
  async () => {
    const services = await queryContent(`/${locale.value}/services`).sort({ order: 1 }).find()
    return services.slice(0, 4)
  },
  { watch: [locale] }
)
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden border-b border-navy-950/10">
      <div class="absolute inset-0 opacity-[0.07] pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#5688bd" stroke-width="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div
        class="absolute top-0 right-0 bottom-0 hidden lg:block w-[42%] pointer-events-none"
        aria-hidden="true"
      >
        <div
          class="absolute inset-y-10 right-6 left-0 rounded-[2rem] bg-cover bg-center bg-no-repeat opacity-95"
          style="background-image: url('/solar_panel_header2.webp');"
        ></div>
        <div class="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bone via-bone/75 to-transparent"></div>
      </div>

      <div class="relative max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <p class="eyebrow mb-6">{{ $t('home.eyebrow') }}</p>
        <h1 class="text-4xl md:text-6xl font-semibold leading-[1.05] max-w-3xl">
          {{ $t('home.title') }}
        </h1>
        <p class="mt-6 text-lg text-navy-950/85 max-w-xl">
          {{ $t('home.subtitle') }}
        </p>
        <div class="mt-10 flex flex-wrap gap-4">
          <NuxtLink :to="localePath('/services')" class="focus-ring inline-flex items-center px-6 py-3 bg-copper-500 text-navy-950 font-medium rounded-sm hover:bg-copper-400 hover:shadow-sm transition-all duration-200 active:translate-y-px">
            {{ $t('home.cta_services') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/contact')" class="focus-ring inline-flex items-center px-6 py-3 border border-navy-950/20 rounded-sm hover:border-copper-500 hover:text-copper-500 hover:bg-bone transition-all duration-200 active:translate-y-px">
            {{ $t('home.cta_contact') }}
          </NuxtLink>
        </div>

        <div class="mt-16 grid grid-cols-3 max-w-lg font-mono">
          <div>
            <div class="text-3xl text-copper-400 font-semibold">30+</div>
            <div class="text-xs uppercase tracking-widest text-navy-950/70 mt-1">{{ $t('home.stat_years') }}</div>
          </div>
          <div>
            <div class="text-3xl text-copper-400 font-semibold">1989</div>
            <div class="text-xs uppercase tracking-widest text-navy-950/70 mt-1">{{ $t('home.stat_since') }}</div>
          </div>
          <div>
            <div class="text-3xl text-copper-400 font-semibold">GR</div>
            <div class="text-xs uppercase tracking-widest text-navy-950/70 mt-1">{{ $t('home.stat_coverage') }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-6 py-24">
      <p class="eyebrow mb-3">{{ $t('nav.services') }}</p>
      <h2 class="text-3xl font-semibold mb-2">{{ $t('home.services_title') }}</h2>
      <p class="text-navy-950/80 mb-12 max-w-xl">{{ $t('home.services_subtitle') }}</p>

      <div class="grid md:grid-cols-2 gap-px bg-navy-950/10 rounded-sm overflow-hidden" v-if="servicePreviews">
        <div
          v-for="service in servicePreviews"
          :key="service.slug"
          class="bg-white p-8 hover:bg-bone hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
        >
          <h3 class="font-display text-xl mb-2">{{ service.title }}</h3>
          <p class="text-sm text-navy-950/80 leading-relaxed">{{ service.summary }}</p>
          <NuxtLink :to="localePath(`/services/${service.slug}`)" class="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-copper-500 hover:text-copper-400 focus-ring rounded">
            {{ $t('services.cta_detail') }} →
          </NuxtLink>
        </div>
      </div>

      <NuxtLink :to="localePath('/services')" class="mt-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-copper-400 hover:text-copper-300 focus-ring rounded">
        {{ $t('home.cta_services') }} →
      </NuxtLink>
    </section>

    <!-- Advantages -->
    <section class="bg-white border-y border-navy-950/10">
      <div class="max-w-6xl mx-auto px-6 py-24">
        <h2 class="text-3xl font-semibold mb-12">{{ $t('home.advantages_title') }}</h2>
        <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div v-for="(key, i) in advantageKeys" :key="key" class="trace pl-6">
            <h3 class="font-display text-base mb-2">{{ $t(`advantages.${key}.title`) }}</h3>
            <p class="text-sm text-navy-950/80 leading-relaxed">{{ $t(`advantages.${key}.desc`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About -->
    <section class="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-start">
      <div>
        <p class="eyebrow mb-3">{{ $t('company.eyebrow') }}</p>
        <h2 class="text-3xl font-semibold mb-6">{{ $t('home.about_title') }}</h2>
        <p class="text-navy-950/85 leading-relaxed" v-if="company">{{ company.intro }}</p>
        <NuxtLink :to="localePath('/company')" class="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-copper-400 hover:text-copper-300 focus-ring rounded">
          {{ $t('home.about_cta') }} →
        </NuxtLink>
      </div>
      <div v-if="company" class="space-y-6">
        <div v-for="(item, i) in company.timeline" :key="i" class="trace pl-6 relative">
          <span class="node absolute -left-[3px] top-1.5">
            <span class="block w-1.5 h-1.5 rounded-full bg-copper-400"></span>
          </span>
          <div class="font-mono text-xs text-copper-400">{{ item.year }}</div>
          <div class="text-sm text-navy-950/85">{{ item.text }}</div>
        </div>
      </div>
    </section>
  </div>
</template>
