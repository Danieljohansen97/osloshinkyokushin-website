import { describe, expect, it } from 'vitest';
import { render, i18n, within } from '#testUtils';
import { Header } from '#components/Header';
import translationKeys from '#translations';
import {
  faCalendarDays,
  faCircleInfo,
  faDumbbell,
  faHouse,
  faNewspaper,
} from '@fortawesome/free-solid-svg-icons';

describe('the header component', () => {
  it('should contain the main banner for our site', () => {
    const { getByTestId } = testHeader();
    expect(getByTestId('header.banner')).not.toBeNull();
  });

  it('should contain a link to our home page', () => {
    const { getByTestId } = testHeader();
    expect(getByTestId('header.home')).not.toBeNull();
  });

  it('should contain a link to our news page', () => {
    const { getByTestId } = testHeader();
    expect(getByTestId('header.news')).not.toBeNull();
  });

  it('should contain a link to our "about us" page', () => {
    const { getByTestId } = testHeader();
    expect(getByTestId('header.about_us')).not.toBeNull();
  });

  it('should contain a link to our training page', () => {
    const { getByTestId } = testHeader();
    expect(getByTestId('header.training')).not.toBeNull();
  });

  it('should contain a link to our schedulepage', () => {
    const { getByTestId } = testHeader();
    expect(getByTestId('header.schedule')).not.toBeNull();
  });
});

describe("the header component's", () => {
  describe('"Home" link', () => {
    it(
      'should contain the text "' + i18n.t(translationKeys.navbar.home) + '"',
      () => {
        const { getByTestId } = testHeader();
        expect(getByTestId('header.home')).toHaveTextContent(
          i18n.t(translationKeys.navbar.home),
        );
      },
    );

    it('should contain a house icon', () => {
      const { getByTestId } = testHeader();
      const homeLink = getByTestId('header.home');
      const homeLinkIcon = within(homeLink).getByTestId('navlink.icon');

      expect(homeLinkIcon.getAttribute('data-icon')).toBe(faHouse.iconName);
    });

    it('should contain a link to our Home page', () => {
      const { getByTestId } = testHeader();
      const homeLink = getByTestId('header.home');

      expect(homeLink).toHaveAttribute('href', '/');
    });
  });

  describe('"News" link', () => {
    it(
      'should contain the text "' + i18n.t(translationKeys.navbar.news) + '"',
      () => {
        const { getByTestId } = testHeader();
        expect(getByTestId('header.news')).toHaveTextContent(
          i18n.t(translationKeys.navbar.news),
        );
      },
    );

    it('should contain a newspaper icon', () => {
      const { getByTestId } = testHeader();
      const newsLink = getByTestId('header.news');
      const newsLinkIcon = within(newsLink).getByTestId('navlink.icon');

      expect(newsLinkIcon.getAttribute('data-icon')).toBe(faNewspaper.iconName);
    });

    it('should contain a link to our News page', () => {
      const { getByTestId } = testHeader();
      const newsLink = getByTestId('header.news');

      expect(newsLink).toHaveAttribute('href', '/news');
    });
  });

  describe('"About us" link', () => {
    it(
      'should contain the text "' +
        i18n.t(translationKeys.navbar.about_us) +
        '"',
      () => {
        const { getByTestId } = testHeader();
        expect(getByTestId('header.about_us')).toHaveTextContent(
          i18n.t(translationKeys.navbar.about_us),
        );
      },
    );

    it('should contain an "information" icon', () => {
      const { getByTestId } = testHeader();
      const aboutUsLink = getByTestId('header.about_us');
      const aboutUsLinkIcon = within(aboutUsLink).getByTestId('navlink.icon');

      expect(aboutUsLinkIcon.getAttribute('data-icon')).toBe(
        faCircleInfo.iconName,
      );
    });

    it('should contain a link to our "About Us" page', () => {
      const { getByTestId } = testHeader();
      const aboutUsLink = getByTestId('header.about_us');

      expect(aboutUsLink).toHaveAttribute('href', '/about');
    });
  });

  describe('"Training" link', () => {
    it(
      'should contain the text "' +
        i18n.t(translationKeys.navbar.training) +
        '"',
      () => {
        const { getByTestId } = testHeader();
        expect(getByTestId('header.training')).toHaveTextContent(
          i18n.t(translationKeys.navbar.training),
        );
      },
    );

    it('should contain a "dumbell" icon', () => {
      const { getByTestId } = testHeader();
      const trainingLink = getByTestId('header.training');
      const trainingLinkIcon = within(trainingLink).getByTestId('navlink.icon');

      expect(trainingLinkIcon.getAttribute('data-icon')).toBe(
        faDumbbell.iconName,
      );
    });

    it('should contain a link to our Training page', () => {
      const { getByTestId } = testHeader();
      const trainingLink = getByTestId('header.training');

      expect(trainingLink).toHaveAttribute('href', '/training');
    });
  });

  describe('"Schedule" link', () => {
    it(
      'should contain the text "' +
        i18n.t(translationKeys.navbar.schedule) +
        '"',
      () => {
        const { getByTestId } = testHeader();
        expect(getByTestId('header.schedule')).toHaveTextContent(
          i18n.t(translationKeys.navbar.schedule),
        );
      },
    );

    it('should contain a "calendar" icon', () => {
      const { getByTestId } = testHeader();
      const scheduleLink = getByTestId('header.schedule');
      const scheduleLinkIcon = within(scheduleLink).getByTestId('navlink.icon');

      expect(scheduleLinkIcon.getAttribute('data-icon')).toBe(
        faCalendarDays.iconName,
      );
    });

    it('should contain a link to our schedule page', () => {
      const { getByTestId } = testHeader();
      const scheduleLink = getByTestId('header.schedule');

      expect(scheduleLink).toHaveAttribute('href', '/schedule');
    });
  });
});

const testHeader = () => {
  return render(<Header />);
};
