<script setup lang="ts">
import type { PartnerRecord } from '~/types/entities'
import { translate } from '~/data/services'

const { locale } = useLocale()

defineProps<{
  partners: PartnerRecord[]
}>()
</script>

<template>
  <section class="shell py-20">
    <div class="panel p-8 sm:p-10">
      <SectionHeading
        :eyebrow="{ en: 'Trusted by operators', vi: 'Được tin dùng bởi doanh nghiệp' }"
        :title="{ en: 'Partner ecosystem', vi: 'Hệ sinh thái đối tác' }"
        :description="{ en: 'A cross-section of brands and teams AHTECH has supported through delivery, operations, and infrastructure programs.', vi: 'Một tập hợp các thương hiệu và đội ngũ mà AHTECH đồng hành thông qua các chương trình triển khai, vận hành và hạ tầng.' }"
      />

      <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="partner in partners"
          :key="partner.id"
          class="flex min-h-28 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-6"
        >
          <img
            v-if="partner.logo_url"
            :src="partner.logo_url"
            :alt="translate(partner.name, locale)"
            class="max-h-14 w-auto object-contain"
          >
          <span v-else class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{{ translate(partner.name, locale) }}</span>
        </div>
      </div>
    </div>
  </section>
</template>