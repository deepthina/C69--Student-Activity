import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";

export default class TransactionScreen extends Component {
  constructor() {
    super();
    this.state = {
      domState: "normal",
      hasCameraPermissions: false,
      scanned: false,
      scannedData: "",
    };
  }
  getCameraPermissions = async () => {};

  handleBarCodeScanned = async ({ type, data }) => {};

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.text}
          onPress={() => this.getCameraPermissions()}
        >
          <Text style={styles.text}>Scan QR Code</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653D4",
  },
  text: {
    color: "#ffff",
    fontSize: 15,
  },
  button: {
    width: "43%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F48D20",
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 24,
    color: "#FFFFFF",
  },
});
