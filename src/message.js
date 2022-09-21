/**
 * message consente di gestire dei messaggi (di errore) all'occorrenza
 * @module message
 * @return un oggetto con la funzione create() come proprietà
 */
const message = (() => {
  let msg = undefined
  let visible = false

  /**
   * rende visibile o invisibile il messaggio
   * @param classWhenVisible la classe CSS da applicare quando il messaggio è
   *     visibile
   * @param classWhenInvisible la classe CSS da applicare quando il messaggio
   *     non è visibile
   */
  function toggleVisibility(classWhenVisible, classWhenInvisible) {
    visible = !visible;
    if (visible) {
      msg.classList.remove(classWhenInvisible);
      msg.classList.add(classWhenVisible)
    } else {
      msg.classList.remove(classWhenVisible);
      msg.classList.add(classWhenInvisible);
    }
  }

  /**
   * determina se il messaggio è visibile
   * @return visible true indica che il messaggio è visibile, false che non lo è
   */
  function isVisible() {
    return visible;
  }

  /**
   * imposta il testo del messaggio da mostrare
   * @memberof message
   * @param text il testo del messaggio
   */
  function setMessage(text) {
    msg.textContent = text;
  }
  /**
   * crea un oggetto Message
   * @param id
   * @return un oggetto avente per proprietà le funzioni per modificare
   * lo stato del messaggio
   */
  function create(id) {
    msg = document.getElementById(id);
    // se msg.style.display != none allora è visibile
    visible = msg.style.display !== 'none';
    return {isVisible, toggleVisibility, setMessage};
  }
  return {create};
})();
export default message;