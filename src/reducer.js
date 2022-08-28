const init = { count: 0 };
const INCREASE = "increase";
const DECREASE = "decrease";
const reducer = (state = init, action) => {
  switch (action.type) {
    case INCREASE:
      return { ...state, count: state.count + 1 };
    case DECREASE:
      return {
        count: state.count - 1
      };
    default: {
      return state.count;
    }
  }
};
export { init, reducer, INCREASE, DECREASE };
