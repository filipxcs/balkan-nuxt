<script setup>
const { t } = useI18n()

useSeoMeta({
  title: () => t('contact.title')
})
</script>

<template>
  <div class="max-w-6xl mx-auto px-6 py-20">
    <p class="eyebrow mb-3">{{ $t('contact.eyebrow') }}</p>
    <h1 class="text-4xl font-semibold mb-16">{{ $t('contact.title') }}</h1>

    <div class="grid md:grid-cols-2 gap-16">
      <div class="space-y-12">
        <div class="trace pl-6">
          <h2 class="font-display text-xl mb-3">{{ $t('contact.hq_title') }}</h2>
          <p class="text-navy-950/85 leading-relaxed">
            Ορφανίδου 1<br />
            546 26 Θεσσαλονίκη
          </p>
          <p class="mt-4 text-sm text-navy-950/80">
            {{ $t('contact.phone') }}: <a href="tel:+302310525885" class="text-copper-400 hover:text-copper-300 focus-ring rounded">231-052-5885</a><br />
            {{ $t('contact.email') }}: <a href="mailto:secretariat@balkan-constructions.gr" class="text-copper-400 hover:text-copper-300 focus-ring rounded">secretariat@balkan-constructions.gr</a>
          </p>
        </div>

        <div class="trace pl-6">
          <h2 class="font-display text-xl mb-3">{{ $t('contact.warehouse_title') }}</h2>
          <p class="text-navy-950/85 leading-relaxed">
            Αντωνίου Τούσα 29<br />
            Χαριλάου, 542 50 Θεσσαλονίκη
          </p>
        </div>

        <div class="trace pl-6">
          <h2 class="font-display text-xl mb-3">{{ $t('contact.athens_title') }}</h2>
          <p class="text-navy-950/85 leading-relaxed">
            Βράνα 12 &amp; Κατεχάκη<br />
            Ελληνορώσων, 115 25 Αθήνα
          </p>
        </div>

        <div class="trace pl-6">
          <h2 class="font-display text-xl mb-3">{{ $t('contact.postal_title') }}</h2>
          <p class="text-navy-950/85 leading-relaxed">
            Α. PO BOX 19978, ΤΚ 540 12, Θεσσαλονίκη<br />
            Β. PO BOX 1012, ΤΚ 630 80, Νέα Καλλικράτεια
          </p>
        </div>
      </div>

      <div class="rounded-sm overflow-hidden border border-navy-950/10 min-h-[420px]">
        <iframe
          title="Balkan Constructions – Ορφανίδου 1, Θεσσαλονίκη"
          class="w-full h-full min-h-[420px]"
          src="https://maps.google.com/maps?q=Orfanidou%201%2C%20Thessaloniki&t=&z=15&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>
</template>
