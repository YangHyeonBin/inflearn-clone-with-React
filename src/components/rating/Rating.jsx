import React from 'react';

import FullStar from './FullStar';
import EmptyStar from './EmptyStar';

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
