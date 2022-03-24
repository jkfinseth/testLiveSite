import { MessageBox } from "../MessageBox"
import { CheckBox } from "../CheckBox"
import { ImageInput } from "../ImageInput"
import React, { useState, useEffect } from "react";
import './index.scss';
import { UploadImage } from "../UploadImage";

export const EditMessage = (props) => {
    const {longMessage, setMessageContents, setLongMessage, displayImageInput, setImageURL, imageURL, setDisplayImageInput, messageContents, setDisplayState} = props;
    const [messageSaved, setMessageSaved] = useState(0);
    const currentJob = JSON.parse(localStorage.getItem('currentJob'));
    const keyName = 'message'+currentJob?.selectedJob;
    const [isJobSelected, setIsJobSelected] = useState(true);
    const [refresh, setRefresh] = useState(0);
    const [image, setImage] = useState('');

    const imageUpload = (e) => {
        console.log("called, e:", e);
        var fileIn = e.target;
        var file = fileIn.files[0];
        if (file && file.size < 5e6) {
            const formData = new FormData();
            let auth = "Client-ID "+ process.env.REACT_APP_IMGUR_ID
    
            formData.append("image", file);
            fetch("https://api.imgur.com/3/image", {
                method: "POST",
                headers: {
                    Authorization: auth,
                    Accept: "application/json",
                },
                body: formData,
            })
                .then((response) => response.json())
                .then((response) => {
                    e.preventDefault();
                    console.log("response: ",response);
                    console.log("response.data.link: ",response.data.link);
                    let url_in = response.data.link;
                });
        } else {
            console.error("oversized file");
        }
    }

    useEffect(() => {
        console.log("Hello World Use Effect");
        if (currentJob === null || currentJob === '') {
            // No job is selected, alert user that nothing is being edited
            setIsJobSelected(false);
        } else {
            console.log("not broken 1");
            // Job is selected, see if info can be pulled
            const tempMessage = JSON.parse(localStorage.getItem(keyName));
            console.log("not broken 2");
            if (tempMessage !== null && tempMessage !== '') {
                // Message existed: fill blanks accordingly
                setMessageContents(tempMessage.message);
                if (tempMessage.imageURL !== '') {
                    setImageURL(tempMessage.imageURL);
                }
                setRefresh(1);
                setTimeout(() => setRefresh(0), 1);
            }
            console.log("Refresh: ",refresh);
        }
    }, [])

    // const handleStoreInfo = () => {
    //     let tempURL = imageURL;
    //     setDisplayLoaded(false);
    //     handleSplit();
    //     let tempList = {
    //         user: user,
    //         imageURL: tempURL,
    //         message: messageContents,
    //         PersonsList: messageList
    //     }
    //     setList(tempList);
    // }

    const handleStoreInfo = () => {
        let storedMessage = {
            message: messageContents,
            imageURL: ''
        }

        if (imageURL !== null && imageURL !== '') {
            storedMessage.imageURL = imageURL;
        }

        localStorage.setItem(keyName, JSON.stringify(storedMessage));
        setDisplayState(999);
    }

    return (
        refresh === 0
        ? <div className = "page">
                {isJobSelected
                ? <div className = "MessageInputs">
                <MessageBox limitLength = {longMessage} setter={setMessageContents} messageContents={messageContents}/>
                {
                // TODO - Update image input to be a file upload that hits the imgur api and pulls the image url
                }
                {/*{ displayImageInput? <ImageInput setImageURL = {setImageURL} imageURL = {imageURL}/>: <div />}*/}
                { displayImageInput? <UploadImage setInputImage = {setImage}/>: <div />}
                <CheckBox label="Send Image" setter={setDisplayImageInput} set={displayImageInput}/>
                <button onClick={() => handleStoreInfo()}> Save </button>
                {messageSaved === 1?<h3> Message Saved</h3>
                : <div />
                }
                </div>
                : <h3> No Job is Selected</h3>
                }
            </div>
        : <div />
    )
}