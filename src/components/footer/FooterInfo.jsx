import React, { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as InflearnLogo } from '../../assets/icons/inflearn-logo.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default function FooterInfo() {
  const [open, setOpen] = useState(false);

  const toggleButtonClickHandler = () => {
    setOpen(!open);
  };

  return (
    <InfoWrapper>
      <div className="anchors">
        <a className="logo">
          <InflearnLogo />
        </a>
        <a className="anchor-item">개인정보취급방침</a>
        <a className="anchor-item">이용약관</a>
      </div>
      <div className="info-button" onClick={toggleButtonClickHandler}>
        (주)인프랩 사업자 정보
        <button type="button" className="toggle">
          <FontAwesomeIcon icon={open ? faAngleUp : faAngleDown} />
        </button>
      </div>
      <FooterContents open={open}>
        <span className="corporation-name">(주)인프랩 | </span>대표자: 이형주 |
        사업자번호: 499-81-00612 <a href="#">사업자 정보 확인</a>
        <br />
        통신판매업: 2018-성남분당B-0062 | 개인정보보호책임자: 이동욱 | 이메일:{' '}
        <a href="#">info@inflearn.com</a>
        <br />
        주소: 경기도 성남시 분당구 대왕판교로 660 유스페이스 1A동 405호
      </FooterContents>
      <div className="copyright">©INFLAB. ALL RIGHTS RESERVED</div>
    </InfoWrapper>
  );
}

const InfoWrapper = styled.div`
  color: #bdbdbd;
  font-size: 0.75rem;
  margin-bottom: 2em;

  .anchors {
    font-weight: 700;
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .anchors .logo #icon_brand_logo {
    width: 85px;
  }

  .anchor-item::before {
    content: '|';
    margin: 0 0.5rem;
    font-weight: normal;
  }

  .info-button {
    display: none;
  }

  .footer-contents {
    letter-spacing: normal;
    margin-bottom: 0.5rem;
  }

  .copyright {
    letter-spacing: normal;
  }

  @media screen and (max-width: 768px) {
    text-align: center;

    .anchors {
      justify-content: center;
    }

    .anchors .logo #icon_brand_logo {
      display: none;
    }

    .anchor-item {
      margin-right: 0.4em;
    }

    /* .anchor-item:last-child() {
      margin-right: 0;
    } */

    .anchor-item::before {
      display: none;
    }

    .info-button {
      display: block;
      margin-bottom: 0.667em;
    }

    .toggle {
      margin-left: 0.5em;
    }
  }
`;

const FooterContents = styled.div`
  letter-spacing: normal;
  margin-bottom: 0.5rem;

  @media screen and (max-width: 768px) {
    height: ${props => (props.open ? '100%' : '0')};
    overflow-y: hidden;

    .corporation-name {
      display: none;
    }
  }
`;
