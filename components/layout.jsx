import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profileImg from "../public/images/iron-man.jpg";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

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
          width={180}
          height={240}
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
          without
          rel="noreferrer"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/sarabjit-singh-a823bb223/"
          target="_blank"
          without
          rel="noreferrer"
        >
          Linkedin
        </a>
        <a
          href="mailto:websachin111@gmail.com"
          target="_blank"
          without
          rel="noreferrer"
        >
          websachin111@gmail.com
        </a>
        </div>
      </footer>
    </div>
  );
}
