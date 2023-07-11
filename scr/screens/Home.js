import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput
} from "react-native";
import React, { useState } from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";

const primaryColor = "#EC3323";
const textColor = "#0D0D0D";
const text = "#5a5a5a";

const Home = ({ navigation }) => {
  const sliderData = [
    { img: require("../images/slider1.jpg") },
    { img: require("../images/slider2.jpg") },
    { img: require("../images/slider3.jpg") },
    { img: require("../images/slider4.jpg") }
  ];
  const categoryData = [
    { name: "Services", icon: require("../images/suv.png") },
    { name: "Oil", icon: require("../images/oil.png") },
    // { name: "Sandwich", icon: require("../images/sandwich.png") },
    { name: "Washing", icon: require("../images/wash.png") },
    { name: "Coolant", icon: require("../images/cool1.png") },
    // { name: "Coke", icon: require("../images/coke.png") }
  ];

  const categoryItemData = {
    Services: [
      {
        name: "Hatchback",
        desc: "Oil change + Washing + filter change + All car check",
        price: 2000,
        rating: "3.5 (Costumer Review)",
        image: require("../images/chicken_burger.png")
      },
      {
        name: "Seadan",
        desc: "Oil change + Washing + filter change + All car check",
        price: 3500,
        rating: "4.5",
        image: require("../images/seadan.png")
      },
      {
        name: "SUV",
        desc: "Oil change + Washing + filter change + All car check",
        price: 5000,
        rating: "4.0",
        image: require("../images/suv.png")
      }
    ],

    Oil: [
      {
        name: "Shell",
        desc: "High Quality Engine oil",
        price: 2000,
        rating: "3.5",
        image: require("../images/oil.png")
      },
      {
        name: "Total",
        desc: "High Quality Engine oil",
        price: 2200,
        rating: "4.5",
        image: require("../images/total.png")
      },
      {
        name: "Gulf",
        desc: "High Quality Engine oil",
        price: 2300,
        rating: "4.0",
        image: require("../images/gulf.png")
      }
    ],
    
    // Sandwich: [
    //   {
    //     name: "Chicken Sandwich",
    //     desc: "100g chicken + tomato + cheese + onion",
    //     price: 20,
    //     rating: "3.5",
    //     image: require("../images/chicken_sandwich.png")
    //   },
    //   {
    //     name: "Veg Cheese Sandwich",
    //     desc: "100g paneer + onion + cheese + Lettuce",
    //     price: 15,
    //     rating: "4.5",
    //     image: require("../images/veg_sandwich.png")
    //   },
    //   {
    //     name: "Club Sandwich",
    //     desc: "100g paneer + onion + cheese + Lettuce + French Fries",
    //     price: 25,
    //     rating: "4.0",
    //     image: require("../images/club_sandwich.png")
    //   }
    // ],
    Washing: [
      {
        name: "Shampoo Washing",
        desc: "",
        price: 300,
        rating: "3.5",
        image: require("../images/wash.png")
      },
      {
        name: "Form Washing",
        desc: "",
        price: 400,
        rating: "4.5",
        image: require("../images/wash.png")
      },
      {
        name: "Deep cleaning",
        desc: "",
        price: 500,
        rating: "4.0",
        image: require("../images/wash.png")
      }
    ],
    Coolant: [
      {
        name: "Bemrol",
        desc: "",
        price: 500,
        rating: "3.5",
        image: require("../images/cool1.png")
      },
      {
        name: "ABRD Green",
        desc: "",
        price: 600,
        rating: "4.5",
        image: require("../images/cool2.png")
      },
      {
        name: "ABRD Red",
        desc: "",
        price: 650,
        rating: "4.0",
        image: require("../images/cool3.png")
      }
    ],
    // Coke: [
    //   {
    //     name: "Sprit",
    //     desc: "",
    //     price: 7,
    //     rating: "3.5",
    //     image: require("../images/sprite.png")
    //   },
    //   {
    //     name: "Fanta",
    //     desc: "",
    //     price: 15,
    //     rating: "4.5",
    //     image: require("../images/fanta.png")
    //   },
    //   {
    //     name: "Coca Cola",
    //     desc: "",
    //     price: 25,
    //     rating: "4.0",
    //     image: require("../images/coca.png")
    //   }
    // ]
  };

  // const popularMeals = [
  //   {
  //     name: "Chicken Burger",
  //     desc: "5kg box of burger",
  //     price: 15,
  //     image: require("../images/chicken_burger.png")
  //   },
  //   {
  //     name: "Magarita Pizza",
  //     desc: "1kg box of pizza",
  //     price: 20,
  //     image: require("../images/margherita-pizza.png")
  //   },
  //   {
  //     name: "Veg Cheese Sandwich",
  //     desc: "6kg box of sandwich",
  //     price: 25,
  //     image: require("../images/veg_sandwich.png")
  //   }
  // ];

  const [bannerIndex, setBannerIndex] = useState(0);
  const [selectedCategory, setCategory] = useState("Services");

  const renderSliderItem = ({ item, index }) => {
    return (
      <View
        key={String(index)}
        style={{ borderRadius: wp(5), overflow: "hidden" }}>
        <Image
          source={item.img}
          resizeMode="cover"
          style={{ width: "100%", height: hp(25) }}
        />
      </View>
    );
  };

  const renderBannerView = () => {
    return (
      <View style={{ marginTop: hp(1) }}>
        <Carousel
          data={sliderData}
          renderItem={renderSliderItem}
          onSnapToItem={(index) => setBannerIndex(index)}
          sliderWidth={wp(90)}
          itemWidth={wp(90)}
          autoplay={true}
          autoplayInterval={2500}
          autoplayDelay={1000}
        />
        <Pagination
          dotsLength={sliderData.length}
          activeDotIndex={bannerIndex}
          containerStyle={{ marginTop: hp(-2) }}
          dotStyle={{
            width: wp(3),
            height: wp(3),
            borderRadius: wp(1.5),
            backgroundColor: primaryColor
          }}
          inactiveDotStyle={{ backgroundColor: "gray" }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    );
  };

  const renderCategory = () => {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: "row", height: hp(5) }}>
          {categoryData.map((item, index) => {
            const isSelected = selectedCategory === item.name;
            return (
              <TouchableOpacity
                key={String(index)}
                activeOpacity={0.7}
                onPress={() => {
                  setCategory(item.name);
                }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: wp(4),
                    justifyContent: "center",
                    paddingHorizontal: wp(4),
                    height: hp(5),
                    borderRadius: wp(3),
                    borderWidth: 1,
                    borderColor: primaryColor,
                    backgroundColor: isSelected ? primaryColor : "white"
                  }}>
                  <Image
                    source={item.icon}
                    resizeMode="stretch"
                    style={{ width: wp(6), height: wp(6) }}
                  />
                  <Text
                    style={{
                      marginLeft: wp(4),
                      fontSize: 16,
                      fontWeight: "500",
                      color: isSelected ? "white" : textColor
                    }}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    );
  };

  const renderSelectedCategoryDetails = () => {
    const productList = categoryItemData[selectedCategory];

    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: "row", paddingVertical: hp(0.5) }}>
          {productList.map((item, index) => {
            return (
              <View
                key={String(index)}
                style={{
                  width: wp(48),
                  marginTop: hp(2),
                  marginLeft: wp(0.5),
                  marginRight: wp(4),
                  paddingHorizontal: wp(3),
                  paddingVertical: hp(1.5),
                  borderRadius: wp(3),
                  backgroundColor: "white",
                  elevation: 1.5,
                  shadowColor: "#0D0D0D"
                }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={require("../images/rating.png")}
                    resizeMode="stretch"
                    style={{
                      width: wp(4.5),
                      height: wp(4.5),
                      marginRight: wp(1.5)
                    }}
                  />
                  <Text style={{ color: textColor, fontSize: 14 }}>
                    {item.rating}
                  </Text>
                </View>
                <Image
                  source={item.image}
                  resizeMode="stretch"
                  style={{
                    alignSelf: "center",
                    width: wp(32),
                    height: wp(30)
                  }}
                />
                <Text
                  style={{ color: textColor, fontSize: 18, fontWeight: "500" }}>
                  {item.name}
                </Text>
                <Text style={{ fontSize: 14, marginTop: hp(0.5), color: text }}>
                  {item.desc}
                </Text>

                <View style={{ flex: 1 }} />
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}>
                  <Text
                    style={{
                      color: primaryColor,
                      fontSize: 16,
                      fontWeight: "bold"
                    }}>
                    {`₹ ${parseFloat(item.price).toFixed(2)}`}
                  </Text>

                  <TouchableOpacity
                    onPress={() => {
                      alert(item.name + " is added in cart");
                    }}>
                    <Image
                      source={require("../images/add_icon.png")}
                      resizeMode="stretch"
                      style={{
                        width: wp(7),
                        height: wp(7)
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  };

  const renderPopularMeal = () => {
    return (
      <View style={{ marginVertical: hp(2), paddingHorizontal: wp(0.5) }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}>
          <Text style={{ fontWeight: "bold", fontSize: 17, color: textColor }}>
            Popular Meal Menu
          </Text>
          <Text style={{ color: text }}>See All</Text>
        </View>

        {popularMeals.map((item, index) => {
          return (
            <View
              key={String(index)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: hp(1.5),
                marginBottom: hp(0.5),
                paddingHorizontal: wp(3),
                paddingVertical: hp(1),
                backgroundColor: "white",
                borderRadius: wp(3),
                elevation: 1.5
              }}>
              <Image
                source={item.image}
                resizeMode="stretch"
                style={{ width: wp(18), height: wp(18), borderRadius: wp(3) }}
              />
              <View style={{ flex: 1, marginLeft: wp(4) }}>
                <Text
                  style={{ fontWeight: "500", fontSize: 16, color: textColor }}>
                  {item.name}
                </Text>
                <Text style={{ marginTop: hp(0.5), color: text }}>
                  {item.desc}
                </Text>
              </View>
              <Text
                style={{
                  color: primaryColor,
                  fontSize: 18,
                  fontWeight: "bold"
                }}>
                {`$ ${parseFloat(item.price).toFixed(2)}`}
              </Text>
            </View>
          );
        })}
      </View>
    );
  };

  const renderSearchBar = () => {
    return (
      <View
        style={{
          marginVertical: hp(1),
          backgroundColor: "#FBE6E6",
          borderRadius: wp(3),
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: wp(5)
        }}>
        <Image
          source={require("../images/search_icon.png")}
          style={{ width: wp(5), height: wp(5), marginRight: wp(3) }}
        />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#808080"
          style={{ fontSize: 17, fontWeight: "500", color: textColor }}
        />
      </View>
    );
  };

  const renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingTop: hp(2),
          paddingBottom: hp(1.5)
        }}>
        <TouchableOpacity
          // onPress={() => {
          //   navigation.openDrawer();
          // }}
          >
          <Image
            source={require("../images/drawer_icon.png")}
            style={{ width: wp(7), height: wp(7) }}
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row"
          }}>
            <TouchableOpacity
            style={{flexDirection:'row'}}
            onPress={() => {
              navigation.navigate("singup");
            }}
            >

          <Image
            source={require("../images/location.png")}
            resizeMode="stretch"
            style={{ width: wp(3.5), height: wp(5), marginRight: wp(2) }}
          />
          <Text style={{ color: text }}>Pune</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity
         onPress={() => {
          navigation.navigate("Profile");
         }}
        >
        <Image
          source={require("../images/profile_icon.png")}
          style={{ width: wp(10), height: wp(10) }}
        />

        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView
      style={{ flex: 1, paddingHorizontal: wp(5), backgroundColor: "#F9F9F9" }}
      showsVerticalScrollIndicator={false}>
      <View>
        {renderHeader()}
        {renderSearchBar()}
        {renderBannerView()}
        {renderCategory()}
        {renderSelectedCategoryDetails()}
        {/* {renderPopularMeal()} */}
      </View>
    </ScrollView>
  );
};

export default Home;
