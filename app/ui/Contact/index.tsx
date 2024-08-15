import styles from "./index.module.css";
import { contacts } from "@/app/lib/placeholder-data";

export default function Contact() {
  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <li key={contact.title}>
          <a
            href={contact.link}
            rel="noopener noreferrer"
            title={contact.description}
            aria-label={contact.description}
            className={styles.link}
          >
            {contact.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
