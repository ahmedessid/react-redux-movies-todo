import React from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";

const Footer = ({ age }) => {
  return (
    <div>
      <h5> {age} </h5>
    </div>
  );
};

const mapStateToProps = state => ({
  age: state.age
});

Footer.propTypes = {
  age: PropTypes.number
};

export default connect(mapStateToProps)(Footer);
