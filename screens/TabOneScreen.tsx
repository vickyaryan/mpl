import React, { useRef } from "react";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { StyleSheet, SafeAreaView, Pressable, Text, View } from "react-native";
import Field from "../components/Field";
import TeamStats from "../components/TeamStats";
import PlayerListItem from "../components/PlayerListItem";
import { players } from "../assets/data/players";
import Filters from '../components/Filters'
import PlayersList from "../components/PlayersList";
export default function TabOneScreen() {
  const playersBottomSheet = useRef<BottomSheet>(null);
  const filtersBottomSheet = useRef<BottomSheet>(null);

  const viewPlayers = () => {
    playersBottomSheet.current?.expand();
  };

  const snapPoints = [0, "50%"];

  return (
    <SafeAreaView style={styles.container}>
      <TeamStats />
      <Field />

      <Pressable onPress={viewPlayers} style={styles.buttonContainer}>
        <Text>View Players</Text>
      </Pressable>
      

      <BottomSheet index={0} snapPoints={snapPoints} ref={playersBottomSheet}>
      <Pressable
        onPress={() => filtersBottomSheet.current?.expand()}
        style={[styles.buttonContainer,{marginTop: 10}]}
      >
        <Text>View Filters</Text>
      </Pressable>
       <PlayersList />
    </BottomSheet>
      <BottomSheet index={0} snapPoints={snapPoints} ref={filtersBottomSheet}>
        <Filters />
      </BottomSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#72CC5E",
  },
  buttonContainer: {
    backgroundColor: "orange",
    width: "90%",
    margin: 20,
    padding: 10,
    alignItems: "center",
    borderRadius: 50,
    marginTop: "auto",
  },
  contentContainer: {},
});
