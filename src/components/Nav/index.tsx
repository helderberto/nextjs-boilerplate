import Link from 'next/link';
import styles from './Nav.module.css';

const Nav = () => (
  <nav className={styles.nav}>
    <Link href="/" className={styles.link}>
      Home
    </Link>
    <Link href="/about" className={styles.link}>
      About
    </Link>
  </nav>
);

export default Nav;
