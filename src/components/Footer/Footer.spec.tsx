import { describe, expect, it } from 'vitest';
import { render } from '#testUtils';
import { Footer } from '#components/Footer';

describe('the footer component', () => {
  it('should contain our contact information', () => {
    const { getByTestId } = testFooter();
    expect(getByTestId('footer.contactInfo')).not.toBeNull();
  });

  it('should contain our opening hours', () => {
    const { getByTestId } = testFooter();
    expect(getByTestId('footer.openingHours')).not.toBeNull();
  });

  it('should contain links to our social media', () => {
    const { getByTestId } = testFooter();
    expect(getByTestId('footer.socialMediaLinks')).not.toBeNull();
  });
});

describe('our contact information', () => {
  it('should contain our address', () => {
    const { getByTestId } = testFooter();
    expect(getByTestId('contactInfo.address')).not.toBeNull();
  });

  it('should contain our telephone number', () => {
    const { getByTestId } = testFooter();
    expect(getByTestId('contactInfo.telephone')).not.toBeNull();
  });

  it('should contain our e-mail address', () => {
    const { getByTestId } = testFooter();
    expect(getByTestId('contactInfo.email')).not.toBeNull();
  });
});

const testFooter = () => {
  return render(<Footer />);
};
