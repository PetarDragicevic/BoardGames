import React from 'react';
import './Home.css';
import Wallpaper from '../../Components/Main/Wallpaper';
import ServicesCard from '../../Components/Main/Services/ServicesCard';

function Home() {
  return (
    <div>
      <Wallpaper/>
      <ServicesCard/>
    </div>
  );
}

export default Home;
