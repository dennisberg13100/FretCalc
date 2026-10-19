import { Text, TextInput, View, Pressable } from "react-native"
import { globalStyles } from "../../styles/global"
import { SafeAreaView } from "react-native-safe-area-context"
import { useState } from "react"
import { router } from "expo-router"

export default function Index() {

  const [ scaleLength, setScaleLangth ] = useState<string>()
  const [ fretCount, setFretCount ] = useState<string>()
  const [ precision, setPrecision ] = useState(0.1)
  const [ incompleteFormAlert, setInclompleteFomrAlert ] = useState<boolean>(false)
  const precisionOptions = [0.5, 0.25, 0.1, 0.01]

function handleCalculate() {
  if (scaleLength && fretCount) {
    setInclompleteFomrAlert(false)
    router.push({
      pathname: "./results",
      params: {
        scaleLength: scaleLength,
        fretCount: fretCount,
        precision: precision.toString(),
      },
    })
  } else {
    setInclompleteFomrAlert(true)
  }
  
}

  return (
    <SafeAreaView style = {globalStyles.container}>
      <Text style = {globalStyles.title}>
        FretCalc
      </Text>
      <Text style = {globalStyles.subtitle}>
        Claculadora de espaçamento dos trastes
      </Text>

      {incompleteFormAlert && (
        <View style = {globalStyles.errorContainer}>
          <Text style = {globalStyles.errorText}>
            Preencha todos os campos para podermos realizar os cálculos.
          </Text>
        </View>
      )}
      
      <Text style = {globalStyles.label}>
        Comprimento da escala (mm)
      </Text>
      <TextInput 
        style = {globalStyles.input}
        value = {scaleLength}
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
        onPress = {handleCalculate}
      >
        <Text style = {globalStyles.buttonText}>
          Calcular
        </Text>
      </Pressable>

    </SafeAreaView>
  );
}
