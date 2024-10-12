import Link from 'next/link';
import styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <div className={styles.container}>
      <Link className={styles.navBarLink} href="/goals">Goals</Link>
      <Link className={styles.navBarLink} href="/create">Create</Link>
    </div>
  )
}
