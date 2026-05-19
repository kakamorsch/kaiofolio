import { computed } from 'vue'

export function useSchemaOrgProfile() {
  const {
    localizedName,
    localizedTitle,
    localizedSubtitle,
    localizedSummary,
    localizedLocation,
    localizedContact,
    localizedSkills,
    localizedExperiences,
    localizedEducation,
    localizedLanguages,
  } = useLocalizedProfile()

  const schema = computed(() => {
    const name = localizedName.value
    const title = localizedTitle.value
    const summary = localizedSummary.value
    const subtitle = localizedSubtitle.value
    const contact = localizedContact.value
    const skills = localizedSkills.value
    const experiences = localizedExperiences.value
    const education = localizedEducation.value
    const location = localizedLocation.value

    const personSchema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name,
      jobTitle: title,
      description: `${title} — ${subtitle}. ${summary}`,
      url: `https://${contact.portfolio}`,
      email: contact.email,
      telephone: contact.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: location,
      },
      sameAs: [
        `https://${contact.linkedin}`,
        `https://${contact.github}`,
        `https://${contact.portfolio}`,
      ],
      knowsAbout: skills,
      worksFor: experiences.map((exp) => ({
        '@type': 'Organization',
        name: exp.company,
        jobTitle: exp.role,
        description: exp.description,
        startDate: exp.period.split(' - ')[0] || exp.period,
        endDate: exp.period.includes('Present') || exp.period.includes('Presente') || exp.period.includes('現在')
          ? undefined
          : exp.period.split(' - ')[1] || undefined,
      })),
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: education.institution,
        description: education.degree,
      },
      knowsLanguage: localizedLanguages.value.map((lang) => ({
        '@type': 'Language',
        name: lang.name,
      })),
    }

    const profilePageSchema = {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      mainEntity: {
        '@type': 'Person',
        name,
      },
      headline: `${name} — ${title}`,
      description: summary,
      url: `https://${contact.portfolio}`,
      author: {
        '@type': 'Person',
        name,
      },
    }

    return [personSchema, profilePageSchema]
  })

  useHead(() => ({
    script: schema.value.map((s, i) => ({
      type: 'application/ld+json',
      innerHTML: JSON.stringify(s),
      key: `schema-org-${i}`,
    })),
  }))
}
