import { json } from "react-router-dom";
import RowField from "../RowField";
import sendRequest from "../../lib/communication";

function TableRowTeams({ content, index, setScreen }) {
    async function deleteRow() {
        await sendRequest('teams/delete', 'DELETE', {
            team_id: content.team_id
        })
        setScreen();
    }

    return (
        <>
            {
                <div className={index % 2 == 0 ? "table-row light" : "table-row dark"}>
                    <div className="text-section">
                        <div>Team</div>
                        <div>{content.team_id}</div>
                        <div>{content.name}</div>
                    </div>
                    <div className="control-section">
                        <div className="button" onClick={() => deleteRow()}>Delete</div>
                    </div>
                </div>
            }
        </>
    )
}

export default TableRowTeams;