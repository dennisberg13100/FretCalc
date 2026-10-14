import { Text, View } from "react-native";
import { globalStyles } from "../../styles/global";

export default function Index() {
  return (
    <View style = {globalStyles.conatine}>
      <Text style = {globalStyles.title}>
        FretCalc
      </Text>
      <Text style = {globalStyles.subtitle}>
        Claculadora dee espaçamento dos trastes
      </Text>
    </View>
  );
}
