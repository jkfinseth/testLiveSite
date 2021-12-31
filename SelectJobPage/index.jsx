import React, { useState } from "react";
import './index.scss'

export const SelectJobPage = (props) => {

    const {setDisplayState} = props;
    const availableJobs = JSON.parse(localStorage.getItem('jobInfo'));
    const [displayErrorMessage, setDisplayErrorMessage] = useState(false);
    const [selectedJob, setSelectedJob] = useState('');

    const handleSave = () => {
        // Determine selected value and write to localStorage
        if (selectedJob !== "") {
            setDisplayErrorMessage(false);
            console.log(selectedJob);
            localStorage.setItem("currentJob", JSON.stringify({selectedJob: selectedJob}));
            setDisplayState(999)
        } else {
            setDisplayErrorMessage(true);
        }
    }

    console.log("availableJobs: ",availableJobs);

    return (
        <div className = "SelectJob">
            { availableJobs !== null
                ? <div className = "JobAvailable">
                    <div className = "Selection">
                        <label for="Job"> Selected Job: </label>
                        <select 
                            name="Job"
                            id="Job"
                            onChange={(event) => {
                                setDisplayErrorMessage(false);
                                setSelectedJob(event.target.value)
                        }}>
                            <option value={''} defaultValue/>
                            {availableJobs.Jobs.map((e, index) => (
                                <option value={e.jobName} key={index}> {e.jobName} </option>
                            ))}
                        </select>
                    </div>
                    <button onClick = {() => {handleSave()}}> Save</button>
                    {displayErrorMessage? <div className = "ErrorMessageSelectJob">No Job Is Selected</div>: null}
                </div>
                : <div> No jobs available </div>
            }
        </div>
    )
    
}