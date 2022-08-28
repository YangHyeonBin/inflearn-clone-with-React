import { ReactComponent as InflearnIcon } from '../assets/inflearn-icon.svg';
import { ReactComponent as RecruitIcon } from '../assets/recruit-icon.svg';

export default function Inflab() {
  return (
    <section className="inflab">
      <div className="inflab-wrapper">
        <ul>
          <li>
            <a href="#" className="active">
              <InflearnIcon className="inflab-icon" />
              교육
            </a>
          </li>
          <span className="divider" aria-hidden="true">
            |
          </span>
          <li>
            <a href="#">
              <RecruitIcon className="inflab-icon" />
              채용
            </a>
          </li>
        </ul>
        <a href="#" className="inflab-link">
          지식공유 참여
        </a>
      </div>
    </section>
  );
}
