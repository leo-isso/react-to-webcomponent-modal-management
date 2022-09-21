import "./styles.css";
import PropTypes from "prop-types";

const Greeting = ({ show }) => {
  const closeModal = () => {
    try {
      let webComponent = document.getElementById("web-component");
      webComponent.setAttribute("show", "false");
    } catch (e) {
      console.log(e);
    }
  };

  if (show === "false") return null;
  return (
    <div className="modal">
      <div
        className="modal-backdrop"
        id="modal-backdrop"
        onClick={closeModal}
      />
      <div className="modal-content">
        <h2>Hello World!</h2>
        <button type="button" id="close-button" onClick={closeModal}>
          Fechar Modal
        </button>
      </div>
    </div>
  );
};

Greeting.propTypes = {
  show: PropTypes.string.isRequired
};

export default Greeting;
