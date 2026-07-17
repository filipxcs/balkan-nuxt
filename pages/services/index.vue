<script setup>
const { t, locale } = useI18n()
const localePath = useLocalePath()

useSeoMeta({
  title: () => t('services.title')
})

const { data: services } = await useAsyncData(
  () => `services-${locale.value}`,
  () => queryContent(`/${locale.value}/services`).sort({ order: 1 }).find(),
  { watch: [locale] }
)
</script>

<template>
  <div class="max-w-6xl mx-auto px-6 py-20">
    <p class="eyebrow mb-3">{{ $t('services.eyebrow') }}</p>
    <h1 class="text-4xl font-semibold mb-16">{{ $t('services.title') }}</h1>

    <div class="grid md:grid-cols-2 gap-px bg-navy-950/10 rounded-sm overflow-hidden" v-if="services">
      <NuxtLink
        v-for="(service, i) in services"
        :key="service.slug"
        :to="localePath(`/services/${service.slug}`)"
        class="bg-white p-8 md:p-10 hover:bg-bone hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
      >
        <span class="font-mono text-xs text-copper-400">{{ String(i + 1).padStart(2, '0') }}</span>
        <h2 class="font-display text-xl mt-3 mb-3">{{ service.title }}</h2>
        <p class="text-sm text-navy-950/80 leading-relaxed">{{ service.summary }}</p>
        <span class="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-copper-500">
          {{ $t('services.cta_detail') }} →
        </span>
      </NuxtLink>
    </div>
  </div>
</template>
