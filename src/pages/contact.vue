<script setup lang="ts">
const { locale } = useLocale()

const form = reactive({ name: '', email: '', company: '', phone: '', message: '' })

const mailtoLink = computed(() => {
  const subject = encodeURIComponent(`AHTECH Inquiry - ${form.company || form.name || 'Website'}`)
  const body = encodeURIComponent([
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    `Company: ${form.company}`,
    `Phone: ${form.phone}`,
    '',
    'Request:',
    form.message
  ].join('\n'))

  return `mailto:hello@ahtech.vn?subject=${subject}&body=${body}`
})
</script>

<template>
  <div class="shell py-20">
    <div class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div class="space-y-6">
        <span class="eyebrow">{{ locale === 'en' ? 'Contact' : 'Liên hệ' }}</span>
        <h1 class="text-5xl font-semibold tracking-tight text-slate-950">{{ locale === 'en' ? 'Tell us where operations are getting stuck.' : 'Cho chúng tôi biết doanh nghiệp đang vướng ở đâu.' }}</h1>
        <p class="text-lg leading-8 text-slate-600">
          {{ locale === 'en' ? 'Share the infrastructure, software, security, or service-management issue your team is facing. Use the static inquiry form to prepare an email draft directly from the site.' : 'Chia sẻ vấn đề về hạ tầng, phần mềm, bảo mật hoặc vận hành dịch vụ mà đội ngũ đang gặp phải. Form tĩnh này sẽ tạo sẵn email để anh chị gửi trực tiếp từ website.' }}
        </p>

        <div class="panel space-y-5 p-6">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{{ locale === 'en' ? 'Address' : 'Địa chỉ' }}</p>
            <p class="mt-2 text-base text-slate-800">T.T.M Building, Binh Thanh District, Ho Chi Minh City</p>
          </div>
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Email</p>
            <p class="mt-2 text-base text-slate-800">hello@ahtech.vn</p>
          </div>
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{{ locale === 'en' ? 'Phone' : 'Điện thoại' }}</p>
            <p class="mt-2 text-base text-slate-800">+84 28 3888 6868</p>
          </div>
        </div>
      </div>

      <div class="panel p-8">
        <div class="grid gap-5 sm:grid-cols-2">
          <label>
            <span class="field-label">{{ locale === 'en' ? 'Full name' : 'Họ và tên' }}</span>
            <input v-model="form.name" class="field" required>
          </label>
          <label>
            <span class="field-label">Email</span>
            <input v-model="form.email" type="email" class="field" required>
          </label>
          <label>
            <span class="field-label">{{ locale === 'en' ? 'Company' : 'Công ty' }}</span>
            <input v-model="form.company" class="field">
          </label>
          <label>
            <span class="field-label">{{ locale === 'en' ? 'Phone' : 'Điện thoại' }}</span>
            <input v-model="form.phone" class="field">
          </label>
        </div>

        <label class="mt-5 block">
          <span class="field-label">{{ locale === 'en' ? 'What do you need help with?' : 'Anh chị đang cần hỗ trợ vấn đề gì?' }}</span>
          <textarea v-model="form.message" rows="6" class="field"></textarea>
        </label>

        <div class="mt-6 flex flex-wrap gap-3">
          <UButton :to="mailtoLink" external size="xl" color="neutral">
            {{ locale === 'en' ? 'Open email draft' : 'Mở email soạn sẵn' }}
          </UButton>
          <UButton to="mailto:hello@ahtech.vn" external size="xl" color="neutral" variant="outline">
            {{ locale === 'en' ? 'Email us directly' : 'Gửi email trực tiếp' }}
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>