import type React from "react"
import { Text as RNText, StyleSheet, type TextStyle } from "react-native"

interface TextProps {
  children: React.ReactNode
  variant?: "heading" | "subheading" | "body" | "caption"
  style?: TextStyle
}

const Text: React.FC<TextProps> = ({ children, variant = "body", style }) => {
  return <RNText style={[styles.text, styles[variant], style]}>{children}</RNText>
}

const styles = StyleSheet.create({
  text: {
    color: "#333",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subheading: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 6,
  },
  body: {
    fontSize: 16,
  },
  caption: {
    fontSize: 14,
    color: "#666",
  },
})

export default Text

