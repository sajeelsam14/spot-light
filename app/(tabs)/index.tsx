import { Text, View, TouchableOpacity, Pressable, Image } from "react-native";
import { styles } from "@/styles/auth.style";
import { Link } from "expo-router";
export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Hello Bro.</Text>
      <TouchableOpacity onPress={() => alert("Hello Bro")}><Text>press me</Text></TouchableOpacity>
      <Pressable onPress={() => alert("Press ho gaya")}><Text>Press me again</Text></Pressable>
      <Image source={require("@/assets/images/react-logo.png")} style={{ width: 200, height: 200 }} />
      <Link href={"/notifications"}>visit notifications</Link>
      <Link href={"/profile"}>profile</Link>
    </View>
  );
}
