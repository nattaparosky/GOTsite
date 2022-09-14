import { useState } from 'react';
import Banner from './components/Banner';
import MainForm from './components/MainForms';

function App() {

  const [characters, setCharacter] = useState([])

  const inputNewCharacter = (character) => {
    console.log(character)
    setCharacter([...characters, character])
  }

  return (
    <div className="App">
      <Banner />
      <MainForm registeredName={character => inputNewCharacter(character)}/>
    </div>
  );
}

export default App;
