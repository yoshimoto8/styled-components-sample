import React, { Component } from "react";
import styled from "styled-components";

class ExtendingStyles extends Component {
  render() {
    const Input = styled.input`
      padding: 0.5em;
      margin: 0.5em;
      color: ${props => props.inputColor || "palevioletred"};
      background: papayawhip;
      border: none;
      border-radius: 3px;
    `;

    return (
      <div>
        <Input placeholder="@mxstbr" value="@probablyup" type="text" />
        <Input value="@geelen" type="text" inputColor="rebeccapurple" />
      </div>
    );
  }
}

export default ExtendingStyles;
