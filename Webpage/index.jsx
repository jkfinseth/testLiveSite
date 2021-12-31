import { ImageInput } from "../ImageInput"
import { CheckBox } from "../CheckBox"
import { MessageBox } from "../MessageBox"
import React, { useState, useEffect } from "react";
import { XLSXInput } from "../XLSXInput";
import './index.scss';
import { LoginPage } from "../LoginPage";
import { EditMessage } from "../EditMessage";
import { Header } from "../Header";
import { SendMessages } from "../SendMessages";
import { SelectJobPage } from "../SelectJobPage";
import { UploadSpreadsheetPage } from "../UploadSpreadsheetPage";
import { JobSettings } from "../JobSettings";

export const MessagingSite = (props) => {
    const [isListSplit, setIsListSplit] = useState(false);
    const [displayState, setDisplayState] = useState(4);
    const [longMessage, setLongMessage] = useState(false);
    const [messageContents, setMessageContents] = useState('');
    const [displayImageInput, setDisplayImageInput] = useState(true);
    const [list, setList] = useState('');
    const [user, setUser] = useState('');
    const [messageList, setMessageList] = useState('');
    const [displayLoaded, setDisplayLoaded] = useState(false);
    const [firstMessage, setFirstMessage] = useState(true);
    const [imageURL, setImageURL] = useState('');
    

    /*
    TextMessagingSystem: {
        user: "UserName"
        message: "message"
        image: "imagePath"
        PersonsList: {[
            {
                First_Name: "FirstName",
                Last_Name: "LastName",
                Phone_Number: "PhoneNumber"
            },
            {
                First_Name: "FirstName",
                Last_Name: "LastName",
                Phone_Number: "PhoneNumber"
            }
        ]}
        Responses: {
            First_Last: "Yes/No"
        }
    }
    */
    useEffect(() => {
        // // See if a save state is stored in local memory
        // const tempList = JSON.parse(localStorage.getItem('messagingList'));
        // console.log(tempList);
        // if (tempList !== '' && tempList !== null) {
        //     setList(tempList);
        //     setFirstMessage(false);
        //     setDisplayLoaded(true);
        //     setTimeout(() => {
        //         setDisplayState(3);
        //         setIsListSplit(true);
        //     }, 1000);
        // } else {
        //     setDisplayState(1);
        // }
        setDisplayState(1);

    }, []);

    const handleSplit = () => {
        let name = user;
        let tempMessageList = messageList;
        let start = 0;
        let end = 0;
        switch (name) {
            case ("justin") :
                start = 0;
                end = Math.floor(messageList.length / 3);
                break;
            case ("eric") :
                if (messageList.length % 3 !== 0) {
                    start = Math.ceil(messageList.length / 3)
                } else {
                    start = (messageList.length / 3) + 1;
                }
                end = Math.floor(2 * messageList.length / 3);
                break;
            case ("omar"):
                if (messageList.length % 3 !== 0) {
                    start = Math.ceil(2 * messageList.length / 3)
                } else {
                    start = (2 * messageList.length / 3) + 1;
                }
                end = messageList.length - 1;
                break;
            default:
                break;
        }
        console.log("start:" ,start);
        console.log("end:" ,end);
        tempMessageList = messageList.slice(start, end+1);
        console.log("splice: ",messageList.slice(start, end+1));
        setMessageList(messageList.slice(start, end+1));
        console.log("Message List: ",messageList);
        setDisplayLoaded(true);
    }

    const handleResetSite = () => {
        // Reset localStorage and displayState
        localStorage.removeItem('messagingList');
        setDisplayState(1);
    }


    // Display States:
    // 0: null page (used only for testing)
    // 1: login page
    // 2: job selection
    // 3: message selection
    // 4: spreadsheet upload
    // 5: user settings (admin only)
    if (displayState === 0) {
        <div className = "NightModeTesting">

        </div>
    } else if (displayState === 1) {
        return (<LoginPage user={user} setUser={setUser} setDisplayState={setDisplayState} setIsListSplit={setIsListSplit}/>)
        // return(<Header name={"Justin"}/>);
    } else if (displayState >= 2) {
        return (
            <div className = "FullSiteDisplay">
                <Header name={user} setDisplay={setDisplayState}/>
                {displayState === 2
                ? <EditMessage longMessage={longMessage} setMessageContents={setMessageContents} setLongMessage={setLongMessage} displayImageInput={displayImageInput} setImageURL={setImageURL} imageURL={imageURL} setDisplayImageInput={setDisplayImageInput} messageContents={messageContents}/>
                :displayState === 3
                ? <SendMessages list = {list} displayLoaded = {displayLoaded} setDisplayState = {setDisplayState} setList = {setList} messageList = {messageList}/>
                : displayState === 4
                ? <div className = "page">
                    <div className = "finishBox">
                        <h2>Done sending messages</h2>
                        <button onClick = {() => handleResetSite()}> Reset </button>
                    </div>
                </div>
                :displayState === 5
                ? <SelectJobPage setDisplayState = {setDisplayState}/>
                : displayState === 6
                ? <UploadSpreadsheetPage setDisplayState = {setDisplayState}/>
                :displayState === 7
                ? <JobSettings />
                : <div />     
                    }
            </div>
        );
    }
}