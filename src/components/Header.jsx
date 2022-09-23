import { navMenus } from './navMenus';

import { ReactComponent as InflearnLogo } from '../assets/inflearn-logo.svg';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

export default function Header({ isNotFound }) {
  return (
    <header className={isNotFound ? 'not-found' : 'header-wrapper-shadow'}>
      <div className="header-wrapper">
        <Link to="/">
          <InflearnLogo />
          <h1 className="sr-only">인프런</h1>
        </Link>
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
            <div className="nav-search">
              <input type="text" />
              <button type="button">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
            <a href="#" className="anchor__recent-lecture">
              <FontAwesomeIcon icon={faPen} id="recent-lecture-icon" />
              최근강의
            </a>
            <a href="#" className="anchor__cart" aria-label="강의 장바구니">
              <FontAwesomeIcon icon={faCartShopping} />
            </a>
            <a href="#" className="anchor__alert" aria-label="알림">
              <FontAwesomeIcon icon={faBell} />
            </a>
            <Link
              to="/account/dashboard"
              className="anchor__my-page"
              aria-label="마이페이지">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
