import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Searchbar } from "react-native-paper";
import { useSelector } from "react-redux";

export default function MyFriends() {
  const navigation = useNavigation();
  const friends = useSelector((state) => state.accaunt.friends);

  const [data, setData] = useState(friends);

  const [searchinf, setSearching] = useState(friends);

  const searchFunction = (text) => {
    if (text) {
      const newData = data.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const itemDataL = item.lastname
          ? item.lastname.toUpperCase()
          : "".toUpperCase();
        const textData = text.toString().toUpperCase();
        console.log(textData);
        if (itemDataL.indexOf(textData) > -1) {
          return itemDataL.indexOf(textData) > -1;
        } else return itemData.indexOf(textData) > -1;
      });
      setSearching(data);
      setSearching(newData);
    } else {
      setSearching(data);
    }
  };

  const renderItem = ({ item }) => (
    <View
      style={[
        { flex: 1 },
        { flexDirection: "row" },
        { alignItems: "center" },
        { backgroundColor: "#FFFFFF" },
        { margin: 3 },
      ]}
    >
      <Image source={item.avatar} style={styles.avatar} />
      <Text key={item.id} style={styles.itemText}>
        {item.name} {item.lastname}
      </Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <Searchbar
        placeholder="Поиск"
        onChangeText={(text) => {
          searchFunction(text);
        }}
        value={searchinf}
      />
      <FlatList data={searchinf} renderItem={renderItem} />
    </View>
  );
}
const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    alignContent: "center",
    borderRadius: 100,
    alignSelf: "center",
  },
  itemText: {
    color: "#646464",
    fontFamily: "RobotoFlex-Regular",
    fontSize: 15,
    paddingLeft: 15,
  },
});
