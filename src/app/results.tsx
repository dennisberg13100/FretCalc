import { useLocalSearchParams } from "expo-router"
import { FlatList, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { globalStyles } from "../../styles/global"
import ResultsHeader from "@/components/ResultsHeader"
import { calculateAllFretPositions } from "@/utils/fretCalculator"
import { resultStyles } from "../../styles/result"

export default function Results() {
    const { scaleLength, fretCount, precision } = 
        useLocalSearchParams<{
            scaleLength: string
            fretCount: string
            precision: string
        }>()

    const scaleLengthNumber = Number(scaleLength);
    const fretCountNumber = Number(fretCount);
    const precisionNumber = Number(precision);
    const positions = calculateAllFretPositions(scaleLengthNumber, fretCountNumber)

    console.log(positions)

    return (
        <SafeAreaView style = {globalStyles.container}>
            <ResultsHeader 
                scaleLenght = {scaleLengthNumber}
                fretCount = {fretCountNumber}
                precision = {precisionNumber}
            /> 
            <FlatList
                data={positions}
                keyExtractor={(_, index) => index.toString()}
                renderItem= {({item, index}) => (
                    <View style = {resultStyles.listCard}>
                        <Text>{index+1}</Text>
                        <Text>{Math.round(item.absolute / precisionNumber) * precisionNumber}</Text>
                        <Text>{Math.round(item.relative / precisionNumber) * precisionNumber}</Text>
                    </View>
                ) }

            />
            
        </SafeAreaView>
    )
}