export interface ServiceFeature {
  title: string
  description: string
}

export type LocaleCode = 'en' | 'vi'

export interface LocalizedValue {
  en: string
  vi: string
}

export interface ServicePageContent {
  slug: string
  eyebrow: LocalizedValue
  title: LocalizedValue
  summary: LocalizedValue
  hero: LocalizedValue
  bullets: LocalizedValue[]
  features: {
    title: LocalizedValue
    description: LocalizedValue
  }[]
}

export interface BlogRecord {
  id: number
  title: LocalizedValue
  summary: LocalizedValue
  content: LocalizedValue[]
  slug: string
  image_url: string | null
  created_at: string
}

export interface PartnerRecord {
  id: number
  name: LocalizedValue
  logo_url: string | null
}

export interface ContactFieldCopy {
  title: LocalizedValue
  description: LocalizedValue
}