import { cleanup, render } from '@testing-library/react';
import { afterEach, afterAll, vi } from 'vitest';

afterEach(() => {
  cleanup();
});

afterAll(() => {
  vi.clearAllMocks();
  vi.resetAllMocks();
});

function customRender(ui: React.ReactElement, options = {}) {
  return render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options,
  });
}

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
// override render export
export { customRender as render };
