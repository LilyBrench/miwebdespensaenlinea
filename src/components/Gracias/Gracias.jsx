import styles from "./Gracias.module.css";
import { Link } from "react-router-dom";

const Gracias = () => {
  return (
    <div className={styles.gracias}>
      <div className={styles.contenedorMensaje}>
        <h1>✅ ¡Mensaje enviado correctamente!</h1>

        <p>
          Gracias por contactarnos. Hemos recibido tu información
          y te responderemos lo antes posible.
        </p>

        <Link to="/" className={styles.btnEnviar}>
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default Gracias;