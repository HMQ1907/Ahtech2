<script setup lang="ts">
import { servicePages, translate } from '~/data/services'

const { locale } = useLocale()
</script>

<template>
  <div class="shell py-20">
    <SectionHeading
      :eyebrow="{ en: 'Services', vi: 'Dịch vụ' }"
      :title="{ en: 'A complete operating stack for modern businesses', vi: 'Bộ năng lực vận hành toàn diện cho doanh nghiệp hiện đại' }"
      :description="{ en: 'AHTECH covers the core layers needed to modernize reliably: infrastructure, software, cloud operations, cybersecurity, and systems management.', vi: 'AHTECH bao phủ các lớp năng lực cốt lõi để hiện đại hóa một cách đáng tin cậy: hạ tầng, phần mềm, cloud, an ninh mạng và quản trị hệ thống.' }"
    />

    <div class="mt-10 grid gap-6 lg:grid-cols-2">
      <NuxtLink v-for="service in servicePages" :key="service.slug" :to="`/${service.slug}`" class="panel p-8 transition hover:-translate-y-1 hover:shadow-xl">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">{{ translate(service.eyebrow, locale) }}</p>
        <h2 class="mt-4 text-2xl font-semibold text-slate-950">{{ translate(service.title, locale) }}</h2>
        <p class="mt-4 text-sm leading-7 text-slate-600">{{ translate(service.summary, locale) }}</p>
        <ul class="mt-6 space-y-2 text-sm text-slate-700">
          <li v-for="bullet in service.bullets" :key="bullet.en">• {{ translate(bullet, locale) }}</li>
        </ul>
      </NuxtLink>
    </div>
  </div>
</template>