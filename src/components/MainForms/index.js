import './MainForm.css';
import TextBox from '../TextBox';
import MainDropdown from '../MainDropdown';
import MainButton from '../MainButton';

const houses = [
    'Arryn',
    'Baratheon',
    'Greyjoy',
    'Lannister',
    'Martell',
    'Stark',
    'Targaryen'
]

const MainForm = () => {
    return (
        <section className='main-form'>
            <form>
                <h2>Add Game of Thrones character</h2>
            <TextBox label="Name" placeholder="Character full name" />
            <TextBox label="House" placeholder="e.g. House Lannister"/>
            <TextBox label="Image" placeholder="URL image"/>
            <MainDropdown label="Houses/Families" itens={houses}/>
            <MainButton> Add </MainButton>
            </form>
        </section>
    )
}

export default MainForm