import React from 'react';

import { applies } from './applies';

export default function Apply() {
  return (
    <section className="apply-container__courses">
      <div className="apply-wrapper__courses">
        {applies.map((item, index) => (
          <div key={item.title + index} className="apply-item__courses">
            <h2 className="apply-item-title__courses">{item.title}</h2>
            <p className="apply-item-description_courses">{item.description}</p>
            <button type="button" className="apply-item-button">
              {item.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
