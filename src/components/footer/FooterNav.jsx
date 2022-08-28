import React from 'react';
import { navFooters } from './navFooters';

export default function FooterNav() {
  return (
    <ul className="nav-footers">
      {navFooters.map(nav => (
        <li className="nav-footer-item" key={nav.title}>
          <h3>{nav.title}</h3>
          <div className="nav-footer-contents">
            {nav.contents.map(content => (
              <a className="nav-footer-content-item" key={content}>
                {content}
              </a>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
