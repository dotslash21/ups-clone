import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import ModalScreen from "../screens/ModalScreen";

export type RootStackParamList = {
  Main: undefined;
  MyModal: {
    userId: string;
    name: string;
  };
  Order: {
    order: any;
  };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="Main" component={TabNavigator} />
      </RootStack.Group>

      <RootStack.Group
        screenOptions={{
          presentation: "modal",
        }}
      >
        <RootStack.Screen
          name="MyModal"
          component={ModalScreen}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
