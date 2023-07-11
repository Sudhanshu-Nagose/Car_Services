import { View, Text, Image} from "react-native";
import React from "react";
import { useRoute } from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const Pincode = () => {
  const route = useRoute();

  const { address, lat, lng, city, area,  pin} = route?.params || {}

  return (
    <View style={{flex:1}}>
      <Image
          resizeMode="center"
          style={{ alignSelf: "center", width: "100%", height: hp(40) }}
          // source={require("../Images/5.png")}
          source={require("../images/5.png")}
        />
        <View style={{ marginTop: hp(-8) }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: RFPercentage(4),
              color: "#000",
            fontFamily: 'Roboto-Bold',
              marginBottom: hp(3)
            }}>
            Your Location is
          </Text>
          
        {lat && lng && (
          <>
          <Text
            style={{
              textAlign: "center",
              fontSize: RFPercentage(2.5),
              marginTop: 10,
              color: "#000",
              fontFamily:'Roboto-Bold'
            }}>
           {`Address : ${address}`}
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: RFPercentage(2.5),
              marginTop: 10,
              color: "#000",
              fontFamily:'Roboto-Bold'
            }}>
           {`Area : ${area}`}
            </Text>
            <Text
            style={{
              textAlign: "center",
              fontSize: RFPercentage(2.5),
              marginTop: 10,
              color: "#000",
              fontFamily:'Roboto-Bold'
            }}>
           {`City : ${city}`}
            </Text>
            <Text
            style={{
              textAlign: "center",
              fontSize: RFPercentage(2.5),
              marginTop: 10,
              color: "#000",
              fontFamily:'Roboto-Bold'
            }}>
           {`Latitude : ${lat}`}
            </Text>
            <Text
            style={{
              textAlign: "center",
              fontSize: RFPercentage(2.5),
              marginTop: 10,
              color: "#000",
              fontFamily:'Roboto-Bold'
            }}>
           {`Longitude : ${lng}`}
          </Text>
          </>
        )}
        
          <Text
            style={{
              textAlign: "center",
              fontSize: RFPercentage(2.5),
              marginTop: 10,
              color: "#000",
              fontFamily:'Roboto-Bold'
            }}>
           {`Pincode : ${pin}`}
          </Text>
        </View>
      
    </View>
  );
};

export default Pincode;
