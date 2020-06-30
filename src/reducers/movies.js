import { nanoid } from "nanoid";

const initialState = [
  {
    name: "Harry Potter",
    price: "20",
    id: nanoid()
  },
  {
    name: "Hunger Games",
    price: "60",
    id: nanoid()
  },
  {
    name: "Forgotten",
    price: "18",
    id: nanoid()
  }
];

const movies = (state = initialState, action) => {
  let arr = [...state];
  switch (action.type) {
    case "ADD_MOVIE":
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          price: action.price
        }
      ];
    case "DELETE_MOVIE":
      return arr.filter(movie => movie.id !== action.id);

    case "EDIT_MOVIE":
      return arr.map(movie => {
        if (movie.id === action.id) {
          return { ...movie, name: action.name, price: action.price };
        }
        return movie;
      });

    default:
      return state;
  }
};

export default movies;
