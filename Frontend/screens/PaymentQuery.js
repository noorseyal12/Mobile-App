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

export default function PaymentQuery({ navigation }) {
  const [query, setQuery] = useState("");

  const handleSendQuery = () => {
    // Implement the logic to send the query
    console.log("Sending query:", query);
    // You can add your logic here to send the query to the server or perform any other action

    // Navigate back to the WorkerHomeScreen after submitting the query
    navigation.navigate("WorkerHomeScreen");
  };

  return (
    <>
      <KeyboardAvoidingView behavior={"padding"} style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={true}>
          <View style={styles.container}>
            <StatusBar barStyle="auto" />
            <View style={styles.headerContainer}>
              <View style={styles.headerBox}>
                <Text style={styles.headerBoxText}>Payment Query</Text>
              </View>
            </View>
            <View style={styles.bodyContainer}>
              <Text style={styles.title}>Payment Details</Text>
              <View style={styles.paymentDetailsContainer}>
                <Text style={styles.paymentDetailsText}>
                  Your pay details go here...
                </Text>
                <Text style={styles.paymentDetailsText}>
                  Upcoming Pay Date: MM/DD/YYYY
                </Text>
              </View>
              <Text style={styles.title}>Send a Query</Text>
              <View style={styles.formContainer}>
                <Text style={styles.inputLabel}>Your Query</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Type your query or request here"
                  multiline
                  numberOfLines={4}
                  value={query}
                  onChangeText={setQuery}
                />
              </View>
              <TouchableOpacity
                style={styles.sendQueryButton}
                onPress={handleSendQuery}
              >
                <Text style={styles.sendQueryButtonText}>Send Query</Text>
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
    color: "#014e01",
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  paymentDetailsContainer: {
    marginBottom: 20,
  },
  paymentDetailsText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
  },
  formContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    alignSelf: "flex-start",
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  textInput: {
    height: 80,
    width: "100%",
    fontSize: 17,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 10,
  },
  sendQueryButton: {
    backgroundColor: "#00BE00",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  sendQueryButtonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});
