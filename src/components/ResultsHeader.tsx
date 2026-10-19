import { View, Text } from "react-native"
import { resultStyles } from "../../styles/result"

interface ScaleInfo {
    scaleLenght: number
    fretCount: number
    precision: number

}

export default function ResultsHeader({
    scaleLenght,
    fretCount,
    precision
}: ScaleInfo) {
    return (
        <View style = {resultStyles.header}>

                <View style = {resultStyles.headerComponent}>
                    <Text>
                        ESCALA (mm)
                    </Text>
                    <Text style = {resultStyles.headerComponentValue}>
                        {scaleLenght}
                    </Text>
                </View>
                
                <View style  = {[
                    resultStyles.headerComponent, 
                    resultStyles.headerComponentCenter
                ]}>
                    <Text>
                        PRECISÃO 
                    </Text>
                    <Text style = {resultStyles.headerComponentValue}>
                        {precision}
                    </Text>
                </View>

                <View style = {[
                    resultStyles.headerComponent, 
                    resultStyles.headerComponentRight
                ]}>
                    <Text>
                        CASAS 
                    </Text>
                    <Text style = {resultStyles.headerComponentValue}>
                        {fretCount}
                    </Text>
                </View>
            </View>
    )
}