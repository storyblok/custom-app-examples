import {FunctionComponent} from "react";
import {inspect} from "util";
import styles from './Stories.module.css'

export const Stories: FunctionComponent<{
  stories: any[]
}> = (props) => (
  <ul className={styles.list}>
    {props.stories.map(story => (
      <li className={styles.listItem}>
        {story.is_folder ? '📁' : '📄'} <strong>{story.name}</strong>
      </li>
    ))}
  </ul>
)