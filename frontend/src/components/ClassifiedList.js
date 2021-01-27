import React, { useEffect } from 'react';
import ClassifiedItem from './ClassifiedItem';

import './ClassifiedList.css';

import { getClassifieds } from "../services/api";

export default function ClassifiedList() {
  const [classifieds, setClassifieds] = React.useState([]);

  useEffect(() =>  {
    getClassifieds().then((response) => {
      setClassifieds(response);
    });
  }, []);

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
