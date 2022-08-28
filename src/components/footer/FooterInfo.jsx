import React from 'react';
import { ReactComponent as InflearnLogo } from '../../assets/inflearn-logo.svg';

export default function FooterInfo() {
  return (
    <div className="info-footers">
      <div className="info-anchors">
        <a className="logo-anchor">
          <InflearnLogo />
        </a>
        <a className="info-anchor-item">개인정보취급방침</a>
        <a className="info-anchor-item">이용약관</a>
      </div>
      <div className="info-footer-contents">
        (주)인프랩 | 대표자: 이형주 | 사업자번호: 499-81-00612{' '}
        <a href="#">사업자 정보 확인</a>
        <br />
        통신판매업: 2018-성남분당B-0062 | 개인정보보호책임자: 이동욱 | 이메일:{' '}
        <a href="#">info@inflearn.com</a>
        <br />
        주소: 경기도 성남시 분당구 대왕판교로 660 유스페이스 1A동 405호
      </div>
      <div className="copyright-footer">©INFLAB. ALL RIGHTS RESERVED</div>
    </div>
  );
}
