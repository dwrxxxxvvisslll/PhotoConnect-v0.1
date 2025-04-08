import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
import Icon from "../components/atoms/Icon"

const AddPost = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Icon name="camera" size={60} color="#3498db" />
        <Text style={styles.text}>Add a new travel photo</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Select Photo</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#3498db",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
})

export default AddPost

