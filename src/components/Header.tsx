import { ArrowIcon } from "./ArrowIcon";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.row}>
        <a href="#top" className={styles.logo} aria-label="Felps — home">
          Felps
        </a>
        <a href="#contact" className={styles.cta}>
          Get in touch
          <ArrowIcon className={styles.arrow} />
        </a>
      </div>
    </header>
  );
}
