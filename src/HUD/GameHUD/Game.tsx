import React from 'react';
import { Draft, Team, Faction, Player, TeamDraft } from 'dotagsi';
import { apiUrl } from '../../api/api';
import CameraContainer from '../Camera/Container';

const ObservedPlayer = ({ players, player, team, show}: { show: boolean, player: Player | null, players: Player[], team: Team | null }) => {
    const getPlayerById = (id: number) => {
        return players.find(player => player.id === id);
    }
    return <>
        { player ? <div className={`player_container ${player.team_name} ${!show ? 'hide':''}`}>
            <div className="player_info">
                <div className="team_box">
                    <div className={`${player.team_name} team_bar`}></div>
                    <div className="team_logo">
                        {team && team.id ? <img src={`${apiUrl}api/teams/logo/${team.id}`} /> : null}
                    </div>
                </div>
                <div className="username shadowed-text">{player.name} 
                <div className="player_kills">
                    <strong className="player-kill">{player.net_worth} N/W</strong> </div>
                </div>
            </div>
            <div className="player_picture">
				<CameraContainer observedSteamid={player.steamid} />
                {player.avatar ? <img src={player.avatar} /> : null}
            </div>
        </div> : null}
        
    </>
}

export default ObservedPlayer;