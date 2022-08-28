import React from 'react';

export default function Wrapper(props) {
  return (
    <section className="lectures">
      <div className="lecture-container-margin">{props.children}</div>
    </section>
  );
}
