import { useState } from "react";
import { Pressable, Text, StyleSheet } from "react-native";

export default function BotaoSeguir() {
  const [seguindo, setSeguindo] = useState(false);

  return (
    <Pressable
      onPress={() => setSeguindo(!seguindo)}
      style={[
        styles.botao,
        seguindo ? styles.seguindo : styles.seguir,
      ]}
    >
      <Text
        style={[
          styles.texto,
          seguindo ? styles.textoSeguindo : styles.textoSeguir,
        ]}
      >
        {seguindo ? "Seguindo" : "Seguir"}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  botao: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },

  seguir: {
    backgroundColor: "blue",
  },

  seguindo: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "blue",
  },

  texto: {
    fontSize: 16,
    fontWeight: "bold",
  },

  textoSeguir: {
    color: "white",
  },

  textoSeguindo: {
    color: "blue",
  },
});