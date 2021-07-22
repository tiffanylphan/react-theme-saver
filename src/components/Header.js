import React from "react";
import { StyledHeader, FullContainer } from "./StyledComponents";

export default function Header(props) {
  return (
    <FullContainer bgColor={props.bgColor} area="header">
      <StyledHeader textColor={props.textColor}>{props.header}</StyledHeader>
    </FullContainer>
  );
}
