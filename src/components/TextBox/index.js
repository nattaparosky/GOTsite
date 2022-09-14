import './TextBox.css'

const TextBox = (props) => {

    const changedPlaceHolder = `${props.placeholder}...`

    const whenTyped = (event) => {
        props.whenChanged(event.target.value)
    }

    return (
        <div className="text-box">
            <label>
                {props.label}
            </label>
            <input value={props.value}
                   onChange={whenTyped}
                   required={props.requiredinfo} 
                   placeholder={changedPlaceHolder} />
        </div>
    )
}

export default TextBox