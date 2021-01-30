import React from 'react';
import ClassifiedItem from './ClassifiedItem';

import './ClassifiedList.css';

export default function ClassifiedList({ classifieds }) {
  if(classifieds.length === 0) {
    return (
      <p>Não há nenhum Classificado cadastrado!</p>
    )
  }else {
    return (
      <div class="list">
        {classifieds.map((classified) => (
          <ClassifiedItem
            key={`${classified.id}`}
            classified={classified}
          />
        ))}
        
      </div>
    );
  }
}
