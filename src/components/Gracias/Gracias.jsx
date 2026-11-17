import styles from "./Gracias.module.css";

const Gracias = () => {
  return (
    <div className={styles.gracias}>
      <h1>✅ ¡Mensaje enviado correctamente!</h1>
      <p>
        Gracias por contactarnos. Hemos recibido tu información
        y te responderemos lo antes posible.
      </p>


<button
  type="submit"
  className={styles.btnEnviar}
></button>
      <a href="/https://midespensa-enlinea.netlify.app/" class="boton">
Volver al inicio
</a>
    </div>
  );
};

export default Gracias;