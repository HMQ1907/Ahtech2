<script setup lang="ts">
import { translate } from '~/data/services'

const route = useRoute()
const { locale, localePath } = useLocale()
const mobileMenuOpen = ref(false)

const links = [
  { label: { en: 'Home', vi: 'Trang chủ' }, to: '/' },
  { label: { en: 'About', vi: 'Giới thiệu' }, to: '/about' },
  { label: { en: 'Services', vi: 'Dịch vụ' }, to: '/service' },
  { label: { en: 'Insights', vi: 'Bài viết' }, to: '/blog' },
  { label: { en: 'Contact', vi: 'Liên hệ' }, to: '/contact' }
]

const localizedLinks = computed(() => links.map(item => ({
  ...item,
  localizedTo: localePath(item.to)
})))

watch(
  () => route.path,
  () => {
    mobileMenuOpen.value = false
  }
)
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-white/60 bg-white/80 backdrop-blur-xl">
    <div class="shell flex items-center justify-between gap-6 py-4">
      <NuxtLink :to="localePath('/')" class="flex items-center gap-3">
        <img src="/images/logo.jpg" alt="AHTECH" class="h-10 w-auto" >
      </NuxtLink>

      <nav class="hidden items-center gap-2 md:flex">
        <NuxtLink
          v-for="item in localizedLinks"
          :key="item.to"
          :to="item.localizedTo"
          class="rounded-full px-4 py-2 text-sm font-medium transition"
          :class="route.path === item.localizedTo ? 'bg-teal-50 text-teal-800 ring-1 ring-teal-200' : 'text-slate-600 hover:bg-slate-100'"
        >
          {{ translate(item.label, locale) }}
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-3">
        <button
          type="button"
          class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 md:hidden"
          :aria-expanded="mobileMenuOpen"
          aria-controls="mobile-site-nav"
          :aria-label="locale === 'en' ? 'Open navigation menu' : 'Mở menu điều hướng'"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <span v-if="!mobileMenuOpen" class="text-lg leading-none">☰</span>
          <span v-else class="text-lg leading-none">✕</span>
        </button>
        <LocaleSwitch />
      </div>
    </div>

    <div
      v-if="mobileMenuOpen"
      id="mobile-site-nav"
      class="border-t border-slate-200/80 bg-white/95 shadow-lg md:hidden"
    >
      <nav class="shell grid gap-2 py-4">
        <NuxtLink
          v-for="item in localizedLinks"
          :key="`mobile-${item.to}`"
          :to="item.localizedTo"
          class="rounded-2xl px-4 py-3 text-sm font-medium transition"
          :class="route.path === item.localizedTo ? 'bg-teal-50 text-teal-800 ring-1 ring-teal-200' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'"
        >
          {{ translate(item.label, locale) }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>