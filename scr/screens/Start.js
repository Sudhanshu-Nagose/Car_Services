import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
import React, { useRef, useCallback, useState } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
// import {  } from "react-native-gesture-handler";
// import { bounce } from "react-native/Libraries/Animated/Easing";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetBackdrop
} from "@gorhom/bottom-sheet";

const Start = ({ navigation }) => {
  const bottomSheetModalRef = useRef(null);
  const bottomSheetModal = useRef(null);
  const [number, onChangeNumber] = React.useState("");
  const [name, onChangeName] = React.useState("");
  const [password, onChangepassword] = React.useState("");
  const snapPoints = ["70%"];

  function hundlePresentModal() {
    bottomSheetModalRef.current?.present();
  }

  // if (password = 12345678) {

  // } else {
  //   greeting = "Good evening";
  // }

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModal.current?.present();
  }, []);
  const BackdropElement = useCallback(
    (backdropProps) => (
      <BottomSheetBackdrop
        {...backdropProps}
        opacity={0.7}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    []
  );
  return (
    <View style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <View style={styles.top}>
          <Text style={styles.herder}>Car</Text>
          <Text style={[styles.herder, styles.herder2]}>Services</Text>
        </View>
        <View>
          <Image
            source={require("../images/logo.png")}
            // resizeMode="stretch"
            style={{ width: wp(80), height: hp(20), alignSelf: "center" }}
          />
          <View>
            <TouchableOpacity
              style={styles.button1}
              //  onPress={() => {
              //   navigation.navigate("Login");
              // }}
              onPress={hundlePresentModal}>
              <Text style={styles.buttontext}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button2}
              // onPress={() => {
              //   navigation.navigate("singup");
              // }}
              onPress={handlePresentModalPress}>
              <Text style={styles.buttontext}>Sing Up</Text>
            </TouchableOpacity>
            <BottomSheetModal
              ref={bottomSheetModalRef}
              index={0}
              backdropComponent={BackdropElement}
              snapPoints={snapPoints}
              style={{}}>
              <View>
                <Text
                  style={{
                    color: "#000",
                    fontSize: RFPercentage(4.5),
                    fontWeight: "bold",
                    textAlign: "center"
                  }}>
                  Welcome Back
                </Text>
                <Text
                  style={{
                    color: "#808080",
                    fontSize: RFPercentage(3.5),
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop: 10
                  }}>
                  Login to your account
                </Text>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber}
                  value={number}
                  placeholder="Mobile"
                  placeholderTextColor="#5a5a5a"
                  keyboardType="numeric"
                  backgroundColor="#e6e6e6"
                />
                <TextInput
                  style={styles.input}
                  onChangeText={onChangepassword}
                  // value={password}
                  placeholder="Password"
                  placeholderTextColor="#5a5a5a"
                  keyboardType="visible-password"
                  backgroundColor="#e6e6e6"
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="newPassword"
                  secureTextEntry
                  value={password}
                  enablesReturnKeyAutomatically
                />
                <Text
                  style={{ color: "red", textAlign: "center", marginTop: -5 }}>
                  {" "}
                  Default password: 12345678
                </Text>
                <TouchableOpacity
                  style={{
                    alignItems: "center",
                    backgroundColor: "#ffff00",
                    padding: 10,
                    marginTop: 10,
                    borderRadius: 20,
                    marginHorizontal: 12
                  }}
                  onPress={() => {

                    if (number == 8975003080 && password == 12345678) {
                      // alert("Invalid password")
                      // a = ("Login Succesful")
                       navigation.navigate("Home");
                      //  alert(a);
                    }
                    else if (number != 8975003080 || password != 12345678) {
                    
                    var a = "";
                    // console.log(password);
                    if (number != 8975003080) {
                      a = "mobile number is invalid ";
                    }
                    if (a.length > 0 && password != 12345678){
                      a = a +  "& password is invalid";
                    }
                    else if (password != 12345678) {
                      a = a + "password is invalid";
                      // navigation.navigate("Start");
                    }
                    alert(a);
                  }
                  }}>
                  <Text
                    style={{
                      fontSize: RFPercentage(2.5),
                      fontWeight: "bold",
                      color: "#fff"
                    }}>
                    Login
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ alignSelf: "center", marginTop: 15 }}>
                  <Text
                    style={{
                      fontSize: RFPercentage(2.5),
                      fontWeight: "bold",
                      color: "#000"
                    }}
                    onPress={() => {
                      alert("Forgot your password?");
                    }}>
                    Forgot your password?
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ alignSelf: "center", marginTop: 15 }}>
                  <Text
                    style={{
                      fontSize: RFPercentage(2.5),
                      fontWeight: "bold",
                      color: "#ffff00"
                    }}
                    // onPress={() => {
                    //   alert(" Don't have an account Sing in");
                    // }}
                    onPress={handlePresentModalPress}>
                    Don't have an account Sing in
                  </Text>
                </TouchableOpacity>
              </View>
            </BottomSheetModal>
            <BottomSheetModal
              ref={bottomSheetModal}
              index={0}
              backdropComponent={BackdropElement}
              snapPoints={snapPoints}
              style={{}}>
              <View>
                <Text
                  style={{
                    color: "#000",
                    fontSize: RFPercentage(4.5),
                    fontWeight: "bold",
                    textAlign: "center"
                  }}>
                  Welcome Back
                </Text>
                <Text
                  style={{
                    color: "#808080",
                    fontSize: RFPercentage(3.5),
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop: 10
                  }}>
                  Create a new account
                </Text>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeName}
                  value={name}
                  placeholder="Name"
                  placeholderTextColor="#5a5a5a"
                  keyboardType="numeric"
                  backgroundColor="#e6e6e6"
                />
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber}
                  value={number}
                  placeholder="Mobile"
                  placeholderTextColor="#5a5a5a"
                  keyboardType="numeric"
                  backgroundColor="#e6e6e6"
                />
                <TextInput
                  style={styles.input}
                  onChangeText={onChangepassword}
                  value={password}
                  placeholder="Password"
                  placeholderTextColor="#5a5a5a"
                  keyboardType="visible-password"
                  backgroundColor="#e6e6e6"
                />
                <TouchableOpacity
                  style={{
                    alignItems: "center",
                    backgroundColor: "#0066ff",
                    padding: 10,
                    marginTop: 10,
                    borderRadius: 20,
                    marginHorizontal: 12
                  }}
                  onPress={() => {
                    navigation.navigate("Home");
                  }}>
                  <Text
                    style={{
                      fontSize: RFPercentage(2.5),
                      fontWeight: "bold",
                      color: "#fff"
                    }}>
                    Register
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ alignSelf: "center", marginTop: 15 }}>
                  <Text
                    style={{
                      fontSize: RFPercentage(2.5),
                      fontWeight: "bold",
                      color: "#ffff00"
                    }}
                    // onPress={() => {
                    //   alert(" Already have an account Login");
                    // }}
                    onPress={hundlePresentModal}>
                    Already have an account Login
                  </Text>
                </TouchableOpacity>
              </View>
            </BottomSheetModal>
          </View>
        </View>
      </BottomSheetModalProvider>
    </View>
  );
};

export default Start;

const styles = StyleSheet.create({
  herder: {
    fontWeight: "bold",
    fontSize: RFPercentage(8),
    color: "#000",
    marginTop: hp(-5)
  },
  herder2: {
    marginTop: hp(-3)
  },
  top: {
    alignItems: "center",
    marginTop: hp(12)
  },
  button1: {
    alignItems: "center",
    backgroundColor: "#3d5afe",
    padding: 10,
    marginTop: hp(15),
    borderRadius: 10,
    marginHorizontal: 60
  },

  button2: {
    alignItems: "center",
    backgroundColor: "#ff5252",
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    marginHorizontal: 60
  },
  buttontext: {
    fontSize: RFPercentage(2.4),
    fontWeight: "bold"
  },
  input: {
    height: 40,
    margin: 12,
    // borderWidth: 1,
    padding: 10,
    borderRadius: 10
  }
});
