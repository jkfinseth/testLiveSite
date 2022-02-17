export const MessageBox = (props) => {
    const {limitLength, setter, messageContents} = props;
    return (
        <div className = "MessageBox">
            <label for="message"> Message: </label>
            <input type="text" value = {messageContents} id="message" name="message" onChange = {(event) => setter(event.target.value)}/>
        </div>
    );
}