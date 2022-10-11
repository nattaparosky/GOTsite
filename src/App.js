import { useState } from 'react';
import Banner from './components/Banner';
import Houses from './components/Houses';
import MainForm from './components/MainForms';

function App() {

  const families = [
    {
      houses: 'Arryn',
      mainColor: '#101929',
      secondColor: '#758BB1',
    },
    {
      houses: 'Baratheon',
      mainColor: '#F3C114',
      secondColor: '#FEE796',
    },
    {
      houses: 'Lannister',
      mainColor: '#C1AC79',
      secondColor: '#86090A',
    },
    {
      houses: 'Martell',
      mainColor: '#E37D16',
      secondColor: '#F1B87F',
    },
    {
      houses: 'Stark',
      mainColor: '#4B4B49',
      secondColor: '#B7B7B5',
    },
    {
      houses: 'Targaryen',
      mainColor: '#262626 ',
      secondColor: '#AE1C22',
    }
  ]

  const [characters, setCharacter] = useState([])

  const inputNewCharacter = (character) => {
    setCharacter([...characters, character])
  }

  return (
    <div className="App">
      <Banner />
      <MainForm houses={families.map(family => family.houses)} registeredName={character => inputNewCharacter(character)}/>
      {families.map(family => <Houses key={family.houses} 
                                      houses={family.houses} 
                                      mainColor={family.mainColor} 
                                      secondColor={family.secondColor}
                                      characters={characters.filter(character => character.housesandfamilies === family.houses)}/>)}
    </div>
  );
}

export default App;