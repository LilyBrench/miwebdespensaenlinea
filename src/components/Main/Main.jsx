
import styles from './Main.module.css';
import Mapa from '../Mapa/Mapa';
import ProductCard from '../ProductCard/ProductCard';

const Main = () => {
  return (
    <div>
      <main className={styles.main}>


   
    
    <section id="quienes-somos" className={styles.about}>
     <center><h2>¿Quiénes somos?</h2></center> 
      <p>
          Despensa en Línea somos una iniciativa dedicada a acercar productos básicos de 
          calidad directamente a tu hogar, con atención personalizada y compromiso con nuestros clientes.

      </p>
      <p>
      
        Nuestro propósito es apoyar a las familias de la región para acercar los productos,fomentar el consumo
        responsable y fortalecer la economía comunitaria.
 
      </p>
</section>
   
    <section id="mision" className={styles.about}>
     <center> <h2>Misión</h2></center>



  <p>Nuestra misión es ser un puente entre productores y consumidores, 
promoviendo la identidad cultural y el orgullo por lo local, mientras impulsamos prácticas responsables que beneficien a todos.
</p>

    </section>

   
    <section id="vision" className={styles.about}>
     <center><h2>Visión</h2></center> 
      <p>
          Convertirnos en la plataforma líder de distribución de productos de despensa en México,
        reconocida por su accesibilidad digital, compromiso con productores locales y promoción de un 
        consumo responsable que fortalezca la economía comunitaria.
      </p>
       </section>

   
    <section id="productos" className={styles.about}>
  <center>
    <h2>Productos que ofrecemos</h2>
  </center>

  <div className={styles.productGrid}>
    <ProductCard
      image="https://despensa-en-linea-product-images.s3.us-east-2.amazonaws.com/2007.png"
      title="ACEITES"
      price="00001"
    />

    <ProductCard
      image="https://despensa-en-linea-product-images.s3.us-east-2.amazonaws.com/107992.png"
      title="BEBIDAS"
      price="00002"
    />

    <ProductCard
      image="https://despensa-en-linea-product-images.s3.us-east-2.amazonaws.com/104939.png"
      title="BOTANAS"
      price="00003"
    />

    <ProductCard
      image="https://despensa-en-linea-product-images.s3.us-east-2.amazonaws.com/104203.png"
      title="BEBES"
      price="00004"
    />
  </div>
</section>



<section id="proveedores" className={styles.about}>
  <center><h2>Proveedores</h2></center>
  <table>
        <thead>
          <tr>
            <th><center>Nombre de la empresa</center></th>
            <th><center>Domicilio</center></th>
            <th><center>Correo</center></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Grupo Bimbo</td>
            <td> Av. Paseo de la Reforma 1000, Col. Peña Blanca Santa Fe, CDMX.</td>
            <td>servicioalcliente@grupobimbo.com</td>
          </tr>
          <tr>
            <td>Gruma</td>
            <td>Av. La Rioja 235, Col. Residencial Santa Bárbara, San Pedro Garza García, NL</td>
            <td>ir@gruma.com</td>
          </tr>
          <tr>
            <td>Grupo Lala</td>
            <td>Av. Paseo de la Reforma 250, Juárez, CDMX.</td>
            <td>lala800@grupolala.com</td>
          </tr>
        </tbody>
      </table>
  
</section>



  
<section id="ubicacion" className={styles.about}>
  <center><h2>Ubicación</h2></center>
  <p>Nos encontramos en Villa de Canalejas,Jilotepec de Molina Enríquez, Estado de México.</p>
  <Mapa />
</section>


    
<section id="contactanos" className={styles.about}>
  <div className={styles.contenedorFormulario}>
    <form 
      name="contacto"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/gracias.html"
     
      
    >
      {/* Campo anti-spam */}
      <input 
      type="hidden" 
      name="form-name" 
      value="contacto" />

    
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
          rows="5"
          placeholder="Escribe tu mensaje"
          required
        ></textarea>
      </div>

      <button
        type="submit"
       
      >
        Enviar mensaje
      </button>
    </form>
  </div>

 
</section>

</main>
</div>
);
};

export default Main;