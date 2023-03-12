import { useContext } from "react";
import { InputValueContext } from "./context/InputValueContext";

export default function App() {
  const { state, dispatch } = useContext(InputValueContext);
  console.log("state and dispatch: ", state, dispatch)

  return (
    <>
      <p>Value: {state.inputValue}</p>
      <button onClick={() => dispatch({ type: "SET_INPUT_VALUE", payload: 2 })}>
        SET VALUE TO 100
      </button>
    </>
  );
}