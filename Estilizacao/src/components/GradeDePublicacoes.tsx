import { View, Text, StyleSheet } from "react-native";

type Props = {
  publicacoes: number[];
};

export default function PublicacoesGrid({ publicacoes }: Props) {
  return (
    <View style={styles.grid}>
      {publicacoes.map((publicacao, index) => {
        const ultimaColuna = (index + 1) % 3 === 0;

        return (
          <View
            key={index}
            style={[
              styles.item,
              !ultimaColuna && styles.itemComGap,
            ]}
          >
            <Text style={styles.texto}>
              {publicacao}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  item: {
    width: "32%",
    aspectRatio: 1,
    marginBottom: 8,
    backgroundColor: "#3498db",
    alignItems: "center",
    justifyContent: "center",
  },

  itemComGap: {
    marginRight: "2%",
  },

  texto: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});