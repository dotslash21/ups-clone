import { ScrollView, Image, TextInput, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../navigator/TabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigator/RootNavigator";
import { useQuery } from "@apollo/client";
import { GET_CUSTOMERS } from "../graphql/queries";
import CustomerCard from "../components/CustomerCard";

export type CustomerScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Customers">,
  NativeStackNavigationProp<RootStackParamList>
>;

const CustomersScreen = () => {
  const navigation = useNavigation<CustomerScreenNavigationProp>();
  const [input, setInput] = useState<string>("");
  const { loading, data, error } = useQuery(GET_CUSTOMERS);

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

      <View className="pb-4">
        {data?.getCustomers
          ?.filter((customer: CustomerList) =>
            customer.value.name.includes(input)
          )
          .map(({ name: userId, value: { email, name } }: CustomerResponse) => (
            <CustomerCard
              key={userId}
              userId={userId}
              email={email}
              name={name}
            />
          ))}
      </View>
    </ScrollView>
  );
};

export default CustomersScreen;
