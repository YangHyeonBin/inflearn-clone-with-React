import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function FooterAnchor() {
  return (
    <ul className="footer-anchors">
      <li aria-label="인프런 네이버 포스트">N</li>
      <li aria-label="인프런 블로그">B</li>
      <li aria-label="인프런 인스타그램">
        <FontAwesomeIcon icon={faInstagram} />
      </li>
      <li aria-label="인프런 유튜브">
        <FontAwesomeIcon icon={faYoutube} />
      </li>
      <li aria-label="인프런 페이스북">
        <FontAwesomeIcon icon={faFacebookF} />
      </li>
      <li aria-label="인프런 트위터">
        <FontAwesomeIcon icon={faTwitter} />
      </li>
    </ul>
  );
}
