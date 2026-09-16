import {View, Text} from 'react-native';
import IconeComTexto from '@/components/IconeComTexto';
import LinhaDeAcoe from '@/components/LinhaDeAcoe';
import ListaDeChips from '@/components/ListaDeChips';
import GradeDePublicacoes from '@/components/GradeDePublicacoes';
import BotaoSeguir from '@/components/BotaoSeguir';
import Estatisticas from '@/components/Estatisticas';

export default function HomeScreen() {
  return (
    <View>
      <IconeComTexto />
      <Estatisticas />
      <LinhaDeAcoe />
      <ListaDeChips chips={['Chip 1', 'Chip 2', 'Chip 3','Chip 4','Chip 5','Chip 6','Chip 7', 'Chip 8']} />
      <GradeDePublicacoes publicacoes={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
      <BotaoSeguir /> 
    </View>
  );
}
