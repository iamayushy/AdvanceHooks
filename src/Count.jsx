import { useReducer } from "react";
import { init, reducer, INCREASE, DECREASE } from "./reducer";

const Count = () => {
  const [state, dispatch] = useReducer(reducer, init);
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: INCREASE })}>Inc</button>

      <button onClick={() => dispatch({ type: DECREASE })}>Dec</button>
    </div>
  );
};
export { Count };
