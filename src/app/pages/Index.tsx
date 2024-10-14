

import React from 'react';
import Layout from '../components/Layout'; 
import Banner from '../components/Banner';
import About from '../components/About';
import KeyFeatures from '../components/KeyFeatures';
import Contact from '../components/Contact';
import Footer from '../components/Footer';



const Index: React.FC = () => {
  return (
    <Layout>
      <Banner />
      <KeyFeatures/>
      <About />
      <Contact/>
      <Footer/>
     
    </Layout>
  );
};

export default Index;