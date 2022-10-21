import Head from "next/head";
import Image from "next/image";
<<<<<<< HEAD:components/layout.jsx
import profileImg from "../public/images/ironman-ls.jpg";
import * as styles from "./layout.module.css";
=======
import profileImg from "../public/images/iron-man.jpg";
import * as styles from "./Layout.module.css";
>>>>>>> 4cbceaf37bf667288b0ff11f98883704e89fe86a:components/Layout.jsx
import * as utilStyles from "../styles/utils.module.css";

const name = "Sarbjit Singh";
export const siteTitle = "Sarbjit Singh Portfolio";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>{siteTitle}</title>
        <meta name="description" content="Sarbjit Singh portfolio website." />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        <Image
          src={profileImg}
          priority
          layout="intrinsic"
          alt="profile img"
          style={{ borderRadius: "24px" }}
        />
        <h2 className={utilStyles.heading2Xl}>{name}</h2>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <h1 className={utilStyles.headingXl}>Contact</h1>
        <div>
          <a
            href="https://github.com/sarabjit-github"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/sarabjit-singh-a823bb223/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
          <a
            href="mailto:websachin111@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            websachin111@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
}
