import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import {
  CompositeNavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { RootStackParamList } from "../navigator/RootNavigator";
import { AntDesign } from "@expo/vector-icons";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../navigator/TabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import useCustomerOrders from "../hooks/useCustomerOrders";
import DeliveryCard from "../components/DeliveryCard";

type ModalScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList>,
  NativeStackNavigationProp<RootStackParamList, "MyModal">
>;

type ModalScreenRouteProp = RouteProp<RootStackParamList, "MyModal">;

const ModalScreen = () => {
  const navigation = useNavigation<ModalScreenNavigationProp>();
  const {
    params: { name, userId },
  } = useRoute<ModalScreenRouteProp>();

  const { loading, orders, error } = useCustomerOrders(userId);

  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          className="absolute top-5 right-5 z-10"
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="closecircle" size={24} color="black" />
        </TouchableOpacity>

        <View className="mt-2.5">
          <View className="py-5 border-b border-[#59C1CC]">
            <Text className="text-center text-xl font-bold text-[#59C1CC]">
              {name}
            </Text>
            <Text className="text-center italic text-sm">deliveries</Text>
          </View>
        </View>

        <FlatList
          contentContainerStyle={{ paddingBottom: 100 }}
          data={orders}
          keyExtractor={(order) => order.trackingId}
          renderItem={({ item: order }) => <DeliveryCard order={order} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default ModalScreen;
