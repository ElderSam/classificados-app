import React from 'react';
import "./ClassifiedItem.css";

function ClassifiedItem({ classified, index }) {
  const { title, description, date } = classified;

  return (
    <>
      <div class="div-grey card item">
        <h3>{title}</h3>
        <label>{date}</label>
        <p>{description}</p>
      </div>
    </>
  );
}

export default ClassifiedItem;
