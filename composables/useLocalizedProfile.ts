import { computed } from 'vue'

export interface LocalizedContact {
  phone: string
  email: string
  linkedin: string
  portfolio: string
}

export interface LocalizedExperience {
  id: string
  company: string
  role: string
  period: string
  location: string
  description: string
  highlights: string[]
  technologies: string[]
  level: number
  hackCommand: string
  hackOutput: string[]
}

export interface LocalizedCertification {
  name: string
  issuer: string
}

export interface LocalizedEducation {
  institution: string
  degree: string
  period: string
}

export interface LocalizedLanguage {
  name: string
  level: string
}

export interface LocalizedHobby {
  name: string
  description: string
  icon: string
}

export interface LocalizedNextMission {
  title: string
  description: string
  status: string
  location: string
  requiredLevel: number
}

function resolveArrayStrings(t: (key: string) => string, baseKey: string, rawArray: any[] | undefined): string[] {
  if (!Array.isArray(rawArray)) return []
  return Array.from({ length: rawArray.length }, (_, i) => t(`${baseKey}.${i}`))
}

export function useLocalizedProfile() {
  const { t, tm, locale } = useI18n()

  const localizedName = computed(() => t('profile.name'))
  const localizedTitle = computed(() => t('profile.title'))
  const localizedSubtitle = computed(() => t('profile.subtitle'))
  const localizedLocation = computed(() => t('profile.location'))
  const localizedSummary = computed(() => t('profile.summary'))
  const localizedSpecialties = computed(() => resolveArrayStrings(t, 'profile.specialties', tm('profile.specialties') as any[]))
  const localizedContact = computed<LocalizedContact>(() => ({
    phone: t('profile.contact.phone'),
    email: t('profile.contact.email'),
    linkedin: t('profile.contact.linkedin'),
    portfolio: t('profile.contact.portfolio'),
  }))
  const localizedLevel = computed(() => t('profile.level'))
  const localizedExp = computed(() => t('profile.exp'))
  const localizedStack = computed(() => t('profile.stack'))
  const localizedFocus = computed(() => t('profile.focus'))

  const localizedExperiences = computed<LocalizedExperience[]>(() => {
    const raw = tm('profile.experiences') as any[]
    if (!Array.isArray(raw)) return []
    return raw.map((_, i) => ({
      id: t(`profile.experiences.${i}.id`),
      company: t(`profile.experiences.${i}.company`),
      role: t(`profile.experiences.${i}.role`),
      period: t(`profile.experiences.${i}.period`),
      location: t(`profile.experiences.${i}.location`),
      description: t(`profile.experiences.${i}.description`),
      highlights: resolveArrayStrings(t, `profile.experiences.${i}.highlights`, raw[i]?.highlights),
      technologies: resolveArrayStrings(t, `profile.experiences.${i}.technologies`, raw[i]?.technologies),
      level: Number(tm(`profile.experiences.${i}.level`)) || 0,
      hackCommand: t(`profile.experiences.${i}.hackCommand`),
      hackOutput: resolveArrayStrings(t, `profile.experiences.${i}.hackOutput`, raw[i]?.hackOutput),
    }))
  })

  const localizedSkills = computed(() => resolveArrayStrings(t, 'profile.skills', tm('profile.skills') as any[]))

  const localizedCertifications = computed<LocalizedCertification[]>(() => {
    const raw = tm('profile.certifications') as any[]
    if (!Array.isArray(raw)) return []
    return raw.map((_, i) => ({
      name: t(`profile.certifications.${i}.name`),
      issuer: t(`profile.certifications.${i}.issuer`),
    }))
  })

  const localizedEducation = computed<LocalizedEducation>(() => ({
    institution: t('profile.education.institution'),
    degree: t('profile.education.degree'),
    period: t('profile.education.period'),
  }))

  const localizedLanguages = computed<LocalizedLanguage[]>(() => {
    const raw = tm('profile.languages') as any[]
    if (!Array.isArray(raw)) return []
    return raw.map((_, i) => ({
      name: t(`profile.languages.${i}.name`),
      level: t(`profile.languages.${i}.level`),
    }))
  })

  const localizedHobbies = computed<LocalizedHobby[]>(() => {
    const raw = tm('profile.hobbies') as any[]
    if (!Array.isArray(raw)) return []
    return raw.map((_, i) => ({
      name: t(`profile.hobbies.${i}.name`),
      description: t(`profile.hobbies.${i}.description`),
      icon: t(`profile.hobbies.${i}.icon`),
    }))
  })

  const localizedNextMission = computed<LocalizedNextMission>(() => ({
    title: t('profile.nextMission.title'),
    description: t('profile.nextMission.description'),
    status: t('profile.nextMission.status'),
    location: t('profile.nextMission.location'),
    requiredLevel: Number(tm('profile.nextMission.requiredLevel')) || 0,
  }))

  const profile = computed(() => ({
    name: localizedName.value,
    title: localizedTitle.value,
    subtitle: localizedSubtitle.value,
    location: localizedLocation.value,
    summary: localizedSummary.value,
    specialties: localizedSpecialties.value,
    contact: localizedContact.value,
    level: localizedLevel.value,
    exp: localizedExp.value,
    stack: localizedStack.value,
    focus: localizedFocus.value,
    experiences: localizedExperiences.value,
    skills: localizedSkills.value,
    certifications: localizedCertifications.value,
    education: localizedEducation.value,
    languages: localizedLanguages.value,
    hobbies: localizedHobbies.value,
    nextMission: localizedNextMission.value,
  }))

  return {
    locale,
    profile,
    localizedName,
    localizedTitle,
    localizedSubtitle,
    localizedLocation,
    localizedSummary,
    localizedSpecialties,
    localizedContact,
    localizedLevel,
    localizedExp,
    localizedStack,
    localizedFocus,
    localizedExperiences,
    localizedSkills,
    localizedCertifications,
    localizedEducation,
    localizedLanguages,
    localizedHobbies,
    localizedNextMission,
  }
}
