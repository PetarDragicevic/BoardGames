import './App.css';
import "./css/bootstrap.min.css"
import Header from './Header';
import Card from './Card';
import { useState } from 'react';
import gamesData from './gamesData';

function App() {

  const [games, setGames] = useState(gamesData)

  const gamesArray = games.map(game => {
    return    <Card
      key={game.title}
      imgUrl={game.imgUrl}
      title={game.title}
      time={game.time}
      age={game.age}
      players={game.players}
      own={game.own}
      />})
 
  return (
    <div className="app">
     <Header/>
     <ul className='ulista'>
       <li className='lista'>
          {gamesArray}
         </li>
       </ul>
    </div>
  );
}

export default App;
 