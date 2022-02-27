import React from 'react';
import './Home.css';
import Header from '../../Components/Header/Header';
import Wallpaper from '../../Components/Main/Wallpaper';
import Services from '../../Components/Main/Services/Services';
import ServicesCard from '../../Components/Main/Services/ServicesCard';
import Footer from '../../Components/Footer/Footer';

function Home() {
  return (
    <div>
      <Header/>
      <Wallpaper/>
      <ServicesCard/>
      <Footer/>
    </div>
  );
}

export default Home;
