import { StatusBar } from 'expo-status-bar';
import Tarefa from 'components/Tarefa';
import { Picker } from '@react-native-picker/picker';

import './global.css';

import { SafeAreaView } from 'react-native-safe-area-context';
import {Text, TextInput, Pressable, View} from "react-native";
import { useState } from 'react';

import tarefaStatus from 'types/tarefas_status';


type TarefaType = {
  texto:string, 
  status:tarefaStatus, 
}

export default function App() {
  const [tarefas, setTarefas] = useState<TarefaType[]>([]);

  const [status, setStatus] = useState<tarefaStatus>("Em_processo")

  const [texto, setTexto] = useState<string>("");


  const adicionarTarefa = () => {

    const novaTarefa: TarefaType = {
      texto: texto, 
      status: status
      
    }
    setTarefas([...tarefas, novaTarefa]);

    setTexto("");
  }
  
  const removerItem = (texto:string) => {
    const novasTarefas = tarefas.filter((tarefa) => tarefa.texto !== texto);

    setTarefas(novasTarefas);
  }

  return (
    <SafeAreaView>
      <StatusBar style="auto" />

      <View className="flex-col w-96 justify-center">
        <TextInput placeholder='Digite sua tarefa' value={texto} onChangeText={setTexto}/>
        <View>
          <Picker
          selectedValue={status}
          onValueChange={(value) => setStatus(value)}
          >
            <Picker.Item label="Em_processo" value="Em_processo"/>
            <Picker.Item label="Concluida" value="Concluida"/>
          </Picker>
        </View>
        <Pressable className='bg-slate-500' onPress={adicionarTarefa}><Text>Enviar</Text></Pressable>
      </View>

      <View>
        {
          tarefas.map((tarefa, index) => (<Tarefa texto={tarefa.texto} status={tarefa.status} key={index} remover={() => removerItem(tarefa.texto)}/>))
        }
      </View>
    </SafeAreaView>
  );
}
