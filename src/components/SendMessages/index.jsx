import React, { useState, useEffect } from "react";
import axios from 'axios';

export const SendMessages = (props) => {

    const {list, displayLoaded, setDisplayState, messageList, setList} = props;
    const [hasClicked, setHasClicked] = useState(0);
    const [sendingMessage, setSendingMessage] = useState(false);
    const emptyString = '';
    const [firstMessage, setFirstMessage] = useState(false);
    const [previousKey, setPreviousKey] = useState('');
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
    const [tempMapper, setTempMapper] = useState([]);
    const [jobSelected, setJobSelected] = useState(true);
    const [selectedSection, setSelectedSection] = useState(0);
    const [jobList, setJobList] = useState('');
    console.log(jobSettings);

    // Use Effect to determine on launch if message is the first one being sent
    // TODO - Update to determine if in the middle of a part of a key
    useEffect (() => {
        const tempList = JSON.parse(localStorage.getItem('messagingList'));

        // Work was saved: pull from known list
        if (tempList !== '' && tempList !== null) {
        } else {
            // Determine if a job has been selected
            if (currentJobKey) {
                // Job has been selected: update correct variables
                let tempHolder = [];
                for (let x = 0; x < jobSettings.assignedUsers; x++) {
                    tempHolder.push(x);
                }
                setTempMapper(tempHolder);
            } else {
                // Job has not been selected, don't attempt to run commands that will fail
                setJobSelected(false);
            }
        }
    }, []);

    const handleSave = () => {
        localStorage.setItem('messagingList', JSON.stringify(list));
    }

    const handlePartSelection = (group) => {
        let startEnd = calculateSplits(jobSettings.assignedUsers, group);
        console.log(startEnd);
        let tempList = messagingList;
        setList({PersonsList: tempList.slice(startEnd.start, startEnd.end+1)});
        setTimeout(() => {
            console.log(list);
            setFirstMessage(false);
            setLocalPageState(1);
        }, 500);
    }

    const calculateSplits = (users, group) => {
        // Divide entries by the number of users covering the job, split
        let start = group === 0? 0 : (messagingList.length * group / users) + 1;
        let end = messagingList.length * (group+1) / users;
        return ({
            start: start,
            end: end
        });
    }

    const sendMessageFunction = async(sendMessage, number) => {
        console.log('entered');
        let endLoop = false;
        let counter = 0;
        if (number === 0) {
            return;
        }
        // Call API
        if (sendMessage) {
            if (firstMessage) {
                setFirstMessage(false);
            } else {
                console.log("Remaining: ",list.PersonsList.length);
                console.log('+1'+list.PersonsList[list.PersonsList.length - 1].PrimaryPhone);
                if (list.imageURL !== '') {
                    await axios.post("https://api.twilio.com/2010-04-01/Accounts/" + accountSid + "/Messages.json", qs.stringify({
                        Body: message.message,
                        MediaUrl: message.imageURL,
                        From: '+17253739818',
                        To: '+1'+list.PersonsList[list.PersonsList.length - 1].PrimaryPhone
                    }), {
                        auth: {
                        username: process.env.mainAccountSid,
                        password: process.env.mainAuthToken
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
                        Body: message.message,
                        From: '+17253739818',
                        To: '+1'+list.PersonsList[list.PersonsList.length - 1].PrimaryPhone
                    }), {
                        auth: {
                        username: process.env.mainAccountSid,
                        password: process.env.mainAuthToken
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
            // TODO - Ensure this works
            endLoop = true;
        } else {
            let tempMessageList = list.PersonsList;
            tempMessageList.pop()
            // let tempList = {
            //     user: list.user,
            //     imageURL: list.imageURL,
            //     message: list.message,
            //     PersonsList: messageList
            // }
            let tempList = {PersonsList: tempMessageList};
            console.log(tempList);
            setList(tempList);
        }
        if (!endLoop) {
            sendMessageFunction(sendMessage, number-1);
        }
        console.log("setting sendMessage to false");
        setSendingMessage(false);
    }

    const handleSendMessage = (event) => {
        switch(event.keyCode) {
            case 34:
                sendMessageFunction(false, jobSettings.messagesPerKeyPress);
                break;
            default:
                if (event.keyCode !== previousKey) {
                    setPreviousKey(event.keyCode);
                    sendMessageFunction(true, jobSettings.messagesPerKeyPress);
                }
        }
        if (list.PersonsList.length === 0) {
            setDisplayState(4);
        }
    }

    if (jobSelected) {
        if (localPageState === 0) {
            return (
                <div className = "page">
                    <div className = "sectionSelection">
                        <h3> Which part would you like to work on?</h3>
                        {
                            tempMapper.map((element) => {
                                return (
                                    <button onClick = {() => handlePartSelection(element)}> {element} </button>
                                )
                            })
                        }
                    </div>
                </div>
            )
        } else {
            return (
                list !== null
                    ?<div className = "page">
                        <div className = "SendMessage">
                            <h2> Press page down to skip sending a message to the listed user. </h2>
                            <h2> Would you like to message {list.PersonsList[list.PersonsList.length - 1].FirstName} {list.PersonsList[list.PersonsList.length - 1].LastName} {jobSettings.messagesPerKeyPress > 1? " and "+ JSON.stringify(jobSettings.messagesPerKeyPress-1) + " more": null}?</h2>
                            <button onClick = {() => {
                            if (!sendingMessage || hasClicked >= 1) {
                                console.log("setting sendMessage to true");
                                setHasClicked(0);
                                setSendingMessage(true);
                                sendMessageFunction(true, jobSettings.messagesPerKeyPress);
                            }}}> Yes </button>
                            <button onClick = {() => {
                                if (!sendingMessage || hasClicked >= 1) {
                                    setHasClicked(0);
                                    console.log("setting sendMessage to true");
                                setSendingMessage(true);
                                sendMessageFunction(false, jobSettings.messagesPerKeyPress);
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
    } else {
        return (<div> <h3> No job is selected </h3></div>)
    }
}