import { describe, expect, it } from 'vitest';
import { render } from '#testUtils';
import { Header } from '#components/Header';

describe('the header component', () => {
  it('should contain the main banner for our site', () => {
    const { getByTestId } = testHeader();
    expect(getByTestId('header.banner')).not.toBeNull();
  });

  it('should contain a link to our home page', () => {
    const { getByTestId } = testHeader();
    expect(getByTestId('header.home')).not.toBeNull();
  });
});

const testHeader = () => {
  return render(<Header />);
};
