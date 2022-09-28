import Character from '../Character'
import './Houses.css'

const Houses = (props) => {
    return (
        (props.characters.length > 0) ? <section className='houses' style={{ backgroundColor: props.secondColor }}>
            <h3 style={{ borderColor: props.mainColor }}>{props.houses}</h3>
            <div className='characters'>
            {props.characters.map(character => <Character name={character.name} image={character.image}/>)}
            </div>
        </section>
        :''
    )

}

export default Houses