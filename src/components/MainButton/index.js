import './MainButton.css'

const MainButton = (props) => {
    return (
        <button className='main-button'>
            {props.children}
        </button>
    )

}

export default MainButton