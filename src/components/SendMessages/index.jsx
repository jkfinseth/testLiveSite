import React, { useState, useEffect } from "react";
import axios from 'axios';

export const SendMessages = (props) => {

    const {list, displayLoaded, setDisplayState, messageList, setList} = props;
    const [hasClicked, setHasClicked] = useState(0);
    const [sendingMessage, setSendingMessage] = useState(false);
    const emptyString = '';
    const [firstMessage, setFirstMessage] = useState(true);
    const [previousKey, setPreviousKey] = useState('');
    // const accountSid = "AC328815b6f17c750d80bedcc36bb5f3ce"; // Primary Account
    const accountSid = "ACf0660d83b54452dd82af793988b69485"; // Testing account
    // const authToken = "90924da28b6854a695c34a12bac34e5a"; // Primary Account
    const authToken = "bf5cc12a2c492f49030aae72ef397e45"; // Testing account
    var qs = require('qs');
    const twilio = require('twilio');
    const client = new twilio(accountSid, authToken);
    const currentJobKey = JSON.parse(localStorage.getItem('currentJob'))
    let jobSettings = '';
    let message = '';
    let messagingList = '';
    if (currentJobKey !== null && currentJobKey !== '') {
        jobSettings = JSON.parse(localStorage.getItem("settings"+currentJobKey.selectedJob));
        message = JSON.parse(localStorage.getItem("message"+currentJobKey.selectedJob));
        messagingList = JSON.parse(localStorage.getItem(currentJobKey.selectedJob));
    }
    const [localPageState, setLocalPageState] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState(0);

    // Use Effect to determine on launch if message is the first one being sent
    useEffect (() => {
        const tempList = JSON.parse(localStorage.getItem('messagingList'));

        // Work was saved: pull from known list
        if (tempList !== '' && tempList !== null) {
            console.log("Hello World");
        }
    }, []);

    const handleSave = () => {
        localStorage.setItem('messagingList', JSON.stringify(list));
    }

    const calculateSplits = (users, group) => {
        // Divide entries by the number of users covering the job, split
        let start = group === 0? 0 : (messageList.length * group / users) + 1;
        let end = messageList.length * group / users;
        return ({
            start: start,
            end: end
        });
    }

    const sendMessage = async(sendMessage) => {
        console.log('entered');
        // Call API
        if (sendMessage) {
            if (firstMessage) {
                setFirstMessage(false);
            } else {
                console.log("Remaining: ",list.PersonsList.length);
                console.log('+1'+list.PersonsList[list.PersonsList.length - 1].PrimaryPhone);
                if (list.imageURL !== '') {
                    await axios.post("https://api.twilio.com/2010-04-01/Accounts/" + accountSid + "/Messages.json", qs.stringify({
                        Body: list.message,
                        MediaUrl: list.imageURL,
                        From: '+17253739818',
                        To: '+1'+list.PersonsList[list.PersonsList.length - 1].PrimaryPhone
                    }), {
                        auth: {
                        username: accountSid,
                        password: authToken
                        }
                    })
                    .then (
                        res => console.log(res)
                    )
                    .catch((error) => {
                        if (error === 400 || error === 401) {
                            console.log(error);
                        }
                    })
                } else {
                    await axios.post("https://api.twilio.com/2010-04-01/Accounts/" + accountSid + "/Messages.json", qs.stringify({
                        Body: list.message,
                        From: '+17253739818',
                        To: '+1'+list.PersonsList[list.PersonsList.length - 1].PrimaryPhone
                    }), {
                        auth: {
                        username: accountSid,
                        password: authToken
                        }
                    })
                    .then (
                        res => console.log(res)
                    )
                    .catch((error) => {
                        if (error === 400 || error === 401) {
                            console.log(error);
                        }
                    })
                }
                console.log("Message sent to ", list.PersonsList[list.PersonsList.length - 1].FirstName);
            }
        } else {
            console.log("Message not sent");
        }
        // Update list
        if (list.PersonsList.length === 1) {
            setDisplayState(4);
        } else {
            let tempMessageList = list.PersonsList;
            tempMessageList.pop();
            let tempList = {
                user: list.user,
                imageURL: list.imageURL,
                message: list.message,
                PersonsList: messageList
            }
            setList(tempList);
        }
        console.log("setting sendMessage to false");
        setSendingMessage(false);
    }

    const handleSendMessage = (event) => {
        switch(event.keyCode) {
            case 34:
                sendMessage(false);
                break;
            default:
                if (event.keyCode !== previousKey) {
                    setPreviousKey(event.keyCode);
                    sendMessage(true);
                }
        }
        if (list.PersonsList.length === 0) {
            setDisplayState(4);
        }
    }

    if (localPageState === 0) {
        return (
            <div className = "page">
                <div className = "sectionSelection">
                    <h3> Which part would you like to work on?</h3>
                    {/* {for (let x = 0; x < jobSettings.usersAllocated; x++) {
                        return (
                            <button> Part {x} </button>
                        )
                    }} */}
                </div>
            </div>
        )
    } else {
        return (
            list !== null && displayLoaded
                ?<div className = "page">
                    <div className = "SendMessage">
                        <h2> Press page down to skip sending a message to the listed user. </h2>
                        <h2> Would you like to message {list.PersonsList[list.PersonsList.length - 1].FirstName} {list.PersonsList[list.PersonsList.length - 1].LastName}?</h2>
                        <button onClick = {() => {
                        if (!sendingMessage || hasClicked >= 1) {
                            console.log("setting sendMessage to true");
                            setHasClicked(0);
                            setSendingMessage(true);
                            sendMessage(true);
                        }}}> Yes </button>
                        <button onClick = {() => {
                            if (!sendingMessage || hasClicked >= 1) {
                                setHasClicked(0);
                                console.log("setting sendMessage to true");
                            setSendingMessage(true);
                            sendMessage(false);
                        }}}> No </button>
                        {/* <input onKeyDown = {(event) => {
                        if (!sendingMessage || hasClicked >= 1) {
                            setHasClicked(2);
                            console.log("setting sendMessage to true");
                            setSendingMessage(true);
                            handleSendMessage(event);
                        } else {
                            setHasClicked(1);
                        }}} value={emptyString}
                            disabled = {true}
                        /> */}
                        <input onKeyDown = {(event) => {
                            console.log("Hello World");
                        }}
                        />
                        <button onClick = {() => handleSave()}> Save </button>
                    </div>
                </div>
                : <div />
        )
    }
}