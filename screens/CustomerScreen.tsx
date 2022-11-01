import {
  ScrollView,
  Image,
  StyleProp,
  ViewStyle,
  TextInput,
  View,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../navigator/TabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigator/RootNavigator";

export type CustomerScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Customers">,
  NativeStackNavigationProp<RootStackParamList>
>;

const CustomersScreen = () => {
  const navigation = useNavigation<CustomerScreenNavigationProp>();
  const [input, setInput] = useState<string>("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView className="bg-[#59C1CC]">
      <Image
        source={require("../assets/customer-screen-hero.jpeg")}
        className="w-full h-64"
      />

      <View className="bg-white py-5 px-10">
        <TextInput
          placeholder="Search by Customer"
          value={input}
          onChangeText={setInput}
          className="border-b-2 border-gray-300 pb-1"
        />
      </View>
    </ScrollView>
  );
};

export default CustomersScreen;
