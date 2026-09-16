import {Text, View} from "react-native";


export default function Estatisticas() {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 20}}>
            <View>
                <Text>Posts</Text>
                <Text>01</Text>
            </View>
            <View>
                <Text>Seguidores</Text>
                <Text>10</Text>
            </View>
            <View>
                <Text>Seguindo</Text>
                <Text>05</Text>
            </View>
        </View>
    )
}