import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import styles from './home.module.scss'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>StarWarsApp</Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span> 👋 Hey, welcome </span>
          <h1>
            New about the
            <span> Stars Wars</span> world.
          </h1>
          <p>
            Get acesse to all the informations <br /> <span>$9.90</span>
          </p>
          <SubscribeButton />
        </section>
        <Image
          className={styles.AvatarMain}
          src="/images/avatar.png"
          alt="Girl coding"
          height={'520px'}
          width={'334px'}
        />
      </main>
    </>
  )
}
