import tarefaStatus from "types/tarefas_status";
import { View, Text, Pressable } from "react-native";
import { useState } from "react";

type TarefaProps = {
    texto: string;
    status: tarefaStatus;
    remover: () => void; 
};

function Tarefa({texto, status, remover }: TarefaProps) {
    const [newStatus, setNewStatus] = useState<tarefaStatus>(status); 


    const clickConcluido = () => {
        setNewStatus("Concluida");
    }

    return (
        <View className="w-full flex-row items-center justify-between rounded-xl bg-white p-4 mb-3 shadow-sm">

            <Text className="flex-1 text-base font-medium text-gray-800">
                {texto}
            </Text>

           <View className="flex-row items-center gap-4">
             <Pressable onPress={clickConcluido}>
                <View className="ml-3 rounded-full bg-blue-100 px-3 py-1">
                    <Text className="text-sm font-semibold text-blue-700">
                        {newStatus}
                    </Text>
                </View>
             </Pressable>

                <Pressable className="bg-red-600 p-1 rounded-md" onPress={remover}>
                    <Text className="text-white">
                        Excluir
                    </Text>
                </Pressable>
           </View>

        </View>
    );
}

export default Tarefa;