import React from 'react';
import "./ClassifiedItem.css";

function ClassifiedItem({ classified, index }) {
  const { title, description, date } = classified;

  const year = date.substr(0, 4)
  const month = parseInt(date.substr(5, 2))
  const day = date.substr(8, 2)

  const arrMonths = new Array ('janeiro', 'fevereiro', 'março', 'abril', 'Maio', 'junho', 'agosto', 'outubro', 'novembro', 'dezembro');
  const dateAux = `${day} de ${arrMonths[month]} de ${year}`;

  return (
    <>
      <div class="div-grey card item">
        <h3>{title}</h3>
        <label>{dateAux}</label>
        <p>{description}</p>
      </div>
    </>
  );
}

export default ClassifiedItem;
