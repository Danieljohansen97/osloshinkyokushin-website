import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import styles from "../navbar/CustomNavbar.module.scss";

interface NavItemProps {
  to: string;
  icon: IconDefinition;
  label: string;
}

const LinkWithIcon: React.FC<NavItemProps> = ({ to, icon, label }) => {
  return (
    <div className={styles["link-container"]}>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? styles["active-link"] : "")}
      >
        <FontAwesomeIcon icon={icon} />
        <span>{label}</span>
      </NavLink>
    </div>
  );
};

export default LinkWithIcon;