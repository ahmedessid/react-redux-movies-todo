import React from "react";
import { connect } from "react-redux";
import { deleteMovie } from "../actions";
import Movie from "../components/Movie";
import PropTypes from "prop-types";

const MoviesList = ({ movies, deleteMovie }) => {
  return (
    <div>
      {movies.map((movie, index) => (
        <Movie
          name={movie.name}
          deleteMovie={() => deleteMovie(movie.id)}
          price={movie.price}
          id={movie.id}
          key={index}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  movies: state.movies
});

const mapDispatchToProps = dispatch => ({
  deleteMovie: id => dispatch(deleteMovie(id))
});

MoviesList.propTypes = {
  movies: PropTypes.array,
  deleteMovie: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesList);
