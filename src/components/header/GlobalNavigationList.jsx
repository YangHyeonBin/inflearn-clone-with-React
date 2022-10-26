import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function GlobalNavigationList({
  menu,
  children,
  setHoveredIndex,
  index,
}) {
  return (
    <NavItem
      onMouseOver={
        setHoveredIndex ? () => setHoveredIndex(index) : e => e.preventDefault()
      }
      onMouseOut={
        setHoveredIndex ? () => setHoveredIndex(-1) : e => e.preventDefault()
      }>
      <MenuLink to="/courses">{menu.title}</MenuLink>
      {children}
    </NavItem>
  );
}

const NavItem = styled.li`
  width: 100%;
`;

const MenuLink = styled(Link)`
  display: block;
  padding: 0.375rem 1rem;
  width: 100%;

  &:hover {
    color: #242424;
  }
`;
