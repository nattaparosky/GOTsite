import './MainForm.css';
import TextBox from '../TextBox';

const MainForm = () => {
    return (
        <section className='main-form'>
            <form>
                <h2>Add your favorite Game of Thrones Character</h2>
            <TextBox label="Name" placeholder="Character full name" />
            <TextBox label="House" placeholder="e.g. House Lannister"/>
            <TextBox label="Image" placeholder="URL image"/>
            </form>
        </section>
    )
}

export default MainForm