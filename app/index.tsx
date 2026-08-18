import { Text, View, StyleSheet, Pressable } from "react-native";
import { GlassView } from 'expo-glass-effect';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={[styles.container, { paddingTop: 50 }]}>
      <Pressable onPress={() => alert('Choose desired apps to use.')} style={{ width: '90%' }}>
        <GlassView isInteractive style={styles.glassButton}>
          <Text style={{ color: "#fff" }}>Good apps</Text>
        </GlassView>
      </Pressable>

      <Pressable onPress={() => alert('Choose undesired apps.')} style={{ width: '90%' }}>
        <GlassView isInteractive style={styles.glassButton}>
          <Text style={{ color: "#fff" }}>Bad apps</Text>
        </GlassView>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    gap: 50,
  },
  text: {
    color: "#fff"
  },
  glassButton: {
    width: '100%',
    height: 60,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});