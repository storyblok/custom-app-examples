import axios from 'axios'

export const getStories = async (spaceId, pageSize, currentIndex) => {
  let page = await axios.get(`/auth/spaces/${spaceId}/stories?per_page=${pageSize}&page=${currentIndex}&sort_by=name:asc`)
  let stories = [];
  await Promise.all(
    page.data.stories.map(story => {
      return axios
        .get(`/auth/spaces/${spaceId}/stories/${story.id}`)
        .then((res) => {
          if (!res.data.story.content.seo) {
            res.data.story.content.seo = {
              title: '',
              description: '',
              plugin: 'seo_metatags',
            }
          }
          stories.push(res.data.story);
        })
        .catch((error) => {
          console.log(error);
        })
    })
  )
  stories.sort((a, b) => {
    const ids = page.data.stories.map(s => s.uuid)
    return ids.indexOf(a.uuid) - ids.indexOf(b.uuid)
  })
  return { stories, total: page.data.total }
}

export const saveData = async (spaceId, story, publish) => {
  let storyData = { story: { content: story.content, unpublished_changes: !publish } }

  if (publish) {
    storyData.publish = 1
  }

  try {
    const rest = await axios.put(`/auth/spaces/${spaceId}/stories/${story.id}`, storyData)
    if (rest.status === 200) {
      return rest.data.story
    }
  } catch (err) {
    console.log(err, 'error')
  }

  return false
}
