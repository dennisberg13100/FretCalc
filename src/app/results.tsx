import { useLocalSearchParams } from "expo-router"
import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { globalStyles } from "../../styles/global"

export default function Results() {
    const { scaleLenght, fretCount, precision } = 
        useLocalSearchParams<{
            scaleLenght: string
            fretCount: string
            precision: string
        }>()
    
    console.log("Comprimento da escala: ", scaleLenght)
    console.log("Número de trastes: ", fretCount)
    console.log("Precisão: ", precision)

    return (
        <SafeAreaView style = {globalStyles.container}>
            <Text style = {globalStyles.subtitle}>
                Comprimento da escala: {scaleLenght}
            </Text>
            <Text style = {globalStyles.subtitle}>
                Número de trastes: {fretCount}
            </Text>
            <Text style = {globalStyles.subtitle}>
                Precisão: {precision}
            </Text>
        </SafeAreaView>
    )
}