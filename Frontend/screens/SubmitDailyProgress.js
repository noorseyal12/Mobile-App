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

export default function SubmitDailyProgress({ navigation }) {
  const [completedTasks, setCompletedTasks] = useState("");
  const [checkBox1, setCheckBox1] = useState(false);
  const [checkBox2, setCheckBox2] = useState(false);
  const [checkBox3, setCheckBox3] = useState(false);
  const [additionalNotes, setAdditionalNotes] = useState("");

  const handleCheckBox1 = () => {
    setCheckBox1(!checkBox1);
  };

  const handleCheckBox2 = () => {
    setCheckBox2(!checkBox2);
  };

  const handleCheckBox3 = () => {
    setCheckBox3(!checkBox3);
  };

  const handleSubmitProgress = () => {
    // Implement the logic to handle the submitted progress
    console.log("Completed Tasks:", completedTasks);
    console.log("CheckBox1:", checkBox1);
    console.log("CheckBox2:", checkBox2);
    console.log("CheckBox3:", checkBox3);
    console.log("Additional Notes:", additionalNotes);

    // You can add your logic here to handle the submitted data
    // For now, just navigate back to the WorkerHomeScreen
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
                <Text style={styles.headerBoxText}>Submit Daily Progress</Text>
              </View>
            </View>
            <View style={styles.bodyContainer}>
              <Text style={styles.title}>Fill in the Details</Text>
              <View style={styles.formContainer}>
                <Text style={styles.inputLabel}>Completed Tasks</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter completed tasks"
                  value={completedTasks}
                  onChangeText={setCompletedTasks}
                />
                <View style={styles.checkBoxContainer}>
                  <TouchableOpacity
                    style={[
                      styles.checkBox,
                      checkBox1 && styles.checkBoxSelected,
                    ]}
                    onPress={handleCheckBox1}
                  >
                    <Text style={styles.checkBoxText}>Task 1</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.checkBox,
                      checkBox2 && styles.checkBoxSelected,
                    ]}
                    onPress={handleCheckBox2}
                  >
                    <Text style={styles.checkBoxText}>Task 2</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.checkBox,
                      checkBox3 && styles.checkBoxSelected,
                    ]}
                    onPress={handleCheckBox3}
                  >
                    <Text style={styles.checkBoxText}>Task 3</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.inputLabel}>
                  Report any problem or make a request
                </Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter additional notes"
                  multiline
                  numberOfLines={4}
                  value={additionalNotes}
                  onChangeText={setAdditionalNotes}
                />
              </View>
              <TouchableOpacity
                style={styles.submitButton}
                onPress={handleSubmitProgress}
              >
                <Text style={styles.submitButtonText}>Submit</Text>
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
    height: 50,
    width: "100%",
    fontSize: 17,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 10,
  },
  checkBoxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkBox: {
    backgroundColor: "#00BE00",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  checkBoxSelected: {
    backgroundColor: "#014e01",
  },
  checkBoxText: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
  },
  submitButton: {
    backgroundColor: "#00BE00",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  submitButtonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});
