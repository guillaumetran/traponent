import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import TouchableCard from "./src/TouchableCard/TouchableCard";
import { DangerZone } from "expo";
const { Lottie } = DangerZone;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: 330, height: 125 }}>
          <TouchableCard
            color="white"
            borderRadius={10}
            shadow={true}
            shadowColor="blue"
            animation={true}
            gradient={true}
            onPress={() => {}}
          >
            <View
              style={{
                flex: 1,
                borderRadius: 10,
                flexDirection: "row",
                overflow: "hidden"
              }}
            >
              <View
                style={{
                  flex: 2
                }}
              />
              <ImageBackground
                style={{
                  flex: 1,
                  height: "100%"
                }}
                source={require("./src/assets/BlueBar_3.png")}
                resizeMode="cover"
              >
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "rgba(66, 117, 152, 0.4)"
                  }}
                />
              </ImageBackground>
            </View>
          </TouchableCard>
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
