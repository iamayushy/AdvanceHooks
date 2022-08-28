import { useCallback, useState } from "react";
import { Count } from "./Count";
import "./styles.css";

export default function App() {
  const [typedText, setTypedText] = useState("");
  const [show, setShow] = useState("");

  const showText = (val) => {
    console.log("called");
    setShow(val);
  };

  const debounce = (fn, timer) => {
    let timeCtx;
    return (...args) => {
      clearTimeout(timeCtx);
      timeCtx = setTimeout(() => {
        console.log(this);
        fn.apply(this, args);
      }, timer);
    };
  };

  const goodFunction = useCallback(
    debounce((nextValue) => showText(nextValue), 1000),
    []
  );

  const onInputChange = (e) => {
    const nextValue = e.target.value;
    setTypedText(nextValue);
    goodFunction(nextValue);
  };

  return (
    <div className="App">
      <input
        onChange={onInputChange}
        value={typedText}
        type="text"
        placeholder="type something"
      />
      <h3>Debounce: {show} </h3>

      <Count />
    </div>
  );
}
