import { describe, expect, it } from 'vitest';
import { render } from '#testUtils';
import { NavigationLink } from '#components/NavigationLink';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Props } from './NavigationLink';

const defaultProps: Props = {
  to: '/home',
  icon: faHouse,
  label: 'test-label-text',
};

describe('the navigation link', () => {
  it('should contain an icon', () => {
    const { getByTestId } = testLink(defaultProps);
    const link = getByTestId('navlink');
    const icon = getByTestId('navlink.icon');

    expect(link).toContain(icon);
  });

  it('should contain a label', () => {
    const { getByTestId } = testLink(defaultProps);
    const link = getByTestId('navlink');

    expect(link.innerHTML).toContain(defaultProps.label);
  });

  it('should contain a navigation route', () => {
    const { getByTestId } = testLink(defaultProps);
    const link = getByTestId('navlink');

    expect(link).toHaveAttribute('href', defaultProps.to);
  });
});

const testLink = (props: Props) => {
  return render(<NavigationLink {...props} />);
};
