import './index.scss';

export const Header = (props) => {
    const {name, setDisplay} = props;

    const handleLogout = () => {
        localStorage.removeItem('progchamp');
        setDisplay(1);
    }

    return (
        <div className = "HeaderBar">
            <div className = "selectable">
                <button onClick = {() => {setDisplay(5)}}> 
                    <div className = "buttonBackground">
                        <h3>Select Job</h3>
                    </div>
                </button>
                <button onClick = {() => {setDisplay(2)}}>
                    <div className = "buttonBackground">
                        <h3>Edit Message</h3>
                    </div>
                </button>
                <button onClick = {() => {setDisplay(6)}}>
                    <div className = "buttonBackground">
                        <h3>Upload Spreadsheet</h3>
                    </div>
                </button>
                <button onClick = {() => setDisplay(3)}>
                    <div className = "buttonBackground">
                        <h3>Send Messages</h3>
                    </div>
                </button>
                <button onClick = {() => {setDisplay(7)}}>
                    <div className = "buttonBackground">
                        <h3>Job Settings</h3>
                    </div>
                </button>
                <button onClick = {() => setDisplay(8)}>
                    <div className = "buttonBackground">
                        <h3>Delete Job</h3>
                    </div>
                </button>
                <button>
                    <div className = "buttonBackground">
                        <h3>Manage Users</h3>
                    </div>
                </button>
            </div>
            <button onClick = {() => handleLogout()}>
                <div className = "buttonBackground">
                    <h3>{name}</h3>
                </div>
            </button>
        </div>
    )
}