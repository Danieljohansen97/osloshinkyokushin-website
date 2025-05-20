import { describe, expect, it } from 'vitest';
import { render } from '#testUtils';
import { Banner } from '#components/Banner';

describe('the banner component', () => {
  it('should contain a header', () => {
    const { getByTestId } = testBanner();
    expect(getByTestId('banner.titleHeader').nodeName).toBe('H1');
  });
});

describe('the header', () => {
  it('should contain the text "Oslo Fullkontakt Karate"', () => {
    const { getByTestId } = testBanner();
    expect(getByTestId('banner.titleHeader').textContent).toBe(
      'Oslo Fullkontakt Karate',
    );
  });
});

const testBanner = () => {
  return render(<Banner />);
};
