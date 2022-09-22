import React from 'react';
import FooterNav from './FooterNav';
import FooterInfo from './FooterInfo';
import FooterAnchor from './FooterAnchor';

export default function Footer({ isNotFound }) {
  return (
    <footer className={isNotFound ? 'not-found' : 'footer'}>
      <div className="footer__wrapper">
        <FooterNav />
        <div className="footer-bottom__wrapper">
          <FooterInfo />
          <FooterAnchor />
        </div>
      </div>
    </footer>
  );
}
