import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from "react-native";
import axios from "axios";

export default function HomeService({ navigation }) {
  const [customerName, setCustomerName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [homeAddress, setAddress] = useState("");

  const handleScheduleService = async () => {
    try {
      const data = {
        customerName,
        contactNumber,
        homeAddress,
      };
      const response = await axios.post(
        "http://192.168.100.12:8080/api/homeService",
        data
      );
    } catch (e) {
      // Handle login errors
      if (e.response && e.response.data && e.response.data.message) {
        // Use the custom error message from the backend
        console.log(e.response.data.message);
      } else {
        // For other types of errors, use a generic error message
        console.log(e);
      }
    }
  };

  return (
    <>
      <KeyboardAvoidingView behavior={"padding"} style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={true}>
          <View style={styles.container}>
            <StatusBar barStyle="auto" />
            <View style={styles.headerContainer}>
              <View style={styles.headerBox}>
                <Text style={styles.headerBoxText}>Schedule Home Service</Text>
              </View>
            </View>
            <View style={styles.bodyContainer}>
              <Text style={styles.title}>Enter Customer Details</Text>
              <View style={styles.formContainer}>
                <Text style={styles.inputLabel}>Customer Name</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter your name"
                  value={customerName}
                  onChangeText={setCustomerName}
                />

                <Text style={styles.inputLabel}>Contact Number</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter your contact number"
                  keyboardType="phone-pad"
                  value={contactNumber}
                  onChangeText={setContactNumber}
                />

                <Text style={styles.inputLabel}>Home Address</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter your address"
                  multiline
                  numberOfLines={4}
                  value={homeAddress}
                  onChangeText={setAddress}
                />
              </View>

              <TouchableOpacity
                style={styles.scheduleButton}
                onPress={handleScheduleService}
              >
                <Text style={styles.scheduleButtonText}>Schedule Service</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00BE00",
  },
  headerContainer: {
    backgroundColor: "#00BE00",
    width: "100%",
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  bodyContainer: {
    overflow: "hidden",
    flex: 0.8,
    backgroundColor: "#ffffff",
    width: "100%",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
  },
  headerBox: {
    backgroundColor: "#00a700",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "85%",
  },
  headerBoxText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#014e01",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  formContainer: {
    width: "100%",
  },
  inputLabel: {
    alignSelf: "flex-start",
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    width: "100%",
  },
  scheduleButton: {
    backgroundColor: "#00BE00",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: "70%",
    marginTop: 20,
  },
  scheduleButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});
