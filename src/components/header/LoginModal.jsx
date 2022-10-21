import React from 'react';
import styled from 'styled-components';

import NaverLogin from './NaverLogin';
import KakaoLogin from './KakaoLogin';

import { ReactComponent as CloseIcon } from '../../assets/icons/close-icon.svg';
import { ReactComponent as InflearnLogo } from '../../assets/icons/inflearn-logo.svg';
import { ReactComponent as EyeIcon } from '../../assets/icons/eye-icon.svg';
import { ReactComponent as ClosedEyeIcon } from '../../assets/icons/eye-closed-icon.svg';

export default function LoginModal({ onHideModal }) {
  const REST_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
  const REDIRECT_URI = 'http://localhost:3000';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const loginHandler = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <ModalWrapper>
      <div className="inflearn-logo">
        <InflearnLogo />
      </div>
      <span className="close-button" onClick={onHideModal}>
        <CloseIcon />
      </span>
      <form>
        <div>
          <div className="input">
            <input placeholder="이메일" />
          </div>
          <div className="input">
            <input placeholder="비밀번호" />
            <EyeIcon />
          </div>
        </div>
        <button type="button" className="login-button">
          로그인
        </button>
      </form>
      <div className="more-options">
        <span className="more-option">아이디(이메일) 찾기</span>
        <span className="divider"></span>
        <span className="more-option">비밀번호 찾기</span>
        <span className="divider"></span>
        <span className="more-option">회원가입</span>
      </div>
      <div className="social-logins">
        <hr />
        <span className="title">간편 로그인</span>
        {/* <div className="naver">네이버</div> */}
        <div className="social-login-buttons">
          <NaverLogin id="naver" />
          <KakaoLogin onLogin={loginHandler} />
        </div>
      </div>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.article`
  background-color: white;
  margin: auto;
  width: 22.5em;
  height: 28em;
  padding: 1.5em;
  border-radius: 0.375em;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .inflearn-logo {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .inflearn-logo svg {
    margin: 1.5em 0;
  }

  .close-button {
    cursor: pointer;
  }

  .close-button svg {
    position: absolute;
    top: 1.5em;
    right: 1.5em;
  }

  .input {
    margin-bottom: 0.75em;
    width: 19.5em;
    height: 3em;
    padding: 0.813em 0.75em;
    border: 1px solid #dee2e6;
    border-radius: 0.25em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .input:focus-within {
    border-color: #00c471;
  }

  .input input {
    font-size: 0.938rem;
    width: 100%;
  }

  .input input::placeholder {
    color: #ced4da;
    font-size: 0.9rem;
  }

  .login-button {
    background-color: #00c471;
    width: 100%;
    font-size: 0.875rem;
    font-weight: 700;
    text-align: center;
    height: 3.429em;
    margin: 0.857em 0;
    color: white;
    border-radius: 0.286em;
    cursor: pointer;
  }

  .more-options {
    margin-bottom: 1.5em;
    color: #616568;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .more-option {
    font-size: 0.813rem;
    border-bottom: 1px solid #616568;
    padding-bottom: 0.154em;
    cursor: pointer;
  }

  .divider {
    border-right: 1px solid #858a8d;
    margin: 0 8px;
    height: 10px;
  }

  .social-logins {
    position: relative;
  }

  .social-logins hr {
    height: 1px;
    background-color: #f1f3f5;
    position: relative;
    bottom: -1em;
  }

  .social-logins .title {
    display: block;
    color: #abb0b5;
    font-size: 0.688rem;
    background-color: white;
    padding: 0.727em;
    margin-bottom: 1.455em;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .social-login-buttons {
    display: flex;
    justify-content: center;
    padding-top: 45px;
  }
`;
