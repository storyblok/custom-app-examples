import { FunctionComponent } from 'react'
import { Story } from '@src/Story'
import { FolderIcon } from './FolderIcon'
import { StoryIcon } from './StoryIcon'
import styles from './StoryTable.module.css'

export const StoryTable: FunctionComponent<{
  stories: Story[]
  className: string
}> = ({ stories, className }) => {
  const formatDate = (date: Date) =>
    date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })

  const formatTime = (date: Date) =>
    date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    })
  const formattedDate = (date: string) => {
    const parsedDate = new Date(date)
    return `${formatDate(parsedDate)} ${formatTime(parsedDate)}`
  }

  return (
    <table className={`${className} ${styles.table}`}>
      <thead>
        <tr>
          <th className={styles['table__head-cell']}>Name</th>
          <th
            className={`${styles['table__head-cell']} ${styles['table__head-cell--author']}`}
          >
            Author
          </th>
          <th className={styles['table__head-cell']}>Last update</th>
        </tr>
      </thead>
      <tbody>
        {stories.map((story) => {
          return (
            <tr
              key={story.id}
              className={styles['table__table-row']}
            >
              <td
                className={`${styles['table__data-cell']} ${styles['table__data-cell--name']}`}
              >
                {story.is_folder && <FolderIcon />}
                {!story.is_folder && <StoryIcon />}
                <div className={styles['table__data-cell-name']}>
                  <strong className={styles['table__story-name']}>
                    {story.name}
                  </strong>
                  <span>{story.slug}</span>
                </div>
              </td>
              <td
                className={`${styles['table__data-cell']} ${styles['table__data-cell--author']}`}
              >
                {story.last_author?.friendly_name || '-'}
              </td>
              <td className={styles['table__data-cell']}>
                {formattedDate(story.updated_at)}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
