import React from 'react';
import Navbar from './component2/navbar';
import Navbar2 from './component2/Navbar2';
import BrandIma from './component2/BrandIma';
// import Slide from './component2/Slide';
import Slides from './component2/Slides';
import Brands from './component2/Brands'
import WhyUs from './component2/Whyus';
import ServicesAvailable from './component2/services';
import Testimonials from './component2/Testimonials';
import NearestStores from './component2/NearestStores';
import DownloadApp from './component2/DownloadApp';
import InfoSection from './component2/InfoSection';
import Footer from './component2/Footer';


function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Navbar2 />
     
      <Slides/>
      <Brands />
      <WhyUs/>
      <ServicesAvailable/>
      <Testimonials/>
      <NearestStores/>
      <DownloadApp/>
      <InfoSection/>
      <Footer/>

      
    </div>
  );
}

export default App;