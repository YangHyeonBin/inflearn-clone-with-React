import React from 'react';

import FullStar from './FullStar';
import EmptyStar from './EmptyStar';

// switch문 쓸 때는 default 케이스를 쓰는 것이 좋다고 함. 그런데 뭘 디폴트로 해야 하지? 아무 것도 없을 때=0점일 때를?

export default function Rating(props) {
  const stars = props.rating;
  switch (stars) {
    case 'FiveStars':
      return (
        <span className="rating-stars">
          {[1, 2, 3, 4, 5].map(star => (
            <FullStar key={Math.random()} />
          ))}
        </span>
      );
    case 'FourStars':
      return (
        <span className="rating-stars">
          {[1, 2, 3, 4].map(star => (
            <FullStar key={Math.random()} />
          ))}
          <EmptyStar key={Math.random()} />
        </span>
      );
    case 'ThreeStars':
      return (
        <span className="rating-stars">
          {[1, 2, 3].map(star => (
            <FullStar key={Math.random()} />
          ))}
          {[1, 2].map(star => (
            <EmptyStar key={Math.random()} />
          ))}
        </span>
      );
    case 'TwoStars':
      return (
        <span className="rating-stars">
          {[1, 2].map(star => (
            <FullStar key={Math.random()} />
          ))}
          {[1, 2, 3].map(star => (
            <EmptyStar key={Math.random()} />
          ))}
        </span>
      );
    case 'OneStar':
      return (
        <span className="rating-stars">
          <FullStar key={Math.random()} />
          {[1, 2, 3, 4].map(star => (
            <EmptyStar key={Math.random()} />
          ))}
        </span>
      );
    case 'ZeroStar':
      return (
        <span className="rating-stars">
          {[1, 2, 3, 4, 5].map(star => (
            <EmptyStar key={Math.random()} />
          ))}
        </span>
      );
  }
}
