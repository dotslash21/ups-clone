import { StatusBar } from "expo-status-bar";
import CustomerScreen from "./screens/CustomerScreen";

export default function App() {
  return (
    <>
      <CustomerScreen />
      <StatusBar style="auto" />
    </>
  );
}
