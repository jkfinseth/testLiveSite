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
    const [tempMapper, setTempMapper] = useState([]);
    const [jobSelected, setJobSelected] = useState(true);
    const [selectedSection, setSelectedSection] = useState(0);
    const [jobList, setJobList] = useState('');

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
            setFirstMessage(true);
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
    } else {
        return (<div> <h3> No job is selected </h3></div>)
    }
}