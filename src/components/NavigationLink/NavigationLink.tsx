import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import styles from './NavigationLink.module.scss';

interface NavItemProps {
  testid?: String;
  to: string;
  icon: IconDefinition;
  label: string;
}

const NavigationLink: React.FC<NavItemProps> = ({
  testid,
  to,
  icon,
  label,
}) => {
  return (
    <div data-testid={testid ?? null} className={styles['link-container']}>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? styles['active-link'] : '')}
      >
        <FontAwesomeIcon icon={icon} />
        <span>{label}</span>
      </NavLink>
    </div>
  );
};

export { NavigationLink };
