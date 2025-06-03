import { describe, expect, it } from 'vitest';
import { render, i18n, within } from '#testUtils';
import Home from '#pages/Home';
import translationKeys from '#translations';

describe('The Home page', () => {
  it('should contain a welcome message', () => {
    const { getByTestId } = testHomePage();
    const homePage = getByTestId('homePage');

    expect(within(homePage).getByTestId('homePage.welcome')).toHaveTextContent(
      i18n.t(translationKeys.home_page.welcome),
    );
  });

  it('should contain an ingress with further info', () => {
    const { getByTestId } = testHomePage();
    const homePage = getByTestId('homePage');

    expect(within(homePage).getByTestId('homePage.ingress')).toHaveTextContent(
      i18n.t(translationKeys.home_page.ingress),
    );
  });
});

const testHomePage = () => {
  return render(<Home />);
};
