import './Houses.css'

const Houses = (props) => {
    return (
        <section className='houses' style={{ backgroundColor: props.secondColor }}>
            <h3 style={{ borderColor: props.mainColor }}>{props.houses}</h3>
        </section>
    )

}

export default Houses