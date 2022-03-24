import { SigninButton } from '../SigninButton'
import styles from './styles.module.scss'

export const Header = () => {
  return (
    <div className={styles.Container}>
      <img className={styles.LogoMain} src="/images/star.png" alt="logoStar" />
      <nav className={styles.Nav}>
        <a>Home</a>
        <a>Planets</a>
        <a>Species</a>
        <a>People</a>
      </nav>
      <div className={styles.ButtonHeader}>
        <SigninButton />
      </div>
    </div>
  )
}
