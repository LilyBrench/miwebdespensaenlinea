import styles from "./Gracias.module.css";
import { Link } from "react-router-dom";

const Gracias = () => {
  return (
    <div className={styles.gracias}>
      <h1>✅ ¡Mensaje enviado correctamente!</h1>

      <p>
        Gracias por contactarnos. Hemos recibido tu información
        y te responderemos lo antes posible.
      </p>

      <Link
        to="https://midespensa-enlinea.netlify.app/"
        className={styles.btnEnviar}
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default Gracias;