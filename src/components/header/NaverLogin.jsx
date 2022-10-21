import React from 'react';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

export default function NaverLogin({ setGetToken, setUserInfo }) {
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
  const SERVICE_URL = 'http://localhost:3000';
  const CALLBACK_URL = 'http://localhost:3000';
  const location = useLocation();

  const { naver } = window;
  const naverRef = useRef();

  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: CLIENT_ID,
      callbackUrl: CALLBACK_URL,
      isPopup: false,
      loginButton: { color: 'green', type: 2, height: '45' },
      callbackHandle: true,
    });

    naverLogin.init();

    naverLogin.getLoginStatus(async function (status) {
      if (status) {
        const userid = naverLogin.user.getEmail();
        const username = naverLogin.user.getName();
      }
    });
  };

  const userAccessToken = () => {
    window.location.href.includes('access_token') && getToken();
  };

  const getToken = () => {
    const token = window.location.href.split('=')[1].split('&')[0];
  };

  useEffect(() => {
    initializeNaverLogin();
    userAccessToken();
  }, []);

  const naverLoginHandler = () => {
    naverRef.current.children[0].click();
  };

  return (
    <NaverLoginButton
      id="naverIdLogin"
      onClick={naverLoginHandler}></NaverLoginButton>
  );
}

const NaverLoginButton = styled.div`
  margin-right: 10px;
`;
