import { cleanup, render, RenderOptions } from '@testing-library/react';
import { afterEach, afterAll, vi } from 'vitest';
import { I18nextProvider } from 'react-i18next';
import i18n from './setup';

afterEach(() => {
  cleanup();
});

afterAll(() => {
  vi.clearAllMocks();
  vi.resetAllMocks();
});

const ProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

function customRender(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(ui, {
    // wrap provider(s) here if needed
    wrapper: ProviderWrapper,
    ...options,
  });
}

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
// override render export
export { customRender as render, i18n };
