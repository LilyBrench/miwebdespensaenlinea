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
    href="https://midespensa-enlinea.netlify.app/"
    className={styles.btnEnviar}
  >
    Volver al inicio
</button>
</div>
  );
  
};

export default Gracias;