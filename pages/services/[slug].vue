<script setup>
const { t, locale } = useI18n()
const route = useRoute()
const localePath = useLocalePath()

const slug = computed(() => {
  const value = route.params.slug
  return Array.isArray(value) ? value[0] : value
})

const { data } = await useAsyncData(
  () => `service-${locale.value}-${slug.value}`,
  async () => {
    const service = await queryContent(`/${locale.value}/services/${slug.value}`).findOne()

    if (!service) {
      throw createError({ statusCode: 404, statusMessage: 'Service not found' })
    }

    const allServices = await queryContent(`/${locale.value}/services`).sort({ order: 1 }).find()

    return {
      service,
      relatedServices: allServices.filter(item => item.slug !== slug.value).slice(0, 3)
    }
  },
  { watch: [locale, slug] }
)

useSeoMeta({
  title: () => data.value?.service?.seoTitle || data.value?.service?.title || t('services.title'),
  ogTitle: () => data.value?.service?.seoTitle || data.value?.service?.title || t('services.title'),
  description: () => data.value?.service?.seoDescription || data.value?.service?.summary || ''
})
</script>

<template>
  <div v-if="data" class="max-w-6xl mx-auto px-6 py-20">
    <NuxtLink
      :to="localePath('/services')"
      class="mb-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-copper-500 hover:text-copper-400 focus-ring rounded"
    >
      ← {{ $t('services.back') }}
    </NuxtLink>

    <section class="grid lg:grid-cols-[1fr_1.05fr] gap-12 items-start">
      <div>
        <p class="eyebrow mb-3">{{ $t('services.eyebrow') }}</p>
        <h1 class="text-4xl md:text-5xl font-semibold leading-tight">{{ data.service.title }}</h1>
        <p class="mt-6 text-lg text-navy-950/85 max-w-2xl">{{ data.service.summary }}</p>
        <p class="mt-6 text-navy-950/80 leading-relaxed max-w-2xl">{{ data.service.intro }}</p>

        <NuxtLink
          :to="localePath('/contact')"
          class="mt-10 inline-flex items-center px-6 py-3 bg-copper-500 text-navy-950 font-medium rounded-sm hover:bg-copper-400 hover:shadow-sm transition-all duration-200 active:translate-y-px focus-ring"
        >
          {{ $t('services.contact_cta') }}
        </NuxtLink>
      </div>

      <div class="rounded-2xl overflow-hidden border border-navy-950/10 bg-white shadow-sm">
        <img :src="data.service.image" :alt="data.service.title" class="w-full h-auto object-cover aspect-[16/10]" />
      </div>
    </section>

    <section class="grid md:grid-cols-3 gap-8 mt-20">
      <div class="bg-white border border-navy-950/10 rounded-2xl p-8">
        <h2 class="text-xl font-semibold mb-5">{{ $t('services.highlights') }}</h2>
        <ul class="space-y-3 text-sm text-navy-950/80">
          <li v-for="item in data.service.highlights" :key="item" class="flex gap-3">
            <span class="text-copper-500 mt-0.5">•</span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>

      <div class="bg-white border border-navy-950/10 rounded-2xl p-8">
        <h2 class="text-xl font-semibold mb-5">{{ $t('services.capabilities') }}</h2>
        <ul class="space-y-3 text-sm text-navy-950/80">
          <li v-for="item in data.service.capabilities" :key="item" class="flex gap-3">
            <span class="text-copper-500 mt-0.5">•</span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>

      <div class="bg-white border border-navy-950/10 rounded-2xl p-8">
        <h2 class="text-xl font-semibold mb-5">{{ $t('services.sectors') }}</h2>
        <ul class="space-y-3 text-sm text-navy-950/80">
          <li v-for="item in data.service.sectors" :key="item" class="flex gap-3">
            <span class="text-copper-500 mt-0.5">•</span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="mt-20">
      <div class="flex items-end justify-between gap-6 mb-8">
        <div>
          <p class="eyebrow mb-2">{{ $t('services.eyebrow') }}</p>
          <h2 class="text-2xl font-semibold">{{ $t('services.other_services') }}</h2>
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-px bg-navy-950/10 rounded-sm overflow-hidden">
        <NuxtLink
          v-for="service in data.relatedServices"
          :key="service.slug"
          :to="localePath(`/services/${service.slug}`)"
          class="bg-white p-8 hover:bg-bone hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
        >
          <h3 class="font-display text-xl mb-3">{{ service.title }}</h3>
          <p class="text-sm text-navy-950/80 leading-relaxed">{{ service.summary }}</p>
          <span class="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-copper-500">
            {{ $t('services.cta_detail') }} →
          </span>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
