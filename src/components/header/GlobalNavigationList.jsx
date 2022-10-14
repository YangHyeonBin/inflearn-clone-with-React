import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function GlobalNavigationList({ menu, children }) {
  return (
    <li>
      <MenuLink to="/courses">{menu.title}</MenuLink>
      {children}
    </li>
  );
}

const MenuLink = styled(Link)`
  display: block;
  padding: 0.375rem 1rem;

  &:hover {
    color: #242424;
  }
`;
