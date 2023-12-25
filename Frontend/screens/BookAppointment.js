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
  Modal,
  Pressable,
} from "react-native";
import axios from "axios";

export default function BookAppointment({ navigation }) {
  const [customerName, setCustomerName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [serviceType, setServiceType] = useState("Oil Change");
  const [vehicleType, setVehicleType] = useState("Car");
  const [isServiceTypeModalVisible, setServiceTypeModalVisible] =
    useState(false);
  const [isVehicleTypeModalVisible, setVehicleTypeModalVisible] =
    useState(false);

  const handleBookAppointment = async () => {
    try {
      const data = {
        customerName,
        contactNumber,
        homeAddress,
        serviceType,
        vehicleType,
      };
      console.log(data);
      const response = await axios.post(
        "http://192.168.100.12:8080/api/appointment",
        data
      );
      console.log(response.data.message);
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

  const toggleServiceTypeModal = () => {
    setServiceTypeModalVisible(!isServiceTypeModalVisible);
  };

  const toggleVehicleTypeModal = () => {
    setVehicleTypeModalVisible(!isVehicleTypeModalVisible);
  };

  const selectServiceType = (type) => {
    setServiceType(type);
    toggleServiceTypeModal();
  };

  const selectVehicleType = (type) => {
    setVehicleType(type);
    toggleVehicleTypeModal();
  };

  return (
    <>
      <KeyboardAvoidingView behavior={"padding"} style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={true}>
          <View style={styles.container}>
            <StatusBar barStyle="auto" />
            <View style={styles.headerContainer}>
              <View style={styles.headerBox}>
                <Text style={styles.headerBoxText}>Book Appointment</Text>
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
                  placeholder="Enter your home address"
                  multiline
                  numberOfLines={4}
                  value={homeAddress}
                  onChangeText={setHomeAddress}
                />

                <View style={styles.customDropdown}>
                  <Text style={styles.inputLabel}>Service Type</Text>
                  <TouchableOpacity onPress={toggleServiceTypeModal}>
                    <Text style={styles.dropdownText}>{serviceType}</Text>
                  </TouchableOpacity>
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isServiceTypeModalVisible}
                    onRequestClose={toggleServiceTypeModal}
                  >
                    <View style={styles.modalView}>
                      <Pressable
                        onPress={toggleServiceTypeModal}
                        style={styles.modalClose}
                      >
                        <Text style={styles.modalCloseText}>Close</Text>
                      </Pressable>
                      <TouchableOpacity
                        onPress={() => selectServiceType("Oil Change")}
                      >
                        <Text style={styles.modalOption}>Oil Change </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => selectServiceType("Vehicle inspection")}
                      >
                        <Text style={styles.modalOption}>
                          Vehicle Inspection{" "}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => selectServiceType("Tyre Change")}
                      >
                        <Text style={styles.modalOption}>Tyre Change</Text>
                      </TouchableOpacity>
                      {/* Add more service types as needed */}
                    </View>
                  </Modal>
                </View>

                <View style={styles.customDropdown}>
                  <Text style={styles.inputLabel}>Vehicle Type</Text>
                  <TouchableOpacity onPress={toggleVehicleTypeModal}>
                    <Text style={styles.dropdownText}>{vehicleType}</Text>
                  </TouchableOpacity>
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isVehicleTypeModalVisible}
                    onRequestClose={toggleVehicleTypeModal}
                  >
                    <View style={styles.modalView}>
                      <Pressable
                        onPress={toggleVehicleTypeModal}
                        style={styles.modalClose}
                      >
                        <Text style={styles.modalCloseText}>Close</Text>
                      </Pressable>
                      <TouchableOpacity
                        onPress={() => selectVehicleType("Car")}
                      >
                        <Text style={styles.modalOption}>Car</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => selectVehicleType("Bike")}
                      >
                        <Text style={styles.modalOption}>Bike</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => selectVehicleType("Truck")}
                      >
                        <Text style={styles.modalOption}>Truck</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => selectVehicleType("Rikshaw")}
                      >
                        <Text style={styles.modalOption}>Rikshaw</Text>
                      </TouchableOpacity>
                    </View>
                  </Modal>
                </View>
              </View>

              <TouchableOpacity
                style={styles.scheduleButton}
                onPress={handleBookAppointment}
              >
                <Text style={styles.scheduleButtonText}>Book Appointment</Text>
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
  customDropdown: {
    marginBottom: 15,
    width: "100%",
  },
  dropdownText: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    width: "100%",
  },
  modalView: {
    marginTop: "auto",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
  },
  modalOption: {
    marginBottom: 15,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  modalClose: {
    marginBottom: 15,
    alignSelf: "flex-end",
  },
  modalCloseText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
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
