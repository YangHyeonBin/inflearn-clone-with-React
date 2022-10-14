import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { useRecoilState } from 'recoil';
import { cartState } from '../../recoil/Cart';

import Dropdown from './Dropdown';
import GlobalNavigationList from './GlobalNavigationList';

import { navMenus } from './navMenus';
import { dummyMenus } from './dummyMenus';

import { ReactComponent as InflearnLogo } from '../../assets/icons/inflearn-logo.svg';
import { ReactComponent as SideBarIcon } from '../../assets/icons/side-bar-icon.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';

export default function Header({ isNotFound }) {
  const [cart, setCart] = useRecoilState(cartState);

  const [isHovering, setIsHovering] = useState(false);
  const [headerFix, setHeaderFix] = useState(false);

  useEffect(() => {
    const headerFixHandler = () => {
      if (window.scrollY > 100) {
        setHeaderFix(true);
      } else {
        setHeaderFix(false);
      }
    };

    window.addEventListener('scroll', headerFixHandler);

    return () => {
      window.removeEventListener('scroll', headerFixHandler);
    };
  }, []);

  // 호버할 때마다 이 컴포넌트 재실행되면서 이 코드도 계속 실행되는데, 성능 저하될까? useEffect 쓰면 price에 접근할 수 없는데, 좋은 방법이 뭐가 있을까?
  const price = cart.map(lecture =>
    Number(lecture.currentPrice.replace(/,/g, '')),
  );

  const location = useLocation();

  return (
    <HeaderWrapper hidden={isNotFound} className={headerFix ? 'fixed' : ''}>
      <div className="header-wrapper">
        <button type="button" className="side-bar-button">
          <SideBarIcon />
        </button>
        <BrandLogoLink to="/">
          <InflearnLogo />
          <h1 className="sr-only">인프런</h1>
        </BrandLogoLink>
        <nav>
          <ul className="navigation-menu">
            {/* {navMenus.map((menu, index) => (
              <li key={menu + index}>
                <Link to="/courses" className="menu-item">
                  {menu}
                </Link>
              </li>
            ))} */}
            {dummyMenus.map((menu, index) => (
              <li key={menu.title + index}>
                <Link to="/courses" className="menu-item">
                  {menu.title}
                </Link>
                {menu.items && (
                  <ul className="menu-container first">
                    {menu.items.map((menu, index) => (
                      <GlobalNavigationList
                        key={menu.title + index}
                        menu={menu}>
                        {menu.items && (
                          <ul className="menu-container two">
                            {menu.items.map((menu, index) => (
                              <GlobalNavigationList
                                key={menu.title + index}
                                menu={menu}>
                                {menu.items && (
                                  <ul className="menu-container three">
                                    {menu.items.map((menu, index) => (
                                      <GlobalNavigationList
                                        key={menu.title + index}
                                        menu={menu}></GlobalNavigationList>
                                    ))}
                                  </ul>
                                )}
                              </GlobalNavigationList>
                            ))}
                          </ul>
                        )}
                      </GlobalNavigationList>
                    ))}
                  </ul>
                )}
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
              <Link
                to="/carts"
                className={`cart-icon ${isHovering ? 'active' : ''}`}
                aria-label="강의 장바구니"
                onMouseOver={() => setIsHovering(true)}
                onMouseOut={() => setIsHovering(false)}>
                <FontAwesomeIcon icon={faCartShopping} />
                {cart.length > 0 && (
                  <div className="amount-badge">{cart.length}</div>
                )}
              </Link>
              {isHovering && (
                <Dropdown setIsHovering={setIsHovering}>
                  <CartModalHeader>
                    <div className="carted-amount">
                      수강바구니<span>{cart.length}</span>
                    </div>
                    <div className="total-price">
                      총 결제금액
                      <strong>
                        {String(
                          price.reduce((curr, acc) => curr + acc, 0),
                        ).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      </strong>
                      원
                    </div>
                  </CartModalHeader>
                  {cart.length === 0 ? (
                    <CartModalBody>
                      <p className="placeholder-header">
                        담긴 강의가 없습니다.
                      </p>
                      <p className="placeholder-description">
                        나를 성장시켜줄 좋은 지식들을 찾아보세요.
                      </p>
                      <Link to="/courses" className="browse-lectures">
                        강의리스트 보기
                      </Link>
                    </CartModalBody>
                  ) : (
                    <main>
                      <CartItem>
                        {cart.map((lecture, index) => (
                          <li key={lecture.title + index}>
                            <Link
                              to={`/lecture/${lecture.title}`}
                              className="cart-item">
                              <img
                                className="thumbnail"
                                src={lecture.img}
                                alt={`${lecture.title} 썸네일`}
                              />
                              <div className="lecture-info">
                                <p className="title">{lecture.title}</p>
                                <div className="price">
                                  {lecture.originalPrice && (
                                    <del>{lecture.originalPrice}</del>
                                  )}
                                  <strong>{lecture.currentPrice}</strong>원
                                </div>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </CartItem>
                      {location.pathname !== '/carts' && (
                        <CartLink to="/carts">수강바구니에서 전체보기</CartLink>
                      )}
                    </main>
                  )}
                </Dropdown>
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
  z-index: 3;
  background-color: white;
  position: relative;
  /* position: ${({ scrollY }) => {
    if (scrollY > 50) {
      return 'fixed';
    }
    return 'relative';
  }}; */

  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }

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

  .navigation-menu {
    display: flex;
    align-items: center;
  }

  .navigation-menu > li {
    position: relative;
  }

  .menu-item {
    padding: 1em 1.5em;
  }

  .menu-item:hover {
    color: #00c471;
  }

  .menu-container {
    position: absolute;
    top: 150%;
    left: 0;
    width: 11.25em;
    padding: 0.5em 0;
    background-color: white;
    box-shadow: 8px 5px 8px 1px rgba(0, 10, 18, 0.1),
      0 0 0 1px rgba(0, 10, 18, 0.1);
  }

  .navigation-menu li:fisrt-child .menu-container {
    height: 26.625em;
  }

  .menu-container:first-child {
    height: 26.625em;
  }

  .menu-container.first::after {
    content: '';
    position: absolute;
    width: 1em;
    height: 1em;
    top: -0.5em;
    left: 2em;
    transform: rotate(45deg);
    border: 1px solid #e0e0e0;
    border-right: none;
    border-bottom: none;
    background-color: white;
  }

  .menu-container.two {
    width: 12.858em;
    top: 0;
    left: 180px;
  }

  .menu-container.three {
    width: 12.858em;
    top: 0;
    left: 180px;
  }

  .menu-container li {
    font-size: 0.875rem;
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
    position: relative;
  }

  .amount-badge {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 0.625rem;
    font-weight: 700;
    background-color: #ff5b16;
    color: white;
    min-width: 1.6em;
    height: 1.6em;
    padding: 0 0.5em;
    border-radius: 2em;
  }

  .cart-icon.active,
  .alert-icon:hover {
    color: #00c471;
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

    .navigation-menu,
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

const CartItem = styled.ul`
  .cart-item {
    display: flex;
    align-items: center;
    margin-top: 1em;
  }

  .cart-item:last-child {
    margin-bottom: 0.5em;
  }

  .thumbnail {
    display: block;
    width: 5em;
    max-height: 3.25em;
    border: 1px solid #f1f3f5;
    border-radius: 0.25em;
  }

  .lecture-info {
    padding-left: 1em;
  }

  .title {
    font-size: 0.875rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #3e4042;
    padding-bottom: 0.143em;
  }

  .price {
    font-size: 0.875rem;
    color: #abb0b5;

    del {
      font-size: 0.938rem;
      color: #abb0b5;
      padding-right: 0.267em;
    }

    strong {
      font-size: 0.938rem;
      font-weight: 700;
      color: #1b1c1d;
      padding-right: 0.067em;
    }
  }
`;

const CartLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00c471;
  border: 1px solid #00c471;
  border-radius: 0.267em;
  color: white;
  font-size: 0.938rem;
  font-weight: 700;
  padding: 0 0.8em;
  height: 2.667em;
  width: 100%;
  margin-top: 1.067em;
`;

const CartModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1em;
  font-weight: 700;
  border-bottom: 1px solid #e9ebee;

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
`;

const CartModalBody = styled.main`
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
`;
