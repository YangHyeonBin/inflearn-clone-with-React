import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as InflearnIcon } from '../assets/icons/inflearn-icon.svg';
import { ReactComponent as RecruitIcon } from '../assets/icons/recruit-icon.svg';

export default function Inflab({ isNotFound }) {
  return (
    <InflabWrapper hidden={isNotFound}>
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
    </InflabWrapper>
  );
}

const InflabWrapper = styled.section`
  display: ${props => (props.hidden ? 'none' : 'flex')};
  justify-content: center;
  font-size: 0.875rem;
  height: 2.86em;
  border-bottom: 1px solid #f1f3f5;

  .inflab-wrapper {
    padding: 0 1.143em;
    max-width: 85.715em;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 769px) {
      padding: 0 1.715em;
    }

    @media screen and (min-width: 1025px) {
      padding: 0 2.572em;
    }
  }

  .inflab-wrapper ul {
    display: flex;
    align-items: center;
  }

  .inflab-wrapper .divider {
    color: #d5dbe2;
    font-size: 0.75rem;
    margin: 0 0.5rem;
  }

  .inflab-wrapper li a {
    display: flex;
    align-items: center;
    color: #858a8d;
  }

  .inflab-wrapper li .active {
    font-weight: bold;
    color: #1b1c1d;
  }

  .inflab-icon {
    margin-right: 0.25em;
  }

  .inflab-link {
    color: #3e4042;
    font-size: 0.875rem;
  }
`;
