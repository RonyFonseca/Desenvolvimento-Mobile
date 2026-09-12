import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';

export default function IconeComTexto(){
    return (
        <View style={styles.container}>
            <View style={styles.logo} />
            <Text>Ícone com Texto</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 8,
    }, 
    
    logo: {
        width: 24,
        height: 24,
        backgroundColor: 'blue',
        borderRadius: 25,
    }
}); 

