export const ImageInput = (props) => {
    const {setImageURL, imageURL} = props;
    return (
        <div className = "imageInput">
            <label for="file">Chose image URL to upload: </label>
            {/*<input type="file" id="file" name="file" accept=".png, .jpg, .jpeg" />*/}
            <input type="text" value = {imageURL} onChange = {(event) => setImageURL(event.target.value)}/>
        </div>
    )
}