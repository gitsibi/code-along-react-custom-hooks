/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React from "react";
import useStorage from "./useStorage";

const Storage = () => {
  const [inputFieldValue, setInputFieldValue] = useStorage("inputValue");

  const onInputChange = (e) => {
    const newValue = e.target.value;
    setInputFieldValue(newValue);
  };

  return (
    <div className="container">
      <label htmlFor="inputField" className="label">
      </label>
      <input
        type="text"
        id="inputField"
        value={inputFieldValue}
        onChange={onInputChange}
        className="input"
        placeholder="Enter Something"
      />
      <p className="output">Value: {inputFieldValue}</p>
    </div>
  );
};

export default Storage;