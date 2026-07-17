<script setup>
const { t, locale } = useI18n()

useSeoMeta({
  title: () => t('projects.title')
})

const { data: projects } = await useAsyncData(
  () => `projects-${locale.value}`,
  () => queryContent(`/${locale.value}/projects`).findOne(),
  { watch: [locale] }
)
</script>

<template>
  <div class="max-w-6xl mx-auto px-6 py-20" v-if="projects">
    <p class="eyebrow mb-3">{{ $t('projects.eyebrow') }}</p>
    <h1 class="text-4xl font-semibold mb-16">{{ $t('projects.title') }}</h1>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-navy-950/10 rounded-sm overflow-hidden mb-20">
      <div
        v-for="(p, i) in projects.featured"
        :key="i"
        class="bg-white p-8 hover:bg-bone hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
      >
        <h2 class="font-display text-lg mb-2">{{ p.name }}</h2>
        <p class="text-sm text-navy-950/80 leading-relaxed">{{ p.desc }}</p>
      </div>
    </div>

    <section>
      <h2 class="text-2xl font-semibold mb-8">{{ $t('projects.table_title') }}</h2>
      <div class="overflow-x-auto trace pl-4">
        <table class="w-full text-sm text-left border-collapse">
          <thead>
            <tr class="font-mono text-xs uppercase tracking-widest text-copper-400 border-b border-navy-950/20">
              <th class="py-3 pr-4">{{ $t('projects.table.client') }}</th>
              <th class="py-3 pr-4">{{ $t('projects.table.date') }}</th>
              <th class="py-3 pr-4">{{ $t('projects.table.project') }}</th>
              <th class="py-3">{{ $t('projects.table.budget') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(row, i) in projects.register"
              :key="i"
              class="border-b border-navy-950/15 text-navy-950/85 hover:bg-bone transition-colors duration-200"
            >
              <td class="py-3 pr-4">{{ row.client }}</td>
              <td class="py-3 pr-4 font-mono">{{ row.date }}</td>
              <td class="py-3 pr-4">{{ row.project }}</td>
              <td class="py-3 font-mono">{{ row.budget }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
