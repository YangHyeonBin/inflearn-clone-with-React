import React from 'react';

import FullStar from './FullStar';
import EmptyStar from './EmptyStar';
import HalfStar from './HalfStar';

export default function Rating(props) {
  const stars = props.rating;
  switch (stars) {
    case '5':
      return (
        <span className="rating-stars">
          {[1, 2, 3, 4, 5].map(star => (
            <FullStar key={Math.random()} />
          ))}
        </span>
      );
    case '4.5':
      return (
        <span className="rating-stars">
          {[1, 2, 3, 4].map(star => (
            <FullStar key={Math.random()} />
          ))}
          <HalfStar />
        </span>
      );
    case '4':
      return (
        <span className="rating-stars">
          {[1, 2, 3, 4].map(star => (
            <FullStar key={Math.random()} />
          ))}
          <EmptyStar key={Math.random()} />
        </span>
      );
    case '3.5':
      return (
        <span className="rating-stars">
          {[1, 2, 3].map(star => (
            <FullStar key={Math.random()} />
          ))}
          <HalfStar />
          <EmptyStar key={Math.random()} />
        </span>
      );
    case '3':
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
    case '2.5':
      return (
        <span className="rating-stars">
          {[1, 2].map(star => (
            <FullStar key={Math.random()} />
          ))}
          <HalfStar />
          {[1, 2].map(star => (
            <EmptyStar key={Math.random()} />
          ))}
        </span>
      );
    case '2':
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
    case '1.5':
      return (
        <span className="rating-stars">
          <FullStar key={Math.random()} />
          <HalfStar />
          {[1, 2, 3].map(star => (
            <EmptyStar key={Math.random()} />
          ))}
        </span>
      );
    case '1':
      return (
        <span className="rating-stars">
          <FullStar key={Math.random()} />
          {[1, 2, 3, 4].map(star => (
            <EmptyStar key={Math.random()} />
          ))}
        </span>
      );
    case '0.5':
      return (
        <span className="rating-stars">
          <HalfStar />
          {[1, 2, 3, 4].map(star => (
            <EmptyStar key={Math.random()} />
          ))}
        </span>
      );
    default:
      return (
        <span className="rating-stars">
          {[1, 2, 3, 4, 5].map(star => (
            <EmptyStar key={Math.random()} />
          ))}
        </span>
      );
  }
}
