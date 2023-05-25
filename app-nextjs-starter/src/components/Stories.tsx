import {FunctionComponent} from "react";
import styles from './Stories.module.css'
import {Story} from "@src/Story";

export const Stories: FunctionComponent<{
  stories: Story[]
}> = (props) => (
  <ul className={styles.list}>
    {props.stories.map(story => (
      <li key={story.id} className={styles.listItem}>
        {story.is_folder ? '📁' : '📄'} <strong>{story.name}</strong>
      </li>
    ))}
  </ul>
)