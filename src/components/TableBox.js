import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import TableRowTeams from "./teams/TableRowTeams";
import TableRowRoles from "./roles/TableRowRoles";
import TableRowUser from "./users/TableRowUsers";
import TableRowVacation from "./vacations/TableRowVacation";
import TableRowVacationType from "./vacationtypes/TableRowVacationTypes";
import CreateTeamBox from "./teams/CreateTeamBox";

function TableBox() {
    const queryClient = useQueryClient();

    const [ currentScreen, setCurrenctScreen ] = useState('teams');
    const [ createTeamBoxVisible, setCreateTeamBoxVisible ] = useState(false);

    const fetchData = async () => {
        const result = await fetch(`http://localhost:3000/${currentScreen}/all`).then((result) => result.json());
        return result;
    }

    const { isPending, isError, data, error, refetch } = useQuery({ queryKey: [currentScreen], queryFn: fetchData });

    function changeCurrentScreen(newScreen) {
        setCurrenctScreen(() => newScreen);
        refetch();
    }

    let index = 0;
    return (
        <>
            <div className="main-box">
                <div className="nav-bar">
                    <div className="nav-bar-element" onClick={() => changeCurrentScreen('teams')}>
                        Teams
                    </div>  
                    <div className="nav-bar-element" onClick={() => changeCurrentScreen('roles')}>
                        Roles
                    </div> 
                    <div className="nav-bar-element" onClick={() => changeCurrentScreen('users')}>
                        Users
                    </div> 
                    <div className="nav-bar-element" onClick={() => changeCurrentScreen('vacations')}>
                        Vacations
                    </div>
                    <div className="nav-bar-element" onClick={() => changeCurrentScreen('vacationTypes')}>
                        Vacation Types
                    </div>
                </div>
                <div className="content-box">
                    {
                        currentScreen === 'teams' ? data ? data.map((team) => (<TableRowTeams content={team} index={index++} setScreen={() => changeCurrentScreen('teams')}></TableRowTeams>)) : null :
                        currentScreen === 'roles' ? data ? data.map((role) => (<TableRowRoles content={role} index={index++}></TableRowRoles>)) : null :
                        currentScreen === 'users' ? data ? data.map((user) => (<TableRowUser content={user} index={index++}></TableRowUser>)) : null :
                        currentScreen === 'vacations' ? data ? data.map((vacation) => (<TableRowVacation content={vacation} index={index++}></TableRowVacation>)) : null :
                        currentScreen === 'vacationTypes' ? data ? data.map((vacationType) => (<TableRowVacationType content={vacationType} index={index++}></TableRowVacationType>)) : null :
                        null
                    }
                </div>
            </div>
            <div className="open-create-menu-button clickable" onClick={() => {setCreateTeamBoxVisible(!createTeamBoxVisible)}}>Create</div>
            <CreateTeamBox visible={createTeamBoxVisible} setVisible={setCreateTeamBoxVisible} refreshScreen={() => changeCurrentScreen('teams')}/>
            <div>
                screen: {currentScreen === 'teams' ? 'Teams!' : 'eee'} <br></br>
                create: {createTeamBoxVisible === true ? 'True': 'No true!'}
            </div>
            <div className="pagination-box">
                &lt; 1 2 3 &gt;
            </div>
        </>
    )
}

export default TableBox;