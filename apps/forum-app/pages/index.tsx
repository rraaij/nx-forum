import styles from './index.module.scss';
import { useEffect, useState } from 'react';
import { ForumUiShared } from '@nx-forum-project/forum/ui-shared';
import { forumUtil } from '@nx-forum-project/forum/util';

export function Index() {
  const [backendMessage, setBackendMessage] = useState<string>('');

  useEffect(() => {
    fetch('/api/')
      .then((response) => {
        console.log('> from API:', response);
        return response.json();
      })
      .then((data) => setBackendMessage(data.message));
  }, []);

  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>Hello there</h1>
          </div>

          <div id="hero" className="rounded">
            <div className="text-container">
              <h2>
                <span>
                  You&apos;re up and running, complete with {backendMessage}
                </span>
              </h2>
            </div>
            <div className="logo-container"></div>
          </div>

          <div id="commands" className="rounded shadow">
            <h2>Components from ui-shared library</h2>
            <ForumUiShared />
            <h2>Util function from util library</h2>
            <span>{ forumUtil()}</span>
          </div>

          <p id="love">Carefully crafted with NX</p>
        </div>
      </div>
    </div>
  );
}

export default Index;
