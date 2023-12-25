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

export default function VehicleOwnerHomeScreen({ navigation }) {
  return (
    <>
      <KeyboardAvoidingView behavior={"padding"} style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={true}>
          <View style={styles.container}>
            <StatusBar barStyle="auto" />
            <View style={styles.headerContainer}>
              <View style={styles.headerBox}>
                <Text style={styles.headerBoxText}>Hello, Vehicle Owner</Text>
                <Text style={styles.headerBoxTextHeading}>
                  Welcome to Your Home Screen
                </Text>
              </View>
            </View>
            <View style={styles.bodyContainer}>
              <Text style={styles.title}>Home Screen</Text>
              <View style={styles.homeScreenOptions}>
                <TouchableOpacity
                  style={styles.homeScreenOption}
                  onPress={() => navigation.navigate("HomeService")}
                >
                  <Text style={styles.homeScreenOptionText}>
                    Book Home Service
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.homeScreenOption}
                  onPress={() => navigation.navigate("BuySparePart")}
                >
                  <Text style={styles.homeScreenOptionText}>
                    Buy Spare Part
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.homeScreenOption}
                  onPress={() => navigation.navigate("BookAppointment")}
                >
                  <Text style={styles.homeScreenOptionText}>
                    Book an Appointment
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.logoutButton}
                onPress={() => navigation.navigate("LoginScreen")}
              >
                <Text style={styles.logoutButtonText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  homeScreenOptions: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginTop: 20,
    padding: 10,
  },
  homeScreenOption: {
    backgroundColor: "#00BE00",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "60px",
    marginBottom: 10,
  },
  homeScreenOptionText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  logoutButton: {
    backgroundColor: "#FF0000",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
    alignSelf: "center",
  },
  logoutButtonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#00BE00",
  },
  headerContainer: {
    backgroundColor: "#00BE00",
    width: "100%",
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  bodyContainer: {
    overflow: "hidden",
    flex: 0.6,
    backgroundColor: "#ffffff",
    width: "100%",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
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
    fontSize: 16,
    color: "#014e01",
  },
  headerBoxTextHeading: {
    fontSize: 25,
    fontWeight: "bold",
  },
  title: {
    alignSelf: "flex-start",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 20,
    marginBottom: 10,
    marginTop: 20,
    color: "#333",
  },
});
