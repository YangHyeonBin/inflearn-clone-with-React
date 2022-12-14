import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { useRecoilState } from 'recoil';
import { cartState } from '../../recoil/Cart';
import { useRecoilValue } from 'recoil';
import { loginState } from '../../recoil/Login';

import Dropdown from './Dropdown';
import GlobalNavigationList from './GlobalNavigationList';
import ModalOverlay from './ModalOverlay';
import LoginModal from './LoginModal';

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
  const loginAtomState = useRecoilValue(loginState);

  const [isHovering, setIsHovering] = useState(false);
  const [headerFix, setHeaderFix] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [hoveredIndexTwo, setHoveredIndexTwo] = useState(-1);
  const [hoveredIndexThree, setHoveredIndexThree] = useState(-1);

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

  useEffect(() => {
    if (loginAtomState) {
      setIsLoggedIn(true);
    }
  }, [loginAtomState]);

  // ????????? ????????? ??? ???????????? ?????????????????? ??? ????????? ?????? ???????????????, ?????? ????????????? useEffect ?????? price??? ????????? ??? ?????????, ?????? ????????? ?????? ??????????
  const price = cart.map(lecture =>
    Number(lecture.currentPrice.replace(/,/g, '')),
  );

  const location = useLocation();

  const showLoginHandler = () => {
    setShowLogin(true);
  };

  const hideLoginHandler = () => {
    setShowLogin(false);
  };

  return (
    <HeaderWrapper hidden={isNotFound} className={headerFix ? 'fixed' : ''}>
      <ModalOverlay blur onHideModal={hideLoginHandler} show={showLogin}>
        <LoginModal onHideModal={hideLoginHandler} />
      </ModalOverlay>
      <div className="header-wrapper">
        <button type="button" className="side-bar-button">
          <SideBarIcon />
        </button>
        <BrandLogoLink to="/">
          <InflearnLogo />
          <h1 className="sr-only">?????????</h1>
        </BrandLogoLink>
        <nav>
          <ul className="navigation-menu">
            {dummyMenus.map((menu, index) => (
              <li
                key={menu.title + index}
                onMouseOver={() => {
                  setHoveredIndex(index);
                }}
                onMouseOut={() => {
                  setHoveredIndex(-1);
                }}>
                <Link to="/courses" className="menu-item">
                  {menu.title}
                </Link>
                {menu.items && hoveredIndex === index && (
                  <ul
                    className={`menu-container first ${
                      index === 0 ? 'first-child' : ''
                    }`}>
                    {menu.items.map((menu, indexTwo) => (
                      <GlobalNavigationList
                        key={menu.title + index}
                        menu={menu}
                        setHoveredIndex={setHoveredIndexTwo}
                        index={indexTwo}>
                        {menu.items && hoveredIndexTwo === indexTwo && (
                          <ul className="menu-container two">
                            {menu.items.map((menu, index) => (
                              <GlobalNavigationList
                                key={menu.title + index}
                                menu={menu}
                                setHoveredIndex={setHoveredIndexThree}
                                index={index}>
                                {menu.items && hoveredIndexThree === index && (
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
            {isLoggedIn ? (
              <>
                <a href="#" className="recent-lecture">
                  <FontAwesomeIcon icon={faPen} id="recent-lecture-icon" />
                  ????????????
                </a>
                <div className="cart-wrapper">
                  <Link
                    to="/carts"
                    className={`cart-icon ${isHovering ? 'active' : ''}`}
                    aria-label="?????? ????????????"
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
                          ???????????????<span>{cart.length}</span>
                        </div>
                        <div className="total-price">
                          ??? ????????????
                          <strong>
                            {String(
                              price.reduce((curr, acc) => curr + acc, 0),
                            ).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                          </strong>
                          ???
                        </div>
                      </CartModalHeader>
                      {cart.length === 0 ? (
                        <CartModalBody>
                          <p className="placeholder-header">
                            ?????? ????????? ????????????.
                          </p>
                          <p className="placeholder-description">
                            ?????? ??????????????? ?????? ???????????? ???????????????.
                          </p>
                          <Link to="/courses" className="browse-lectures">
                            ??????????????? ??????
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
                                    alt={`${lecture.title} ?????????`}
                                  />
                                  <div className="lecture-info">
                                    <p className="title">{lecture.title}</p>
                                    <div className="price">
                                      {lecture.originalPrice && (
                                        <del>{lecture.originalPrice}</del>
                                      )}
                                      <strong>{lecture.currentPrice}</strong>???
                                    </div>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </CartItem>
                          {location.pathname !== '/carts' && (
                            <CartLink to="/carts">
                              ????????????????????? ????????????
                            </CartLink>
                          )}
                        </main>
                      )}
                    </Dropdown>
                  )}
                </div>
                <div className="alert-wrapper">
                  <a href="#" className="alert-icon" aria-label="??????">
                    <FontAwesomeIcon icon={faBell} />
                  </a>
                </div>
                <div className="my-page-wrapper">
                  <Link
                    to="/account/dashboard"
                    className="my-page"
                    aria-label="???????????????">
                    <FontAwesomeIcon icon={faUser} />
                  </Link>
                </div>
              </>
            ) : (
              <div className="auth-container">
                <AuthButton role="button" onClick={showLoginHandler}>
                  ?????????
                </AuthButton>
                <AuthButton primary>????????????</AuthButton>
              </div>
            )}
          </div>
        </nav>
      </div>
    </HeaderWrapper>
  );
}

const AuthButton = styled.a`
  border: 1px solid #dbdbdb;
  border-radius: 0.25em;
  padding: 0.3em 0.5em;
  margin-right: 0.5em;
  background-color: ${props => (props.primary ? '#ff7867' : 'white')};
  color: ${props => (props.primary ? 'white' : '#363636')};
  font-weight: ${props => (props.primary ? '600' : '400')};

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background-color: ${props => (props.primary ? '#ff6d5d' : 'white')};
  }
`;

// ??? ????????? ???????????? ??????, ????????? ????????? ?????? ???????????? ???????????? ??? ????????? ??????
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

  .auth-container {
    padding: 0.5em 0 0.5em 0.75em;
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
    padding: 0.5em 0;
    background-color: white;
    box-shadow: 8px 5px 8px 1px rgba(0, 10, 18, 0.1),
      0 0 0 1px rgba(0, 10, 18, 0.1);
  }

  .menu-container.first.first-child {
    /* font-size = 16px = 1em */
    width: 11.25em;
    height: 25.625em;
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
    /* font-size = 14px =1em */
    width: 12.858em;
    height: 29.286em;
    top: 0;
    left: 180px;
  }

  .menu-container.three {
    width: 12.858em;
    height: 29.286em;
    top: 0;
    left: 180px;
  }

  .menu-container li {
    font-size: 0.875rem;
    white-space: nowrap;
  }

  .nav-right {
    display: flex;
    align-items: center;
  }

  .search {
    position: relative;
    padding: 0.5em;
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
    right: 1.5em;
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

  /* 1024px ?????? */
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

  /* 768px ?????? */
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
