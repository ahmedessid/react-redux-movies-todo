const age = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT_AGE":
      return state + 1;
    case "DECREMENT_AGE":
      return state - 1;
    default:
      return state;
  }
};

export default age;
