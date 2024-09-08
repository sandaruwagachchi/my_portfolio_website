import styles from './FooterStyle.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy;2024 Sandaru Wagachchi.
        <br />
        All Right reserved
      </p>
    </section>
  );
}

export default Footer;
