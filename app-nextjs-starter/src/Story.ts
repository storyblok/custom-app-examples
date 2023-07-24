type LastAuthor = {
  friendly_name: string;
};

export type Story = {
  name: string;
  updated_at: string;
  id: number;
  is_folder: boolean;
  slug: string;
  last_author: LastAuthor;
};

const isLastAuthor = (data: unknown): data is LastAuthor =>
  typeof data === "object" &&
  data !== null &&
  "friendly_name" in data &&
  typeof data.friendly_name === "string";

export const isStory = (data: unknown): data is Story =>
  typeof data === "object" &&
  data !== null &&
  "id" in data &&
  typeof data.id === "number" &&
  "is_folder" in data &&
  typeof data.is_folder === "boolean" &&
  "name" in data &&
  typeof data.name === "string" &&
  "slug" in data &&
  typeof data.slug === "string" &&
  "updated_at" in data &&
  typeof data.updated_at === "string" &&
  "last_author" in data &&
  isLastAuthor(data.last_author);

export const isStories = (data: unknown): data is Story[] =>
  Array.isArray(data) && data.every(isStory);
