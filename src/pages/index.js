import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import InfoSections from '../components/InfoSections';
import Footer from '../components/Footer';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSections/Data';


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Section />
      <InfoSections {...homeObjOne} />
      <InfoSections {...homeObjTwo} />
      <InfoSections {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
