import {View, Text, StyleSheet} from 'react-native';


type arrayProps = {
    chips: string[]; 
}

export default function ListaDeChips({chips}: arrayProps) {
    return (
        <View style={styles.container}>
            {chips.map((chip, index) => (
                <View key={index} style={styles.chip}>
                    <Text>{chip}</Text>
                </View>
            ))}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },

    chip: {
        backgroundColor: 'lightgray',
        padding: 8,
        borderRadius: 4,
    }
})

