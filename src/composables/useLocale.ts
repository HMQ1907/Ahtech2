import type { LocaleCode } from '~/types/entities'

export const useLocale = () => {
  const { locale } = useI18n()
  const localePath = useLocalePath()
  const switchLocalePath = useSwitchLocalePath()

  const setLocale = (nextLocale: LocaleCode) => {
    const targetPath = switchLocalePath(nextLocale)
    if (targetPath) {
      void navigateTo(targetPath)
    }
  }

  return {
    locale: computed(() => locale.value as LocaleCode),
    localePath,
    setLocale,
    isEnglish: computed(() => locale.value === 'en')
  }
}