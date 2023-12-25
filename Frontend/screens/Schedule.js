import React from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export default function Schedule({ navigation }) {
  // Dummy data for the worker's schedule
  const scheduleData = [
    { day: "Monday", time: "9:00 AM - 5:00 PM" },
    { day: "Tuesday", time: "10:00 AM - 6:00 PM" },
    { day: "Wednesday", time: "8:30 AM - 4:30 PM" },
    // Add more days and times as needed
  ];

  return (
    <>
      <KeyboardAvoidingView behavior={"padding"} style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={true}>
          <View style={styles.container}>
            <StatusBar barStyle="auto" />
            <View style={styles.headerContainer}>
              <View style={styles.headerBox}>
                <Text style={styles.headerBoxText}>Worker's Schedule</Text>
              </View>
            </View>
            <View style={styles.bodyContainer}>
              <Text style={styles.title}>Daily Schedule</Text>
              {scheduleData.map((item, index) => (
                <View key={index} style={styles.scheduleItem}>
                  <Text style={styles.scheduleDay}>{item.day}</Text>
                  <Text style={styles.scheduleTime}>{item.time}</Text>
                </View>
              ))}
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
  scheduleItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  scheduleDay: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  scheduleTime: {
    fontSize: 16,
    color: "#333",
  },
});
