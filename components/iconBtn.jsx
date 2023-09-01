import { Pressable, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function IconBtn({ icon, color, onTap }) {
  return (
    <Pressable
      onPress={onTap}
      style={({ pressed }) => {
        pressed && styles.pressed;
      }}
    >
      <AntDesign name={icon} size={24} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.6,
  },
});
