import React from 'react';
import ClassifiedItem from './ClassifiedItem';

import './ClassifiedList.css';

export default function ClassifiedList({ classifieds }) {

  return (
    <div class="list">
      {classifieds.map((classified, index) => (
        <ClassifiedItem
          key={`${classified}-${index}`}
          classified={classified}
          index={index}
        />
      ))}
      
    </div>
  );
}
