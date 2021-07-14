import { atom, selector } from "recoil";
import { Player, Positions } from "../types";

export const myFormationState = atom({
    key: 'myFormation',
    default:{
        FWD: 3,
        MID: 3,
        DEF: 4,
        GCK: 1,
    }
})
export const myPlayerState = atom({
    key: "MyPlayerState",
    default: [] as Player[],
})
const positions = ["FWD" , "MID", "DEF" ,"GCK"] as Positions[]

export const myPlayerByPosition = selector({
    key: "MyPlayerByPosition",
    get: ({get}) => {
        const players = get(myPlayerState);
        const formation = get(myFormationState);
        const groupedPlayers = {};

        positions.forEach((position) => {
            groupedPlayers[position] = players.filter((p) =>p.position === position)
            for (let  i = groupedPlayers[position].length ; 
                i < formation[position]; i++){
                    groupedPlayers[position].push(null);
                }
        })
        return groupedPlayers
    },
})