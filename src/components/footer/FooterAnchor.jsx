import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function FooterAnchor() {
  return (
    <ul className="footer-anchors">
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
    </ul>
  );
}
