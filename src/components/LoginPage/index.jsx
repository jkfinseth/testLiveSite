import { CheckBox } from '../CheckBox';
import './index.scss';
import React, { useState, useEffect } from "react";

export const LoginPage = (props) => {

    const {user, setUser, setDisplayState, setIsListSplit} = props;
    const [stayLoggedIn, setStayLoggedIn] = useState(true);

    const handleStayLoggedIn = (user, password) => {
        if (stayLoggedIn) {
            // write to local storage
            const userInfo = {
                username: user
            }
            localStorage.setItem('progchamp', JSON.stringify(userInfo));
        } else {
            localStorage.removeItem('progchamp');
        }
    }

    useEffect(() => {
        console.log(localStorage.getItem('progchamp'));
        const savedLogin = JSON.parse(localStorage.getItem('progchamp'));
        if (savedLogin !== null && savedLogin !== '') {
            // User exists, attempt to log in with saved details
            handleLogin(savedLogin.username);
        } else {
            //setStayLoggedIn(false);
        }
    }, []);

    const handleLogin = (userName) => {
        handleStayLoggedIn(userName, '');
        switch (userName) {
            case ("justin") :
                setUser("justin");
                setDisplayState(999);
                setIsListSplit(false);
                return;
            case ("eric"):
                setUser("eric");
                setDisplayState(999);
                setIsListSplit(false);
                return;
            case ("omar"):
                setUser("omar");
                setDisplayState(999);
                setIsListSplit(false);
                return;
            default:
                setUser("");
                return;
        }
    }

    return (
        <div className = "page">
            <div className = "loginPage">
                <div className = "usernameInput">
                    <label> Username: </label>
                    <input onChange={(event) => setUser(event.target.value)}/>
                </div>
                <CheckBox label = {"Stay Logged in: "} setter={setStayLoggedIn} set={stayLoggedIn} />
                <button onClick={() => {handleLogin(user)}}> Submit </button>
            </div>
        </div>
    )
}