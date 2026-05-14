<script setup lang="ts">
import type { LocaleCode } from '~/types/entities'
import { onClickOutside } from '@vueuse/core'

const { locale, setLocale } = useLocale()

const isOpen = ref(false)
const rootRef = ref<HTMLElement | null>(null)

const options: Array<{ code: LocaleCode, flag: string, label: string, shortLabel: string }> = [
  { code: 'en', flag: '🇺🇸', label: 'English', shortLabel: 'EN' },
  { code: 'vi', flag: '🇻🇳', label: 'Tiếng Việt', shortLabel: 'VI' }
]

const currentOption = computed(() => options.find(option => option.code === locale.value) ?? options[0])

const selectLocale = (nextLocale: LocaleCode) => {
  isOpen.value = false

  if (nextLocale !== locale.value) {
    setLocale(nextLocale)
  }
}

onClickOutside(rootRef, () => {
  isOpen.value = false
})
</script>

<template>
  <div ref="rootRef" class="relative z-30">
    <button
      type="button"
      class="flex items-center gap-3 rounded-full border border-slate-200/90 bg-white/95 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg ring-1 ring-slate-950/5 backdrop-blur transition hover:border-slate-300 hover:bg-white"
      :aria-expanded="isOpen"
      aria-haspopup="listbox"
      @click="isOpen = !isOpen"
    >
      <span class="text-lg leading-none">{{ currentOption.flag }}</span>
      <span class="hidden min-w-20 text-left sm:inline">{{ currentOption.label }}</span>
      <span class="sm:hidden">{{ currentOption.shortLabel }}</span>
      <span class="text-slate-400 transition" :class="isOpen ? 'rotate-180' : ''">▾</span>
    </button>

    <div
      v-if="isOpen"
      class="absolute right-0 mt-3 min-w-44 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl ring-1 ring-slate-950/5"
      role="listbox"
      aria-label="Select language"
    >
      <button
        v-for="option in options"
        :key="option.code"
        type="button"
        class="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm transition"
        :class="option.code === locale ? 'bg-slate-950 text-white' : 'text-slate-700 hover:bg-slate-100'"
        @click="selectLocale(option.code)"
      >
        <span class="flex items-center gap-3">
          <span class="text-lg leading-none">{{ option.flag }}</span>
          <span>{{ option.label }}</span>
        </span>
        <span v-if="option.code === locale">✓</span>
      </button>
    </div>
  </div>
</template>