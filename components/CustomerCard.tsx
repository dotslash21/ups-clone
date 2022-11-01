import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import useCustomerOrders from "../hooks/useCustomerOrders";
import { useNavigation } from "@react-navigation/native";
import { CustomerScreenNavigationProp } from "../screens/CustomerScreen";
import { Entypo } from "@expo/vector-icons";

type Props = {
  userId: string;
  email: string;
  name: string;
};

const CustomerCard = ({ userId, email, name }: Props) => {
  const { loading, orders, error } = useCustomerOrders(userId);
  const navigation = useNavigation<CustomerScreenNavigationProp>();

  return (
    <TouchableOpacity className="bg-white mx-3 mt-3 p-5 rounded-lg justify-between">
      <View className="flex-row justify-between">
        <View>
          <Text className="text-2xl font-bold">{name}</Text>
          <Text className="text-sm text-[#59C1CC]">ID: {userId}</Text>
        </View>

        <View className="flex-row items-center space-x-1">
          <Text className="text-[#59C1CC]">
            {loading ? "loading..." : `${orders.length}x`}
          </Text>
          <Entypo
            name="box"
            size={50}
            color="#59C1CC"
            className="mb-5 ml-auto"
          />
        </View>
      </View>

      <View className="border-b-2 border-gray-100 my-2" />

      <Text>{email}</Text>
    </TouchableOpacity>
  );
};

export default CustomerCard;
