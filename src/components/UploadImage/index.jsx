export const UploadImage = (props) => {

    const {setInputImage} = props

    return (
        <input type="file" accept="image/*" onChange = {(e) => setInputImage(e)}></input> 
    )
}