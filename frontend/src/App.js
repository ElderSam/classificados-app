import React, { useEffect } from 'react';
import Header from './components/Header';
import { useDispatch, useSelector } from "react-redux";

import { getClassifieds } from './store/actions/classifiedAction';
import ClassifiedList from './components/ClassifiedList';
import FooterList from './components/FooterList';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const classifiedsList = useSelector(state => state.classifiedsList);
  const { loading, error, classifieds } = classifiedsList;

  useEffect(() => { // will be caled when component didmount
    dispatch(getClassifieds()) 
  }, [dispatch])

  return (
    <>
    {loading ? "Loading..." : error ? error.message : 
      <div className="App">
        <Header />
        <ClassifiedList classifieds={classifieds}/>
        <FooterList total={classifieds.length} />
      </div>
    }
    </>  
  );
}

export default App;
