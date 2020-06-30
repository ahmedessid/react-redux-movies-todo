import React from "react";
import AddMovie from "./AddMovie";
import PropTypes from "prop-types";

const EditMovie = props => {
  return (
    <div>
      <AddMovie
        nameValue={props.name}
        priceValue={props.price}
        idValue={props.id}
        ButtonType="btn btn-success"
        Submit="Update"
      />
    </div>
  );
};

EditMovie.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  id: PropTypes.string
};

export default EditMovie;
