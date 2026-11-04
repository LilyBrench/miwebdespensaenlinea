import styles from "./Gracias.module.css";

const Gracias = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.icono}>✅</div>

        <h1>¡Gracias por contactarnos!</h1>

        <p>
          Hemos recibido tu mensaje correctamente.
          Nos pondremos en contacto contigo lo antes posible.
        </p>

        <a
          href="https://midespensa-enlinea.netlify.app/"
          className={styles.boton}
        >
          Volver al inicio
        </a>
      </div>
    </div>
  );
};

export default Gracias;