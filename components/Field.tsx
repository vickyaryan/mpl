import * as React from 'react';
import { StyleSheet , ImageBackground, SafeAreaView, Text, View} from 'react-native';
import field from '../assets/images/field.jpg';
import {useRecoilValue} from 'recoil'
import { myPlayerByPosition } from '../atoms/MyTeam';
import FieldPlayer from './FieldPlayer';



// const players: { [key: string]: null[]} ={
//     FWD:[null,null,null],
//     MID:[null,null,null],
//     DEF:[null,null,null,null],
//     GKC:[null],
//   }

const Field = () => {
  const players = useRecoilValue(myPlayerByPosition)
    return (
        <ImageBackground 
        source={field}
        resizeMode="contain"
        style={{
          width:"100%", 
          aspectRatio: 2/3,
          justifyContent:"space-around",
          alignItems: "center"
      }}
      >
        {Object.keys(players).map((position)=>(
          // <Text>{position}</Text>
          <View
              style={{
                flexDirection: "row", 
                justifyContent:"space-around",
                width: "100%",
              }}
          >
            {players[position].map((player)=>(
             <FieldPlayer player={player} position={position}/>
            ))}
          </View>
        ))}
      </ImageBackground>
    )
}

export default Field
