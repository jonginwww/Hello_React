const React = require("react");
const ReactDom = require("react-dom");
const { Component, useState, useRef } = React;

const BaseBall = () => {
  const [strike, setStrike] = useState("");
  const [ball, setBall] = useState("");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const onSubmitForm = () => {};

  const onChangeInput = () => {};

  return (
    <>
      <div>
        {strike}스트라이크 {ball}볼입니다.
      </div>
      <form onSubmit={onSubmitForm}>
        <input type="number" onChange={onChangeInput} ref={inputRef} />
        <button>입력</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = BaseBall;
