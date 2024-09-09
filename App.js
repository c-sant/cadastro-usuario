// também disponível em:
// Aluno: Carlos Eduardo Vieira Santos
// R.A.: 081200016
// Turma: EC10 2024 2º Semestre

import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [visiblePassword, setVisiblePassword] = useState(true);
  const [visiblePasswordConfirm, setVisiblePasswordConfirm] = useState(true);

  async function save() {
    if (
      ![code, name, email, password].every(
        (field) => field.replace(" ", "") !== ""
      )
    ) {
      Alert.alert("Erro", "É necessário preencher todos os campos.");
      return;
    }

    if (password !== passwordConfirm) {
      Alert.alert("Erro", "As senhas não são iguais.");
      return;
    }

    let data = JSON.stringify({
      code: code,
      name: name,
      email: email,
      password: password,
    });

    await AsyncStorage.setItem("loginData", data);
    Alert.alert("Sucesso", "Usuário cadastrado com sucesso.");
  }

  async function load() {
    let data = await AsyncStorage.getItem("loginData");
    data = JSON.parse(data);

    setCode(data["code"]);
    setName(data["name"]);
    setEmail(data["email"]);
    setPassword(data["password"]);
    setPasswordConfirm(data["password"]);
  }

  function clear() {
    setCode("");
    setName("");
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
  }

  function toggleVisiblePassword() {
    setVisiblePassword(!visiblePassword);
  }

  function toggleVisiblePasswordConfirm() {
    setVisiblePasswordConfirm(!visiblePasswordConfirm);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Usuário</Text>
      <TextInput
        style={styles.input}
        placeholder="Código"
        value={code}
        onChangeText={setCode}
      ></TextInput>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      ></TextInput>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      ></TextInput>

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={visiblePassword}
        />
        <TouchableOpacity onPress={toggleVisiblePassword}>
          <Ionicons
            name={visiblePassword ? "eye" : "eye-off"}
            size={24}
            color="black"
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Confirme a senha"
          value={passwordConfirm}
          onChangeText={setPasswordConfirm}
          secureTextEntry={visiblePasswordConfirm}
        />
        <TouchableOpacity onPress={toggleVisiblePasswordConfirm}>
          <Ionicons
            name={visiblePasswordConfirm ? "eye" : "eye-off"}
            size={24}
            color="black"
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.saveButton]}
          onPress={save}
        >
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.loadButton]}
          onPress={load}
        >
          <Text style={styles.buttonText}>Carregar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.clearButton]}
          onPress={clear}
        >
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
