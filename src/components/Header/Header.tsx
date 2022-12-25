import styles from './Header.module.css';
import logo from '../../assets/logo.svg';
import search from '../../assets/search.svg';
import user from '../../assets/user.svg';
import { menu } from '../../utils/menu';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <img className={styles.logo} src={logo} alt='site logo' />
      </div>
      <nav className={styles.menu}>
        {menu.map(item => (
          <a className={styles.menu__item} href='#' key={item.id}>
            <img className={styles.icon} src={item.icon} alt={item.title} />
            <p>{item.title}</p>
          </a>
        ))}
      </nav>
      <div className={styles.aside}>
        <a href='#' className={styles.aside__item}>
          <img src={search} alt='search button' />
        </a>
        <a href='#' className={styles.aside__item}>
          <img className={styles.icon} src={user} alt='user button' />
        </a>
      </div>
    </header>
  );
};
