<script setup lang="ts">
import { translate } from '~/data/services'
import type { LocalizedValue } from '~/types/entities'

const props = defineProps<{
  eyebrow: LocalizedValue
  title: LocalizedValue
  description: LocalizedValue
}>()

const { locale } = useLocale()
</script>

<template>
  <div class="max-w-3xl space-y-4">
    <span class="eyebrow">{{ translate(props.eyebrow, locale) }}</span>
    <h2 class="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{{ translate(props.title, locale) }}</h2>
    <p class="text-base leading-7 text-slate-600 sm:text-lg">{{ translate(props.description, locale) }}</p>
  </div>
</template>