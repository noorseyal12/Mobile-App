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
export default function WorkerHomeScreen({ navigation }) {
  const handleLogoutPress = async () => {
    await AsyncStorage.removeItem("authToken");
    await AsyncStorage.removeItem("userRole");
    navigation.navigate("LoginScreen");
  };

  return (
    <>
      <KeyboardAvoidingView behavior={"padding"} style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={true}>
          <View style={styles.container}>
            <StatusBar barStyle="auto" />
            <View style={styles.headerContainer}>
              <View style={styles.headerBox}>
                <Text style={styles.headerBoxText}>Hello, Worker Name</Text>
                <Text style={styles.headerBoxTextHeading}>
                  Welcome to Your Dashboard
                </Text>
              </View>
            </View>
            <View style={styles.bodyContainer}>
              <Text style={styles.title}>Dashboard</Text>
              <View style={styles.dashboardOptions}>
                <TouchableOpacity
                  style={styles.dashboardOption}
                  onPress={() => navigation.navigate("Schedule")}
                >
                  <Text style={styles.dashboardOptionText}>See Schedule</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.dashboardOption}
                  onPress={() => navigation.navigate("SubmitDailyProgress")}
                >
                  <Text style={styles.dashboardOptionText}>
                    Submit Daily Progress
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.dashboardOption}
                  onPress={() => navigation.navigate("PaymentQuery")}
                >
                  <Text style={styles.dashboardOptionText}>Query Payment</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.logoutButton}
                onPress={handleLogoutPress}
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
  dashboardOptions: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginTop: 20,
    padding: 10,
  },
  dashboardOption: {
    backgroundColor: "#00BE00",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "60px",
    marginBottom: 10,
  },
  dashboardOptionText: {
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
