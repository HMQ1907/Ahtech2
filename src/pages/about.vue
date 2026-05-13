<script setup lang="ts">
const { locale } = useLocale()
</script>

<template>
  <div class="shell py-20">
    <section class="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
      <div class="space-y-6">
        <span class="eyebrow">{{ locale === 'en' ? 'About AHTECH' : 'Về AHTECH' }}</span>
        <h1 class="text-5xl font-semibold tracking-tight text-slate-950">{{ locale === 'en' ? 'Technology delivery that stays close to operations.' : 'Triển khai công nghệ luôn gần với thực tế vận hành.' }}</h1>
        <p class="max-w-2xl text-lg leading-8 text-slate-600">
          {{ locale === 'en' ? 'AHTECH was built to serve businesses that need more than point solutions. We combine infrastructure, software delivery, security, and operating support into coordinated programs that teams can actually adopt.' : 'AHTECH được xây dựng để phục vụ những doanh nghiệp cần hơn cả giải pháp đơn lẻ. Chúng tôi kết hợp hạ tầng, phát triển phần mềm, bảo mật và hỗ trợ vận hành thành các chương trình thống nhất mà đội ngũ có thể áp dụng thực sự.' }}
        </p>
      </div>
      <div class="panel p-8">
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">{{ locale === 'en' ? 'Mission' : 'Sứ mệnh' }}</p>
        <p class="mt-4 text-lg leading-8 text-slate-700">
          {{ locale === 'en' ? 'Deliver advanced, practical technology solutions that help organizations operate with more clarity, resilience, and speed.' : 'Mang đến các giải pháp công nghệ tiên tiến và thực tế giúp tổ chức vận hành rõ ràng hơn, bền bỉ hơn và nhanh hơn.' }}
        </p>
        <p class="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-orange-600">{{ locale === 'en' ? 'Vision' : 'Tầm nhìn' }}</p>
        <p class="mt-4 text-lg leading-8 text-slate-700">
          {{ locale === 'en' ? 'Become the long-term transformation partner for businesses that want to modernize without losing control of operational reality.' : 'Trở thành đối tác chuyển đổi lâu dài cho doanh nghiệp muốn hiện đại hóa nhưng vẫn giữ được kiểm soát đối với thực tế vận hành.' }}
        </p>
      </div>
    </section>

    <section class="mt-16 grid gap-6 md:grid-cols-3">
      <div class="panel p-6">
        <h2 class="text-xl font-semibold text-slate-950">{{ locale === 'en' ? 'Business-first architecture' : 'Kiến trúc ưu tiên nghiệp vụ' }}</h2>
        <p class="mt-4 text-sm leading-7 text-slate-600">{{ locale === 'en' ? 'Every platform, workflow, and integration starts with business ownership, service expectations, and downstream reporting needs.' : 'Mọi nền tảng, workflow và tích hợp đều bắt đầu từ quyền sở hữu nghiệp vụ, kỳ vọng dịch vụ và nhu cầu báo cáo phía sau.' }}</p>
      </div>
      <div class="panel p-6">
        <h2 class="text-xl font-semibold text-slate-950">{{ locale === 'en' ? 'Delivery that respects change fatigue' : 'Triển khai tôn trọng sức chịu thay đổi' }}</h2>
        <p class="mt-4 text-sm leading-7 text-slate-600">{{ locale === 'en' ? 'We favor staged rollouts, practical governance, and realistic adoption plans over forced transformation theater.' : 'Chúng tôi ưu tiên rollout theo giai đoạn, governance thực tế và kế hoạch áp dụng khả thi thay vì chuyển đổi áp đặt.' }}</p>
      </div>
      <div class="panel p-6">
        <h2 class="text-xl font-semibold text-slate-950">{{ locale === 'en' ? 'Long-term partnership mindset' : 'Tư duy đồng hành lâu dài' }}</h2>
        <p class="mt-4 text-sm leading-7 text-slate-600">{{ locale === 'en' ? 'Support, monitoring, and improvement continue after launch so solutions remain useful as operations change.' : 'Hỗ trợ, giám sát và cải tiến tiếp tục sau khi ra mắt để giải pháp vẫn hữu ích khi vận hành thay đổi.' }}</p>
      </div>
    </section>
  </div>
</template>