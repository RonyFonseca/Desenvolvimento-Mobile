import { Pressable, View, Text, StyleSheet } from "react-native";


export default function LinhaDeAcoe() {
  return (
    <View style={styles.container}>
        <View style={styles.logo}></View>
        <Pressable>
            <Text>Press me</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: 8,
    },

    logo: {
        width: 24,
        height: 24,
        backgroundColor: 'red',
        borderRadius: 25,
    }
}); 
