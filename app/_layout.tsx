import { Stack, router} from 'expo-router';
import { Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
          options={{ 
            title: "",
            headerStyle: {
              backgroundColor: "#25292e",
            },
            headerLeft: () => (
              <View
                style={{
                  width: 25,
                  height: 25,
                  marginLeft: 6,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name="flame-sharp"
                  size={25}
                  color="#ff471e"
                  style={{ position: "absolute" }}
                />
              </View>
            ),
            headerRight: () => (
              <Pressable 
                onPress={() => router.push("/settings")}
                style={{
                  width: 34,
                  height: 34,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons
                  name="settings-outline"
                  size={25}
                  color="#fff"
                  style={{ marginLeft: 2 }}
                />
              </Pressable>
            )
          }} />
      <Stack.Screen 
        name="settings" 
        options={{ 
          title: 'Settings',
          headerStyle: {
              backgroundColor: "#25292e",
          },
          headerTitleStyle: {
            color: "#fff",
          },
        }} 
      />
    </Stack>
  );
}
