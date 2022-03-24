import { FaGithub } from 'react-icons/fa'
import styles from './styles.module.scss'
import { FiX } from 'react-icons/fi'

interface ISigninButtonProps {
  isUserLoggedIn?: boolean
}

export const SigninButton: React.FC<ISigninButtonProps> = () => {
  const isUserLoggedIn = true
  return (
    <div className={styles.Container}>
      {isUserLoggedIn ? (
        <div className={styles.ButtonGit}>
          <FaGithub color="#04d361" width={'25px'} />
          <a>Lorison Gilles</a>
          <FiX color="#737380" className="closeIcon" />
        </div>
      ) : (
        <div className={styles.ButtonGit}>
          <FaGithub className="svg" />
          <a>Sign in Github</a>
        </div>
      )}
    </div>
  )
}
