import { useState } from "react";
import sendRequest from "../../lib/communication";

function CreateTeamBox({ visible, setVisible, refreshScreen }) {

    async function sendForm() {
        const body = {
            name: document.getElementById('team-name').value
        }

        await sendRequest("teams/add", 'PUT', body);
        refreshScreen();
        setVisible(!visible);
    }

    return (
        <>
            {visible === true ? 
            <div className="create-team-box">
                <div className="create-team-form">
                    <div className="team-name-text">Team name</div>
                    <input type="text" id="team-name" placeholder="Team name"/>
                    <div className="create-team-send-button clickable" onClick={() => {sendForm()}}>Create!</div>
                </div>
                <div className="close-button clickable" onClick={() => {setVisible(!visible)}}>
                    X
                </div>
            </div> : null}
        </>
    )
}

export default CreateTeamBox;