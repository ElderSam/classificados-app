import React, { useEffect } from 'react';
import Header from './components/Header';
import ClassifiedList from './components/ClassifiedList';
import FooterList from './components/FooterList';

import './App.css';

import api from "./services/api";

function App() {
  const [classifieds, setClassifieds] = React.useState([]);

  useEffect(() =>  {
    getClassifieds().then((response) => {
      setClassifieds(response);
    });
  }, []);

  const getClassifieds = async () => {
    const response = await api.get("/classifieds")
    console.log(response.data);
    return response.data;
  }

  return (
    <div className="App">
      <Header />
      <ClassifiedList classifieds={classifieds}/>
      <FooterList />
    </div>
  );
}

export default App;
