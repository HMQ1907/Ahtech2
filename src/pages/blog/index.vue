<script setup lang="ts">
import { blogPosts, translate } from '~/data/services'

const { locale, localePath } = useLocale()
</script>

<template>
  <div class="shell py-20">
    <SectionHeading
      :eyebrow="{ en: 'AH Tech insights', vi: 'Bài viết AH Tech' }"
      :title="{ en: 'Articles from delivery, operations, and security work', vi: 'Bài viết từ thực tế triển khai, vận hành và bảo mật' }"
      :description="{ en: 'Bilingual notes for teams that want to understand digital transformation through implementation detail and practical operating experience.', vi: 'Nội dung song ngữ dành cho đội ngũ muốn hiểu chuyển đổi số qua chi tiết triển khai và kinh nghiệm vận hành thực tế.' }"
    />

    <div class="mt-10 grid gap-6 lg:grid-cols-2">
      <NuxtLink
        v-for="blog in blogPosts"
        :key="blog.id"
        :to="localePath(`/blog/${blog.slug}`)"
        class="group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
      >
        <div class="aspect-[16/9] overflow-hidden bg-slate-100">
          <img v-if="blog.image_url" :src="blog.image_url" :alt="translate(blog.title, locale)" class="h-full w-full object-cover transition duration-500 group-hover:scale-105">
          <div v-else class="flex h-full items-center justify-center bg-slate-900 text-sm font-semibold uppercase tracking-[0.24em] text-white">AH Tech</div>
        </div>
        <div class="space-y-4 p-6 sm:p-8">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">{{ new Date(blog.created_at).toLocaleDateString('en-GB') }}</p>
          <h2 class="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">{{ translate(blog.title, locale) }}</h2>
          <p class="text-sm leading-7 text-slate-600 sm:text-base">{{ translate(blog.summary, locale) }}</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>