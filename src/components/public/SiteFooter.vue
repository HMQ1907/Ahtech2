<script setup lang="ts">
const { locale, localePath } = useLocale()
</script>

<template>
  <footer class="border-t border-slate-200 bg-slate-950 text-slate-200">
    <div class="shell grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr]">
      <div class="space-y-4">
        <p class="text-sm font-semibold uppercase tracking-[0.28em] text-teal-300">AHTECH</p>
        <h2 class="max-w-md text-3xl font-semibold text-white">{{ locale === 'en' ? 'Practical systems for modern operations.' : 'Hệ thống thực tiễn cho vận hành hiện đại.' }}</h2>
        <p class="max-w-xl text-sm leading-7 text-slate-400">
          {{ locale === 'en' ? 'We help Vietnamese businesses modernize infrastructure, software delivery, cybersecurity, and day-to-day IT operations with solutions built for execution.' : 'Chúng tôi giúp doanh nghiệp hiện đại hóa hạ tầng, phát triển phần mềm, an ninh mạng và vận hành CNTT hằng ngày bằng các giải pháp có thể triển khai thực tế.' }}
        </p>
      </div>

      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">{{ locale === 'en' ? 'Reach us' : 'Liên hệ' }}</p>
        <div class="mt-4 space-y-3 text-sm text-slate-300">
          <p>T.T.M Building, Binh Thanh District, Ho Chi Minh City</p>
          <p>hello@ahtech.vn</p>
          <p>+84 28 3888 6868</p>
        </div>
      </div>

      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">{{ locale === 'en' ? 'Explore' : 'Khám phá' }}</p>
        <div class="mt-4 grid gap-3 text-sm text-slate-300">
          <NuxtLink :to="localePath('/service')" class="hover:text-white">{{ locale === 'en' ? 'Services' : 'Dịch vụ' }}</NuxtLink>
          <NuxtLink :to="localePath('/blog')" class="hover:text-white">{{ locale === 'en' ? 'Insights' : 'Bài viết' }}</NuxtLink>
          <NuxtLink :to="localePath('/about')" class="hover:text-white">{{ locale === 'en' ? 'About' : 'Giới thiệu' }}</NuxtLink>
          <NuxtLink :to="localePath('/contact')" class="hover:text-white">{{ locale === 'en' ? 'Contact' : 'Liên hệ' }}</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>