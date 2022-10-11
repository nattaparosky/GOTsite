import './Character.css'

const Character = ({name, image, cardColor}) => {
    return (
    <div className='character'>
        <div className='up' style={{ backgroundColor: cardColor }}>
            <img src={image} alt={name}/>
        </div>
        <div className='down'>
            <h4>{name}</h4>

        </div>
    </div>
    )
}

export default Character