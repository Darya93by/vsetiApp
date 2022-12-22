import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Searchbar } from "react-native-paper";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Peoples } from "../const/Peoples";

export default function MyFriends() {
  const navigation = useNavigation();
  const friends = useSelector((state) => state.accaunt.friends);

  const [myList, setMyList] = useState([]);
  const addList = () => {
    let listID = Peoples.map((people) => people.id);
    for (let people of friends) {
      listID.includes(people.id)
        ? setMyList((list) => {
            return list.filter((item) => item.id != people.id);
          })
        : setMyList(myList);
    }
  };

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
    <View style={styles.items}>
      <View style={{ flexDirection: "row", alignItems: "center", flex: 4 }}>
        <Image source={item.avatar} style={styles.avatar} />
        <Text key={item.id} style={styles.itemText}>
          {item.name} {item.lastname}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingRight: 9,
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <EvilIcons
          name="comment"
          size={25}
          color="black"
          onPress={() => {
            addList();
            console.log(myList);
          }}
        />
        <Ionicons name="ellipsis-horizontal" size={20} color="black" />
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, paddingLeft: 2, paddingRight: 2 }}>
      <View style={styles.header}>
        <View style={{ flex: 1, alignSelf: "center" }}>
          <Ionicons
            name="arrow-back-outline"
            size={24}
            color="black"
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.headerItems}>
          <View>
            <Text style={styles.headerText}>Подписки</Text>
          </View>
          <View>
            <Text style={styles.headerText}>Сейчас в сети</Text>
          </View>
        </View>
      </View>
      <Searchbar
        style={{ borderRadius: 36, backgroundColor: "white", marginBottom: 3 }}
        inputStyle={{ color: "#646464", backgroundColor: "white" }}
        placeholderTextColor="#B5B5B5"
        placeholder="Искать в списке"
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
  items: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    margin: 3,
    justifyContent: "space-between",
  },
  headerItems: {
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 10,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    paddingLeft: 8,
    height: 60,
  },
  headerText: {
    color: "#646464",
    fontFamily: "RobotoFlex-Regular",
    fontSize: 20,
  },
});
