import { XLSXInput } from "../XLSXInput";
import React, { useState } from "react";

export const UploadSpreadsheetPage = (props) => {

    const [storedJobInfo, setStoredJobInfo] = useState('');
    const [jobNameInput, setJobNameInput] = useState('');
    const [displayAlertMessage, setDisplayAlertMessage] = useState(false);
    const [displayAlertMessage2, setDisplayAlertMessage2] = useState(false);
    const {setDisplayState} = props;

    const handleUpload = () => {
        setDisplayAlertMessage2(false);
        // Pull list of jobs
        if (jobNameInput !== '') {
            let list = JSON.parse(localStorage.getItem(jobNameInput));
            if (list === null) {
                setDisplayAlertMessage(false);
                if (storedJobInfo !== null && storedJobInfo !== '') {
                    // Pull old lists and update them, otherwise create lists from scratch
                    let currentJobList = JSON.parse(localStorage.getItem('jobInfo'));
                    if (currentJobList === null) {
                        currentJobList = {Jobs: []};
                    }
                    const defaultSettings = {
                        messagesPerKeyPress: 1,
                        assignedUsers: 3,
                        userList: [
                            "eric",
                            "justin",
                            "omar"
                        ]
                    }
                    currentJobList.Jobs.push({jobName: jobNameInput});
                    localStorage.setItem(jobNameInput, JSON.stringify(storedJobInfo));
                    localStorage.setItem('jobInfo', JSON.stringify(currentJobList));
                    localStorage.setItem("settings"+jobNameInput, JSON.stringify(defaultSettings))
                    setDisplayState(999);
                } else {
                    setDisplayAlertMessage2(true);
                }
            } else {
                setDisplayAlertMessage(true);
            }
        } else {
            setDisplayAlertMessage(true);
        }
    }
    
    return (
        <div className = "UploadeSpreadsheet">
            <h3> Spreadsheet Upload Specs: </h3>
            <div className="XLSUpsload">
                <label> Select a Spreadsheet: </label>
                <XLSXInput setter={setStoredJobInfo}/>
            </div>
            <div className="JobNameSelect">
                <label for="JobNameSelection"> Select Job Name: </label>
                <input id = "JobNameSelection" onChange = {(event) => setJobNameInput(event.target.value)}/>
            </div>
            <button onClick = {() => handleUpload()}> Upload </button>
            {displayAlertMessage
            ? <div className = "errorMessage">Name is not permitted</div>
            : null
            }
            {displayAlertMessage2
            ? <div className = "errorMessage">No spreadsheet has been uploaded</div>
            : null
            }
        </div>
    );
}