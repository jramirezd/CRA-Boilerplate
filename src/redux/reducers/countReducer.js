
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'SUMA': {
      return {
        ...state,
        count: state.count + 1
      };
    }
    case 'RESTA': {
      return {
        ...state,
        count: state.count - 1
      };
    }
    default: {
      return state;
    }
  }
};

export default countReducer;
