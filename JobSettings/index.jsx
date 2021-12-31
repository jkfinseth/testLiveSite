import React, { useState, useEffect } from "react";

export const JobSettings = (props) => {

    const [inputs, setInputs] = useState(0);
    const [numUsers, setNumUsers] = useState(0);
    const [jobIsSelected, setJobIsSelected] = useState(true);

    // On launch, pull settings for currently selected job and 
    useEffect(()=> {
        const selectedJob = JSON.parse(localStorage.getItem("currentJob"));
        if (selectedJob === null || selectedJob === '') {
            setJobIsSelected (false);
        } else {
            const 
        }
        console.log("Hello World");
    }, [])
    return (
        <div className = "jobSettingsPage">
            <div className = "inputsPerPress">
                <label> Inputs per press: </label>
                <input />
            </div>
            <div className = "workers">
                <label> Number of users working on selected job:</label>
                <input />
            </div>
        </div>
    )
}