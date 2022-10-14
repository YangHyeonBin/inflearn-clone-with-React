import React from 'react';
import styled from 'styled-components';

export default function Dropdown(props) {
  return (
    <HeaderDropdown
      onMouseOver={() => props.setIsHovering(true)}
      onMouseOut={() => {
        props.setIsHovering(false);
      }}>
      {props.children}
    </HeaderDropdown>
  );
}

const HeaderDropdown = styled.div`
  z-index: 2;
  position: absolute;
  top: 4em;
  right: -0.938em;
  width: 27.625em;
  max-height: 26.25em;
  border: 1px solid #e9ebee;
  border-radius: 0.5em;
  box-shadow: 0 0.25em 0.625em rgba(0, 0, 0, 0.1);
  background-color: white;
  padding: 1.25em;

  &::after {
    content: '';
    position: absolute;
    width: 1.5em;
    height: 1.5em;
    top: -15px;
    right: 21px;
    transform: rotate(45deg);
    border: 1px solid #e0e0e0;
    border-right: none;
    border-bottom: none;
    background-color: white;
  }
`;
