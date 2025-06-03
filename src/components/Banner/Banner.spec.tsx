import { describe, expect, it } from 'vitest';
import { render, i18n } from '#testUtils';
import { Banner } from '#components/Banner';
import translationKeys from '#translations';

describe('the banner component', () => {
  it('should contain a header', () => {
    const { getByTestId } = testBanner();
    expect(getByTestId('banner.titleHeader').nodeName).toBe('H1');
  });
});

describe('the header', () => {
  it(
    'should contain the club name: "' +
      i18n.t(translationKeys.common.club_name) +
      '"',
    () => {
      const { getByTestId } = testBanner();
      expect(getByTestId('banner.titleHeader').textContent).toBe(
        i18n.t(translationKeys.common.club_name),
      );
    },
  );
});

const testBanner = () => {
  return render(<Banner />);
};
