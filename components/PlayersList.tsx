import React from 'react'
import {BottomSheetFlatList} from '@gorhom/bottom-sheet'
import PlayerListItem from './PlayerListItem'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { allPlayerState , filteredPlayers} from '../atoms/Players'

const PlayersList = () => {
    //const [players, setPlayers] = useRecoilState(allPlayerState)
    //const setPlayers = useSetRecoilState(allPlayerState)
    const players = useRecoilValue(filteredPlayers)


    return (
        <BottomSheetFlatList
        data={players}
        renderItem={({ item }) => <PlayerListItem player={item} />}
      />
    )
}

export default PlayersList
