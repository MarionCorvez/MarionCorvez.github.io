"use client";

import styles from "./index.module.css";

export default function Header() {
  return (
    <header className="theme--anthracite">
      <div className={`${styles.container} flex--between screen`}>
        <div className={styles.heading}>
          <h1 className={styles.title}>Marion Corvez</h1>
          <p className={styles.availability}>
            Available in <strong>September, 2024</strong>
          </p>
        </div>
      </div>
    </header>
  );
}
