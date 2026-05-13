<script setup lang="ts">
import { findServicePage, translate } from '~/data/services'

const service = findServicePage('edi')!
const { locale } = useLocale()
</script>

<template>
  <div class="shell py-20">
    <div class="panel p-8 sm:p-12">
      <span class="eyebrow">{{ translate(service.eyebrow, locale) }}</span>
      <h1 class="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-slate-950">{{ translate(service.title, locale) }}</h1>
      <p class="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{{ translate(service.hero, locale) }}</p>
      <div class="mt-10 grid gap-6 lg:grid-cols-3">
        <div v-for="feature in service.features" :key="feature.title.en" class="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <h2 class="text-xl font-semibold text-slate-950">{{ translate(feature.title, locale) }}</h2>
          <p class="mt-4 text-sm leading-7 text-slate-600">{{ translate(feature.description, locale) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>