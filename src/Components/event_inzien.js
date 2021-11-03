import React from "react";
import Modal from "react-bootstrap/Modal";

class EventInzien extends React.Component {

    render() {
      return (
          <div>
<Modal show={this.props.handleshow2} onHide={this.props.handlec2} className="modal">
          <Modal.Header className="modal-header">
            <Modal.Title className="modal-title">Evenement inzien</Modal.Title>
            <button className="closeButton" onClick={this.props.handlec2}>X</button>
          </Modal.Header>
          <Modal.Body className="popupbody">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at rhoncus nunc, faucibus sagittis erat. Sed quis iaculis sem. Etiam sed elementum dolor, ut bibendum nunc. Sed vel mollis risus, nec consectetur dui. Aliquam finibus molestie arcu eget ornare. Vestibulum in dolor nisl. Sed quis egestas tellus.
              Nunc dolor ligula, hendrerit a enim nec, aliquet semper ipsum. Pellentesque massa dolor, venenatis at molestie nec, bibendum eu metus. Suspendisse egestas mattis varius. Maecenas id fringilla diam. Nulla placerat vehicula aliquam. Aliquam erat volutpat. Nam finibus sodales auctor. Aliquam ultrices mi sed lacus aliquam ultrices sed eu lectus. Vestibulum maximus nisl velit, sed tristique magna tristique et. Praesent sit amet rhoncus est, nec suscipit massa. Suspendisse potenti. Integer ex turpis, pretium ac dolor et, vulputate lobortis ante. Sed eu consectetur justo, vitae semper nulla. Vestibulum volutpat risus quis erat ultrices aliquam.
            </p>
          </Modal.Body>
          <Modal.Footer class="col text-center">
            <button type="button" class="btn btn-dark button" variant="secondary" onClick={() => { this.props.handlec2(); this.props.handles3(); }}>
              Inschrijven
            </button>
            <button type="button" class="btn btn-dark button" variant="secondary" onClick={this.props.handlec2}>
              Sluiten
            </button>
            <br />
            <p className="white">.</p>
          </Modal.Footer>
        </Modal>
        </div>)}}

export default EventInzien;