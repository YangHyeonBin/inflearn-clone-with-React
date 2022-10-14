import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { useState } from 'react';

export default function TopButton() {
  const [showButton, setShowButton] = useState(false);
  // const [attachButton, setAttachButton] = useState(false);

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 50) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleShowButton);
    return () => {
      window.removeEventListener('scroll', handleShowButton);
    };
  }, []);

  const topButtonClickHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {showButton && (
        <TopButtonWrapper onClick={topButtonClickHandler}>
          <FontAwesomeIcon icon={faChevronUp} className="icon" />
          <div>TOP</div>
        </TopButtonWrapper>
      )}
    </>
  );
}

const TopButtonWrapper = styled.button`
  font-size: 0.625rem;
  text-align: center;
  border: 1px solid #dee2e6;
  border-radius: 0.4em;
  width: 3em;
  height: 4em;
  padding: 0.1em 0.6em;
  background-color: white;
  color: #868e96;
  opacity: 0.85;
  cursor: pointer;
  position: fixed;
  left: 3em;
  bottom: 7em;

  .icon {
    font-size: 1.5em;
  }
`;
