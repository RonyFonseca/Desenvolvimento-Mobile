import { View, Text, ScrollView, StyleSheet } from "react-native";
import GradeDePublicacoes from "@/components/GradeDePublicacoes";
import BotaoSeguir from "@/components/BotaoSeguir";

export default function Perfil() {
  const interesses = [
    "Tecnologia",
    "Programação",
    "Design",
    "Games",
    "Fotografia",
    "Música",
    "Cinema",
    "Viagens",
  ];

  const publicacoes = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>👤</Text>
        </View>

        <View style={styles.informacoes}>
          <Text style={styles.nome}>
            Rony Fonseca
          </Text>

          <Text style={styles.usuario}>
            @ronyfonseca
          </Text>
        </View>
      </View>

      <View style={styles.estatisticas}>

        <View style={styles.estatistica}>
          <Text style={styles.numero}>24</Text>
          <Text style={styles.label}>Posts</Text>
        </View>

        <View style={styles.estatistica}>
          <Text style={styles.numero}>1.2K</Text>
          <Text style={styles.label}>Seguidores</Text>
        </View>

        <View style={styles.estatistica}>
          <Text style={styles.numero}>350</Text>
          <Text style={styles.label}>Seguindo</Text>
        </View>

      </View>

      <View style={styles.interessesContainer}>
        <Text style={styles.titulo}>
          Interesses
        </Text>

        <View style={styles.chips}>
          {interesses.map((interesse) => (
            <View
              key={interesse}
              style={styles.chip}
            >
              <Text style={styles.chipText}>
                {interesse}
              </Text>
            </View>
          ))}
        </View>
      </View> 
      
      <View style={styles.publicacoesContainer}>
        <Text style={styles.titulo}>
          Publicações
        </Text>

        <GradeDePublicacoes
          publicacoes={publicacoes}
        />
      </View>

      <View style={styles.rodape}>
        <BotaoSeguir />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#d1d5db",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    fontSize: 24,
  },

  informacoes: {
    marginLeft: 16,
  },

  nome: {
    fontSize: 20,
    fontWeight: "bold",
  },

  usuario: {
    color: "#6b7280",
  },

  estatisticas: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },

  estatistica: {
    flex: 1,
    alignItems: "center",
  },

  numero: {
    fontSize: 20,
    fontWeight: "bold",
  },

  label: {
    color: "#6b7280",
  },

  interessesContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },

  titulo: {
    marginBottom: 12,
    fontSize: 18,
    fontWeight: "bold",
  },

  chips: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },

  chip: {
    borderRadius: 999,
    backgroundColor: "#e5e7eb",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },

  chipText: {
    color: "#374151",
  },

  publicacoesContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },

  rodape: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
});