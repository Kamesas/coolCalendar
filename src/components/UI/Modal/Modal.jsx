import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import stl from "./Modal.module.sass";

class Modal extends Component {
  state = { isShow: false };
  el = document.createElement("div");

  closeModal = () => {
    this.props.closeModal();
  };

  componentDidMount() {
    document.body.appendChild(this.el);
    const cls = stl.rootModal;
    this.el.className = cls;
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    const modal = (
      <Fragment>
        <div className={stl.overlay} onClick={this.closeModal} />
        <div className={stl.modal}>
          {this.props.children}{" "}
          <div className={stl.btnClose} onClick={this.closeModal}>
            &times;
          </div>
        </div>
      </Fragment>
    );

    return ReactDOM.createPortal(modal, this.el);
  }
}

export default Modal;
