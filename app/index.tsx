import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Qaza Namaz Tracker 📿</Text>
      <Text style={styles.subtitle}>Start tracking your missed prayers today.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F8FA',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D3748',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 10,
    color: '#718096',
  },
});
