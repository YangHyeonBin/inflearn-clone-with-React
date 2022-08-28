import React from 'react';

export default function SwipeItem({
  keyword,
  title,
  description,
  tag,
  img,
  background,
  fontColor,
  tagColor,
  tagBackground,
}) {
  const backgroundStyle = { backgroundColor: background };
  const fontStyle = { color: fontColor };
  const tagStyle = {
    color: tagColor,
    backgroundColor: tagBackground,
  };

  return (
    <li key={keyword}>
      <a className="swipe-item" style={backgroundStyle}>
        <div className="wrapper__swipe-item-contents">
          <div className="desc-wrapper__swipe-item-content" style={fontStyle}>
            <div className="align-swipe-item-content">
              {tag && (
                <div className="wrapper__swipe-item-tag">
                  {tag.map(tag => (
                    <span
                      className="swipe-item-tag"
                      style={tagStyle}
                      key={Math.random()}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          </div>
          <div>
            <img src={img} alt={keyword} />
          </div>
        </div>
      </a>
    </li>
  );
}
