export type Story = {
  id: number
  is_folder: boolean
  name: string
}

export const isStory = (data: unknown): data is Story => typeof data === 'object' &&
  'id' in data && typeof data.id === 'number' &&
  'is_folder' in data && typeof data.is_folder === 'boolean' &&
  'name' in data && typeof data.name === 'string'

export const isStories = (data: unknown): data is Story[] =>
  Array.isArray(data) && data.every(isStory)