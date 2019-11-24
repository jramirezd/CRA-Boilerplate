const INITIAL_STATE = { count: 0 };

const countReducer = (state = INITIAL_STATE, action) => {
  const { count } = state;

  switch (action.type) {
    case 'SUMA': {
      return { num: count + 1 };
    }
    case 'RESTA': {
      return { num: count - 1 };
    }
    default: {
      return state;
    }
  }
};

export default countReducer;
