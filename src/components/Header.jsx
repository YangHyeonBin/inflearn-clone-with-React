import styled from 'styled-components';

import { navMenus } from './navMenus';

import { ReactComponent as InflearnLogo } from '../assets/inflearn-logo.svg';
import { ReactComponent as SideBarIcon } from '../assets/side-bar-icon.svg';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

export default function Header({ isNotFound }) {
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
            <a href="#" className="cart-icon" aria-label="강의 장바구니">
              <FontAwesomeIcon icon={faCartShopping} />
            </a>
            <a href="#" className="alert-icon" aria-label="알림">
              <FontAwesomeIcon icon={faBell} />
            </a>
            <Link
              to="/account/dashboard"
              className="my-page"
              aria-label="마이페이지">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </div>
        </nav>
      </div>
    </HeaderWrapper>
  );
}

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
    margin-right: 0.25rem;
  }

  .cart-icon,
  .alert-icon {
    font-size: 1.25rem;
    padding: 0 0.625rem;
  }

  .cart-icon:hover,
  .alert-icon:hover {
    color: #00c471;
  }

  .my-page {
    font-size: 1.25rem;
    padding-left: 0.625rem;
  }

  @media screen and (max-width: 1024px) {
    .header-wrapper {
      height: 3.125em;
      padding: 0 1em;
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
      margin-left: 0.625rem;
    }
  }
`;

const BrandLogoLink = styled(Link)`
  display: flex;
  align-items: center;
`;
