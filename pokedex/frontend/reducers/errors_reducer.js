function errorsReducer(state = {}, action) {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
}

export default errorsReducer;
