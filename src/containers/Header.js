import React from "react";
import { connect } from "react-redux";
import { incrementAge, decrementAge } from "../actions";
import PropTypes from "prop-types";

const Header = ({ movies, incrementAge, decrementAge, age }) => {
  return (
    <div>
      <h4>List of movies: {movies.length}</h4>
      <h5> {age} </h5>
      <div className="_buttons">
        <button className="btn btn-light" onClick={incrementAge}>
          Increment
        </button>
        <button className="btn btn-light" onClick={decrementAge}>
          Decrement
        </button>
      </div>
      <hr />
    </div>
  );
};

const mapStateToProps = state => ({
  movies: state.movies,
  age: state.age
});

const mapDispatchToProps = dispatch => {
  return {
    incrementAge: () => dispatch(incrementAge()),
    decrementAge: () => dispatch(decrementAge())
  };
};

Header.propTypes = {
  age: PropTypes.number,
  movies: PropTypes.array,
  incrementAge: PropTypes.func,
  decrementAge: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
