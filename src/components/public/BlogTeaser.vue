<script setup lang="ts">
import type { BlogRecord } from '~/types/entities'
import { translate } from '~/data/services'

const { locale, localePath } = useLocale()

defineProps<{
  blogs: BlogRecord[]
}>()
</script>

<template>
  <section class="shell py-20">
    <div class="flex items-end justify-between gap-6">
      <SectionHeading
        :eyebrow="{ en: 'Insights', vi: 'Bài viết' }"
        :title="{ en: 'Latest thinking from the field', vi: 'Góc nhìn mới nhất từ thực tế triển khai' }"
        :description="{ en: 'Notes on digital operations, systems integration, infrastructure modernization, and security practices gathered from active delivery work.', vi: 'Những ghi chú về vận hành số, tích hợp hệ thống, hiện đại hóa hạ tầng và thực hành bảo mật được tổng hợp từ quá trình triển khai thực tế.' }"
      />
      <UButton :to="localePath('/blog')" color="neutral" variant="outline" class="hidden sm:inline-flex">
        {{ locale === 'en' ? 'View all articles' : 'Xem tất cả bài viết' }}
      </UButton>
    </div>

    <div class="mt-10 grid gap-6 lg:grid-cols-3">
      <NuxtLink
        v-for="blog in blogs"
        :key="blog.id"
        :to="localePath(`/blog/${blog.slug}`)"
        class="group panel overflow-hidden"
      >
        <div class="aspect-4/3 overflow-hidden bg-slate-200">
          <img
            v-if="blog.image_url"
            :src="blog.image_url"
            :alt="translate(blog.title, locale)"
            class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          >
          <div v-else class="flex h-full items-center justify-center bg-slate-900 text-sm font-semibold uppercase tracking-[0.25em] text-white">
            AHTECH
          </div>
        </div>
        <div class="space-y-4 p-6">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
            {{ new Date(blog.created_at).toLocaleDateString('en-GB') }}
          </p>
          <h3 class="text-xl font-semibold text-slate-950">{{ translate(blog.title, locale) }}</h3>
          <p class="line-clamp-3 text-sm leading-6 text-slate-600">{{ translate(blog.summary, locale) }}</p>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>