<script setup lang="ts">
import { blogPosts, featuredServices, partners, translate } from '~/data/services'

const { locale, localePath } = useLocale()

const stats = [
  {
    value: '10+',
    label: {
      en: 'years supporting digital transformation programs',
      vi: 'năm đồng hành cùng các chương trình chuyển đổi số'
    }
  },
  {
    value: '24/7',
    label: {
      en: 'operational mindset for critical systems',
      vi: 'tư duy vận hành cho các hệ thống quan trọng'
    }
  },
  {
    value: '5',
    label: {
      en: 'core service areas delivered as one stack',
      vi: 'nhóm dịch vụ cốt lõi được triển khai như một hệ thống'
    }
  }
]

const highlights = [
  {
    title: {
      en: 'Built around real operations',
      vi: 'Thiết kế từ thực tế vận hành'
    },
    description: {
      en: 'We design around ownership, service continuity, security, and the constraints teams already live with every day.',
      vi: 'Chúng tôi thiết kế dựa trên quyền sở hữu, tính liên tục dịch vụ, bảo mật và các ràng buộc mà đội ngũ đang sống cùng mỗi ngày.'
    }
  },
  {
    title: {
      en: 'Modernization without disruption',
      vi: 'Hiện đại hóa không gây xáo trộn'
    },
    description: {
      en: 'Infrastructure, software, and integration work are sequenced carefully so change is easier to adopt and support.',
      vi: 'Hạ tầng, phần mềm và tích hợp được sắp theo từng bước để thay đổi dễ áp dụng và dễ hỗ trợ hơn.'
    }
  },
  {
    title: {
      en: 'Long-term delivery partner',
      vi: 'Đối tác đồng hành dài hạn'
    },
    description: {
      en: 'The goal is not only launch. The goal is a system that remains clear, stable, and useful after handover.',
      vi: 'Mục tiêu không chỉ là ra mắt. Mục tiêu là một hệ thống vẫn rõ ràng, ổn định và hữu ích sau bàn giao.'
    }
  }
]
</script>

