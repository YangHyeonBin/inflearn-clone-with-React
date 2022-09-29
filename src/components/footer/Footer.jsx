import React from 'react';
import styled from 'styled-components';

import FooterNav from './FooterNav';
import FooterInfo from './FooterInfo';
import FooterAnchor from './FooterAnchor';

export default function Footer({ isNotFound }) {
  return (
    <FooterWrapper hidden={isNotFound}>
      <div className="container">
        <FooterNav />
        <FooterBottom>
          <FooterInfo />
          <FooterAnchor />
        </FooterBottom>
      </div>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  display: ${props => (props.hidden ? 'none' : 'block')};
  background-color: #303740;

  .container {
    max-width: 72rem;
    margin: 0 auto;
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 4.125em;
  }
`;

const FooterBottom = styled.div`
  padding: 2em 1.25em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 1.5em 1.25em;
  }
`;
