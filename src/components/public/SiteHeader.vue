<script setup lang="ts">
import { translate } from '~/data/services'

const route = useRoute()
const { locale, localePath } = useLocale()

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
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-white/60 bg-white/80 backdrop-blur-xl">
    <div class="shell flex items-center justify-between gap-6 py-4">
      <NuxtLink :to="localePath('/')" class="flex items-center gap-3">
        <img src="/images/logoah.png" alt="AHTECH" class="h-10 w-auto" >
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.28em] text-teal-700">AHTECH</p>
          <p class="text-xs text-slate-500">{{ locale === 'en' ? 'Digital transformation systems' : 'Hệ thống chuyển đổi số' }}</p>
        </div>
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

      <div class="flex items-center">
        <LocaleSwitch />
      </div>
    </div>
  </header>
</template>