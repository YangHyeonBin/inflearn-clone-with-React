import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function FooterAnchor() {
  return (
    <AnchorWrapper>
      <li aria-label="인프런 네이버 포스트">
        <a>N</a>
      </li>
      <li aria-label="인프런 블로그">
        <a>B</a>
      </li>
      <li aria-label="인프런 인스타그램">
        <a>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>
      <li aria-label="인프런 유튜브">
        <a>
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </li>
      <li aria-label="인프런 페이스북">
        <a>
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
      </li>
      <li aria-label="인프런 트위터">
        <a>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </li>
    </AnchorWrapper>
  );
}

const AnchorWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 16.25rem;

  li {
    color: #333;
    font-size: 1.25rem;
    font-weight: 700;
    background-color: #bdbdbd;
    width: 2.125rem;
    height: 2.125rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
