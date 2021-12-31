import { MessageBox } from "../MessageBox"
import { CheckBox } from "../CheckBox"
import { ImageInput } from "../ImageInput"
import React, { useState, useEffect } from "react";

export const EditMessage = (props) => {
    const {longMessage, setMessageContents, setLongMessage, displayImageInput, setImageURL, imageURL, setDisplayImageInput, messageContents} = props;
    const [messageSaved, setMessageSaved] = useState(0);
    const currentJob = JSON.parse(localStorage.getItem('currentJob'));
    const keyName = 'message'+currentJob.selectedJob;
    const [isJobSelected, setIsJobSelected] = useState(true);
    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        if (currentJob === null || currentJob === '') {
            // No job is selected, alert user that nothing is being edited
            setIsJobSelected(false);
        } else {
            // Job is selected, see if info can be pulled
            const tempMessage = JSON.parse(localStorage.getItem(keyName));
            if (tempMessage !== null && tempMessage !== '') {
                // Message existed: fill blanks accordingly
                setMessageContents(tempMessage.message);
                if (tempMessage.imageURL !== '') {
                    setImageURL(tempMessage.imageURL);
                }
                setRefresh(1);
                setTimeout(() => setRefresh(0), 1);
            }
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
    }

    return (
        refresh === 0
        ? <div className = "page">
                {isJobSelected
                ? <div className = "MessageInputs">
                <MessageBox limitLength = {longMessage} setter={setMessageContents} messageContents={messageContents}/>
                <CheckBox label="Message &gt; 160 characters" setter={setLongMessage} set={longMessage}/>
                { displayImageInput? <ImageInput setImageURL = {setImageURL} imageURL = {imageURL}/>: <div />}
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