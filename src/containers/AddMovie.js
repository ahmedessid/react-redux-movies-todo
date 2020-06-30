import React, { useState } from "react";
import { connect } from "react-redux";
import { nanoid } from "nanoid";
import { addMovie, editMovie } from "../actions";
import { Toast } from "react-bootstrap";
import PropTypes from "prop-types";

const AddMovie = ({
  dispatch,
  nameValue,
  priceValue,
  idValue,
  Submit,
  ButtonType
}) => {
  const [name, setName] = useState(nameValue);
  const [price, setPrice] = useState(priceValue);
  const [id, setId] = useState(idValue);
  const [toastShow, setToastShow] = useState(false);

  const handleNameChange = e => {
    setName(e.target.value);
    setId(nanoid());
  };

  const handlePriceChange = e => {
    setPrice(e.target.value);
  };

  const handleAddSubmit = e => {
    e.preventDefault();
    if (name !== "" && price !== "") {
      let movie = { name: name, price: price, id: id };
      dispatch(addMovie(movie));
      setName("");
      setPrice("");
      setId("");
    }
  };

  const handleEditSubmit = e => {
    e.preventDefault();
    if (name !== "" && price !== "") {
      let movie = { name: name, price: price, id: idValue };
      dispatch(editMovie(movie));
      setToastShow(true);
    }
  };

  return (
    <div>
      <form onSubmit={Submit === "Submit" ? handleAddSubmit : handleEditSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Movie name"
          required
          pattern="[A-Za-z 0-9]*"
          className="form-control"
          onChange={handleNameChange}
        />
        <input
          type="text"
          name="price"
          value={price}
          placeholder="Movie price"
          required
          pattern="[0-9]*"
          className="form-control"
          onChange={handlePriceChange}
        />
        <button className={ButtonType}>{Submit}</button>
      </form>
      <p />
      <Toast
        onClose={() => setToastShow(false)}
        show={toastShow}
        delay={2000}
        autohide
        className="toastStyle"
      >
        <Toast.Body>Updated Succefully!</Toast.Body>
      </Toast>
    </div>
  );
};

AddMovie.propTypes = {
  nameValue: PropTypes.string,
  priceValue: PropTypes.string,
  idValue: PropTypes.string,
  Submit: PropTypes.string,
  Button: PropTypes.string
};

export default connect()(AddMovie);
