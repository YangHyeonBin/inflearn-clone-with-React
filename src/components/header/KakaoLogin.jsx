import React from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { loginState } from '../../recoil/Login';

import image from '../../assets/icons/kakao_login_medium.png';

export default function KakaoLogin({ onLogin }) {
  const REST_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
  const REDIRECT_URI = 'http://localhost:3000';
  // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const setLogin = useSetRecoilState(loginState);

  const location = useLocation();
  const KAKAO_CODE = location.search.split('=')[1];

  useEffect(() => {
    if (KAKAO_CODE) {
      setLogin(true);
    }
  }, []);

  // const getKakaoToken = async () => {
  //   try {
  //     const data = await axios({
  //       methos: 'POST',
  //       url: `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
  //     });
  //     console.log(KAKAO_CODE);

  //     if (data.access_token) {
  //       console.log(data.access_token);
  //     } else {
  //       console.log('실패');
  //     }
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  // useEffect(() => {
  //   getKakaoToken();
  // }, []);

  // ---

  // const loginHandler = () => {
  //   window.location.href = KAKAO_AUTH_URL;
  // };

  return (
    <KakaoLoginButton onClick={onLogin}>
      <img src={image} alt="카카오로 로그인 버튼" />
    </KakaoLoginButton>
  );
}

const KakaoLoginButton = styled.div`
  cursor: pointer;
`;
