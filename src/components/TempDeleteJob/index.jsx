import React, { useState } from "react";
import './index.scss'

// TODO- Finish implementing and add to header, rename once finished, begin building logic for auto delete functionality
export const DeleteSelectedJobPage = (props) => {

    const {setDisplayState} = props;
    const availableJobs = JSON.parse(localStorage.getItem('jobInfo'));
    const [displayErrorMessage, setDisplayErrorMessage] = useState(false);
    const [selectedJob, setSelectedJob] = useState('');

    const handleDelete = () => {
        // Determine selected value and delete from localStorage
        if (selectedJob !== "") {
            setDisplayErrorMessage(false);
            console.log(selectedJob);
            //localStorage.setItem("currentJob", JSON.stringify({selectedJob: selectedJob}));
            if (localStorage.getItem(selectedJob)) {
                // Remove key, settings+key, message+key, currentJob, and update jobInfo to not have job
                if (localStorage.getItem("currentJob")!= null) {
                    localStorage.removeItem("currentJob")
                }
                localStorage.removeItem("settings"+selectedJob);
                localStorage.removeItem("message"+selectedJob);
                localStorage.removeItem(selectedJob);
                let updatedJobInfo = JSON.parse(localStorage.getItem('jobInfo'));
                // for (let x = 0; x < updatedJobInfo.length(); x++) {
                //     if (updatedJobInfo[x].jobName === sel){
                //         // Remove stuff
                //     }
                // }
            }
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
                    <button onClick = {() => {handleDelete()}}> Delete</button>
                    {displayErrorMessage? <div className = "ErrorMessageSelectJob">No Job Is Selected</div>: null}
                </div>
                : <div> No jobs available </div>
            }
        </div>
    )
    
}