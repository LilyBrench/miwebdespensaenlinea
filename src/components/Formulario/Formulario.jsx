<section id="contactanos" className={styles.about}>
  <div className={styles.contenedorFormulario}>
    <form
      name="contacto"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      className={styles.formulario}
    >
      <input type="hidden" name="form-name" value="contacto" />

      <p hidden>
        <label>
          No llenar este campo:
          <input name="bot-field" />
        </label>
      </p>

      <h2>Contáctanos</h2>

      <div className={styles.campo}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Escribe tu nombre"
          required
        />
      </div>

      <div className={styles.campo}>
        <label htmlFor="correo">Correo electrónico</label>
        <input
          type="email"
          id="correo"
          name="correo"
          placeholder="ejemplo@correo.com"
          required
        />
      </div>

      <div className={styles.campo}>
        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          placeholder="Escribe tu mensaje"
          required
        ></textarea>
      </div>

      <button type="submit" className={styles.btnEnviar}>
        Enviar mensaje
      </button>
    </form>
  </div>
</section>