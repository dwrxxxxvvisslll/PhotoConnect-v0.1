import type React from "react"
import { View, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"

interface IconProps {
  name: keyof typeof Ionicons.glyphMap
  size?: number
  color?: string
  style?: any
}

const Icon: React.FC<IconProps> = ({ name, size = 24, color = "#333", style }) => {
  return (
    <View style={[styles.container, style]}>
      <Ionicons name={name} size={size} color={color} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
})

export default Icon

