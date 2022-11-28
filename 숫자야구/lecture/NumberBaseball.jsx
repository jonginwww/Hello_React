const React = require("react");
const ReactDom = require("react-dom");
const { Component, useState, useRef } = React;

const NumberBaseball = () => {
  const [strike, setStrike] = useState("");
  const [ball, setBall] = useState("");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [attempt, setAttempt] = useState("");
  const inputRef = useRef(null);

  const onSubmitForm = () => {};

  const onChangeInput = () => {};

  return (
    <>
      <div>
        {strike}스트라이크 {ball}볼입니다.
      </div>
      <form onSubmit={onSubmitForm}>
        <input
          type="number"
          maxLength={4}
          onChange={onChangeInput}
          ref={inputRef}
        />
        <button>입력</button>
      </form>
      <div>시도: {attempt}</div>
      <div>{result}</div>
      <ul>
        {["헬", "로", "리", "액", "트"].map((v) => {
          return <li key={v}>{v}</li>;
        })}
      </ul>
    </>
  );
};

module.exports = NumberBaseball;
