import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function Diet() {
  const [budget, setBudget] = useState('');
  const [condition, setCondition] = useState('');
  const [result, setResult] = useState('');

  const generateDiet = () => {
    let plan = "";

    // 💰 Budget logic
    if (budget.toLowerCase() === "low") {
      plan += "Breakfast: Oats / Poha\nLunch: Roti + Dal\nDinner: Khichdi\n";
    } else if (budget.toLowerCase() === "medium") {
      plan += "Breakfast: Milk + Fruits\nLunch: Roti + Paneer\nDinner: Rice + Dal\n";
    } else if (budget.toLowerCase() === "high") {
      plan += "Breakfast: Smoothie + Nuts\nLunch: Chicken + Rice\nDinner: Salad + Soup\n";
    } else {
      plan += "Enter valid budget (low/medium/high)\n";
    }

    // 🏥 Medical condition logic
    if (condition.toLowerCase() === "diabetes") {
      plan += "\n⚠️ Avoid sugar, include fiber-rich foods like oats & vegetables";
    } else if (condition.toLowerCase() === "bp") {
      plan += "\n⚠️ Reduce salt, eat fruits like banana & leafy greens";
    } else if (condition.toLowerCase() === "none") {
      plan += "\n✅ No medical restrictions";
    } else {
      plan += "\n⚠️ Enter valid condition (diabetes / bp / none)";
    }

    setResult(plan);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI Diet Planner 🥗</Text>

      <TextInput
        placeholder="Budget (low / medium / high)"
        style={styles.input}
        onChangeText={setBudget}
      />

      <TextInput
        placeholder="Medical condition (diabetes / bp / none)"
        style={styles.input}
        onChangeText={setCondition}
      />

      <TouchableOpacity style={styles.button} onPress={generateDiet}>
        <Text style={styles.buttonText}>Generate Diet</Text>
      </TouchableOpacity>

      <Text style={styles.result}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
  },
  button: {
    backgroundColor: 'green',
    padding: 12,
    marginTop: 10,
    borderRadius: 8,
  },
  buttonText: { color: '#fff', textAlign: 'center' },
  result: { marginTop: 20, fontSize: 16 },
});