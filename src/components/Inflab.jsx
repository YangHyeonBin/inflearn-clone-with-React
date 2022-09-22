import { Link } from 'react-router-dom';

import { ReactComponent as InflearnIcon } from '../assets/inflearn-icon.svg';
import { ReactComponent as RecruitIcon } from '../assets/recruit-icon.svg';

export default function Inflab({ isNotFound }) {
  return (
    <section className={isNotFound ? 'not-found' : 'inflab'}>
      <div className="inflab-wrapper">
        <ul>
          <li>
            <Link to="/" className="active">
              <InflearnIcon className="inflab-icon" />
              교육
            </Link>
          </li>
          <span className="divider" aria-hidden="true">
            |
          </span>
          <li>
            <Link to="/">
              <RecruitIcon className="inflab-icon" />
              채용
            </Link>
          </li>
        </ul>
        <Link to="/" className="inflab-link">
          지식공유 참여
        </Link>
      </div>
    </section>
  );
}
