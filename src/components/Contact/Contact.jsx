import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact' id='contact'>
      <h2 className='section__title'>Contacto</h2>
      <form action="https://formsubmit.co/jesusleot10@gmail.com" method="POST">
        <div className="column">
          <label htmlFor="the-name">Nombre</label>
          <input type="text" name="nombre" id="the-name"  required="required"/>

          <label htmlFor="the-email">Correo Electrónico</label>
          <input type="email" name="email" id="the-email"  required="required"/>

          <label htmlFor="the-phone">Numero de Teléfono</label>
          <input type="tel" name="telefono" id="the-phone"  required="required"/>

          <label htmlFor="the-reason">¿En que puedo ayudarte?</label>
          <select name="reason" id="the-reason" required="required">
            <option value="">Selecciona una opción</option>
            <option value="web">Necesito servicios de diseño web</option>
            <option value="video">Necesito un presupuesto para mi pagina Web</option>
            <option value="3d">Otra</option>
          </select>
        </div>
        <div className="column">
          <label htmlFor="the-message">Mensaje</label>
          <textarea name="message" id="the-message" required="required"></textarea>

          <input type="submit" value="Enviar Mensaje" />
        </div>
      </form>
    </section>
  )
}

export default Contact
