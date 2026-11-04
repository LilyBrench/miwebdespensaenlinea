const Formulario = () => {
  return (
    <form 
    name="contacto"
    method="POST" 
    data-netlify="true" 
    netlify-honeypot="bot-field"
    action="/Gracias">
      <input type="hidden" name="form-name" value="contacto" />

      <p hidden>
    <label>
      No llenar este campo:
      <input name="bot-field" />
    </label>
  </p>
      <label>
        Nombre:
        <input type="text" name="nombre" required />
      </label>
      <label>
        Correo:
        <input type="email" name="correo" required />
      </label>
      <label>
        Mensaje:
        <textarea name="mensaje" required></textarea>
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario; 
