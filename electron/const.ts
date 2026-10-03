import type { IProfile } from 'eml-lib'

export const MINECRAFT_VERSION = 'latest_release'

export const PROFILES: IProfile[] = [
  {
    id: 'vanilla',
    isDefault: true,
    name: 'Minecraft Vanilla',
    slug: 'vanilla',
    visibility: 'PUBLIC',
    createdAt: new Date(0),
    updatedAt: new Date(0)
  }
]
