import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { navMenus } from './navMenus';

import { ReactComponent as InflearnLogo } from '../assets/icons/inflearn-logo.svg';
import { ReactComponent as SideBarIcon } from '../assets/icons/side-bar-icon.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';

export default function Header({ isNotFound }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <HeaderWrapper hidden={isNotFound}>
      <div className="header-wrapper">
        <button type="button" className="side-bar-button">
          <SideBarIcon />
        </button>
        <BrandLogoLink to="/">
          <InflearnLogo />
          <h1 className="sr-only">인프런</h1>
        </BrandLogoLink>
        <nav>
          <ul>
            {navMenus.map((menu, index) => (
              <li key={menu + index}>
                <Link to={menu.link} className="menu-item">
                  {menu.menu}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-right">
            <div className="search">
              <input type="text" />
              <button type="button">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
            <a href="#" className="recent-lecture">
              <FontAwesomeIcon icon={faPen} id="recent-lecture-icon" />
              최근강의
            </a>
            <div className="cart-wrapper">
              <a
                href="#"
                className={`cart-icon ${isHovering ? 'active' : ''}`}
                aria-label="강의 장바구니"
                onMouseOver={() => setIsHovering(true)}
                onMouseOut={() => setIsHovering(false)}>
                <FontAwesomeIcon icon={faCartShopping} />
              </a>
              {isHovering && (
                <div
                  className="cart-modal"
                  onMouseOver={() => setIsHovering(true)}
                  onMouseOut={() => {
                    setIsHovering(false);
                  }}>
                  <header>
                    <div className="carted-amount">
                      수강바구니<span>0</span>
                    </div>
                    <div className="total-price">
                      총 결제금액
                      <strong>0</strong>원
                    </div>
                  </header>
                  <main>
                    <p className="placeholder-header">담긴 강의가 없습니다.</p>
                    <p className="placeholder-description">
                      나를 성장시켜줄 좋은 지식들을 찾아보세요.
                    </p>
                    <Link to="/courses" className="browse-lectures">
                      강의리스트 보기
                    </Link>
                  </main>
                </div>
              )}
            </div>
            <div className="alert-wrapper">
              <a href="#" className="alert-icon" aria-label="알림">
                <FontAwesomeIcon icon={faBell} />
              </a>
            </div>
            <div className="my-page-wrapper">
              <Link
                to="/account/dashboard"
                className="my-page"
                aria-label="마이페이지">
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </HeaderWrapper>
  );
}

// 큰 화면을 기준으로 작성, 미디어 쿼리로 작은 화면들에 수정해야 할 스타일 추가
const HeaderWrapper = styled.header`
  display: ${props => (props.hidden ? 'none' : 'block')};
  box-shadow: 0 2px 4px 0 hsl(0deg 0% 81% / 50%);
  z-index: 1;

  .header-wrapper {
    display: flex;
    align-items: center;
    margin: 0 auto;
    color: #4a4a4a;

    max-width: 75em;
    height: 4em;
    padding: 0 2em;
  }

  .side-bar-button {
    display: none;
  }

  nav {
    flex: 1 1 0;
    display: flex;
    justify-content: space-between;
    height: 100%;
  }

  nav ul {
    display: flex;
    align-items: center;
  }

  .menu-item {
    padding: 1em 1.5em;
  }

  .menu-item:hover {
    color: #00c471;
  }

  .nav-right {
    display: flex;
    align-items: center;
  }

  .search {
    position: relative;
  }

  .search input {
    background-color: #f6f6f6;
    padding: 0.35em 1em;
    border-radius: 4px;
    line-height: 1.5;
    max-width: 10.25em;
  }

  .search input:hover {
    border: 1px solid gray;
  }

  .search input:focus {
    border: 2px solid #00c471;
    box-shadow: 0.5px 0.5px 5px 1px #7dccab;
  }

  .search button {
    position: absolute;
    top: 50%;
    right: 1em;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .recent-lecture {
    color: white;
    background-color: #00c471;
    padding: 0.3em 0.5em;
    font-weight: 600;
    border-radius: 4px;
    margin: 0 0.625em;
  }

  #recent-lecture-icon {
    margin-right: 0.25em;
  }

  .cart-wrapper,
  .alert-wrapper,
  .my-page-wrapper {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0.5em 0;
  }

  .cart-icon,
  .alert-icon {
    font-size: 1.25rem;
    padding: 0 0.5em;
  }

  .cart-icon.active,
  .alert-icon:hover {
    color: #00c471;
  }

  .cart-modal {
    position: absolute;
    top: 4em;
    right: -0.938em;
    width: 27.625em;
    max-height: 26.25em;
    border: 1px solid #e9ebee;
    border-radius: 0.5em;
    box-shadow: 0 0.25em 0.625em rgba(0, 0, 0, 0.1);
    background-color: white;
    padding: 1.25em;

    header {
      display: flex;
      justify-content: space-between;
      padding-bottom: 1em;
      font-weight: 700;
      border-bottom: 1px solid #e9ebee;
    }

    .carted-amount {
      color: #1b1c1d;

      span {
        color: #00c471;
        padding-left: 0.25em;
        font-weight: 500;
      }
    }

    .total-price {
      color: #abb0b5;
      font-weight: 400;
      font-size: 0.938rem;

      strong {
        color: #1b1c1d;
        font-size: 16px;
        font-weight: 700;
        padding-left: 0.5em;
      }
    }

    main {
      padding: 2.5em 0 1.25em;
      text-align: center;

      .placeholder-header {
        color: #3e4042;
        font-weight: 700;
        padding-bottom: 0.25em;
      }

      .placeholder-description {
        color: #858a8d;
        font-size: 0.875rem;
        padding-bottom: 1.429em;
      }

      .browse-lectures {
        display: inline-flex;
        align-items: center;
        font-size: 0.875rem;
        font-weight: 700;
        border: 1px solid #00c471;
        border-radius: 0.286em;
        color: #00c471;
        cursor: pointer;
        padding: 0 0.857em;
        height: 40px;
      }
    }
  }

  .cart-modal::after {
    content: '';
    position: absolute;
    width: 1.5em;
    height: 1.5em;
    top: -15px;
    right: 21px;
    transform: rotate(45deg);
    border: 1px solid #e0e0e0;
    border-right: none;
    border-bottom: none;
    background-color: white;
  }

  .my-page {
    font-size: 1.25rem;
    padding-left: 0.5em;
  }

  /* 1024px 이하 */
  @media screen and (max-width: 64em) {
    .header-wrapper {
      height: 3.125em;
      padding: 0 1.5em;
    }

    .side-bar-button {
      display: flex;
      align-items: center;
      flex: 1 1 0;
    }

    .brand-logo {
      flex: 1 1 0;
    }

    nav {
      justify-content: flex-end;
    }

    nav ul,
    .search,
    .recent-lecture,
    .alert-icon {
      display: none;
    }

    .my-page {
      margin-left: 0.625em;
    }
  }

  /* 768px 이하 */
  @media screen and (max-width: 48em) {
    .header-wrapper {
      padding: 0 1em;
    }
  }
`;

const BrandLogoLink = styled(Link)`
  display: flex;
  align-items: center;
`;
