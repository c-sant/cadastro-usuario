import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    margin: 20,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#f5f5f5",
    width: 180,
    height: 40,
    paddingLeft: 10,
    marginVertical: 5,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#F1F1F1",
    padding: 10,
    borderRadius: 5,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  saveButton: {
    backgroundColor: "#218838",
  },
  loadButton: {
    backgroundColor: "#E0A800",
  },
  clearButton: {
    backgroundColor: "#C82333",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    width: 180, // The total width should match other inputs
    height: 40,
    marginVertical: 5,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  passwordInput: {
    flex: 1,
    paddingLeft: 10,
    height: "100%",
  },
  eyeIcon: {
    paddingHorizontal: 10,
  },
});

export default styles;
