import { computed } from 'vue'

export interface LocalizedContact {
  phone: string
  email: string
  linkedin: string
  github: string
  portfolio: string
}

export interface LocalizedExperience {
  id: string
  company: string
  role: string
  period: string
  employmentType?: string
  location: string
  description: string
  highlights: string[]
  note?: string
  technologies: string[]
  level: number
  hackCommand: string
  hackOutput: string[]
}

export interface LocalizedImpactHighlight {
  metric: string
  label: string
}

export interface LocalizedCoreSkillGroup {
  label: string
  items: string[]
}

export interface LocalizedResumeMeta {
  profileTitle: string
  coreSkillsTitle: string
  experienceTitle: string
  experienceContinuedTitle: string
  educationTitle: string
  languagesTitle: string
  experienceOrder: string[]
  coreSkills: LocalizedCoreSkillGroup[]
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

export interface LocalizedWarStory {
  id: string
  company: string
  period: string
  title: string
  context: string
  problem: string
  action: string
  result: string
  lessons: string
}

export interface LocalizedSkillCategory {
  name: string
  description: string
  items: string[]
}

function resolveArrayStrings(t: (key: string) => string, baseKey: string, rawArray: any[] | undefined): string[] {
  if (!Array.isArray(rawArray)) return []
  return Array.from({ length: rawArray.length }, (_, i) => t(`${baseKey}.${i}`))
}

function rawMessage(tm: (key: string) => unknown, key: string): string {
  const val = tm(key)
  if (typeof val === 'string') return val.replace(/\[at\]/g, '@')
  if (val && typeof val === 'object') {
    const staticVal = (val as any).body?.static
    if (typeof staticVal === 'string') return staticVal.replace(/\[at\]/g, '@')
  }
  return ''
}

export function useLocalizedProfile() {
  const { t, tm, te, locale } = useI18n()

  const localizedName = computed(() => t('profile.name'))
  const localizedTitle = computed(() => t('profile.title'))
  const localizedSubtitle = computed(() => t('profile.subtitle'))
  const localizedLocation = computed(() => t('profile.location'))
  const localizedRemoteRegion = computed(() => t('profile.remoteRegion'))
  const localizedSummary = computed(() => t('profile.summary'))
  const localizedSpecialties = computed(() => resolveArrayStrings(t, 'profile.specialties', tm('profile.specialties') as any[]))
  const localizedContact = computed<LocalizedContact>(() => ({
    phone: t('profile.contact.phone'),
    email: rawMessage(tm, 'profile.contact.email'),
    linkedin: t('profile.contact.linkedin'),
    github: t('profile.contact.github'),
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
      employmentType: te(`profile.experiences.${i}.employmentType`) ? t(`profile.experiences.${i}.employmentType`) : undefined,
      location: t(`profile.experiences.${i}.location`),
      description: t(`profile.experiences.${i}.description`),
      highlights: resolveArrayStrings(t, `profile.experiences.${i}.highlights`, raw[i]?.highlights),
      note: te(`profile.experiences.${i}.note`) ? t(`profile.experiences.${i}.note`) : undefined,
      technologies: resolveArrayStrings(t, `profile.experiences.${i}.technologies`, raw[i]?.technologies),
      level: Number(tm(`profile.experiences.${i}.level`)) || 0,
      hackCommand: rawMessage(tm, `profile.experiences.${i}.hackCommand`),
      hackOutput: resolveArrayStrings(t, `profile.experiences.${i}.hackOutput`, raw[i]?.hackOutput),
    }))
  })

  const localizedSkills = computed(() => resolveArrayStrings(t, 'profile.skills', tm('profile.skills') as any[]))

  const localizedSkillCategories = computed<LocalizedSkillCategory[]>(() => {
    const raw = tm('profile.skillCategories') as any[]
    if (!Array.isArray(raw)) return []
    return raw.map((_, i) => ({
      name: t(`profile.skillCategories.${i}.name`),
      description: t(`profile.skillCategories.${i}.description`),
      items: resolveArrayStrings(t, `profile.skillCategories.${i}.items`, raw[i]?.items),
    }))
  })

  const localizedImpactHighlights = computed<LocalizedImpactHighlight[]>(() => {
    const raw = tm('profile.impactHighlights') as any[]
    if (!Array.isArray(raw)) return []
    return raw.map((_, i) => ({
      metric: t(`profile.impactHighlights.${i}.metric`),
      label: t(`profile.impactHighlights.${i}.label`),
    }))
  })

  const localizedResumeMeta = computed<LocalizedResumeMeta>(() => {
    const rawOrder = tm('resume.experienceOrder') as any[]
    const rawCore = tm('resume.coreSkills') as any[]
    return {
      profileTitle: t('resume.profileTitle'),
      coreSkillsTitle: t('resume.coreSkillsTitle'),
      experienceTitle: t('resume.experienceTitle'),
      experienceContinuedTitle: t('resume.experienceContinuedTitle'),
      educationTitle: t('resume.educationTitle'),
      languagesTitle: t('resume.languagesTitle'),
      experienceOrder: resolveArrayStrings(t, 'resume.experienceOrder', rawOrder),
      coreSkills: Array.isArray(rawCore)
        ? rawCore.map((_, i) => ({
            label: t(`resume.coreSkills.${i}.label`),
            items: resolveArrayStrings(t, `resume.coreSkills.${i}.items`, rawCore[i]?.items),
          }))
        : [],
    }
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

  const localizedWarStories = computed<LocalizedWarStory[]>(() => {
    const raw = tm('profile.warStories') as any[]
    if (!Array.isArray(raw)) return []
    return raw.map((_, i) => ({
      id: t(`profile.warStories.${i}.id`),
      company: t(`profile.warStories.${i}.company`),
      period: t(`profile.warStories.${i}.period`),
      title: t(`profile.warStories.${i}.title`),
      context: t(`profile.warStories.${i}.context`),
      problem: t(`profile.warStories.${i}.problem`),
      action: t(`profile.warStories.${i}.action`),
      result: t(`profile.warStories.${i}.result`),
      lessons: t(`profile.warStories.${i}.lessons`),
    }))
  })

  const profile = computed(() => ({
    name: localizedName.value,
    title: localizedTitle.value,
    subtitle: localizedSubtitle.value,
    location: localizedLocation.value,
    remoteRegion: localizedRemoteRegion.value,
    summary: localizedSummary.value,
    specialties: localizedSpecialties.value,
    contact: localizedContact.value,
    level: localizedLevel.value,
    exp: localizedExp.value,
    stack: localizedStack.value,
    focus: localizedFocus.value,
    experiences: localizedExperiences.value,
    skills: localizedSkills.value,
    skillCategories: localizedSkillCategories.value,
    impactHighlights: localizedImpactHighlights.value,
    education: localizedEducation.value,
    languages: localizedLanguages.value,
    hobbies: localizedHobbies.value,
    nextMission: localizedNextMission.value,
    warStories: localizedWarStories.value,
    resume: localizedResumeMeta.value,
  }))

  return {
    locale,
    profile,
    localizedName,
    localizedTitle,
    localizedSubtitle,
    localizedLocation,
    localizedRemoteRegion,
    localizedSummary,
    localizedSpecialties,
    localizedContact,
    localizedLevel,
    localizedExp,
    localizedStack,
    localizedFocus,
    localizedExperiences,
    localizedSkills,
    localizedSkillCategories,
    localizedImpactHighlights,
    localizedResumeMeta,
    localizedEducation,
    localizedLanguages,
    localizedHobbies,
    localizedNextMission,
    localizedWarStories,
  }
}
