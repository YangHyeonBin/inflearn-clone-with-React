import { ReactComponent as InflearnLogo } from '../assets/inflearn-logo.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

export default function Header() {
  const navMenu = ['강의', '로드맵', '멘토링', '커뮤니티', '인프런'];

  return (
    <header className="header-wrapper-shadow">
      <div className="header-wrapper">
        <a href="#">
          <InflearnLogo />
          <h1 className="sr-only">인프런</h1>
        </a>
        <nav>
          <ul>
            {navMenu.map(item => (
              <li key={item}>
                <a href="#" className="menu-item">
                  {item}
                </a>
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
            <a href="#" className="anchor__user-info" aria-label="내 정보">
              <FontAwesomeIcon icon={faUser} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
