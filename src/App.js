import { useState } from 'react';
import Banner from './components/Banner';
import Houses from './components/Houses';
import MainForm from './components/MainForms';

function App() {

  const families = [
    {
      houses: 'Arryn',
      mainColor: '#101929',
      secondColor: '#DED9BF',
    },
    {
      houses: 'Baratheon',
      mainColor: '#F3C114',
      secondColor: '#DED9BF',
    },
    {
      houses: 'Lannister',
      mainColor: '#86090A',
      secondColor: '#C1AC79',
    },
    {
      houses: 'Martell',
      mainColor: '#E37D16',
      secondColor: '#DED9BF',
    },
    {
      houses: 'Stark',
      mainColor: '#4B4B49',
      secondColor: '#B7B7B5',
    },
    {
      houses: 'Targaryen',
      mainColor: '#AE1C22 ',
      secondColor: '#262626',
    }
  ]

  const [characters, setCharacter] = useState([])

  const inputNewCharacter = (character) => {
    console.log(character)
    setCharacter([...characters, character])
  }

  return (
    <div className="App">
      <Banner />
      <MainForm registeredName={character => inputNewCharacter(character)}/>
      {families.map(family => <Houses key={family.houses} 
                                      houses={family.houses} 
                                      mainColor={family.mainColor} 
                                      secondColor={family.secondColor}/>)}
    </div>
  );
}

export default App;
