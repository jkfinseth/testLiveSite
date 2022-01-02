export const CheckBox = (props) => {
    const {label, setter, set} = props;
    return (
        <div className = "CheckBox">
            <label for="checkbox"> {label} </label>
            {set? <input type="checkbox" id="checkbox" name="checkbox" onChange = {() => {setter(!set)}} checked/>
            : <input type="checkbox" id="checkbox" name="checkbox" onChange = {() => {setter(!set)}} />
            }
        </div>
    );
}