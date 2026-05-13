<script setup lang="ts">
import { findBlogPost, translate } from '~/data/services'

const route = useRoute()
const { locale } = useLocale()
const blog = computed(() => findBlogPost(String(route.params.slug)))

if (!blog.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found' })
}
</script>

<template>
  <div class="shell py-20">
    <article v-if="blog" class="mx-auto max-w-4xl">
      <div class="space-y-5">
        <span class="eyebrow">{{ new Date(blog.created_at).toLocaleDateString('en-GB') }}</span>
        <h1 class="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">{{ translate(blog.title, locale) }}</h1>
        <p class="max-w-3xl text-lg leading-8 text-slate-600">{{ translate(blog.summary, locale) }}</p>
      </div>

      <div class="mt-10 overflow-hidden rounded-4xl border border-slate-200 bg-slate-200 shadow-sm">
        <img v-if="blog.image_url" :src="blog.image_url" :alt="translate(blog.title, locale)" class="h-full w-full object-cover">
      </div>

      <div class="prose-lite mt-12 rounded-4xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <h3>{{ locale === 'en' ? 'Overview' : 'Tổng quan' }}</h3>
        <p v-for="paragraph in blog.content" :key="paragraph.en">{{ translate(paragraph, locale) }}</p>
      </div>
    </article>
  </div>
</template>