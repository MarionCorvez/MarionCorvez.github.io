import styles from "./index.module.css";
import Image from "next/image";
import Contact from "@/app/ui/Contact";

export default function Footer() {
  return (
    <footer className="theme--anthracite">
      <div className={`${styles.container} flex--center screen`}>
        <span>© 2024 - Marion Corvez</span>
        <Contact />
        <a
          href="https://www.ecoindex.fr/en/result/?id=773800da-24ad-4d0a-a902-ae508933aacd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://bff.ecoindex.fr/badge/?theme=dark&url=https://marioncorvez.github.io/"
            alt="Ecoindex Badge"
            width={108}
            height={32}
            className={styles.ecoindex}
          />
        </a>
      </div>
    </footer>
  );
}
