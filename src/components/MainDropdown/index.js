import './MainDropdown.css'

const MainDropdown = (props) => {
    return (
        <div className='main-dropdown'>
            <label>{props.label}</label>
            <select onChange={event => props.whenChanged(event.target.value)}
                    required = {props.requiredinfo}
                    value={props.value}>
                        <option value=""></option>
                {props.itens.map(item => 
                    <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default MainDropdown