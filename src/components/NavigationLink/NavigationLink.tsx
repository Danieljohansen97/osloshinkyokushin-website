import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import styles from './NavigationLink.module.scss';

interface Props {
  testid?: string;
  to: string;
  icon: IconDefinition;
  label: string;
  onClick?: () => void;
}

const NavigationLink: React.FC<Props> = ({
  testid,
  to,
  icon,
  label,
  onClick,
}) => {
  return (
    <div data-testid={'navlink.container'} className={styles['link-container']}>
      <NavLink
        data-testid={testid ?? 'navlink'}
        to={to}
        className={({ isActive }) => (isActive ? styles['active-link'] : '')}
        onClick={onClick}
      >
        <FontAwesomeIcon data-testid={'navlink.icon'} icon={icon} />
        <span>{label}</span>
      </NavLink>
    </div>
  );
};

export { NavigationLink, type Props };
