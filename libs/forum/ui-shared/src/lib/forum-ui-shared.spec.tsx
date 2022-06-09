import { render } from '@testing-library/react';

import ForumUiShared from './forum-ui-shared';

describe('ForumUiShared', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ForumUiShared />);
    expect(baseElement).toBeTruthy();
  });
});
