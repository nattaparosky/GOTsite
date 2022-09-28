import './MainForm.css';
import TextBox from '../TextBox';
import MainDropdown from '../MainDropdown';
import MainButton from '../MainButton';
import { useState } from 'react';

const MainForm = (props) => {

const houses = [
    'Arryn',
    'Baratheon',
    'Lannister',
    'Martell',
    'Stark',
    'Targaryen'
]

const [name, setName] = useState('')
const [image, setimage] = useState('')
const [housesandfamilies, setHousesAndFamilies] = useState('')

const savedButton = (event) => {
    event.preventDefault()
    props.registeredName({
        name,
        image,
        housesandfamilies
    })
}

    return (
        <section className='main-form'>
            <form onSubmit={savedButton}>
                <h2>Add Game of Thrones character</h2>
            <TextBox requiredinfo={true} 
                     abel="Name" 
                     placeholder="Character full name"
                     value={name}
                     whenChanged={value => setName(value)} />
            {/* <TextBox requiredinfo={true} 
                     label="House" 
                     placeholder="e.g. House Lannister"
                     value={house}
                     whenChanged={value => setHouse(value)}/> */}
            <TextBox label="Image" 
                     placeholder="URL image"
                     value={image}
                     whenChanged={value => setimage(value)}/>
            <MainDropdown requiredinfo={true} 
                          label="Houses/Families" 
                          itens={houses}
                          value={housesandfamilies}
                          whenChanged={value => setHousesAndFamilies(value)}/>
            <MainButton> Add </MainButton>
            </form>
        </section>
    )
}

export default MainForm