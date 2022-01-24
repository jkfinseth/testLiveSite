import React, { useState, useEffect } from "react";

export const JobSettings = (props) => {

    const {setDisplayState} = props;
    const [inputs, setInputs] = useState(0);
    const [numUsers, setNumUsers] = useState(0);
    const [jobIsSelected, setJobIsSelected] = useState(true);
    const [loadedJobSettings, setLoadedJobSettings] = useState({});
    let jobSettings = '';

    // On launch, pull settings for currently selected job and 
    useEffect(()=> {
        const selectedJob = JSON.parse(localStorage.getItem("currentJob"));
        if (selectedJob === null || selectedJob === '') {
            setJobIsSelected (false);
        } else {
            // Pull up job settings
            jobSettings = JSON.parse(localStorage.getItem("settings"+selectedJob.selectedJob));
            setLoadedJobSettings(jobSettings);
            setInputs(jobSettings.messagesPerKeyPress);
            setNumUsers(jobSettings.assignedUsers);
        }
    }, []);

    const handleSave = () => {
        const selectedJob = JSON.parse(localStorage.getItem("currentJob"));
        jobSettings = JSON.parse(localStorage.getItem("settings"+selectedJob.selectedJob));
        jobSettings.messagesPerKeyPress = inputs;
        jobSettings.assignedUsers = numUsers;
        localStorage.setItem("settings"+selectedJob.selectedJob, JSON.stringify(jobSettings));
        setDisplayState(999);
    }

    return (
        jobIsSelected
        ? <div className = "jobSettingsPage">
            <div className = "inputsPerPress">
                <label> Messages sent per press: </label>
                <input value = {inputs} onChange = {(event) => setInputs(event.target.value)}/>
            </div>
            <div className = "workers">
                <label> Number of users working on selected job:</label>
                <input value = {numUsers} onChange = {(event) => setNumUsers(event.target.value)}/>
            </div>
            <button onClick = {() => handleSave()}>Update</button>
        </div>
        : <h3> No Job is Selected </h3>
    )
}