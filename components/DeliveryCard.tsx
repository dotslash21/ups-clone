import { View, Text } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";

type Props = {
  order: Order;
};

const DeliveryCard = ({ order }: Props) => {
  return (
    <View
      className="mx-2 mt-2 pt-4 rounded-lg shadow-sm bg-[#59C1CC]"
      style={{ elevation: 5 }}
    >
      <View className="flex items-center">
        <Entypo name="box" size={50} color="white" />

        <View>
          <Text className="text-xs text-center uppercase text-white font-bold">
            {order.carrier} - {order.trackingId}
          </Text>
          <Text className="text-white text-center text-lg font-bold">
            Expected Delivery: {new Date(order.createdAt).toLocaleDateString()}
          </Text>
        </View>
      </View>

      <View className="border-b border-white mx-2 my-4" />

      <View className="mx-auto">
        <Text className=" text-base text-center text-white font-bold ">
          Address
        </Text>
        <Text className="text-sm text-center text-white">
          {order.Address}, {order.City}
        </Text>
        <Text className="text-sm text-center italic text-white">
          Shipping Cost: $ {order.shippingCost}
        </Text>
      </View>

      <View className="border-b border-white mx-2 my-4" />

      <View className="px-5 pb-4">
        {order.trackingItems.items.map((item) => (
          <View
            key={item.item_id}
            className="flex-row justify-between items-center"
          >
            <Text className="text-sm italic text-white">{item.name}</Text>
            <Text className="text-xl italic text-white">x {item.quantity}</Text>
          </View>
        ))}
      </View>

      <MapView
        initialRegion={{
          latitude: order.Lat,
          longitude: order.Lng,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="w-full h-52"
        mapType="standard"
      >
        {order.Lat && order.Lng && (
          <Marker
            coordinate={{
              latitude: order.Lat,
              longitude: order.Lng,
            }}
            title="Delivery Location"
            description={order.Address}
            identifier="destination"
          />
        )}
      </MapView>
    </View>
  );
};

export default DeliveryCard;
