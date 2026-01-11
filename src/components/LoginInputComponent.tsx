import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
function LoginInput() {
  const [mobileNumber, setMobileNumber] = useState('');

  function loginInputHandler(inputMobileNumber) {
    setMobileNumber(inputMobileNumber);
  }
  return (
    <View style={styles.textInputView}>
      <TextInput
        placeholder="Mobile Number"
        keyboardType="phone-pad"
        placeholderTextColor="#666"
        maxLength={10} // Assuming a 10-digit phone number
        onChangeText={loginInputHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInputView: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    flexDirection: 'column',
  },
});
export default LoginInput;
