import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./src/Button/Button";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: 300, height: 100 }}>
          <Button
            borderRadius={40}
            shadow={true}
            shadowColor="#1F8AD3"
            animation={true}
            gradient={true}
          >
            <Text style={{ color: "white", fontSize: 18 }}>Valider</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  }
});
