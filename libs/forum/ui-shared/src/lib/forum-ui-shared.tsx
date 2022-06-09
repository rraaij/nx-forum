import styles from './forum-ui-shared.module.scss';

/* eslint-disable-next-line */
export interface ForumUiSharedProps {}

export function ForumUiShared(props: ForumUiSharedProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ForumUiShared!</h1>
    </div>
  );
}

export default ForumUiShared;
