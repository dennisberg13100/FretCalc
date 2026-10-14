import { Text, TextInput, View, Pressable } from "react-native"
import { globalStyles } from "../../styles/global"
import { SafeAreaView } from "react-native-safe-area-context"
import { useState } from "react"

export default function Index() {

  const [ scaleLenght, setScaleLangth ] = useState<string>()
  const [ fretCount, setFretCount ] = useState<string>()
  const [ precision, setPrecision ] = useState(0.1)
  const precisionOptions = [0.5, 0.1, 0.01]

  return (
    <SafeAreaView style = {globalStyles.conatine}>
      <Text style = {globalStyles.title}>
        FretCalc
      </Text>
      <Text style = {globalStyles.subtitle}>
        Claculadora de espaçamento dos trastes
      </Text>

      <Text style = {globalStyles.label}>
        Comprimento da escala (mm)
      </Text>
      <TextInput 
        style = {globalStyles.input}
        value = {scaleLenght}
        onChangeText = {setScaleLangth}
        keyboardType = "decimal-pad"
        placeholder = "Ex. : 647."

      />

      <Text style = {globalStyles.label}>
        Número de trastes
      </Text>
      <TextInput
        style = { globalStyles.input}
        value = {fretCount}
        onChangeText = {setFretCount}
        keyboardType = "number-pad"
        placeholder = "Ex. : 22"
      />

      <Text style = {globalStyles.label}>
        Precisão das medidas
      </Text>
      <View style = {globalStyles.precisionContainer}>
        {precisionOptions.map((item) => (
          <Text
            key = {item}
            onPress = {() => setPrecision(item)}
            style = {[
              globalStyles.precisionOption, 
              precision === item && globalStyles.precisionSelected
            ]}
          >
            {item.toString().replace(".", ",")} mm
          </Text>

        ))}
      </View>

      <Pressable
        style = {globalStyles.button}
        onPress = {() => {}}
      >
        <Text style = {globalStyles.buttonText}>
          Calcular
        </Text>
      </Pressable>

    </SafeAreaView>
  );
}
