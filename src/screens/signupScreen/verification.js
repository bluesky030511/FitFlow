import { useState, useRef } from "react"
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native"
import { Strings } from "../../constants/Strings"

const VerificationScreen = () => {
  const [code, setCode] = useState(["", "", "", "", ""])
  const inputRef = useRef(null)

  const handleCodeChange = (text) => {
    const newCode = text.split("").slice(0, 5)
    setCode(newCode.concat(Array(5 - newCode.length).fill("")))
  }

  const handleKeyPress = (e) => {
    if (e.nativeEvent.key === "Backspace" && code.every((digit) => digit === "")) {
      setCode(["", "", "", "", ""])
    }
  }

  const handleResend = () => {
    console.log("Resend code")
  }

  const handleContinue = () => {
    const verificationCode = code.join("")
    console.log("Verify code:", verificationCode)
  }

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/logo.png")} style={styles.logo} resizeMode="contain" />

      <Text style={styles.title}>Verification</Text>
      <Text style={styles.subtitle}>We've sent code to your email</Text>

      <View style={styles.inputContainer}>
        {[0, 1, 2, 3, 4].map((index) => (
          <TouchableOpacity
            key={index}
            style={[styles.inputWrapper, code[index] !== "" && styles.inputWrapperFilled]}
            onPress={() => inputRef.current.focus()}
          >
            <Text style={[styles.input, code[index] !== "" && styles.inputFilled]}>{code[index]}</Text>
          </TouchableOpacity>
        ))}
        <TextInput
          ref={inputRef}
          value={code.join("")}
          onChangeText={handleCodeChange}
          onKeyPress={handleKeyPress}
          maxLength={5}
          keyboardType="number-pad"
          style={styles.hiddenInput}
        />
      </View>

      <TouchableOpacity onPress={handleResend}>
        <Text style={styles.resendText}>
          {Strings.getcode} <Text style={styles.resendLink}>{Strings.resend}</Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.continueButton, !code.every((digit) => digit !== "") && styles.continueButtonDisabled]}
        onPress={handleContinue}
        disabled={!code.every((digit) => digit !== "")}
      >
        <Text style={styles.continueText}>{Strings.continue}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 110,
  },
  logo: {
    width: 259,
    height: 84,
    alignSelf: "center",
    marginBottom: 65,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 45,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    position: "relative",
  },
  inputWrapper: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  inputWrapperFilled: {
    backgroundColor: "#354B5C",
    borderColor: "#354B5C",
  },
  input: {
    fontSize: 20,
    fontWeight: "500",
    color: "transparent",
  },
  inputFilled: {
    color: "#FFFFFF",
  },
  hiddenInput: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0,
  },
  resendText: {
    textAlign: "center",
    color: "#666",
  },
  resendLink: {
    color: "#354B5C",
    textDecorationLine: "underline",
  },
  continueButton: {
    backgroundColor: "#354B5C",
    padding: 16,
    borderRadius: 8,
    marginTop: 61,
  },
  continueButtonDisabled: {
    backgroundColor: "#9AA4B9",
  },
  continueText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
})

export default VerificationScreen

