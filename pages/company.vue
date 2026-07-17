<script setup>
const { t, locale } = useI18n()

useSeoMeta({
  title: () => t('company.title')
})

const { data: company } = await useAsyncData(
  () => `company-${locale.value}`,
  () => queryContent(`/${locale.value}/company`).findOne(),
  { watch: [locale] }
)
</script>

<template>
  <div class="max-w-6xl mx-auto px-6 py-20" v-if="company">
    <p class="eyebrow mb-3">{{ $t('company.eyebrow') }}</p>
    <h1 class="text-4xl font-semibold mb-8">{{ $t('company.title') }}</h1>
    <p class="text-lg text-navy-950/85 max-w-2xl leading-relaxed">{{ company.intro }}</p>

    <div class="grid md:grid-cols-3 gap-10 mt-16">
      <div>
        <h2 class="font-display text-xl mb-3 text-copper-400">{{ $t('company.vision_title') }}</h2>
        <p class="text-sm text-navy-950/85 leading-relaxed">{{ company.vision }}</p>
      </div>
      <div>
        <h2 class="font-display text-xl mb-3 text-copper-400">{{ $t('company.mission_title') }}</h2>
        <p class="text-sm text-navy-950/85 leading-relaxed">{{ company.mission }}</p>
      </div>
      <div>
        <h2 class="font-display text-xl mb-3 text-copper-400">{{ $t('company.philosophy_title') }}</h2>
        <ul class="text-sm text-navy-950/85 leading-relaxed space-y-2">
          <li v-for="(item, i) in company.philosophy" :key="i" class="flex gap-2">
            <span class="text-copper-400">·</span><span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>

    <section class="mt-24">
      <h2 class="text-2xl font-semibold mb-8">{{ $t('company.timeline_title') }}</h2>
      <div class="space-y-8">
        <div v-for="(item, i) in company.timeline" :key="i" class="trace pl-8 relative">
          <span class="node absolute -left-[3px] top-1.5">
            <span class="block w-1.5 h-1.5 rounded-full bg-copper-400"></span>
          </span>
          <div class="font-mono text-xs text-copper-400 mb-1">{{ item.year }}</div>
          <div class="text-navy-950/90">{{ item.text }}</div>
        </div>
      </div>
    </section>

    <div class="grid md:grid-cols-2 gap-16 mt-24">
      <section>
        <h2 class="text-2xl font-semibold mb-6">{{ $t('company.advantages_title') }}</h2>
        <ul class="space-y-3 text-sm text-navy-950/85">
          <li v-for="(item, i) in company.advantages" :key="i" class="flex gap-3">
            <span class="font-mono text-copper-400">{{ String(i + 1).padStart(2, '0') }}</span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </section>
      <section>
        <h2 class="text-2xl font-semibold mb-6">{{ $t('company.goals_title') }}</h2>
        <ul class="space-y-3 text-sm text-navy-950/85">
          <li v-for="(item, i) in company.goals" :key="i" class="flex gap-3">
            <span class="font-mono text-copper-400">{{ String(i + 1).padStart(2, '0') }}</span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