<template>
  <div class="pb-20">
    <section class="hero-grid">
      <div class="shell grid gap-12 py-18 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
        <div class="space-y-7">
          <span class="eyebrow">
            {{ locale === 'en' ? 'Technology for practical business growth' : 'Công nghệ phục vụ tăng trưởng thực tế' }}
          </span>
          <h1 class="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-(--ah-ink) sm:text-6xl">
            {{ locale === 'en' ? 'Simple, dependable digital transformation for growing businesses.' : 'Chuyển đổi số rõ ràng, ổn định và dễ áp dụng cho doanh nghiệp đang phát triển.' }}
          </h1>
          <p class="max-w-2xl text-lg leading-8 text-slate-600">
            {{ locale === 'en' ? 'AH Tech helps businesses modernize infrastructure, software, cloud, and security with solutions that are practical to deploy and sustainable to operate.' : 'AH Tech hỗ trợ doanh nghiệp hiện đại hóa hạ tầng, phần mềm, cloud và bảo mật bằng những giải pháp thực tế, dễ triển khai và bền vững trong vận hành.' }}
          </p>

          <div class="flex flex-wrap gap-4">
            <UButton :to="localePath('/contact')" size="xl" color="neutral" trailing-icon="i-lucide-arrow-right">
              {{ locale === 'en' ? 'Talk to AH Tech' : 'Trao đổi cùng AH Tech' }}
            </UButton>
            <UButton :to="localePath('/service')" size="xl" color="neutral" variant="outline">
              {{ locale === 'en' ? 'View services' : 'Xem dịch vụ' }}
            </UButton>
          </div>

          <div class="grid gap-4 pt-2 sm:grid-cols-3">
            <div v-for="item in stats" :key="item.label.en" class="rounded-3xl border border-white/70 bg-white/85 p-5 shadow-sm">
              <p class="text-3xl font-semibold text-slate-950">{{ item.value }}</p>
              <p class="mt-2 text-sm leading-6 text-slate-600">{{ translate(item.label, locale) }}</p>
            </div>
          </div>
        </div>

        <div class="panel overflow-hidden p-4">
          <img src="/images/banner.png" alt="Digital transformation" class="w-full rounded-[28px] object-cover" >
        </div>
      </div>
    </section>

    <section class="shell py-18">
      <div class="grid gap-6 lg:grid-cols-3">
        <div v-for="item in highlights" :key="item.title.en" class="panel h-full p-7">
          <h2 class="text-2xl font-semibold tracking-tight text-slate-950">{{ translate(item.title, locale) }}</h2>
          <p class="mt-4 text-sm leading-7 text-slate-600">{{ translate(item.description, locale) }}</p>
        </div>
      </div>
    </section>

    <section class="shell py-18">
      <SectionHeading
        :eyebrow="{ en: 'Services', vi: 'Dịch vụ' }"
        :title="{ en: 'Core capabilities for modern operations', vi: 'Nhóm năng lực cốt lõi cho vận hành hiện đại' }"
        :description="{ en: 'AH Tech supports the essential layers businesses rely on most, from infrastructure and software to governance, cloud, and cybersecurity.', vi: 'AH Tech hỗ trợ các lớp năng lực thiết yếu mà doanh nghiệp phụ thuộc nhiều nhất, từ hạ tầng và phần mềm đến governance, cloud và an ninh mạng.' }"
      />

      <div class="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
        <NuxtLink
          v-for="service in featuredServices"
          :key="service.slug"
          :to="localePath(`/${service.slug}`)"
          class="panel h-full p-6 transition hover:-translate-y-1 hover:shadow-lg"
        >
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">{{ translate(service.eyebrow, locale) }}</p>
          <h3 class="mt-4 text-xl font-semibold text-slate-950">{{ translate(service.title, locale) }}</h3>
          <p class="mt-4 text-sm leading-7 text-slate-600">{{ translate(service.summary, locale) }}</p>
        </NuxtLink>
      </div>
    </section>

    <section class="shell py-12">
      <div class="panel grid gap-8 px-8 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <div>
          <span class="eyebrow">{{ locale === 'en' ? 'Why AH Tech' : 'Vì sao chọn AH Tech' }}</span>
          <h2 class="mt-5 text-3xl font-semibold tracking-tight text-slate-950">{{ locale === 'en' ? 'Technology decisions grounded in day-to-day operations.' : 'Quyết định công nghệ được đặt trên thực tế vận hành hằng ngày.' }}</h2>
        </div>
        <div class="grid gap-4 sm:grid-cols-3">
          <div class="rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-semibold text-slate-950">{{ locale === 'en' ? 'Execution' : 'Triển khai' }}</p>
            <p class="mt-3 text-sm leading-7 text-slate-600">{{ locale === 'en' ? 'Projects are shaped around real delivery constraints and team readiness.' : 'Dự án được thiết kế dựa trên giới hạn triển khai thực tế và mức sẵn sàng của đội ngũ.' }}</p>
          </div>
          <div class="rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-semibold text-slate-950">{{ locale === 'en' ? 'Integration' : 'Tích hợp' }}</p>
            <p class="mt-3 text-sm leading-7 text-slate-600">{{ locale === 'en' ? 'Infrastructure, software, and process are planned to work together instead of separately.' : 'Hạ tầng, phần mềm và quy trình được thiết kế để đi cùng nhau thay vì tách rời.' }}</p>
          </div>
          <div class="rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-semibold text-slate-950">{{ locale === 'en' ? 'Longevity' : 'Bền vững' }}</p>
            <p class="mt-3 text-sm leading-7 text-slate-600">{{ locale === 'en' ? 'Solutions are chosen so they remain maintainable as the business grows.' : 'Giải pháp được lựa chọn để vẫn có thể bảo trì và phát huy hiệu quả khi doanh nghiệp tăng trưởng.' }}</p>
          </div>
        </div>
      </div>
    </section>

    <PartnerStrip :partners="partners" />
    <BlogTeaser :blogs="blogPosts.slice(0, 3)" />

    <section class="shell py-10">
      <div class="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-sm">
        <iframe
          src="https://maps.google.com/maps?q=TTM%20Building%20Ho%20Chi%20Minh%20City&z=16&output=embed"
          width="100%"
          height="460"
          style="border:0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="AH Tech office map"
        ></iframe>
      </div>
    </section>
  </div>
</template>
