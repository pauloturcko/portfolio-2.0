export type ProjectMedia =
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string; alt: string; poster?: string }

export type ProjectRepository = {
  label: string
  url: string | null
}

export type ProjectStatus = 'publicado' | 'em desenvolvimento' | 'em operação' | 'em planejamento'

export type Project = {
  name: string
  description: string
  details: string
  url: string | null
  repositories: ProjectRepository[]
  media: ProjectMedia[]
  technologies: string[]
  status?: ProjectStatus
  type?: string
  /** Projeto privado: sem código ou telas públicas. */
  confidential?: boolean
}

export const isInternalUrl = (url: string) => url.startsWith('#')
