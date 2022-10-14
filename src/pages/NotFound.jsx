import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function NotFound({ setIsNotFound }) {
  useEffect(() => {
    setIsNotFound(true);

    return () => {
      setIsNotFound(false);
    };
  }, []);

  return (
    <NotFoundWrapper>
      <div className="message">
        <h1>해당 페이지를 찾지 못했습니다.</h1>
        <p>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</p>
        <MainPageLink to="/">메인페이지로 이동 🏠🏃🏻‍♀</MainPageLink>
      </div>
      <img
        className="coding-cat"
        src="https://cdn.inflearn.com/assets/images/lost_pages/coding_cat.gif"
        alt="coding cat"
      />
      <img
        className="inflearn-stamp"
        src="https://cdn.inflearn.com/assets/brand/dojang.png"
        alt="인프런 도장"
      />
    </NotFoundWrapper>
  );
}

const NotFoundWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;

  .message {
    flex: 1 1 0;
    margin-left: 3rem;

    h1 {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1em;
    }

    p {
      font-size: 2rem;
    }
  }

  .coding-cat {
    flex: 1 1 0;
    display: block;
    max-width: 50%;
  }

  .inflearn-stamp {
    display: block;
    width: 6.5rem;
    height: 6.5rem;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
  }
`;

const MainPageLink = styled(Link)`
  font-size: 2rem;
  color: #00c471;
`;
