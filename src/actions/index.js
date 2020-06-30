import { nanoid } from "nanoid";

export const ADD_MOVIE = "ADD_MOVIE";
export const DELETE_MOVIE = "DELETE_MOVIE";
export const EDIT_MOVIE = "EDIT_MOVIE";

export const addMovie = movie => ({
  type: "ADD_MOVIE",
  name: movie.name,
  price: movie.price,
  id: nanoid()
});

export const deleteMovie = id => ({
  type: "DELETE_MOVIE",
  id
});

export const editMovie = movie => ({
  type: "EDIT_MOVIE",
  name: movie.name,
  price: movie.price,
  id: movie.id
});

export const INCREMENT_AGE = "INCREMENT_AGE";
export const DECREMENT_AGE = "DECREMENT_AGE";

export const incrementAge = () => {
  return {
    type: "INCREMENT_AGE"
  };
};
export const decrementAge = () => {
  return {
    type: "DECREMENT_AGE"
  };
};
