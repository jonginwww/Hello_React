import React, { Component } from "react";

const Try = () => {
  return (
    <li>
      {this.props.value.fruit} - {this.props.value.taste}
    </li>
  );
};

export default Try;
