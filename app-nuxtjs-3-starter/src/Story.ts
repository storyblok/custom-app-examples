type LastAuthor = {
  id: number
  userid: string
  friendly_name: string
  avatar: null | string
}

export type Story = {
  name: string
  parent_id: number
  created_at: string
  deleted_at: null | string
  group_id: string
  sort_by_date: null | string
  updated_at: string
  published_at: string
  id: number
  uuid: string
  is_folder: boolean
  published: boolean
  slug: string
  path: null | string
  full_slug: string
  position: number
  unpublished_changes: boolean
  is_startpage: boolean
  pinned: boolean
  publish_at: null | string
  expire_at: null | string
  first_published_at: string
  release_ids: number[]
  stage: null | string
  alternates: any[] // You can replace `any` with a more specific type if needed
  default_root: string
  disble_fe_editor: boolean
  last_author: LastAuthor
  content_summary: Record<string, any> // You can replace `any` with a more specific type if needed
  content_type: string
  tag_list: string[]
  can_not_view: boolean
}

export const isStory = (data: unknown): data is Story =>
  typeof data === 'object' &&
  data !== null &&
  'id' in data &&
  typeof data.id === 'number' &&
  'is_folder' in data &&
  typeof data.is_folder === 'boolean' &&
  'name' in data &&
  typeof data.name === 'string'

export const isStories = (data: unknown): data is Story[] =>
  Array.isArray(data) && data.every(isStory)
