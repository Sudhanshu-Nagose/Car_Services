import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";
import React, { useRef, useCallback, useState } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetBackdrop
} from "@gorhom/bottom-sheet";

const Singup = ({ navigation }) => {
  const [pin, setPin] = useState('');
  const bottomSheetModalRef = useRef(null);

  const snapPoints = ["53%"];

  function hundlePresentModal() {
    bottomSheetModalRef.current?.present();
  }

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
        <Image
          style={{ alignSelf: "center", width: "100%", height: hp(48) }}
          // source={require("../images/5.png")}
          source={require("../images/5.png")}
        />
        <View style={{ marginTop: hp(-4) , marginBottom: hp(1) }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: RFPercentage(3.4),
              color: '#030303',
              // fontFamily:"Bold"
            }}>
            Enter Your Location
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: RFPercentage(2.5),
              marginTop: hp(1.5),
              color: "#070707",
              // fontFamily:"Roboto-Regular"
            }}>
            We are currently serviceable in selected locations.
          </Text>
        </View>
        <View style={{marginTop: hp(10)}}>
          <TouchableOpacity
            style={{
              backgroundColor: "#e30038",
              padding: wp(3.2),
              borderRadius: 3,
              marginHorizontal: hp(4)
            }}
            onPress={() => {
                navigation.navigate('CurrentLocation');
              }}
            >
            <Text style={{ textAlign: "center", color: "#fff", fontFamily:"Roboto-Regular" }}>
              Use Current Location
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#00b951",
              padding: wp(3.2),
              borderRadius: 3,
              marginHorizontal: hp(4),
              marginTop: hp(3)
            }}
            onPress={hundlePresentModal}>
            <Text style={{ textAlign: "center", color: "#fff", 
            // fontFamily:"Roboto-Regular"
             }}>
              Enter Pin Code manualy
            </Text>
          </TouchableOpacity>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            backdropComponent={BackdropElement}
            snapPoints={snapPoints}
            style={{}}>
            <View>
              <TouchableOpacity
                style={{ paddingHorizontal: wp(92) }}
                onPress={() => {
                  bottomSheetModalRef.current?.dismiss();
                }}>
                <Image
                  style={{ height: 25, width: 25 }}
                  // source={require("../Images/cross.png")}
                />
              </TouchableOpacity>
              <Image
                style={{
                  alignSelf: "center",
                  width: "25%",
                  height: hp(10),
                  marginTop: hp(0.1)
                }}
                source={require("../images/1.png")}
              />
              <TextInput
                style={{
                  height: hp(5.5),
                  margin: 12,
                  borderWidth: wp(0.2),
                  padding: 10,
                  borderRadius: 5,
                  marginTop: hp(5),
                  // fontFamily:'Roboto-Regular'
                }}
                value={pin}
                onChangeText={(number) => setPin(number)}
                placeholderTextColor='#000'
                placeholder="Enter Pincode"
                keyboardType="numeric"
                maxLength={6}
              />

              <TouchableOpacity
                style={{ marginTop: hp(2) }}
                onPress={() =>
                  navigation.navigate("Pincode", {pin})
                }>
                <Text
                  style={{
                    backgroundColor: "#00b951",
                    padding: 12,
                    borderRadius: 5,
                    textAlign: "center",
                    marginHorizontal: hp(1.5),
                    color: "#fff",
                    // fontFamily:'Roboto-Regular'
                  }}>
                  SUBMIT
                </Text>
              </TouchableOpacity>
            </View>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </View>
  );
};

export default Singup;